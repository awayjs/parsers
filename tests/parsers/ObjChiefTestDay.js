var BitmapImage2D = require("awayjs-core/lib/data/BitmapImage2D");
var LoaderEvent = require("awayjs-core/lib/events/LoaderEvent");
var Vector3D = require("awayjs-core/lib/geom/Vector3D");
var AssetLibrary = require("awayjs-core/lib/library/AssetLibrary");
var URLRequest = require("awayjs-core/lib/net/URLRequest");
var Debug = require("awayjs-core/lib/utils/Debug");
var RequestAnimationFrame = require("awayjs-core/lib/utils/RequestAnimationFrame");
var View = require("awayjs-display/lib/containers/View");
var DisplayObjectContainer = require("awayjs-display/lib/containers/DisplayObjectContainer");
var DirectionalLight = require("awayjs-display/lib/entities/DirectionalLight");
var Mesh = require("awayjs-display/lib/entities/Mesh");
var StaticLightPicker = require("awayjs-display/lib/materials/lightpickers/StaticLightPicker");
var Single2DTexture = require("awayjs-display/lib/textures/Single2DTexture");
var DefaultRenderer = require("awayjs-renderergl/lib/DefaultRenderer");
var MethodMaterial = require("awayjs-methodmaterials/lib/MethodMaterial");
var OBJParser = require("awayjs-parsers/lib/OBJParser");
/**
 *
 */
