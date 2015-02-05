var LoaderEvent = require("awayjs-core/lib/events/LoaderEvent");
var Vector3D = require("awayjs-core/lib/geom/Vector3D");
var AssetLibrary = require("awayjs-core/lib/library/AssetLibrary");
var AssetType = require("awayjs-core/lib/library/AssetType");
var URLRequest = require("awayjs-core/lib/net/URLRequest");
var Debug = require("awayjs-core/lib/utils/Debug");
var RequestAnimationFrame = require("awayjs-core/lib/utils/RequestAnimationFrame");
var View = require("awayjs-display/lib/containers/View");
var DirectionalLight = require("awayjs-display/lib/entities/DirectionalLight");
var StaticLightPicker = require("awayjs-display/lib/materials/lightpickers/StaticLightPicker");
var PrimitiveTorusPrefab = require("awayjs-display/lib/prefabs/PrimitiveTorusPrefab");
var PrimitiveCubePrefab = require("awayjs-display/lib/prefabs/PrimitiveCubePrefab");
var PrimitiveCapsulePrefab = require("awayjs-display/lib/prefabs/PrimitiveCapsulePrefab");
var DefaultRenderer = require("awayjs-renderergl/lib/DefaultRenderer");
var MethodMaterial = require("awayjs-methodmaterials/lib/MethodMaterial");
var MethodRendererPool = require("awayjs-methodmaterials/lib/pool/MethodRendererPool");
var OBJParser = require("awayjs-parsers/lib/OBJParser");
var MaterialAlphaTest = (function () {
    function MaterialAlphaTest() {
        var _this = this;
        this.height = 0;
        this.meshes = new Array();
        this.aValues = Array(0, .1, .5, .8, .9, .99, 1);
        this.aValuesP = 0;
        Debug.LOG_PI_ERRORS = false;
        Debug.THROW_ERRORS = false;
        this.view = new View(new DefaultRenderer(MethodRendererPool));
        this.raf = new RequestAnimationFrame(this.render, this);
        this.onResize();
        this.light = new DirectionalLight();
        this.light.color = 0xFFFFFF;
        this.light.direction = new Vector3D(1, 1, 0);
        this.light.ambient = 0;
        this.light.ambientColor = 0xFFFFFF;
        this.light.diffuse = 1;
        this.light.specular = 1;
        this.lightB = new DirectionalLight();
        this.lightB.color = 0xFF0000;
        this.lightB.direction = new Vector3D(-1, 0, 1);
        this.lightB.ambient = 0;
        this.lightB.ambientColor = 0xFFFFFF;
        this.lightB.diffuse = 1;
        this.lightB.specular = 1;
        this.view.scene.addChild(this.light);
        this.view.scene.addChild(this.lightB);
        this.view.backgroundColor = 0x222222;
        AssetLibrary.enableParser(OBJParser);
        this.token = AssetLibrary.load(new URLRequest('assets/platonic.obj'));
        this.token.addEventListener(LoaderEvent.RESOURCE_COMPLETE, function (event) { return _this.onResourceComplete(event); });
        this.token = AssetLibrary.load(new URLRequest('assets/dots.png'));
        this.token.addEventListener(LoaderEvent.RESOURCE_COMPLETE, function (event) { return _this.onResourceComplete(event); });
        window.onresize = function (event) { return _this.onResize(event); };
        document.onmousedown = function (event) { return _this.onMouseDown(event); };
    }
    MaterialAlphaTest.prototype.onMouseDown = function (event) {
        this.cubeColorMaterial.alpha = this.torusTextureMaterial.alpha = this.loadedMeshMaterial.alpha = this.aValues[this.aValuesP];
        alert('Alpha: ' + this.aValues[this.aValuesP]);
        this.aValuesP++;
        if (this.aValuesP > this.aValues.length - 1)
            this.aValuesP = 0;
    };
    MaterialAlphaTest.prototype.render = function (dt) {
        if (this.meshes)
            for (var c = 0; c < this.meshes.length; c++)
                this.meshes[c].rotationY += .35;
        this.view.render();
    };
    MaterialAlphaTest.prototype.onResourceComplete = function (event) {
        var loader = event.target;
        var l = loader.baseDependency.assets.length;
        for (var c = 0; c < l; c++) {
            var d = loader.baseDependency.assets[c];
            console.log(d.name);
            switch (d.assetType) {
                case AssetType.MESH:
                    var mesh = d;
                    this.loadedMesh = mesh;
                    if (d.name == 'Mesh_g0') {
                        this.loadedMesh = mesh;
                        mesh.y = -400;
                        mesh.transform.scale = new Vector3D(5, 5, 5);
                    }
                    else {
                        mesh.transform.scale = new Vector3D(3.5, 3.5, 3.5);
                    }
                    if (this.loadedMeshMaterial)
                        mesh.material = this.loadedMeshMaterial;
                    this.view.scene.addChild(mesh);
                    this.meshes.push(mesh);
                    this.raf.start();
                    break;
                case AssetType.TEXTURE:
                    // Loaded Texture
                    var tx = d;
                    // Light Picker
                    this.staticLightPicker = new StaticLightPicker([this.light, this.lightB]);
                    // Material for loaded mesh
                    this.loadedMeshMaterial = new MethodMaterial(tx, true, true, false);
                    this.loadedMeshMaterial.lightPicker = this.staticLightPicker;
                    this.loadedMeshMaterial.alpha = 1;
                    this.loadedMeshMaterial.bothSides = true;
                    if (this.loadedMesh)
                        this.loadedMesh.material = this.loadedMeshMaterial;
                    // Torus
                    var torus = new PrimitiveTorusPrefab(150, 50, 64, 64);
                    // Torus Texture Material
                    this.torusTextureMaterial = new MethodMaterial(tx, true, true, false);
                    this.torusTextureMaterial.lightPicker = this.staticLightPicker;
                    this.torusTextureMaterial.bothSides = true;
                    this.torusTextureMaterial.alpha = .8;
                    torus.material = this.torusTextureMaterial;
                    // Torus Mesh ( left )
                    var torusMesh = torus.getNewObject();
                    torusMesh.rotationX = 90;
                    torusMesh.x = 600;
                    this.meshes.push(torusMesh);
                    this.view.scene.addChild(torusMesh);
                    var cube = new PrimitiveCubePrefab(300, 300, 300, 20, 20, 20);
                    // Torus Color Material
                    this.cubeColorMaterial = new MethodMaterial(0x0090ff);
                    this.cubeColorMaterial.lightPicker = this.staticLightPicker;
                    this.cubeColorMaterial.alpha = .8;
                    this.cubeColorMaterial.bothSides = true;
                    cube.material = this.cubeColorMaterial;
                    // Torus Mesh ( right )
                    var cubeMesh = cube.getNewObject();
                    cubeMesh.rotationX = 90;
                    cubeMesh.x = -600;
                    this.meshes.push(cubeMesh);
                    this.view.scene.addChild(cubeMesh);
                    this.capsuleColorMaterial = new MethodMaterial(0x00ffff);
                    this.capsuleColorMaterial.lightPicker = this.staticLightPicker;
                    var capsule = new PrimitiveCapsulePrefab(100, 200);
                    capsule.material = this.capsuleColorMaterial;
                    // Torus Mesh ( right )
                    var capsuleMesh = capsule.getNewObject();
                    this.meshes.push(capsuleMesh);
                    this.view.scene.addChild(capsuleMesh);
                    this.cubeColorMaterial.alpha = this.torusTextureMaterial.alpha = this.loadedMeshMaterial.alpha = 1;
                    break;
            }
        }
    };
    MaterialAlphaTest.prototype.onResize = function (event) {
        if (event === void 0) { event = null; }
        this.view.y = 0;
        this.view.x = 0;
        this.view.width = window.innerWidth;
        this.view.height = window.innerHeight;
    };
    return MaterialAlphaTest;
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGVyaWFscy9NYXRlcmlhbEFscGhhVGVzdC50cyJdLCJuYW1lcyI6WyJNYXRlcmlhbEFscGhhVGVzdCIsIk1hdGVyaWFsQWxwaGFUZXN0LmNvbnN0cnVjdG9yIiwiTWF0ZXJpYWxBbHBoYVRlc3Qub25Nb3VzZURvd24iLCJNYXRlcmlhbEFscGhhVGVzdC5yZW5kZXIiLCJNYXRlcmlhbEFscGhhVGVzdC5vblJlc291cmNlQ29tcGxldGUiLCJNYXRlcmlhbEFscGhhVGVzdC5vblJlc2l6ZSJdLCJtYXBwaW5ncyI6IkFBQ0EsSUFBTyxXQUFXLFdBQWUsb0NBQW9DLENBQUMsQ0FBQztBQUN2RSxJQUFPLFFBQVEsV0FBZ0IsK0JBQStCLENBQUMsQ0FBQztBQUNoRSxJQUFPLFlBQVksV0FBZSxzQ0FBc0MsQ0FBQyxDQUFDO0FBRzFFLElBQU8sU0FBUyxXQUFlLG1DQUFtQyxDQUFDLENBQUM7QUFJcEUsSUFBTyxVQUFVLFdBQWUsZ0NBQWdDLENBQUMsQ0FBQztBQUdsRSxJQUFPLEtBQUssV0FBZ0IsNkJBQTZCLENBQUMsQ0FBQztBQUMzRCxJQUFPLHFCQUFxQixXQUFZLDZDQUE2QyxDQUFDLENBQUM7QUFHdkYsSUFBTyxJQUFJLFdBQWlCLG9DQUFvQyxDQUFDLENBQUM7QUFDbEUsSUFBTyxnQkFBZ0IsV0FBYyw4Q0FBOEMsQ0FBQyxDQUFDO0FBRXJGLElBQU8saUJBQWlCLFdBQWEsNkRBQTZELENBQUMsQ0FBQztBQUNwRyxJQUFPLG9CQUFvQixXQUFhLGlEQUFpRCxDQUFDLENBQUM7QUFDM0YsSUFBTyxtQkFBbUIsV0FBYSxnREFBZ0QsQ0FBQyxDQUFDO0FBQ3pGLElBQU8sc0JBQXNCLFdBQVksbURBQW1ELENBQUMsQ0FBQztBQUU5RixJQUFPLGVBQWUsV0FBYyx1Q0FBdUMsQ0FBQyxDQUFDO0FBRTdFLElBQU8sY0FBYyxXQUFjLDJDQUEyQyxDQUFDLENBQUM7QUFDaEYsSUFBTyxrQkFBa0IsV0FBYSxvREFBb0QsQ0FBQyxDQUFDO0FBRTVGLElBQU8sU0FBUyxXQUFlLDhCQUE4QixDQUFDLENBQUM7QUFFL0QsSUFBTSxpQkFBaUI7SUFzQnRCQSxTQXRCS0EsaUJBQWlCQTtRQUF2QkMsaUJBb01DQTtRQWpNUUEsV0FBTUEsR0FBWUEsQ0FBQ0EsQ0FBQ0E7UUFLcEJBLFdBQU1BLEdBQWtCQSxJQUFJQSxLQUFLQSxFQUFRQSxDQUFDQTtRQU0xQ0EsWUFBT0EsR0FBaUJBLEtBQUtBLENBQVNBLENBQUNBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1FBQ2pFQSxhQUFRQSxHQUFVQSxDQUFDQSxDQUFDQTtRQVMzQkEsS0FBS0EsQ0FBQ0EsYUFBYUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDNUJBLEtBQUtBLENBQUNBLFlBQVlBLEdBQUdBLEtBQUtBLENBQUNBO1FBRTNCQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxJQUFJQSxDQUFDQSxJQUFJQSxlQUFlQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBLENBQUNBO1FBQzlEQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxJQUFJQSxxQkFBcUJBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBQ3hEQSxJQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtRQUVoQkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsZ0JBQWdCQSxFQUFFQSxDQUFDQTtRQUNwQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsR0FBR0EsUUFBUUEsQ0FBQ0E7UUFDNUJBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLFFBQVFBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1FBQzdDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN2QkEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsWUFBWUEsR0FBR0EsUUFBUUEsQ0FBQ0E7UUFDbkNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLEdBQUdBLENBQUNBLENBQUNBO1FBQ3ZCQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFRQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUV4QkEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsZ0JBQWdCQSxFQUFFQSxDQUFDQTtRQUNyQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsR0FBRUEsUUFBUUEsQ0FBQ0E7UUFDNUJBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1FBQy9DQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxPQUFPQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN4QkEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsWUFBWUEsR0FBR0EsUUFBUUEsQ0FBQ0E7UUFDcENBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLE9BQU9BLEdBQUdBLENBQUNBLENBQUNBO1FBQ3hCQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUV6QkEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDckNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBRXRDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxHQUFHQSxRQUFRQSxDQUFDQTtRQUVyQ0EsWUFBWUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7UUFFckNBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFlBQVlB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QSxDQUFDQSxZQUFZQSxFQUFFQSxDQUFDQTtvQkFDckRBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO29CQUM5QkEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0E7b0JBRXRDQSxJQUFJQSxDQUFDQSxpQkFBaUJBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxLQUFLQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFFbkdBLEtBQUtBLENBQUNBO1lBQ1JBLENBQUNBO1FBQ0ZBLENBQUNBO0lBQ0ZBLENBQUNBO0lBRU1KLG9DQUFRQSxHQUFmQSxVQUFnQkEsS0FBb0JBO1FBQXBCSyxxQkFBb0JBLEdBQXBCQSxZQUFvQkE7UUFFbkNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ2hCQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUVoQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7UUFDcENBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBO0lBQ3ZDQSxDQUFDQTtJQUNGTCx3QkFBQ0E7QUFBREEsQ0FwTUEsQUFvTUNBLElBQUEiLCJmaWxlIjoibWF0ZXJpYWxzL01hdGVyaWFsQWxwaGFUZXN0LmpzIiwic291cmNlUm9vdCI6Ii4vdGVzdHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxlbmRNb2RlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9iYXNlL0JsZW5kTW9kZVwiKTtcbmltcG9ydCBMb2FkZXJFdmVudFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZXZlbnRzL0xvYWRlckV2ZW50XCIpO1xuaW1wb3J0IFZlY3RvcjNEXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2dlb20vVmVjdG9yM0RcIik7XG5pbXBvcnQgQXNzZXRMaWJyYXJ5XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9saWJyYXJ5L0Fzc2V0TGlicmFyeVwiKTtcbmltcG9ydCBBc3NldExvYWRlclx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9Bc3NldExvYWRlclwiKTtcbmltcG9ydCBBc3NldExvYWRlclRva2VuXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9Bc3NldExvYWRlclRva2VuXCIpO1xuaW1wb3J0IEFzc2V0VHlwZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9Bc3NldFR5cGVcIik7XG5pbXBvcnQgSUFzc2V0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2xpYnJhcnkvSUFzc2V0XCIpO1xuaW1wb3J0IFVSTExvYWRlclx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbmV0L1VSTExvYWRlclwiKTtcbmltcG9ydCBVUkxMb2FkZXJEYXRhRm9ybWF0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL25ldC9VUkxMb2FkZXJEYXRhRm9ybWF0XCIpO1xuaW1wb3J0IFVSTFJlcXVlc3RcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL25ldC9VUkxSZXF1ZXN0XCIpO1xuaW1wb3J0IFBlcnNwZWN0aXZlUHJvamVjdGlvblx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcHJvamVjdGlvbnMvUGVyc3BlY3RpdmVQcm9qZWN0aW9uXCIpO1xuaW1wb3J0IEltYWdlVGV4dHVyZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdGV4dHVyZXMvSW1hZ2VUZXh0dXJlXCIpO1xuaW1wb3J0IERlYnVnXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3V0aWxzL0RlYnVnXCIpO1xuaW1wb3J0IFJlcXVlc3RBbmltYXRpb25GcmFtZVx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdXRpbHMvUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCIpO1xuXG5pbXBvcnQgU2NlbmVcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvY29udGFpbmVycy9TY2VuZVwiKTtcbmltcG9ydCBWaWV3XHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvY29udGFpbmVycy9WaWV3XCIpO1xuaW1wb3J0IERpcmVjdGlvbmFsTGlnaHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9EaXJlY3Rpb25hbExpZ2h0XCIpO1xuaW1wb3J0IE1lc2hcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9NZXNoXCIpO1xuaW1wb3J0IFN0YXRpY0xpZ2h0UGlja2VyXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9saWdodHBpY2tlcnMvU3RhdGljTGlnaHRQaWNrZXJcIik7XG5pbXBvcnQgUHJpbWl0aXZlVG9ydXNQcmVmYWJcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvcHJlZmFicy9QcmltaXRpdmVUb3J1c1ByZWZhYlwiKTtcbmltcG9ydCBQcmltaXRpdmVDdWJlUHJlZmFiXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJpbWl0aXZlQ3ViZVByZWZhYlwiKTtcbmltcG9ydCBQcmltaXRpdmVDYXBzdWxlUHJlZmFiXHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZUNhcHN1bGVQcmVmYWJcIik7XG5cbmltcG9ydCBEZWZhdWx0UmVuZGVyZXJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9EZWZhdWx0UmVuZGVyZXJcIik7XG5cbmltcG9ydCBNZXRob2RNYXRlcmlhbFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvTWV0aG9kTWF0ZXJpYWxcIik7XG5pbXBvcnQgTWV0aG9kUmVuZGVyZXJQb29sXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvcG9vbC9NZXRob2RSZW5kZXJlclBvb2xcIik7XG5cbmltcG9ydCBPQkpQYXJzZXJcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXBhcnNlcnMvbGliL09CSlBhcnNlclwiKTtcblxuY2xhc3MgTWF0ZXJpYWxBbHBoYVRlc3RcbntcblxuXHRwcml2YXRlIGhlaWdodCA6IG51bWJlciA9IDA7XG5cblx0cHJpdmF0ZSB0b2tlbjpBc3NldExvYWRlclRva2VuO1xuXHRwcml2YXRlIHZpZXc6Vmlldztcblx0cHJpdmF0ZSByYWY6UmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRwcml2YXRlIG1lc2hlcyAgOiBBcnJheTxNZXNoPiA9IG5ldyBBcnJheTxNZXNoPigpO1xuXHRwcml2YXRlIGxvYWRlZE1lc2hNYXRlcmlhbDpNZXRob2RNYXRlcmlhbDtcblx0cHJpdmF0ZSBsaWdodDpEaXJlY3Rpb25hbExpZ2h0O1xuXHRwcml2YXRlIGxpZ2h0QjpEaXJlY3Rpb25hbExpZ2h0O1xuXHRwcml2YXRlIGxvYWRlZE1lc2g6TWVzaDtcblxuXHRwcml2YXRlIGFWYWx1ZXM6QXJyYXk8bnVtYmVyPiA9IEFycmF5PG51bWJlcj4oMCwgLjEsIC41LCAuOCwgLjksIC45OSwgMSk7XG5cdHByaXZhdGUgYVZhbHVlc1A6bnVtYmVyID0gMDtcblxuXHRwcml2YXRlIHRvcnVzVGV4dHVyZU1hdGVyaWFsOk1ldGhvZE1hdGVyaWFsO1xuXHRwcml2YXRlIGN1YmVDb2xvck1hdGVyaWFsOk1ldGhvZE1hdGVyaWFsO1xuXHRwcml2YXRlIGNhcHN1bGVDb2xvck1hdGVyaWFsOk1ldGhvZE1hdGVyaWFsO1xuXHRwcml2YXRlIHN0YXRpY0xpZ2h0UGlja2VyOlN0YXRpY0xpZ2h0UGlja2VyO1xuXG5cdGNvbnN0cnVjdG9yKClcblx0e1xuXHRcdERlYnVnLkxPR19QSV9FUlJPUlMgPSBmYWxzZTtcblx0XHREZWJ1Zy5USFJPV19FUlJPUlMgPSBmYWxzZTtcblxuXHRcdHRoaXMudmlldyA9IG5ldyBWaWV3KG5ldyBEZWZhdWx0UmVuZGVyZXIoTWV0aG9kUmVuZGVyZXJQb29sKSk7XG5cdFx0dGhpcy5yYWYgPSBuZXcgUmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyLCB0aGlzKTtcblx0XHR0aGlzLm9uUmVzaXplKCk7XG5cblx0XHR0aGlzLmxpZ2h0ID0gbmV3IERpcmVjdGlvbmFsTGlnaHQoKTtcblx0XHR0aGlzLmxpZ2h0LmNvbG9yID0gMHhGRkZGRkY7XG5cdFx0dGhpcy5saWdodC5kaXJlY3Rpb24gPSBuZXcgVmVjdG9yM0QoMSwgMSwgMCk7XG5cdFx0dGhpcy5saWdodC5hbWJpZW50ID0gMDtcblx0XHR0aGlzLmxpZ2h0LmFtYmllbnRDb2xvciA9IDB4RkZGRkZGO1xuXHRcdHRoaXMubGlnaHQuZGlmZnVzZSA9IDE7XG5cdFx0dGhpcy5saWdodC5zcGVjdWxhciA9IDE7XG5cblx0XHR0aGlzLmxpZ2h0QiA9IG5ldyBEaXJlY3Rpb25hbExpZ2h0KCk7XG5cdFx0dGhpcy5saWdodEIuY29sb3I9IDB4RkYwMDAwO1xuXHRcdHRoaXMubGlnaHRCLmRpcmVjdGlvbiA9IG5ldyBWZWN0b3IzRCgtMSwgMCwgMSk7XG5cdFx0dGhpcy5saWdodEIuYW1iaWVudCA9IDA7XG5cdFx0dGhpcy5saWdodEIuYW1iaWVudENvbG9yID0gMHhGRkZGRkY7XG5cdFx0dGhpcy5saWdodEIuZGlmZnVzZSA9IDE7XG5cdFx0dGhpcy5saWdodEIuc3BlY3VsYXIgPSAxO1xuXG5cdFx0dGhpcy52aWV3LnNjZW5lLmFkZENoaWxkKHRoaXMubGlnaHQpO1xuXHRcdHRoaXMudmlldy5zY2VuZS5hZGRDaGlsZCh0aGlzLmxpZ2h0Qik7XG5cblx0XHR0aGlzLnZpZXcuYmFja2dyb3VuZENvbG9yID0gMHgyMjIyMjI7XG5cblx0XHRBc3NldExpYnJhcnkuZW5hYmxlUGFyc2VyKE9CSlBhcnNlcik7XG5cblx0XHR0aGlzLnRva2VuID0gQXNzZXRMaWJyYXJ5LmxvYWQobmV3IFVSTFJlcXVlc3QoJ2Fzc2V0cy9wbGF0b25pYy5vYmonKSk7XG5cdFx0dGhpcy50b2tlbi5hZGRFdmVudExpc3RlbmVyKExvYWRlckV2ZW50LlJFU09VUkNFX0NPTVBMRVRFICwgKGV2ZW50OkxvYWRlckV2ZW50KSA9PiB0aGlzLm9uUmVzb3VyY2VDb21wbGV0ZShldmVudCkpO1xuXG5cdFx0dGhpcy50b2tlbiA9IEFzc2V0TGlicmFyeS5sb2FkKG5ldyBVUkxSZXF1ZXN0KCdhc3NldHMvZG90cy5wbmcnKSApO1xuXHRcdHRoaXMudG9rZW4uYWRkRXZlbnRMaXN0ZW5lcihMb2FkZXJFdmVudC5SRVNPVVJDRV9DT01QTEVURSwgKGV2ZW50OkxvYWRlckV2ZW50KSA9PiB0aGlzLm9uUmVzb3VyY2VDb21wbGV0ZShldmVudCkpO1xuXG5cdFx0d2luZG93Lm9ucmVzaXplID0gKGV2ZW50OlVJRXZlbnQpID0+IHRoaXMub25SZXNpemUoZXZlbnQpO1xuXHRcdGRvY3VtZW50Lm9ubW91c2Vkb3duID0gKGV2ZW50Ok1vdXNlRXZlbnQpID0+IHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuXHR9XG5cblx0cHJpdmF0ZSBvbk1vdXNlRG93bihldmVudDpNb3VzZUV2ZW50KVxuXHR7XG5cdFx0dGhpcy5jdWJlQ29sb3JNYXRlcmlhbC5hbHBoYSA9IHRoaXMudG9ydXNUZXh0dXJlTWF0ZXJpYWwuYWxwaGEgPSB0aGlzLmxvYWRlZE1lc2hNYXRlcmlhbC5hbHBoYSA9IHRoaXMuYVZhbHVlc1t0aGlzLmFWYWx1ZXNQXTtcblxuXHRcdGFsZXJ0KCAnQWxwaGE6ICcgKyB0aGlzLmFWYWx1ZXNbdGhpcy5hVmFsdWVzUF0pO1xuXG5cdFx0dGhpcy5hVmFsdWVzUCsrO1xuXG5cdFx0aWYgKHRoaXMuYVZhbHVlc1AgPiB0aGlzLmFWYWx1ZXMubGVuZ3RoIC0xKVxuXHRcdFx0dGhpcy5hVmFsdWVzUCAgPSAwO1xuXHR9XG5cblx0cHJpdmF0ZSByZW5kZXIoZHQ6bnVtYmVyKVxuXHR7XG5cdFx0aWYgKHRoaXMubWVzaGVzKVxuXHRcdFx0Zm9yICh2YXIgYzpudW1iZXIgPSAwOyBjIDwgdGhpcy5tZXNoZXMubGVuZ3RoOyBjKyspXG5cdFx0XHRcdHRoaXMubWVzaGVzW2NdLnJvdGF0aW9uWSArPSAuMzU7XG5cblx0XHR0aGlzLnZpZXcucmVuZGVyKCk7XG5cdH1cblxuXHRwdWJsaWMgb25SZXNvdXJjZUNvbXBsZXRlKGV2ZW50OkxvYWRlckV2ZW50KVxuXHR7XG5cdFx0dmFyIGxvYWRlcjpBc3NldExvYWRlciA9IDxBc3NldExvYWRlcj4gZXZlbnQudGFyZ2V0O1xuXHRcdHZhciBsOm51bWJlciA9IGxvYWRlci5iYXNlRGVwZW5kZW5jeS5hc3NldHMubGVuZ3RoXG5cblx0XHRmb3IgKHZhciBjOm51bWJlciA9IDA7IGMgPCBsOyBjICsrKSB7XG5cblx0XHRcdHZhciBkOklBc3NldCA9IGxvYWRlci5iYXNlRGVwZW5kZW5jeS5hc3NldHNbY107XG5cblx0XHRcdGNvbnNvbGUubG9nKCBkLm5hbWUpO1xuXG5cdFx0XHRzd2l0Y2ggKGQuYXNzZXRUeXBlKSB7XG5cdFx0XHRcdGNhc2UgQXNzZXRUeXBlLk1FU0g6XG5cdFx0XHRcdFx0dmFyIG1lc2g6TWVzaCA9IDxNZXNoPiBkO1xuXG5cdFx0XHRcdFx0dGhpcy5sb2FkZWRNZXNoID0gbWVzaDtcblxuXHRcdFx0XHRcdGlmIChkLm5hbWUgPT0gJ01lc2hfZzAnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxvYWRlZE1lc2ggPSBtZXNoO1xuXHRcdFx0XHRcdFx0bWVzaC55ID0gLTQwMDtcblx0XHRcdFx0XHRcdG1lc2gudHJhbnNmb3JtLnNjYWxlID0gbmV3IFZlY3RvcjNEKDUsIDUsIDUpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRtZXNoLnRyYW5zZm9ybS5zY2FsZSA9IG5ldyBWZWN0b3IzRCgzLjUsIDMuNSwgMy41KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAodGhpcy5sb2FkZWRNZXNoTWF0ZXJpYWwpXG5cdFx0XHRcdFx0XHRtZXNoLm1hdGVyaWFsID0gdGhpcy5sb2FkZWRNZXNoTWF0ZXJpYWw7XG5cblx0XHRcdFx0XHR0aGlzLnZpZXcuc2NlbmUuYWRkQ2hpbGQobWVzaCk7XG5cdFx0XHRcdFx0dGhpcy5tZXNoZXMucHVzaChtZXNoKTtcblxuXHRcdFx0XHRcdHRoaXMucmFmLnN0YXJ0KCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgQXNzZXRUeXBlLlRFWFRVUkU6XG5cdFx0XHRcdFx0Ly8gTG9hZGVkIFRleHR1cmVcblx0XHRcdFx0XHR2YXIgdHg6SW1hZ2VUZXh0dXJlID0gPEltYWdlVGV4dHVyZT4gZDtcblxuXHRcdFx0XHRcdC8vIExpZ2h0IFBpY2tlclxuXHRcdFx0XHRcdHRoaXMuc3RhdGljTGlnaHRQaWNrZXIgPSBuZXcgU3RhdGljTGlnaHRQaWNrZXIoIFt0aGlzLmxpZ2h0ICwgdGhpcy5saWdodEIgXSApO1xuXG5cdFx0XHRcdFx0Ly8gTWF0ZXJpYWwgZm9yIGxvYWRlZCBtZXNoXG5cdFx0XHRcdFx0dGhpcy5sb2FkZWRNZXNoTWF0ZXJpYWwgPSBuZXcgTWV0aG9kTWF0ZXJpYWwoIHR4LCB0cnVlLCB0cnVlLCBmYWxzZSApO1xuXHRcdFx0XHRcdHRoaXMubG9hZGVkTWVzaE1hdGVyaWFsLmxpZ2h0UGlja2VyID0gdGhpcy5zdGF0aWNMaWdodFBpY2tlcjtcblx0XHRcdFx0XHR0aGlzLmxvYWRlZE1lc2hNYXRlcmlhbC5hbHBoYSA9IDE7XG5cdFx0XHRcdFx0dGhpcy5sb2FkZWRNZXNoTWF0ZXJpYWwuYm90aFNpZGVzID0gdHJ1ZTtcblxuXHRcdFx0XHRcdGlmICh0aGlzLmxvYWRlZE1lc2gpXG5cdFx0XHRcdFx0XHR0aGlzLmxvYWRlZE1lc2gubWF0ZXJpYWwgPSB0aGlzLmxvYWRlZE1lc2hNYXRlcmlhbDtcblxuXHRcdFx0XHRcdC8vIFRvcnVzXG5cdFx0XHRcdFx0dmFyIHRvcnVzOlByaW1pdGl2ZVRvcnVzUHJlZmFiID0gbmV3IFByaW1pdGl2ZVRvcnVzUHJlZmFiKDE1MCAsIDUwICwgNjQgLCA2NCk7XG5cblx0XHRcdFx0XHQvLyBUb3J1cyBUZXh0dXJlIE1hdGVyaWFsXG5cdFx0XHRcdFx0dGhpcy50b3J1c1RleHR1cmVNYXRlcmlhbCA9IG5ldyBNZXRob2RNYXRlcmlhbCh0eCwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuXHRcdFx0XHRcdHRoaXMudG9ydXNUZXh0dXJlTWF0ZXJpYWwubGlnaHRQaWNrZXIgPSB0aGlzLnN0YXRpY0xpZ2h0UGlja2VyIDtcblx0XHRcdFx0XHR0aGlzLnRvcnVzVGV4dHVyZU1hdGVyaWFsLmJvdGhTaWRlcyA9IHRydWU7XG5cdFx0XHRcdFx0dGhpcy50b3J1c1RleHR1cmVNYXRlcmlhbC5hbHBoYSA9IC44O1xuXG5cdFx0XHRcdFx0dG9ydXMubWF0ZXJpYWwgPSB0aGlzLnRvcnVzVGV4dHVyZU1hdGVyaWFsO1xuXG5cdFx0XHRcdFx0Ly8gVG9ydXMgTWVzaCAoIGxlZnQgKVxuXHRcdFx0XHRcdHZhciB0b3J1c01lc2g6TWVzaCA9IDxNZXNoPiB0b3J1cy5nZXROZXdPYmplY3QoKTtcblx0XHRcdFx0XHR0b3J1c01lc2gucm90YXRpb25YID0gOTA7XG5cdFx0XHRcdFx0dG9ydXNNZXNoLnggPSA2MDA7XG5cdFx0XHRcdFx0dGhpcy5tZXNoZXMucHVzaCh0b3J1c01lc2gpO1xuXHRcdFx0XHRcdHRoaXMudmlldy5zY2VuZS5hZGRDaGlsZCh0b3J1c01lc2gpO1xuXG5cdFx0XHRcdFx0dmFyIGN1YmU6UHJpbWl0aXZlQ3ViZVByZWZhYiA9IG5ldyBQcmltaXRpdmVDdWJlUHJlZmFiKDMwMCwgMzAwLCAzMDAsIDIwLCAyMCwgMjApO1xuXG5cdFx0XHRcdFx0Ly8gVG9ydXMgQ29sb3IgTWF0ZXJpYWxcblx0XHRcdFx0XHR0aGlzLmN1YmVDb2xvck1hdGVyaWFsID0gbmV3IE1ldGhvZE1hdGVyaWFsKDB4MDA5MGZmKTtcblx0XHRcdFx0XHR0aGlzLmN1YmVDb2xvck1hdGVyaWFsLmxpZ2h0UGlja2VyID0gdGhpcy5zdGF0aWNMaWdodFBpY2tlciA7XG5cdFx0XHRcdFx0dGhpcy5jdWJlQ29sb3JNYXRlcmlhbC5hbHBoYSA9IC44O1xuXHRcdFx0XHRcdHRoaXMuY3ViZUNvbG9yTWF0ZXJpYWwuYm90aFNpZGVzID0gdHJ1ZTtcblxuXHRcdFx0XHRcdGN1YmUubWF0ZXJpYWwgPSB0aGlzLmN1YmVDb2xvck1hdGVyaWFsO1xuXG5cdFx0XHRcdFx0Ly8gVG9ydXMgTWVzaCAoIHJpZ2h0IClcblx0XHRcdFx0XHR2YXIgY3ViZU1lc2g6TWVzaCA9IDxNZXNoPiBjdWJlLmdldE5ld09iamVjdCgpO1xuXHRcdFx0XHRcdGN1YmVNZXNoLnJvdGF0aW9uWCA9IDkwO1xuXHRcdFx0XHRcdGN1YmVNZXNoLnggPSAtNjAwO1xuXHRcdFx0XHRcdHRoaXMubWVzaGVzLnB1c2goY3ViZU1lc2gpO1xuXHRcdFx0XHRcdHRoaXMudmlldy5zY2VuZS5hZGRDaGlsZChjdWJlTWVzaCk7XG5cblx0XHRcdFx0XHR0aGlzLmNhcHN1bGVDb2xvck1hdGVyaWFsID0gbmV3IE1ldGhvZE1hdGVyaWFsKDB4MDBmZmZmKTtcblx0XHRcdFx0XHR0aGlzLmNhcHN1bGVDb2xvck1hdGVyaWFsLmxpZ2h0UGlja2VyID0gdGhpcy5zdGF0aWNMaWdodFBpY2tlcjtcblxuXHRcdFx0XHRcdHZhciBjYXBzdWxlOlByaW1pdGl2ZUNhcHN1bGVQcmVmYWIgPSBuZXcgUHJpbWl0aXZlQ2Fwc3VsZVByZWZhYigxMDAsIDIwMCk7XG5cblx0XHRcdFx0XHRjYXBzdWxlLm1hdGVyaWFsID0gdGhpcy5jYXBzdWxlQ29sb3JNYXRlcmlhbDtcblxuXHRcdFx0XHRcdC8vIFRvcnVzIE1lc2ggKCByaWdodCApXG5cdFx0XHRcdFx0dmFyIGNhcHN1bGVNZXNoOk1lc2ggPSA8TWVzaD4gY2Fwc3VsZS5nZXROZXdPYmplY3QoKTtcblx0XHRcdFx0XHR0aGlzLm1lc2hlcy5wdXNoKGNhcHN1bGVNZXNoKTtcblx0XHRcdFx0XHR0aGlzLnZpZXcuc2NlbmUuYWRkQ2hpbGQoY2Fwc3VsZU1lc2gpO1xuXG5cdFx0XHRcdFx0dGhpcy5jdWJlQ29sb3JNYXRlcmlhbC5hbHBoYSA9IHRoaXMudG9ydXNUZXh0dXJlTWF0ZXJpYWwuYWxwaGEgPSB0aGlzLmxvYWRlZE1lc2hNYXRlcmlhbC5hbHBoYSA9IDE7XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgb25SZXNpemUoZXZlbnQ6VUlFdmVudCA9IG51bGwpXG5cdHtcblx0XHR0aGlzLnZpZXcueSA9IDA7XG5cdFx0dGhpcy52aWV3LnggPSAwO1xuXG5cdFx0dGhpcy52aWV3LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0dGhpcy52aWV3LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0fVxufSJdfQ==