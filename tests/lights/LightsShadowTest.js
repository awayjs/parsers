var AssetEvent = require("awayjs-core/lib/events/AssetEvent");
var LoaderEvent = require("awayjs-core/lib/events/LoaderEvent");
var Vector3D = require("awayjs-core/lib/geom/Vector3D");
var AssetLibrary = require("awayjs-core/lib/library/AssetLibrary");
var URLRequest = require("awayjs-core/lib/net/URLRequest");
var Debug = require("awayjs-core/lib/utils/Debug");
var RequestAnimationFrame = require("awayjs-core/lib/utils/RequestAnimationFrame");
var View = require("awayjs-display/lib/containers/View");
var HoverController = require("awayjs-display/lib/controllers/HoverController");
var LightBase = require("awayjs-display/lib/base/LightBase");
var Mesh = require("awayjs-display/lib/entities/Mesh");
var MaterialBase = require("awayjs-display/lib/materials/MaterialBase");
var DefaultRenderer = require("awayjs-renderergl/lib/DefaultRenderer");
var MethodRendererPool = require("awayjs-methodmaterials/lib/pool/MethodRendererPool");
var AWDParser = require("awayjs-parsers/lib/AWDParser");
var LightsShadowTest = (function () {
    function LightsShadowTest() {
        var _this = this;
        this.lookAtPosition = new Vector3D();
        this._move = false;
        Debug.LOG_PI_ERRORS = true;
        Debug.THROW_ERRORS = false;
        AssetLibrary.enableParser(AWDParser);
        this._token = AssetLibrary.load(new URLRequest('assets/ShadowTest.awd'));
        this._token.addEventListener(LoaderEvent.RESOURCE_COMPLETE, function (event) { return _this.onResourceComplete(event); });
        this._token.addEventListener(AssetEvent.ASSET_COMPLETE, function (event) { return _this.onAssetComplete(event); });
        this._view = new View(new DefaultRenderer(MethodRendererPool));
        this._view.camera.projection.far = 5000;
        this._view.camera.y = 100;
        this._timer = new RequestAnimationFrame(this.render, this);
        this._cameraController = new HoverController(this._view.camera, null, 45, 20, 2000, 5);
        document.onmousedown = function (event) { return _this.onMouseDown(event); };
        document.onmouseup = function (event) { return _this.onMouseUp(event); };
        document.onmousemove = function (event) { return _this.onMouseMove(event); };
        document.onmousewheel = function (event) { return _this.onMouseWheel(event); };
        window.onresize = function (event) { return _this.resize(event); };
    }
    LightsShadowTest.prototype.resize = function (event) {
        if (event === void 0) { event = null; }
        this._view.y = 0;
        this._view.x = 0;
        this._view.width = window.innerWidth;
        this._view.height = window.innerHeight;
    };
    LightsShadowTest.prototype.render = function (dt) {
        if (this._view.camera)
            this._view.camera.lookAt(this.lookAtPosition);
        if (this._awdMesh)
            this._awdMesh.rotationY += 0.2;
        this._view.render();
    };
    LightsShadowTest.prototype.onAssetComplete = function (event) {
        console.log('------------------------------------------------------------------------------');
        console.log('AssetEvent.ASSET_COMPLETE', AssetLibrary.getAsset(event.asset.name));
        console.log('------------------------------------------------------------------------------');
    };
    LightsShadowTest.prototype.onResourceComplete = function (event) {
        console.log('------------------------------------------------------------------------------');
        console.log('LoaderEvent.RESOURCE_COMPLETE', event);
        console.log('------------------------------------------------------------------------------');
        var loader = event.target;
        var numAssets = loader.baseDependency.assets.length;
        for (var i = 0; i < numAssets; ++i) {
            var asset = loader.baseDependency.assets[i];
            switch (asset.assetType) {
                case Mesh.assetType:
                    this._awdMesh = asset;
                    this._view.scene.addChild(this._awdMesh);
                    this.resize();
                    break;
                case LightBase.assetType:
                    this._view.scene.addChild(asset);
                    break;
                case MaterialBase.assetType:
                    break;
            }
        }
        this._timer.start();
    };
    /**
     * Mouse down listener for navigation
     */
    LightsShadowTest.prototype.onMouseDown = function (event) {
        this._lastPanAngle = this._cameraController.panAngle;
        this._lastTiltAngle = this._cameraController.tiltAngle;
        this._lastMouseX = event.clientX;
        this._lastMouseY = event.clientY;
        this._move = true;
    };
    /**
     * Mouse up listener for navigation
     */
    LightsShadowTest.prototype.onMouseUp = function (event) {
        this._move = false;
    };
    LightsShadowTest.prototype.onMouseMove = function (event) {
        if (this._move) {
            this._cameraController.panAngle = 0.3 * (event.clientX - this._lastMouseX) + this._lastPanAngle;
            this._cameraController.tiltAngle = 0.3 * (event.clientY - this._lastMouseY) + this._lastTiltAngle;
        }
    };
    /**
     * Mouse wheel listener for navigation
     */
    LightsShadowTest.prototype.onMouseWheel = function (event) {
        this._cameraController.distance -= event.wheelDelta * 2;
        if (this._cameraController.distance < 100)
            this._cameraController.distance = 100;
        else if (this._cameraController.distance > 2000)
            this._cameraController.distance = 2000;
    };
    return LightsShadowTest;
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZ2h0cy9MaWdodHNTaGFkb3dUZXN0LnRzIl0sIm5hbWVzIjpbIkxpZ2h0c1NoYWRvd1Rlc3QiLCJMaWdodHNTaGFkb3dUZXN0LmNvbnN0cnVjdG9yIiwiTGlnaHRzU2hhZG93VGVzdC5yZXNpemUiLCJMaWdodHNTaGFkb3dUZXN0LnJlbmRlciIsIkxpZ2h0c1NoYWRvd1Rlc3Qub25Bc3NldENvbXBsZXRlIiwiTGlnaHRzU2hhZG93VGVzdC5vblJlc291cmNlQ29tcGxldGUiLCJMaWdodHNTaGFkb3dUZXN0Lm9uTW91c2VEb3duIiwiTGlnaHRzU2hhZG93VGVzdC5vbk1vdXNlVXAiLCJMaWdodHNTaGFkb3dUZXN0Lm9uTW91c2VNb3ZlIiwiTGlnaHRzU2hhZG93VGVzdC5vbk1vdXNlV2hlZWwiXSwibWFwcGluZ3MiOiJBQUFBLElBQU8sVUFBVSxXQUFlLG1DQUFtQyxDQUFDLENBQUM7QUFDckUsSUFBTyxXQUFXLFdBQWUsb0NBQW9DLENBQUMsQ0FBQztBQUN2RSxJQUFPLFFBQVEsV0FBZ0IsK0JBQStCLENBQUMsQ0FBQztBQUNoRSxJQUFPLFlBQVksV0FBZSxzQ0FBc0MsQ0FBQyxDQUFDO0FBSTFFLElBQU8sVUFBVSxXQUFlLGdDQUFnQyxDQUFDLENBQUM7QUFDbEUsSUFBTyxLQUFLLFdBQWdCLDZCQUE2QixDQUFDLENBQUM7QUFDM0QsSUFBTyxxQkFBcUIsV0FBWSw2Q0FBNkMsQ0FBQyxDQUFDO0FBRXZGLElBQU8sSUFBSSxXQUFpQixvQ0FBb0MsQ0FBQyxDQUFDO0FBQ2xFLElBQU8sZUFBZSxXQUFjLGdEQUFnRCxDQUFDLENBQUM7QUFDdEYsSUFBTyxTQUFTLFdBQWUsbUNBQW1DLENBQUMsQ0FBQztBQUNwRSxJQUFPLElBQUksV0FBaUIsa0NBQWtDLENBQUMsQ0FBQztBQUNoRSxJQUFPLFlBQVksV0FBZSwyQ0FBMkMsQ0FBQyxDQUFDO0FBRS9FLElBQU8sZUFBZSxXQUFjLHVDQUF1QyxDQUFDLENBQUM7QUFFN0UsSUFBTyxrQkFBa0IsV0FBYSxvREFB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QUdBLEdBQUNBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBO1FBQ2pHQSxDQUFDQTtJQUNGQSxDQUFDQTtJQUVEUjs7T0FFR0E7SUFDS0EsdUNBQVlBLEdBQXBCQSxVQUFxQkEsS0FBcUJBO1FBRXpDUyxJQUFJQSxDQUFDQSxpQkFBaUJBLENBQUNBLFFBQVFBLElBQUlBLEtBQUtBLENBQUNBLFVBQVVBLEdBQUdBLENBQUNBLENBQUNBO1FBRXhEQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxpQkFBaUJBLENBQUNBLFFBQVFBLEdBQUdBLEdBQUdBLENBQUNBO1lBQ3pDQSxJQUFJQSxDQUFDQSxpQkFBaUJBLENBQUNBLFFBQVFBLEdBQUdBLEdBQUdBLENBQUNBO1FBQ3ZDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxpQkFBaUJBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBO1lBQy9DQSxJQUFJQSxDQUFDQSxpQkFBaUJBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBO0lBQ3pDQSxDQUFDQTtJQUNGVCx1QkFBQ0E7QUFBREEsQ0E5SUEsQUE4SUNBLElBQUEiLCJmaWxlIjoibGlnaHRzL0xpZ2h0c1NoYWRvd1Rlc3QuanMiLCJzb3VyY2VSb290IjoiLi90ZXN0cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBc3NldEV2ZW50XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9ldmVudHMvQXNzZXRFdmVudFwiKTtcbmltcG9ydCBMb2FkZXJFdmVudFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZXZlbnRzL0xvYWRlckV2ZW50XCIpO1xuaW1wb3J0IFZlY3RvcjNEXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2dlb20vVmVjdG9yM0RcIik7XG5pbXBvcnQgQXNzZXRMaWJyYXJ5XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9saWJyYXJ5L0Fzc2V0TGlicmFyeVwiKTtcbmltcG9ydCBBc3NldExvYWRlclx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9Bc3NldExvYWRlclwiKTtcbmltcG9ydCBBc3NldExvYWRlclRva2VuXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9Bc3NldExvYWRlclRva2VuXCIpO1xuaW1wb3J0IElBc3NldFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9saWJyYXJ5L0lBc3NldFwiKTtcbmltcG9ydCBVUkxSZXF1ZXN0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9uZXQvVVJMUmVxdWVzdFwiKTtcbmltcG9ydCBEZWJ1Z1x0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi91dGlscy9EZWJ1Z1wiKTtcbmltcG9ydCBSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3V0aWxzL1JlcXVlc3RBbmltYXRpb25GcmFtZVwiKTtcblxuaW1wb3J0IFZpZXdcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9jb250YWluZXJzL1ZpZXdcIik7XG5pbXBvcnQgSG92ZXJDb250cm9sbGVyXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvY29udHJvbGxlcnMvSG92ZXJDb250cm9sbGVyXCIpO1xuaW1wb3J0IExpZ2h0QmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvYmFzZS9MaWdodEJhc2VcIik7XG5pbXBvcnQgTWVzaFx0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2VudGl0aWVzL01lc2hcIik7XG5pbXBvcnQgTWF0ZXJpYWxCYXNlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9tYXRlcmlhbHMvTWF0ZXJpYWxCYXNlXCIpO1xuXG5pbXBvcnQgRGVmYXVsdFJlbmRlcmVyXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvRGVmYXVsdFJlbmRlcmVyXCIpO1xuXG5pbXBvcnQgTWV0aG9kUmVuZGVyZXJQb29sXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvcG9vbC9NZXRob2RSZW5kZXJlclBvb2xcIik7XG5cbmltcG9ydCBBV0RQYXJzZXJcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXBhcnNlcnMvbGliL0FXRFBhcnNlclwiKTtcblxuY2xhc3MgTGlnaHRzU2hhZG93VGVzdFxue1xuXG5cdHByaXZhdGUgX3ZpZXc6Vmlldztcblx0cHJpdmF0ZSBfdG9rZW46QXNzZXRMb2FkZXJUb2tlbjtcblx0cHJpdmF0ZSBfdGltZXI6UmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRwcml2YXRlIGxvb2tBdFBvc2l0aW9uOlZlY3RvcjNEID0gbmV3IFZlY3RvcjNEKCk7XG5cdHByaXZhdGUgX2F3ZE1lc2g6TWVzaDtcblx0cHJpdmF0ZSBfY2FtZXJhQ29udHJvbGxlcjpIb3ZlckNvbnRyb2xsZXI7XG5cdHByaXZhdGUgX21vdmU6Ym9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIF9sYXN0UGFuQW5nbGU6bnVtYmVyO1xuXHRwcml2YXRlIF9sYXN0VGlsdEFuZ2xlOm51bWJlcjtcblx0cHJpdmF0ZSBfbGFzdE1vdXNlWDpudW1iZXI7XG5cdHByaXZhdGUgX2xhc3RNb3VzZVk6bnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKClcblx0e1xuXHRcdERlYnVnLkxPR19QSV9FUlJPUlMgPSB0cnVlO1xuXHRcdERlYnVnLlRIUk9XX0VSUk9SUyA9IGZhbHNlO1xuXG5cdFx0QXNzZXRMaWJyYXJ5LmVuYWJsZVBhcnNlcihBV0RQYXJzZXIpO1xuXG5cdFx0dGhpcy5fdG9rZW4gPSBBc3NldExpYnJhcnkubG9hZChuZXcgVVJMUmVxdWVzdCgnYXNzZXRzL1NoYWRvd1Rlc3QuYXdkJykpO1xuXG5cdFx0dGhpcy5fdG9rZW4uYWRkRXZlbnRMaXN0ZW5lcihMb2FkZXJFdmVudC5SRVNPVVJDRV9DT01QTEVURSwgKGV2ZW50OkxvYWRlckV2ZW50KSA9PiB0aGlzLm9uUmVzb3VyY2VDb21wbGV0ZShldmVudCkpO1xuXHRcdHRoaXMuX3Rva2VuLmFkZEV2ZW50TGlzdGVuZXIoQXNzZXRFdmVudC5BU1NFVF9DT01QTEVURSwgKGV2ZW50OkFzc2V0RXZlbnQpID0+IHRoaXMub25Bc3NldENvbXBsZXRlKGV2ZW50KSk7XG5cblx0XHR0aGlzLl92aWV3ID0gbmV3IFZpZXcobmV3IERlZmF1bHRSZW5kZXJlcihNZXRob2RSZW5kZXJlclBvb2wpKTtcblx0XHR0aGlzLl92aWV3LmNhbWVyYS5wcm9qZWN0aW9uLmZhciA9IDUwMDA7XG5cdFx0dGhpcy5fdmlldy5jYW1lcmEueSA9IDEwMDtcblxuXHRcdHRoaXMuX3RpbWVyID0gbmV3IFJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlciwgdGhpcyk7XG5cblx0XHR0aGlzLl9jYW1lcmFDb250cm9sbGVyID0gbmV3IEhvdmVyQ29udHJvbGxlcih0aGlzLl92aWV3LmNhbWVyYSwgbnVsbCwgNDUsIDIwLCAyMDAwLCA1KTtcblxuXHRcdGRvY3VtZW50Lm9ubW91c2Vkb3duID0gKGV2ZW50Ok1vdXNlRXZlbnQpID0+IHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuXHRcdGRvY3VtZW50Lm9ubW91c2V1cCA9IChldmVudDpNb3VzZUV2ZW50KSA9PiB0aGlzLm9uTW91c2VVcChldmVudCk7XG5cdFx0ZG9jdW1lbnQub25tb3VzZW1vdmUgPSAoZXZlbnQ6TW91c2VFdmVudCkgPT4gdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG5cdFx0ZG9jdW1lbnQub25tb3VzZXdoZWVsID0gKGV2ZW50Ok1vdXNlV2hlZWxFdmVudCkgPT4gdGhpcy5vbk1vdXNlV2hlZWwoZXZlbnQpO1xuXG5cdFx0d2luZG93Lm9ucmVzaXplID0gKGV2ZW50OlVJRXZlbnQpID0+IHRoaXMucmVzaXplKGV2ZW50KTtcblx0fVxuXG5cdHByaXZhdGUgcmVzaXplKGV2ZW50OlVJRXZlbnQgPSBudWxsKVxuXHR7XG5cdFx0dGhpcy5fdmlldy55ID0gMDtcblx0XHR0aGlzLl92aWV3LnggPSAwO1xuXHRcdHRoaXMuX3ZpZXcud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHR0aGlzLl92aWV3LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0fVxuXG5cdHByaXZhdGUgcmVuZGVyKGR0Om51bWJlcikgLy9hbmltYXRlIGJhc2VkIG9uIGR0IGZvciBmaXJlZm94XG5cdHtcblx0XHRpZiAodGhpcy5fdmlldy5jYW1lcmEpXG5cdFx0XHR0aGlzLl92aWV3LmNhbWVyYS5sb29rQXQodGhpcy5sb29rQXRQb3NpdGlvbik7XG5cblx0XHRpZiAodGhpcy5fYXdkTWVzaClcblx0XHRcdHRoaXMuX2F3ZE1lc2gucm90YXRpb25ZICs9IDAuMjtcblxuXHRcdCB0aGlzLl92aWV3LnJlbmRlcigpO1xuXHR9XG5cblx0cHVibGljIG9uQXNzZXRDb21wbGV0ZShldmVudDpBc3NldEV2ZW50KVxuXHR7XG5cdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdGNvbnNvbGUubG9nKCdBc3NldEV2ZW50LkFTU0VUX0NPTVBMRVRFJyAsIEFzc2V0TGlicmFyeS5nZXRBc3NldChldmVudC5hc3NldC5uYW1lKSk7XG5cdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHR9XG5cblx0cHVibGljIG9uUmVzb3VyY2VDb21wbGV0ZShldmVudDpMb2FkZXJFdmVudClcblx0e1xuXG5cdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdGNvbnNvbGUubG9nKCdMb2FkZXJFdmVudC5SRVNPVVJDRV9DT01QTEVURScgLCBldmVudCk7XG5cdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXG5cdFx0dmFyIGxvYWRlcjpBc3NldExvYWRlciA9IDxBc3NldExvYWRlcj4gZXZlbnQudGFyZ2V0O1xuXHRcdHZhciBudW1Bc3NldHM6bnVtYmVyID0gbG9hZGVyLmJhc2VEZXBlbmRlbmN5LmFzc2V0cy5sZW5ndGg7XG5cblx0XHRmb3IgKHZhciBpOm51bWJlciA9IDA7IGkgPCBudW1Bc3NldHM7ICsraSkge1xuXHRcdFx0dmFyIGFzc2V0OklBc3NldCA9IGxvYWRlci5iYXNlRGVwZW5kZW5jeS5hc3NldHNbIGkgXTtcblxuXHRcdFx0c3dpdGNoIChhc3NldC5hc3NldFR5cGUpIHtcblx0XHRcdFx0Y2FzZSBNZXNoLmFzc2V0VHlwZTpcblx0XHRcdFx0XHR0aGlzLl9hd2RNZXNoID0gPE1lc2g+IGFzc2V0O1xuXHRcdFx0XHRcdHRoaXMuX3ZpZXcuc2NlbmUuYWRkQ2hpbGQodGhpcy5fYXdkTWVzaCk7XG5cdFx0XHRcdFx0dGhpcy5yZXNpemUoKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIExpZ2h0QmFzZS5hc3NldFR5cGU6XG5cdFx0XHRcdFx0dGhpcy5fdmlldy5zY2VuZS5hZGRDaGlsZCg8TGlnaHRCYXNlPiBhc3NldCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBNYXRlcmlhbEJhc2UuYXNzZXRUeXBlOlxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5fdGltZXIuc3RhcnQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNb3VzZSBkb3duIGxpc3RlbmVyIGZvciBuYXZpZ2F0aW9uXG5cdCAqL1xuXHRwcml2YXRlIG9uTW91c2VEb3duKGV2ZW50KTp2b2lkXG5cdHtcblx0XHR0aGlzLl9sYXN0UGFuQW5nbGUgPSB0aGlzLl9jYW1lcmFDb250cm9sbGVyLnBhbkFuZ2xlO1xuXHRcdHRoaXMuX2xhc3RUaWx0QW5nbGUgPSB0aGlzLl9jYW1lcmFDb250cm9sbGVyLnRpbHRBbmdsZTtcblx0XHR0aGlzLl9sYXN0TW91c2VYID0gZXZlbnQuY2xpZW50WDtcblx0XHR0aGlzLl9sYXN0TW91c2VZID0gZXZlbnQuY2xpZW50WTtcblx0XHR0aGlzLl9tb3ZlID0gdHJ1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNb3VzZSB1cCBsaXN0ZW5lciBmb3IgbmF2aWdhdGlvblxuXHQgKi9cblx0cHJpdmF0ZSBvbk1vdXNlVXAoZXZlbnQpOnZvaWRcblx0e1xuXHRcdHRoaXMuX21vdmUgPSBmYWxzZTtcblx0fVxuXG5cdHByaXZhdGUgb25Nb3VzZU1vdmUoZXZlbnQpXG5cdHtcblx0XHRpZiAodGhpcy5fbW92ZSkge1xuXHRcdFx0dGhpcy5fY2FtZXJhQ29udHJvbGxlci5wYW5BbmdsZSA9IDAuMyooZXZlbnQuY2xpZW50WCAtIHRoaXMuX2xhc3RNb3VzZVgpICsgdGhpcy5fbGFzdFBhbkFuZ2xlO1xuXHRcdFx0dGhpcy5fY2FtZXJhQ29udHJvbGxlci50aWx0QW5nbGUgPSAwLjMqKGV2ZW50LmNsaWVudFkgLSB0aGlzLl9sYXN0TW91c2VZKSArIHRoaXMuX2xhc3RUaWx0QW5nbGU7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIE1vdXNlIHdoZWVsIGxpc3RlbmVyIGZvciBuYXZpZ2F0aW9uXG5cdCAqL1xuXHRwcml2YXRlIG9uTW91c2VXaGVlbChldmVudDpNb3VzZVdoZWVsRXZlbnQpOnZvaWRcblx0e1xuXHRcdHRoaXMuX2NhbWVyYUNvbnRyb2xsZXIuZGlzdGFuY2UgLT0gZXZlbnQud2hlZWxEZWx0YSAqIDI7XG5cblx0XHRpZiAodGhpcy5fY2FtZXJhQ29udHJvbGxlci5kaXN0YW5jZSA8IDEwMClcblx0XHRcdHRoaXMuX2NhbWVyYUNvbnRyb2xsZXIuZGlzdGFuY2UgPSAxMDA7XG5cdFx0ZWxzZSBpZiAodGhpcy5fY2FtZXJhQ29udHJvbGxlci5kaXN0YW5jZSA+IDIwMDApXG5cdFx0XHR0aGlzLl9jYW1lcmFDb250cm9sbGVyLmRpc3RhbmNlID0gMjAwMDtcblx0fVxufSJdfQ==