var ObjChiefTestDay = (function () {
    function ObjChiefTestDay() {
        var _this = this;
        this.meshes = new Array();
        this.spartan = new DisplayObjectContainer();
        this.spartanFlag = false;
        this.terrainObjFlag = false;
        Debug.LOG_PI_ERRORS = false;
        Debug.THROW_ERRORS = false;
        this.view = new View(new DefaultRenderer());
        this.view.camera.z = -50;
        this.view.camera.y = 20;
        this.view.camera.projection.near = 0.1;
        this.view.backgroundColor = 0xCEC8C6;
        this.raf = new RequestAnimationFrame(this.render, this);
        this.light = new DirectionalLight();
        this.light.color = 0xc1582d;
        this.light.direction = new Vector3D(1, 0, 0);
        this.light.ambient = 0.4;
        this.light.ambientColor = 0x85b2cd;
        this.light.diffuse = 2.8;
        this.light.specular = 1.8;
        this.spartan.transform.scale = new Vector3D(.25, .25, .25);
        this.spartan.y = 0;
        this.view.scene.addChild(this.light);
        AssetLibrary.enableParser(OBJParser);
        this.token = AssetLibrary.load(new URLRequest('assets/Halo_3_SPARTAN4.obj'));
        this.token.addEventListener(LoaderEvent.RESOURCE_COMPLETE, function (event) { return _this.onResourceComplete(event); });
        this.token = AssetLibrary.load(new URLRequest('assets/terrain.obj'));
        this.token.addEventListener(LoaderEvent.RESOURCE_COMPLETE, function (event) { return _this.onResourceComplete(event); });
        this.token = AssetLibrary.load(new URLRequest('assets/masterchief_base.png'));
        this.token.addEventListener(LoaderEvent.RESOURCE_COMPLETE, function (event) { return _this.onResourceComplete(event); });
        this.token = AssetLibrary.load(new URLRequest('assets/stone_tx.jpg'));
        this.token.addEventListener(LoaderEvent.RESOURCE_COMPLETE, function (event) { return _this.onResourceComplete(event); });
        window.onresize = function (event) { return _this.onResize(); };
        this.raf.start();
    }
    ObjChiefTestDay.prototype.render = function () {
        if (this.terrain)
            this.terrain.rotationY += 0.4;
        this.spartan.rotationY += 0.4;
        this.view.render();
    };
    ObjChiefTestDay.prototype.onResourceComplete = function (event) {
        var loader = event.target;
        var l = loader.baseDependency.assets.length;
        console.log('------------------------------------------------------------------------------');
        console.log('events.LoaderEvent.RESOURCE_COMPLETE', event, l, loader);
        console.log('------------------------------------------------------------------------------');
        var loader = event.target;
        var l = loader.baseDependency.assets.length;
        for (var c = 0; c < l; c++) {
            var d = loader.baseDependency.assets[c];
            console.log(d.name, event.url);
            switch (d.assetType) {
                case Mesh.assetType:
                    if (event.url == 'assets/Halo_3_SPARTAN4.obj') {
                        var mesh = d;
                        this.spartan.addChild(mesh);
                        this.spartanFlag = true;
                        this.meshes.push(mesh);
                    }
                    else if (event.url == 'assets/terrain.obj') {
                        this.terrainObjFlag = true;
                        this.terrain = d;
                        this.terrain.y = 98;
                        this.view.scene.addChild(this.terrain);
                    }
                    break;
                case BitmapImage2D.assetType:
                    if (event.url == 'assets/masterchief_base.png') {
                        this.mat = new MethodMaterial(new Single2DTexture(d), true, true, false);
                        this.mat.lightPicker = new StaticLightPicker([this.light]);
                    }
                    else if (event.url == 'assets/stone_tx.jpg') {
                        this.terrainMaterial = new MethodMaterial(new Single2DTexture(d), true, true, false);
                        this.terrainMaterial.lightPicker = new StaticLightPicker([this.light]);
                    }
                    break;
            }
        }
        if (this.terrainObjFlag && this.terrainMaterial) {
            this.terrain.material = this.terrainMaterial;
            this.terrain.geometry.scaleUV(20, 20);
        }
        if (this.mat && this.spartanFlag)
            for (var c = 0; c < this.meshes.length; c++)
                this.meshes[c].material = this.mat;
        this.view.scene.addChild(this.spartan);
        this.onResize();
    };
    ObjChiefTestDay.prototype.onResize = function (event) {
        if (event === void 0) { event = null; }
        this.view.y = 0;
        this.view.x = 0;
        this.view.width = window.innerWidth;
        this.view.height = window.innerHeight;
    };
    return ObjChiefTestDay;
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlcnMvT2JqQ2hpZWZUZXN0RGF5LnRzIl0sIm5hbWVzIjpbIk9iakNoaWVmVGVzdERheSIsIk9iakNoaWVmVGVzdERheS5jb25zdHJ1Y3RvciIsIk9iakNoaWVmVGVzdERheS5yZW5kZXIiLCJPYmpDaGllZlRlc3REYXkub25SZXNvdXJjZUNvbXBsZXRlIiwiT2JqQ2hpZWZUZXN0RGF5Lm9uUmVzaXplIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLGFBQWEsV0FBYyxvQ0FBb0MsQ0FBQyxDQUFDO0FBQ3hFLElBQU8sV0FBVyxXQUFlLG9DQUFvQyxDQUFDLENBQUM7QUFDdkUsSUFBTyxRQUFRLFdBQWdCLCtCQUErQixDQUFDLENBQUM7QUFDaEUsSUFBTyxZQUFZLFdBQWUsc0NBQXNDLENBQUMsQ0FBQztBQUkxRSxJQUFPLFVBQVUsV0FBZSxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ2xFLElBQU8sS0FBSyxXQUFnQiw2QkFBNkIsQ0FBQyxDQUFDO0FBQzNELElBQU8scUJBQXFCLFdBQVksNkNBQTZDLENBQUMsQ0FBQztBQUV2RixJQUFPLElBQUksV0FBaUIsb0NBQW9DLENBQUMsQ0FBQztBQUNsRSxJQUFPLHNCQUFzQixXQUFZLHNEQUFzRCxDQUFDLENBQUM7QUFDakcsSUFBTyxnQkFBZ0IsV0FBYyw4Q0FBOEMsQ0FBQyxDQUFDO0FBQ3JGLElBQU8sSUFBSSxXQUFpQixrQ0FBa0MsQ0FBQyxDQUFDO0FBQ2hFLElBQU8saUJBQWlCLFdBQWEsNkRBQTZELENBQUMsQ0FBQztBQUNwRyxJQUFPLGVBQWUsV0FBYyw2Q0FBNkMsQ0FBQyxDQUFDO0FBRW5GLElBQU8sZUFBZSxXQUFjLHVDQUF1QyxDQUFDLENBQUM7QUFFN0UsSUFBTyxjQUFjLFdBQWMsMkNBQTJDLENBQUMsQ0FBQztBQUVoRixJQUFPLFNBQVMsV0FBZSw4QkFBOEIsQ0FBQyxDQUFDO0FBRS9ELEFBR0E7O0dBREc7SUFDRyxlQUFlO0lBa0JwQkEsU0FsQktBLGVBQWVBO1FBQXJCQyxpQkE0SUNBO1FBdklR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QUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQVVBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBO2dCQUNqREEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7UUFFckNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1FBQ3ZDQSxJQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtJQUNqQkEsQ0FBQ0E7SUFFTUgsa0NBQVFBLEdBQWZBLFVBQWdCQSxLQUFvQkE7UUFBcEJJLHFCQUFvQkEsR0FBcEJBLFlBQW9CQTtRQUVuQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDaEJBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBRWhCQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQTtRQUNwQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7SUFDdkNBLENBQUNBO0lBQ0ZKLHNCQUFDQTtBQUFEQSxDQTVJQSxBQTRJQ0EsSUFBQSIsImZpbGUiOiJwYXJzZXJzL09iakNoaWVmVGVzdERheS5qcyIsInNvdXJjZVJvb3QiOiIuL3Rlc3RzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJpdG1hcEltYWdlMkRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9kYXRhL0JpdG1hcEltYWdlMkRcIik7XG5pbXBvcnQgTG9hZGVyRXZlbnRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2V2ZW50cy9Mb2FkZXJFdmVudFwiKTtcbmltcG9ydCBWZWN0b3IzRFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9nZW9tL1ZlY3RvcjNEXCIpO1xuaW1wb3J0IEFzc2V0TGlicmFyeVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9Bc3NldExpYnJhcnlcIik7XG5pbXBvcnQgQXNzZXRMb2FkZXJcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2xpYnJhcnkvQXNzZXRMb2FkZXJcIik7XG5pbXBvcnQgQXNzZXRMb2FkZXJUb2tlblx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2xpYnJhcnkvQXNzZXRMb2FkZXJUb2tlblwiKTtcbmltcG9ydCBJQXNzZXRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9JQXNzZXRcIik7XG5pbXBvcnQgVVJMUmVxdWVzdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbmV0L1VSTFJlcXVlc3RcIik7XG5pbXBvcnQgRGVidWdcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdXRpbHMvRGVidWdcIik7XG5pbXBvcnQgUmVxdWVzdEFuaW1hdGlvbkZyYW1lXHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi91dGlscy9SZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIik7XG5cbmltcG9ydCBWaWV3XHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvY29udGFpbmVycy9WaWV3XCIpO1xuaW1wb3J0IERpc3BsYXlPYmplY3RDb250YWluZXJcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2NvbnRhaW5lcnMvRGlzcGxheU9iamVjdENvbnRhaW5lclwiKTtcbmltcG9ydCBEaXJlY3Rpb25hbExpZ2h0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvZW50aXRpZXMvRGlyZWN0aW9uYWxMaWdodFwiKTtcbmltcG9ydCBNZXNoXHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvZW50aXRpZXMvTWVzaFwiKTtcbmltcG9ydCBTdGF0aWNMaWdodFBpY2tlclx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9tYXRlcmlhbHMvbGlnaHRwaWNrZXJzL1N0YXRpY0xpZ2h0UGlja2VyXCIpO1xuaW1wb3J0IFNpbmdsZTJEVGV4dHVyZVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3RleHR1cmVzL1NpbmdsZTJEVGV4dHVyZVwiKTtcblxuaW1wb3J0IERlZmF1bHRSZW5kZXJlclx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL0RlZmF1bHRSZW5kZXJlclwiKTtcblxuaW1wb3J0IE1ldGhvZE1hdGVyaWFsXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9NZXRob2RNYXRlcmlhbFwiKTtcblxuaW1wb3J0IE9CSlBhcnNlclx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcGFyc2Vycy9saWIvT0JKUGFyc2VyXCIpO1xuXG4vKipcbiAqIFxuICovXG5jbGFzcyBPYmpDaGllZlRlc3REYXlcbntcblx0cHJpdmF0ZSB0b2tlbjpBc3NldExvYWRlclRva2VuO1xuXHRwcml2YXRlIHZpZXc6Vmlldztcblx0cHJpdmF0ZSByYWY6UmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRwcml2YXRlIG1lc2hlczpBcnJheTxNZXNoPiA9IG5ldyBBcnJheTxNZXNoPigpO1xuXHRwcml2YXRlIG1hdDpNZXRob2RNYXRlcmlhbDtcblxuXHRwcml2YXRlIHRlcnJhaW5NYXRlcmlhbDpNZXRob2RNYXRlcmlhbDtcblxuXHRwcml2YXRlIGxpZ2h0OkRpcmVjdGlvbmFsTGlnaHQ7XG5cblx0cHJpdmF0ZSBzcGFydGFuOkRpc3BsYXlPYmplY3RDb250YWluZXIgPSBuZXcgRGlzcGxheU9iamVjdENvbnRhaW5lcigpO1xuXHRwcml2YXRlIHRlcnJhaW46TWVzaDtcblxuXHRwcml2YXRlIHNwYXJ0YW5GbGFnOmJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSB0ZXJyYWluT2JqRmxhZzpib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0RGVidWcuTE9HX1BJX0VSUk9SUyA9IGZhbHNlO1xuXHRcdERlYnVnLlRIUk9XX0VSUk9SUyA9IGZhbHNlO1xuXG5cdFx0dGhpcy52aWV3ID0gbmV3IFZpZXcobmV3IERlZmF1bHRSZW5kZXJlcigpKTtcblx0XHR0aGlzLnZpZXcuY2FtZXJhLnogPSAtNTA7XG5cdFx0dGhpcy52aWV3LmNhbWVyYS55ID0gMjA7XG5cdFx0dGhpcy52aWV3LmNhbWVyYS5wcm9qZWN0aW9uLm5lYXIgPSAwLjE7XG5cdFx0dGhpcy52aWV3LmJhY2tncm91bmRDb2xvciA9IDB4Q0VDOEM2O1xuXG5cdFx0dGhpcy5yYWYgPSBuZXcgUmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyLCB0aGlzKTtcblxuXHRcdHRoaXMubGlnaHQgPSBuZXcgRGlyZWN0aW9uYWxMaWdodCgpO1xuXHRcdHRoaXMubGlnaHQuY29sb3IgPSAweGMxNTgyZDtcblx0XHR0aGlzLmxpZ2h0LmRpcmVjdGlvbiA9IG5ldyBWZWN0b3IzRCgxLCAwLCAwKTtcblx0XHR0aGlzLmxpZ2h0LmFtYmllbnQgPSAwLjQ7XG5cdFx0dGhpcy5saWdodC5hbWJpZW50Q29sb3IgPSAweDg1YjJjZDtcblx0XHR0aGlzLmxpZ2h0LmRpZmZ1c2UgPSAyLjg7XG5cdFx0dGhpcy5saWdodC5zcGVjdWxhciA9IDEuODtcblxuXHRcdHRoaXMuc3BhcnRhbi50cmFuc2Zvcm0uc2NhbGUgPSBuZXcgVmVjdG9yM0QoLjI1LCAuMjUsIC4yNSk7XG5cdFx0dGhpcy5zcGFydGFuLnkgPSAwO1xuXG5cdFx0dGhpcy52aWV3LnNjZW5lLmFkZENoaWxkKHRoaXMubGlnaHQpO1xuXG5cdFx0QXNzZXRMaWJyYXJ5LmVuYWJsZVBhcnNlcihPQkpQYXJzZXIpO1xuXG5cdFx0dGhpcy50b2tlbiA9IEFzc2V0TGlicmFyeS5sb2FkKG5ldyBVUkxSZXF1ZXN0KCdhc3NldHMvSGFsb18zX1NQQVJUQU40Lm9iaicpKTtcblx0XHR0aGlzLnRva2VuLmFkZEV2ZW50TGlzdGVuZXIoTG9hZGVyRXZlbnQuUkVTT1VSQ0VfQ09NUExFVEUsIChldmVudDpMb2FkZXJFdmVudCkgPT4gdGhpcy5vblJlc291cmNlQ29tcGxldGUoZXZlbnQpKTtcblxuXHRcdHRoaXMudG9rZW4gPSBBc3NldExpYnJhcnkubG9hZChuZXcgVVJMUmVxdWVzdCgnYXNzZXRzL3RlcnJhaW4ub2JqJykpO1xuXHRcdHRoaXMudG9rZW4uYWRkRXZlbnRMaXN0ZW5lcihMb2FkZXJFdmVudC5SRVNPVVJDRV9DT01QTEVURSwgKGV2ZW50OkxvYWRlckV2ZW50KSA9PiB0aGlzLm9uUmVzb3VyY2VDb21wbGV0ZShldmVudCkpO1xuXG5cdFx0dGhpcy50b2tlbiA9IEFzc2V0TGlicmFyeS5sb2FkKG5ldyBVUkxSZXF1ZXN0KCdhc3NldHMvbWFzdGVyY2hpZWZfYmFzZS5wbmcnKSk7XG5cdFx0dGhpcy50b2tlbi5hZGRFdmVudExpc3RlbmVyKExvYWRlckV2ZW50LlJFU09VUkNFX0NPTVBMRVRFLCAoZXZlbnQ6TG9hZGVyRXZlbnQpID0+IHRoaXMub25SZXNvdXJjZUNvbXBsZXRlKGV2ZW50KSk7XG5cblx0XHR0aGlzLnRva2VuID0gQXNzZXRMaWJyYXJ5LmxvYWQobmV3IFVSTFJlcXVlc3QoJ2Fzc2V0cy9zdG9uZV90eC5qcGcnKSk7XG5cdFx0dGhpcy50b2tlbi5hZGRFdmVudExpc3RlbmVyKExvYWRlckV2ZW50LlJFU09VUkNFX0NPTVBMRVRFLCAoZXZlbnQ6TG9hZGVyRXZlbnQpID0+IHRoaXMub25SZXNvdXJjZUNvbXBsZXRlKGV2ZW50KSk7XG5cblx0XHR3aW5kb3cub25yZXNpemUgPSAoZXZlbnQ6VUlFdmVudCkgPT4gdGhpcy5vblJlc2l6ZSgpO1xuXG5cdFx0dGhpcy5yYWYuc3RhcnQoKTtcblx0fVxuXG5cdHByaXZhdGUgcmVuZGVyKClcblx0e1xuXHRcdGlmICggdGhpcy50ZXJyYWluKVxuXHRcdFx0dGhpcy50ZXJyYWluLnJvdGF0aW9uWSArPSAwLjQ7XG5cblx0XHR0aGlzLnNwYXJ0YW4ucm90YXRpb25ZICs9IDAuNDtcblx0XHR0aGlzLnZpZXcucmVuZGVyKCk7XG5cdH1cblxuXHRwdWJsaWMgb25SZXNvdXJjZUNvbXBsZXRlIChldmVudDpMb2FkZXJFdmVudClcblx0e1xuXHRcdHZhciBsb2FkZXI6QXNzZXRMb2FkZXIgPSA8QXNzZXRMb2FkZXI+IGV2ZW50LnRhcmdldDtcblx0XHR2YXIgbDpudW1iZXIgPSBsb2FkZXIuYmFzZURlcGVuZGVuY3kuYXNzZXRzLmxlbmd0aDtcblxuXHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRjb25zb2xlLmxvZygnZXZlbnRzLkxvYWRlckV2ZW50LlJFU09VUkNFX0NPTVBMRVRFJywgZXZlbnQsIGwsIGxvYWRlcik7XG5cdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXG5cdFx0dmFyIGxvYWRlcjpBc3NldExvYWRlciA9IDxBc3NldExvYWRlcj4gZXZlbnQudGFyZ2V0O1xuXHRcdHZhciBsOm51bWJlciA9IGxvYWRlci5iYXNlRGVwZW5kZW5jeS5hc3NldHMubGVuZ3RoO1xuXG5cdFx0Zm9yICh2YXIgYzpudW1iZXIgPSAwOyBjIDwgbDsgYysrKSB7XG5cblx0XHRcdHZhciBkOklBc3NldCA9IGxvYWRlci5iYXNlRGVwZW5kZW5jeS5hc3NldHNbY107XG5cblx0XHRcdGNvbnNvbGUubG9nKCBkLm5hbWUgLCBldmVudC51cmwpO1xuXG5cdFx0XHRzd2l0Y2ggKGQuYXNzZXRUeXBlKSB7XG5cdFx0XHRcdGNhc2UgTWVzaC5hc3NldFR5cGU6XG5cdFx0XHRcdFx0aWYgKGV2ZW50LnVybCA9PSdhc3NldHMvSGFsb18zX1NQQVJUQU40Lm9iaicpIHtcblx0XHRcdFx0XHRcdHZhciBtZXNoOk1lc2ggPSA8TWVzaD4gZDtcblxuXHRcdFx0XHRcdFx0dGhpcy5zcGFydGFuLmFkZENoaWxkKG1lc2gpO1xuXHRcdFx0XHRcdFx0dGhpcy5zcGFydGFuRmxhZyA9IHRydWU7XG5cdFx0XHRcdFx0XHR0aGlzLm1lc2hlcy5wdXNoKG1lc2gpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZXZlbnQudXJsID09J2Fzc2V0cy90ZXJyYWluLm9iaicpIHtcblx0XHRcdFx0XHRcdHRoaXMudGVycmFpbk9iakZsYWcgPSB0cnVlO1xuXHRcdFx0XHRcdFx0dGhpcy50ZXJyYWluID0gPE1lc2g+IGQ7XG5cdFx0XHRcdFx0XHR0aGlzLnRlcnJhaW4ueSA9IDk4O1xuXHRcdFx0XHRcdFx0dGhpcy52aWV3LnNjZW5lLmFkZENoaWxkKHRoaXMudGVycmFpbik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgQml0bWFwSW1hZ2UyRC5hc3NldFR5cGU6XG5cdFx0XHRcdFx0aWYgKGV2ZW50LnVybCA9PSAnYXNzZXRzL21hc3RlcmNoaWVmX2Jhc2UucG5nJyApIHtcblx0XHRcdFx0XHRcdHRoaXMubWF0ID0gbmV3IE1ldGhvZE1hdGVyaWFsKCBuZXcgU2luZ2xlMkRUZXh0dXJlKDxCaXRtYXBJbWFnZTJEPiBkKSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UgKTtcblx0XHRcdFx0XHRcdHRoaXMubWF0LmxpZ2h0UGlja2VyID0gbmV3IFN0YXRpY0xpZ2h0UGlja2VyKFt0aGlzLmxpZ2h0XSk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChldmVudC51cmwgPT0gJ2Fzc2V0cy9zdG9uZV90eC5qcGcnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRlcnJhaW5NYXRlcmlhbCA9IG5ldyBNZXRob2RNYXRlcmlhbChuZXcgU2luZ2xlMkRUZXh0dXJlKDxCaXRtYXBJbWFnZTJEPiBkKSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0dGhpcy50ZXJyYWluTWF0ZXJpYWwubGlnaHRQaWNrZXIgPSBuZXcgU3RhdGljTGlnaHRQaWNrZXIoW3RoaXMubGlnaHRdKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy50ZXJyYWluT2JqRmxhZyAmJiB0aGlzLnRlcnJhaW5NYXRlcmlhbCkge1xuXHRcdFx0dGhpcy50ZXJyYWluLm1hdGVyaWFsID0gdGhpcy50ZXJyYWluTWF0ZXJpYWw7XG5cdFx0XHR0aGlzLnRlcnJhaW4uZ2VvbWV0cnkuc2NhbGVVVigyMCwgMjApO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm1hdCAmJiB0aGlzLnNwYXJ0YW5GbGFnKVxuXHRcdFx0Zm9yICh2YXIgYzpudW1iZXIgPSAwOyBjIDwgdGhpcy5tZXNoZXMubGVuZ3RoOyBjKyspXG5cdFx0XHRcdHRoaXMubWVzaGVzW2NdLm1hdGVyaWFsID0gdGhpcy5tYXQ7XG5cblx0XHR0aGlzLnZpZXcuc2NlbmUuYWRkQ2hpbGQodGhpcy5zcGFydGFuKTtcblx0XHR0aGlzLm9uUmVzaXplKCk7XG5cdH1cblxuXHRwdWJsaWMgb25SZXNpemUoZXZlbnQ6VUlFdmVudCA9IG51bGwpXG5cdHtcblx0XHR0aGlzLnZpZXcueSA9IDA7XG5cdFx0dGhpcy52aWV3LnggPSAwO1xuXG5cdFx0dGhpcy52aWV3LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0dGhpcy52aWV3LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0fVxufSJdfQ==