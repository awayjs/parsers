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
        Debug_1.default.LOG_PI_ERRORS = true;
        Debug_1.default.THROW_ERRORS = false;
        AssetLibrary_1.default.enableParser(AWDParser_1.default);
        var session = AssetLibrary_1.default.getLoader();
        session.addEventListener(LoaderEvent_1.default.LOAD_COMPLETE, function (event) { return _this.onLoadComplete(event); });
        session.addEventListener(AssetEvent_1.default.ASSET_COMPLETE, function (event) { return _this.onAssetComplete(event); });
        session.load(new URLRequest_1.default('assets/EnvMapTest.awd'));
        this._view = new View_1.default(new DefaultRenderer_1.default());
        this._timer = new RequestAnimationFrame_1.default(this.render, this);
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
        console.log('away.events.AssetEvent.ASSET_COMPLETE', AssetLibrary_1.default.getAsset(event.asset.name));
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
                case Skybox_1.default.assetType:
                    var skybox = asset;
                    this._view.scene.addChild(skybox);
                    break;
                case Sprite_1.default.assetType:
                    this._torus = asset;
                    this._view.scene.addChild(this._torus);
                    break;
                case Graphics_1.default.assetType:
                    break;
                case MethodMaterial_1.default.assetType:
                    break;
            }
        }
    };
    return MaterialEnvMapTest;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGVyaWFscy9NYXRlcmlhbEVudk1hcFRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJCQUEyQixtQ0FBbUMsQ0FBQyxDQUFBO0FBQy9ELDRCQUE0QixvQ0FBb0MsQ0FBQyxDQUFBO0FBQ2pFLDZCQUE2QixzQ0FBc0MsQ0FBQyxDQUFBO0FBR3BFLDJCQUEyQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzVELHNCQUF1Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3JELHNDQUFtQyw2Q0FBNkMsQ0FBQyxDQUFBO0FBRWpGLHlCQUEwQixzQ0FBc0MsQ0FBQyxDQUFBO0FBQ2pFLHFCQUF1Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ2pELHVCQUF3QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQzVELHVCQUF3QixtQ0FBbUMsQ0FBQyxDQUFBO0FBRTVELGdDQUErQix1Q0FBdUMsQ0FBQyxDQUFBO0FBRXZFLCtCQUE4QiwyQ0FBMkMsQ0FBQyxDQUFBO0FBRTFFLDBCQUEwQiw4QkFBOEIsQ0FBQyxDQUFBO0FBRXpEOztHQUVHO0FBQ0g7SUFNQztRQU5ELGlCQXdGQztRQWhGQyxlQUFLLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMzQixlQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUUzQixzQkFBWSxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUU7UUFFdEMsSUFBSSxPQUFPLEdBQVUsc0JBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsZ0JBQWdCLENBQUMscUJBQVcsQ0FBQyxhQUFhLEVBQUUsVUFBQyxLQUFpQixJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO1FBQ3ZHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBVSxDQUFDLGNBQWMsRUFBRSxVQUFDLEtBQWdCLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUEzQixDQUEy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QUFNLEdBQVksS0FBSyxDQUFDO29CQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUV2QyxLQUFLLENBQUM7Z0JBRVAsS0FBSyxrQkFBUSxDQUFDLFNBQVM7b0JBQ3RCLEtBQUssQ0FBQztnQkFFUCxLQUFLLHdCQUFjLENBQUMsU0FBUztvQkFDNUIsS0FBSyxDQUFDO1lBQ1IsQ0FBQztRQUNGLENBQUM7SUFDRixDQUFDO0lBQ0YseUJBQUM7QUFBRCxDQXhGQSxBQXdGQyxJQUFBIiwiZmlsZSI6Im1hdGVyaWFscy9NYXRlcmlhbEVudk1hcFRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXNzZXRFdmVudFx0XHRcdFx0XHRmcm9tIFwiYXdheWpzLWNvcmUvbGliL2V2ZW50cy9Bc3NldEV2ZW50XCI7XG5pbXBvcnQgTG9hZGVyRXZlbnRcdFx0XHRcdFx0ZnJvbSBcImF3YXlqcy1jb3JlL2xpYi9ldmVudHMvTG9hZGVyRXZlbnRcIjtcbmltcG9ydCBBc3NldExpYnJhcnlcdFx0XHRcdFx0ZnJvbSBcImF3YXlqcy1jb3JlL2xpYi9saWJyYXJ5L0Fzc2V0TGlicmFyeVwiO1xuaW1wb3J0IExvYWRlclx0XHRcdFx0XHRcdGZyb20gXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9Mb2FkZXJcIjtcbmltcG9ydCBJQXNzZXRcdFx0XHRcdFx0XHRmcm9tIFwiYXdheWpzLWNvcmUvbGliL2xpYnJhcnkvSUFzc2V0XCI7XG5pbXBvcnQgVVJMUmVxdWVzdFx0XHRcdFx0XHRmcm9tIFwiYXdheWpzLWNvcmUvbGliL25ldC9VUkxSZXF1ZXN0XCI7XG5pbXBvcnQgRGVidWdcdFx0XHRcdFx0XHRmcm9tIFwiYXdheWpzLWNvcmUvbGliL3V0aWxzL0RlYnVnXCI7XG5pbXBvcnQgUmVxdWVzdEFuaW1hdGlvbkZyYW1lXHRcdGZyb20gXCJhd2F5anMtY29yZS9saWIvdXRpbHMvUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCI7XG5cbmltcG9ydCBHcmFwaGljc1x0XHRcdFx0XHRcdGZyb20gXCJhd2F5anMtZGlzcGxheS9saWIvZ3JhcGhpY3MvR3JhcGhpY3NcIjtcbmltcG9ydCBWaWV3XHRcdFx0XHRcdFx0XHRmcm9tIFwiYXdheWpzLWRpc3BsYXkvbGliL1ZpZXdcIjtcbmltcG9ydCBTcHJpdGVcdFx0XHRcdFx0XHRmcm9tIFwiYXdheWpzLWRpc3BsYXkvbGliL2Rpc3BsYXkvU3ByaXRlXCI7XG5pbXBvcnQgU2t5Ym94XHRcdFx0XHRcdFx0ZnJvbSBcImF3YXlqcy1kaXNwbGF5L2xpYi9kaXNwbGF5L1NreWJveFwiO1xuXG5pbXBvcnQgRGVmYXVsdFJlbmRlcmVyXHRcdFx0XHRmcm9tIFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL0RlZmF1bHRSZW5kZXJlclwiO1xuXG5pbXBvcnQgTWV0aG9kTWF0ZXJpYWxcdFx0XHRcdGZyb20gXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9NZXRob2RNYXRlcmlhbFwiO1xuXG5pbXBvcnQgQVdEUGFyc2VyXHRcdFx0XHRcdGZyb20gXCJhd2F5anMtcGFyc2Vycy9saWIvQVdEUGFyc2VyXCI7XG5cbi8qKlxuICpcbiAqL1xuY2xhc3MgTWF0ZXJpYWxFbnZNYXBUZXN0XG57XG5cdHByaXZhdGUgX3ZpZXc6Vmlldztcblx0cHJpdmF0ZSBfdGltZXI6UmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRwcml2YXRlIF90b3J1czpTcHJpdGU7XG5cblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0RGVidWcuTE9HX1BJX0VSUk9SUyA9IHRydWU7XG5cdFx0RGVidWcuVEhST1dfRVJST1JTID0gZmFsc2U7XG5cblx0XHRBc3NldExpYnJhcnkuZW5hYmxlUGFyc2VyKEFXRFBhcnNlcikgO1xuXG5cdFx0dmFyIHNlc3Npb246TG9hZGVyID0gQXNzZXRMaWJyYXJ5LmdldExvYWRlcigpO1xuXHRcdHNlc3Npb24uYWRkRXZlbnRMaXN0ZW5lcihMb2FkZXJFdmVudC5MT0FEX0NPTVBMRVRFLCAoZXZlbnQ6TG9hZGVyRXZlbnQpID0+IHRoaXMub25Mb2FkQ29tcGxldGUoZXZlbnQpKTtcblx0XHRzZXNzaW9uLmFkZEV2ZW50TGlzdGVuZXIoQXNzZXRFdmVudC5BU1NFVF9DT01QTEVURSwgKGV2ZW50OkFzc2V0RXZlbnQpID0+IHRoaXMub25Bc3NldENvbXBsZXRlKGV2ZW50KSk7XG5cdFx0c2Vzc2lvbi5sb2FkKG5ldyBVUkxSZXF1ZXN0KCdhc3NldHMvRW52TWFwVGVzdC5hd2QnKSk7XG5cblx0XHR0aGlzLl92aWV3ID0gbmV3IFZpZXcobmV3IERlZmF1bHRSZW5kZXJlcigpKTtcblx0XHR0aGlzLl90aW1lciA9IG5ldyBSZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIsIHRoaXMpO1xuXG5cdFx0d2luZG93Lm9ucmVzaXplID0gKCkgPT4gdGhpcy5yZXNpemUoKTtcblxuXHRcdHRoaXMuX3RpbWVyLnN0YXJ0KCk7XG5cdFx0dGhpcy5yZXNpemUoKTtcblx0fVxuXG5cdHByaXZhdGUgcmVzaXplKGV2ZW50OlVJRXZlbnQgPSBudWxsKVxuXHR7XG5cdFx0dGhpcy5fdmlldy55ID0gMDtcblx0XHR0aGlzLl92aWV3LnggPSAwO1xuXHRcdHRoaXMuX3ZpZXcud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHR0aGlzLl92aWV3LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0fVxuXG5cdHByaXZhdGUgcmVuZGVyKGR0Om51bWJlcikgLy9hbmltYXRlIGJhc2VkIG9uIGR0IGZvciBmaXJlZm94XG5cdHtcblx0XHRpZiAodGhpcy5fdG9ydXMpXG5cdFx0XHR0aGlzLl90b3J1cy5yb3RhdGlvblkgKz0gMTtcblxuXHRcdHRoaXMuX3ZpZXcucmVuZGVyKCk7XG5cdFx0dGhpcy5fdmlldy5jYW1lcmEueiA9IC0yMDAwO1xuXHR9XG5cblx0cHVibGljIG9uQXNzZXRDb21wbGV0ZShldmVudDpBc3NldEV2ZW50KVxuXHR7XG5cdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdGNvbnNvbGUubG9nKCdhd2F5LmV2ZW50cy5Bc3NldEV2ZW50LkFTU0VUX0NPTVBMRVRFJywgQXNzZXRMaWJyYXJ5LmdldEFzc2V0KGV2ZW50LmFzc2V0Lm5hbWUpKTtcblx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdH1cblxuXHRwdWJsaWMgb25Mb2FkQ29tcGxldGUoZXZlbnQ6TG9hZGVyRXZlbnQpXG5cdHtcblxuXHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRjb25zb2xlLmxvZygnYXdheS5ldmVudHMuTG9hZGVyRXZlbnQuUkVTT1VSQ0VfQ09NUExFVEUnLCBldmVudCk7XG5cdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXG5cdFx0dmFyIGxvYWRlcjpMb2FkZXIgPSBldmVudC50YXJnZXQ7XG5cdFx0dmFyIG51bUFzc2V0czpudW1iZXIgPSBsb2FkZXIuYmFzZURlcGVuZGVuY3kuYXNzZXRzLmxlbmd0aDtcblxuXHRcdGZvciAodmFyIGk6bnVtYmVyID0gMDsgaSA8IG51bUFzc2V0czsgKytpKSB7XG5cdFx0XHR2YXIgYXNzZXQ6SUFzc2V0ID0gbG9hZGVyLmJhc2VEZXBlbmRlbmN5LmFzc2V0c1tpXTtcblxuXHRcdFx0Y29uc29sZS5sb2coYXNzZXQuYXNzZXRUeXBlKTtcblxuXHRcdFx0c3dpdGNoIChhc3NldC5hc3NldFR5cGUpIHtcblx0XHRcdFx0Y2FzZSBTa3lib3guYXNzZXRUeXBlOlxuXG5cdFx0XHRcdFx0dmFyIHNreWJveDpTa3lib3ggPSA8U2t5Ym94PiBhc3NldDtcblx0XHRcdFx0XHR0aGlzLl92aWV3LnNjZW5lLmFkZENoaWxkKHNreWJveCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBTcHJpdGUuYXNzZXRUeXBlOlxuXG5cdFx0XHRcdFx0dGhpcy5fdG9ydXMgPSA8U3ByaXRlPiBhc3NldDtcblx0XHRcdFx0XHR0aGlzLl92aWV3LnNjZW5lLmFkZENoaWxkKHRoaXMuX3RvcnVzKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgR3JhcGhpY3MuYXNzZXRUeXBlOlxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgTWV0aG9kTWF0ZXJpYWwuYXNzZXRUeXBlOlxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSJdLCJzb3VyY2VSb290IjoiLi90ZXN0cyJ9
