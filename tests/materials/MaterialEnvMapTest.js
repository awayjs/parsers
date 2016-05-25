"use strict";
var AssetEvent_1 = require("awayjs-core/lib/events/AssetEvent");
var LoaderEvent_1 = require("awayjs-core/lib/events/LoaderEvent");
var AssetLibrary_1 = require("awayjs-core/lib/library/AssetLibrary");
var URLRequest_1 = require("awayjs-core/lib/net/URLRequest");
var Debug_1 = require("awayjs-core/lib/utils/Debug");
var RequestAnimationFrame_1 = require("awayjs-core/lib/utils/RequestAnimationFrame");
var Graphics_1 = require("awayjs-display/lib/graphics/Graphics");
var View_1 = require("awayjs-display/lib/View");
var Sprite_1 = require("awayjs-display/lib/display/Sprite");
var Skybox_1 = require("awayjs-display/lib/display/Skybox");
var DefaultRenderer_1 = require("awayjs-renderergl/lib/DefaultRenderer");
var MethodMaterial_1 = require("awayjs-methodmaterials/lib/MethodMaterial");
var AWDParser_1 = require("awayjs-parsers/lib/AWDParser");
/**
 *
 */
var MaterialEnvMapTest = (function () {
    function MaterialEnvMapTest() {
        var _this = this;
        Debug_1.Debug.LOG_PI_ERRORS = true;
        Debug_1.Debug.THROW_ERRORS = false;
        AssetLibrary_1.AssetLibrary.enableParser(AWDParser_1.AWDParser);
        var session = AssetLibrary_1.AssetLibrary.getLoader();
        session.addEventListener(LoaderEvent_1.LoaderEvent.LOAD_COMPLETE, function (event) { return _this.onLoadComplete(event); });
        session.addEventListener(AssetEvent_1.AssetEvent.ASSET_COMPLETE, function (event) { return _this.onAssetComplete(event); });
        session.load(new URLRequest_1.URLRequest('assets/EnvMapTest.awd'));
        this._view = new View_1.View(new DefaultRenderer_1.DefaultRenderer());
        this._timer = new RequestAnimationFrame_1.RequestAnimationFrame(this.render, this);
        window.onresize = function () { return _this.resize(); };
        this._timer.start();
        this.resize();
    }
    MaterialEnvMapTest.prototype.resize = function (event) {
        if (event === void 0) { event = null; }
        this._view.y = 0;
        this._view.x = 0;
        this._view.width = window.innerWidth;
        this._view.height = window.innerHeight;
    };
    MaterialEnvMapTest.prototype.render = function (dt) {
        if (this._torus)
            this._torus.rotationY += 1;
        this._view.render();
        this._view.camera.z = -2000;
    };
    MaterialEnvMapTest.prototype.onAssetComplete = function (event) {
        console.log('------------------------------------------------------------------------------');
        console.log('away.events.AssetEvent.ASSET_COMPLETE', AssetLibrary_1.AssetLibrary.getAsset(event.asset.name));
        console.log('------------------------------------------------------------------------------');
    };
    MaterialEnvMapTest.prototype.onLoadComplete = function (event) {
        console.log('------------------------------------------------------------------------------');
        console.log('away.events.LoaderEvent.RESOURCE_COMPLETE', event);
        console.log('------------------------------------------------------------------------------');
        var loader = event.target;
        var numAssets = loader.baseDependency.assets.length;
        for (var i = 0; i < numAssets; ++i) {
            var asset = loader.baseDependency.assets[i];
            console.log(asset.assetType);
            switch (asset.assetType) {
                case Skybox_1.Skybox.assetType:
                    var skybox = asset;
                    this._view.scene.addChild(skybox);
                    break;
                case Sprite_1.Sprite.assetType:
                    this._torus = asset;
                    this._view.scene.addChild(this._torus);
                    break;
                case Graphics_1.Graphics.assetType:
                    break;
                case MethodMaterial_1.MethodMaterial.assetType:
                    break;
            }
        }
    };
    return MaterialEnvMapTest;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGVyaWFscy9NYXRlcmlhbEVudk1hcFRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJCQUE2QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ2pFLDRCQUE4QixvQ0FBb0MsQ0FBQyxDQUFBO0FBQ25FLDZCQUErQixzQ0FBc0MsQ0FBQyxDQUFBO0FBR3RFLDJCQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzlELHNCQUF5Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3ZELHNDQUFxQyw2Q0FBNkMsQ0FBQyxDQUFBO0FBRW5GLHlCQUE0QixzQ0FBc0MsQ0FBQyxDQUFBO0FBQ25FLHFCQUF5Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ25ELHVCQUEwQixtQ0FBbUMsQ0FBQyxDQUFBO0FBQzlELHVCQUEwQixtQ0FBbUMsQ0FBQyxDQUFBO0FBRTlELGdDQUFpQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBRXpFLCtCQUFnQywyQ0FBMkMsQ0FBQyxDQUFBO0FBRTVFLDBCQUE0Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBRTNEOztHQUVHO0FBQ0g7SUFNQztRQU5ELGlCQXdGQztRQWhGQyxhQUFLLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMzQixhQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUUzQiwyQkFBWSxDQUFDLFlBQVksQ0FBQyxxQkFBUyxDQUFDLENBQUU7UUFFdEMsSUFBSSxPQUFPLEdBQVUsMkJBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsZ0JBQWdCLENBQUMseUJBQVcsQ0FBQyxhQUFhLEVBQUUsVUFBQyxLQUFpQixJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO1FBQ3ZHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBVSxDQUFDLGNBQWMsRUFBRSxVQUFDLEtBQWdCLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUEzQixDQUEy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TSxHQUFZLEtBQUssQ0FBQztvQkFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFFdkMsS0FBSyxDQUFDO2dCQUVQLEtBQUssbUJBQVEsQ0FBQyxTQUFTO29CQUN0QixLQUFLLENBQUM7Z0JBRVAsS0FBSywrQkFBYyxDQUFDLFNBQVM7b0JBQzVCLEtBQUssQ0FBQztZQUNSLENBQUM7UUFDRixDQUFDO0lBQ0YsQ0FBQztJQUNGLHlCQUFDO0FBQUQsQ0F4RkEsQUF3RkMsSUFBQSIsImZpbGUiOiJtYXRlcmlhbHMvTWF0ZXJpYWxFbnZNYXBUZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBc3NldEV2ZW50fVx0XHRcdFx0XHRmcm9tIFwiYXdheWpzLWNvcmUvbGliL2V2ZW50cy9Bc3NldEV2ZW50XCI7XG5pbXBvcnQge0xvYWRlckV2ZW50fVx0XHRcdFx0XHRmcm9tIFwiYXdheWpzLWNvcmUvbGliL2V2ZW50cy9Mb2FkZXJFdmVudFwiO1xuaW1wb3J0IHtBc3NldExpYnJhcnl9XHRcdFx0XHRcdGZyb20gXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9Bc3NldExpYnJhcnlcIjtcbmltcG9ydCB7TG9hZGVyfVx0XHRcdFx0XHRcdGZyb20gXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9Mb2FkZXJcIjtcbmltcG9ydCB7SUFzc2V0fVx0XHRcdFx0XHRcdGZyb20gXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9JQXNzZXRcIjtcbmltcG9ydCB7VVJMUmVxdWVzdH1cdFx0XHRcdFx0ZnJvbSBcImF3YXlqcy1jb3JlL2xpYi9uZXQvVVJMUmVxdWVzdFwiO1xuaW1wb3J0IHtEZWJ1Z31cdFx0XHRcdFx0XHRmcm9tIFwiYXdheWpzLWNvcmUvbGliL3V0aWxzL0RlYnVnXCI7XG5pbXBvcnQge1JlcXVlc3RBbmltYXRpb25GcmFtZX1cdFx0ZnJvbSBcImF3YXlqcy1jb3JlL2xpYi91dGlscy9SZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIjtcblxuaW1wb3J0IHtHcmFwaGljc31cdFx0XHRcdFx0XHRmcm9tIFwiYXdheWpzLWRpc3BsYXkvbGliL2dyYXBoaWNzL0dyYXBoaWNzXCI7XG5pbXBvcnQge1ZpZXd9XHRcdFx0XHRcdFx0XHRmcm9tIFwiYXdheWpzLWRpc3BsYXkvbGliL1ZpZXdcIjtcbmltcG9ydCB7U3ByaXRlfVx0XHRcdFx0XHRcdGZyb20gXCJhd2F5anMtZGlzcGxheS9saWIvZGlzcGxheS9TcHJpdGVcIjtcbmltcG9ydCB7U2t5Ym94fVx0XHRcdFx0XHRcdGZyb20gXCJhd2F5anMtZGlzcGxheS9saWIvZGlzcGxheS9Ta3lib3hcIjtcblxuaW1wb3J0IHtEZWZhdWx0UmVuZGVyZXJ9XHRcdFx0XHRmcm9tIFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL0RlZmF1bHRSZW5kZXJlclwiO1xuXG5pbXBvcnQge01ldGhvZE1hdGVyaWFsfVx0XHRcdFx0ZnJvbSBcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL01ldGhvZE1hdGVyaWFsXCI7XG5cbmltcG9ydCB7QVdEUGFyc2VyfVx0XHRcdFx0XHRmcm9tIFwiYXdheWpzLXBhcnNlcnMvbGliL0FXRFBhcnNlclwiO1xuXG4vKipcbiAqXG4gKi9cbmNsYXNzIE1hdGVyaWFsRW52TWFwVGVzdFxue1xuXHRwcml2YXRlIF92aWV3OlZpZXc7XG5cdHByaXZhdGUgX3RpbWVyOlJlcXVlc3RBbmltYXRpb25GcmFtZTtcblx0cHJpdmF0ZSBfdG9ydXM6U3ByaXRlO1xuXG5cdGNvbnN0cnVjdG9yKClcblx0e1xuXHRcdERlYnVnLkxPR19QSV9FUlJPUlMgPSB0cnVlO1xuXHRcdERlYnVnLlRIUk9XX0VSUk9SUyA9IGZhbHNlO1xuXG5cdFx0QXNzZXRMaWJyYXJ5LmVuYWJsZVBhcnNlcihBV0RQYXJzZXIpIDtcblxuXHRcdHZhciBzZXNzaW9uOkxvYWRlciA9IEFzc2V0TGlicmFyeS5nZXRMb2FkZXIoKTtcblx0XHRzZXNzaW9uLmFkZEV2ZW50TGlzdGVuZXIoTG9hZGVyRXZlbnQuTE9BRF9DT01QTEVURSwgKGV2ZW50OkxvYWRlckV2ZW50KSA9PiB0aGlzLm9uTG9hZENvbXBsZXRlKGV2ZW50KSk7XG5cdFx0c2Vzc2lvbi5hZGRFdmVudExpc3RlbmVyKEFzc2V0RXZlbnQuQVNTRVRfQ09NUExFVEUsIChldmVudDpBc3NldEV2ZW50KSA9PiB0aGlzLm9uQXNzZXRDb21wbGV0ZShldmVudCkpO1xuXHRcdHNlc3Npb24ubG9hZChuZXcgVVJMUmVxdWVzdCgnYXNzZXRzL0Vudk1hcFRlc3QuYXdkJykpO1xuXG5cdFx0dGhpcy5fdmlldyA9IG5ldyBWaWV3KG5ldyBEZWZhdWx0UmVuZGVyZXIoKSk7XG5cdFx0dGhpcy5fdGltZXIgPSBuZXcgUmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyLCB0aGlzKTtcblxuXHRcdHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHRoaXMucmVzaXplKCk7XG5cblx0XHR0aGlzLl90aW1lci5zdGFydCgpO1xuXHRcdHRoaXMucmVzaXplKCk7XG5cdH1cblxuXHRwcml2YXRlIHJlc2l6ZShldmVudDpVSUV2ZW50ID0gbnVsbClcblx0e1xuXHRcdHRoaXMuX3ZpZXcueSA9IDA7XG5cdFx0dGhpcy5fdmlldy54ID0gMDtcblx0XHR0aGlzLl92aWV3LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0dGhpcy5fdmlldy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdH1cblxuXHRwcml2YXRlIHJlbmRlcihkdDpudW1iZXIpIC8vYW5pbWF0ZSBiYXNlZCBvbiBkdCBmb3IgZmlyZWZveFxuXHR7XG5cdFx0aWYgKHRoaXMuX3RvcnVzKVxuXHRcdFx0dGhpcy5fdG9ydXMucm90YXRpb25ZICs9IDE7XG5cblx0XHR0aGlzLl92aWV3LnJlbmRlcigpO1xuXHRcdHRoaXMuX3ZpZXcuY2FtZXJhLnogPSAtMjAwMDtcblx0fVxuXG5cdHB1YmxpYyBvbkFzc2V0Q29tcGxldGUoZXZlbnQ6QXNzZXRFdmVudClcblx0e1xuXHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRjb25zb2xlLmxvZygnYXdheS5ldmVudHMuQXNzZXRFdmVudC5BU1NFVF9DT01QTEVURScsIEFzc2V0TGlicmFyeS5nZXRBc3NldChldmVudC5hc3NldC5uYW1lKSk7XG5cdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHR9XG5cblx0cHVibGljIG9uTG9hZENvbXBsZXRlKGV2ZW50OkxvYWRlckV2ZW50KVxuXHR7XG5cblx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0Y29uc29sZS5sb2coJ2F3YXkuZXZlbnRzLkxvYWRlckV2ZW50LlJFU09VUkNFX0NPTVBMRVRFJywgZXZlbnQpO1xuXHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblxuXHRcdHZhciBsb2FkZXI6TG9hZGVyID0gZXZlbnQudGFyZ2V0O1xuXHRcdHZhciBudW1Bc3NldHM6bnVtYmVyID0gbG9hZGVyLmJhc2VEZXBlbmRlbmN5LmFzc2V0cy5sZW5ndGg7XG5cblx0XHRmb3IgKHZhciBpOm51bWJlciA9IDA7IGkgPCBudW1Bc3NldHM7ICsraSkge1xuXHRcdFx0dmFyIGFzc2V0OklBc3NldCA9IGxvYWRlci5iYXNlRGVwZW5kZW5jeS5hc3NldHNbaV07XG5cblx0XHRcdGNvbnNvbGUubG9nKGFzc2V0LmFzc2V0VHlwZSk7XG5cblx0XHRcdHN3aXRjaCAoYXNzZXQuYXNzZXRUeXBlKSB7XG5cdFx0XHRcdGNhc2UgU2t5Ym94LmFzc2V0VHlwZTpcblxuXHRcdFx0XHRcdHZhciBza3lib3g6U2t5Ym94ID0gPFNreWJveD4gYXNzZXQ7XG5cdFx0XHRcdFx0dGhpcy5fdmlldy5zY2VuZS5hZGRDaGlsZChza3lib3gpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgU3ByaXRlLmFzc2V0VHlwZTpcblxuXHRcdFx0XHRcdHRoaXMuX3RvcnVzID0gPFNwcml0ZT4gYXNzZXQ7XG5cdFx0XHRcdFx0dGhpcy5fdmlldy5zY2VuZS5hZGRDaGlsZCh0aGlzLl90b3J1cyk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIEdyYXBoaWNzLmFzc2V0VHlwZTpcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIE1ldGhvZE1hdGVyaWFsLmFzc2V0VHlwZTpcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii4vdGVzdHMifQ==
