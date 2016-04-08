/*

 AWD3 file loading example in AwayJS

 Demonstrates:

 How to use the Loader object to load an embedded internal awd model.

 Code by Rob Bateman
 rob@infiniteturtles.co.uk
 http://www.infiniteturtles.co.uk

 This code is distributed under the MIT License

 Copyright (c) The Away Foundation http://www.theawayfoundation.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the “Software”), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 */
"use strict";
var AssetLibrary_1 = require("awayjs-core/lib/library/AssetLibrary");
var Loader_1 = require("awayjs-core/lib/library/Loader");
var AssetEvent_1 = require("awayjs-core/lib/events/AssetEvent");
var URLRequest_1 = require("awayjs-core/lib/net/URLRequest");
var LoaderEvent_1 = require("awayjs-core/lib/events/LoaderEvent");
var OrthographicProjection_1 = require("awayjs-core/lib/projections/OrthographicProjection");
var CoordinateSystem_1 = require("awayjs-core/lib/projections/CoordinateSystem");
var PerspectiveProjection_1 = require("awayjs-core/lib/projections/PerspectiveProjection");
var RequestAnimationFrame_1 = require("awayjs-core/lib/utils/RequestAnimationFrame");
var View_1 = require("awayjs-display/lib/View");
var HoverController_1 = require("awayjs-display/lib/controllers/HoverController");
var MovieClip_1 = require("awayjs-display/lib/display/MovieClip");
var Camera_1 = require("awayjs-display/lib/display/Camera");
var SceneGraphPartition_1 = require("awayjs-display/lib/partition/SceneGraphPartition");
var DefaultRenderer_1 = require("awayjs-renderergl/lib/DefaultRenderer");
var AWDParser_1 = require("awayjs-parsers/lib/AWDParser");
var AWD3ParserTest = (function () {
    /**
     * Constructor
     */
    function AWD3ParserTest() {
        this._time = 0;
        this.init();
    }
    /**
     * Global initialise function
     */
    AWD3ParserTest.prototype.init = function () {
        this.initEngine();
        this.initObjects();
        this.initListeners();
    };
    /**
     * Initialise the engine
     */
    AWD3ParserTest.prototype.initEngine = function () {
        //create the view
        this._view = new View_1.default(new DefaultRenderer_1.default());
        //this._view.renderer.renderableSorter = new RenderableNullSort();
        this._view.backgroundColor = 0xffffff;
        //this._view.backgroundColor = parseInt(document.getElementById("bgColor").innerHTML.replace("#", "0x"));
        this._stage_width = 550; //parseInt(document.getElementById("awdWidth").innerHTML);
        this._stage_height = 400; //parseInt(document.getElementById("awdHeight").innerHTML);
        this._isperspective = true;
        this._projection = new PerspectiveProjection_1.default();
        this._projection.coordinateSystem = CoordinateSystem_1.default.RIGHT_HANDED;
        this._projection.focalLength = 1000;
        this._projection.preserveFocalLength = true;
        this._projection.originX = 0.5;
        this._projection.originY = 0.5;
        this._camera_perspective = new Camera_1.default();
        this._camera_perspective.projection = this._projection;
        //this._projection.far = 500000;
        this._hoverControl = new HoverController_1.default(this._camera_perspective, null, 180, 0, 1000);
        this._ortho_projection = new OrthographicProjection_1.default(500);
        this._ortho_projection.coordinateSystem = CoordinateSystem_1.default.RIGHT_HANDED;
        this._ortho_projection.far = 500000;
        this._ortho_projection.near = 0.1;
        this._ortho_projection.originX = 0.5;
        this._ortho_projection.originY = 0.5;
        this._camera_ortho = new Camera_1.default();
        this._camera_ortho.projection = this._ortho_projection;
        this._view.camera = this._camera_perspective;
        this._camera_ortho.x = 0;
        this._camera_ortho.y = 0;
        this._camera_ortho.scaleY = -1;
        this._camera_ortho.z = 0;
    };
    /**
     * Initialise the scene objects
     */
    AWD3ParserTest.prototype.initObjects = function () {
        var _this = this;
        AssetLibrary_1.default.enableParser(AWDParser_1.default);
        //kickoff asset loading
        var loader = new Loader_1.default();
        loader.addEventListener(AssetEvent_1.default.ASSET_COMPLETE, function (event) { return _this.onAssetComplete(event); });
        loader.addEventListener(LoaderEvent_1.default.LOAD_COMPLETE, function (event) { return _this.onLoadComplete(event); });
        //loader.load(new URLRequest(document.getElementById("awdPath").innerHTML));
        loader.load(new URLRequest_1.default("assets/AWD3/ScareCrow.awd"));
        //loader.load(new URLRequest("assets/AWD3/NestedTween.awd"));
        //loader.load(new URLRequest("assets/AWD3/SimpleShape.awd"));
        //loader.load(new URLRequest("assets/AWD3/ComplexShape.awd"));
        //loader.load(new URLRequest("assets/AWD3/Simple_mask_test.awd"));
    };
    /**
     * Initialise the listeners
     */
    AWD3ParserTest.prototype.initListeners = function () {
        var _this = this;
        window.onresize = function (event) { return _this.onResize(event); };
        document.onkeydown = function (event) { return _this.onKeyDown(event); };
        document.onmousedown = function (event) { return _this.onMouseDown(event); };
        document.onmouseup = function (event) { return _this.onMouseUp(event); };
        document.onmousemove = function (event) { return _this.onMouseMove(event); };
        document.onmousewheel = function (event) { return _this.onMouseWheel(event); };
        this.onResize();
        this._timer = new RequestAnimationFrame_1.default(this.onEnterFrame, this);
        this._timer.start();
    };
    /**
     * loader listener for asset complete events
     */
    AWD3ParserTest.prototype.onAssetComplete = function (event) {
        if (event.asset.isAsset(MovieClip_1.default)) {
            this._rootTimeLine = event.asset;
            this._rootTimeLine.partition = new SceneGraphPartition_1.default();
        }
    };
    /**
     * loader listener for asset complete events
     */
    AWD3ParserTest.prototype.onLoadComplete = function (event) {
        if (this._rootTimeLine) {
            //console.log("LOADING A ROOT name = " + this._rootTimeLine.name + " duration=" + this._rootTimeLine.duration);
            this._view.scene.addChild(this._rootTimeLine);
            this._rootTimeLine.x = -this._stage_width / 2;
            this._rootTimeLine.y = -this._stage_height / 2;
        }
    };
    /**
     * Render loop
     */
    AWD3ParserTest.prototype.onEnterFrame = function (dt) {
        this._time += dt;
        //update camera controler
        // this._cameraController.update();
        if (this._rootTimeLine != undefined) {
            //console.log("RENDER = ");
            this._rootTimeLine.update();
        }
        //console.log("RENDER = ");
        //update view
        this._view.render();
    };
    AWD3ParserTest.prototype.onKeyDown = function (event) {
        console.log("keycode = " + event.keyCode);
        if (event.keyCode == 80) {
            this._isperspective = true;
            this._view.camera = this._camera_perspective;
        }
        if (event.keyCode == 79) {
            this._isperspective = false;
            this._view.camera = this._camera_ortho;
        }
        if (event.keyCode == 81) {
            if (this._isperspective) {
                this._hoverControl.distance += 5;
            }
            else {
                this._ortho_projection.projectionHeight += 5;
            }
        }
        else if (event.keyCode == 87) {
            if (this._isperspective) {
                this._hoverControl.distance -= 5;
            }
            else {
                this._ortho_projection.projectionHeight -= 5;
            }
        }
        if (event.keyCode == 65) {
            if (this._isperspective) {
                this._hoverControl.distance += 50;
            }
            else {
                this._ortho_projection.projectionHeight += 50;
            }
        }
        else if (event.keyCode == 83) {
            if (this._isperspective) {
                this._hoverControl.distance -= 50;
            }
            else {
                this._ortho_projection.projectionHeight -= 50;
            }
        }
    };
    AWD3ParserTest.prototype.onMouseDown = function (event) {
        this._lastPanAngle = this._hoverControl.panAngle;
        this._lastTiltAngle = this._hoverControl.tiltAngle;
        this._lastMouseX = event.clientX;
        this._lastMouseY = event.clientY;
        this._move = true;
    };
    AWD3ParserTest.prototype.onMouseUp = function (event) {
        this._move = false;
    };
    AWD3ParserTest.prototype.onMouseMove = function (event) {
        if (this._move) {
            if (this._isperspective) {
                this._hoverControl.panAngle = 0.3 * (event.clientX - this._lastMouseX) + this._lastPanAngle;
                this._hoverControl.tiltAngle = -0.3 * (event.clientY - this._lastMouseY) + this._lastTiltAngle;
            }
            else {
                if (event.clientX > (this._lastMouseX + 10))
                    this._camera_ortho.x -= 10;
                else if (event.clientX > this._lastMouseX)
                    this._camera_ortho.x--;
                else if (event.clientX < (this._lastMouseX - 10))
                    this._camera_ortho.x += 10;
                else if (event.clientX < this._lastMouseX)
                    this._camera_ortho.x++;
                if (event.clientY > (this._lastMouseY + 10))
                    this._camera_ortho.y -= 10;
                else if (event.clientY > this._lastMouseY)
                    this._camera_ortho.y--;
                else if (event.clientY < (this._lastMouseY - 10))
                    this._camera_ortho.y += 10;
                else if (event.clientY < this._lastMouseY)
                    this._camera_ortho.y++;
                this._lastMouseX = event.clientX;
                this._lastMouseY = event.clientY;
            }
        }
    };
    AWD3ParserTest.prototype.onMouseWheel = function (event) {
        if (this._isperspective) {
            this._hoverControl.distance -= event.wheelDelta * 5;
            if (this._hoverControl.distance < 100) {
                this._hoverControl.distance = 100;
            }
        }
        else {
            this._ortho_projection.projectionHeight -= event.wheelDelta * 5;
            if (this._ortho_projection.projectionHeight < 5) {
                this._ortho_projection.projectionHeight = 5;
            }
        }
    };
    AWD3ParserTest.prototype.onResize = function (event) {
        if (event === void 0) { event = null; }
        this._view.y = 0;
        this._view.x = 0;
        this._view.width = window.innerWidth;
        this._view.height = window.innerHeight;
    };
    return AWD3ParserTest;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlcnMvQVdEM1BhcnNlclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQ0c7O0FBRUgsNkJBQTZCLHNDQUFzQyxDQUFDLENBQUE7QUFDcEUsdUJBQXdCLGdDQUFnQyxDQUFDLENBQUE7QUFDekQsMkJBQTJCLG1DQUFtQyxDQUFDLENBQUE7QUFDL0QsMkJBQTJCLGdDQUFnQyxDQUFDLENBQUE7QUFDNUQsNEJBQTRCLG9DQUFvQyxDQUFDLENBQUE7QUFDakUsdUNBQW9DLG9EQUFvRCxDQUFDLENBQUE7QUFDekYsaUNBQWdDLDhDQUE4QyxDQUFDLENBQUE7QUFDL0Usc0NBQW1DLG1EQUFtRCxDQUFDLENBQUE7QUFDdkYsc0NBQW1DLDZDQUE2QyxDQUFDLENBQUE7QUFFakYscUJBQXVCLHlCQUF5QixDQUFDLENBQUE7QUFDakQsZ0NBQStCLGdEQUFnRCxDQUFDLENBQUE7QUFDaEYsMEJBQTBCLHNDQUFzQyxDQUFDLENBQUE7QUFDakUsdUJBQXdCLG1DQUFtQyxDQUFDLENBQUE7QUFDNUQsb0NBQWtDLGtEQUFrRCxDQUFDLENBQUE7QUFFckYsZ0NBQStCLHVDQUF1QyxDQUFDLENBQUE7QUFFdkUsMEJBQTBCLDhCQUE4QixDQUFDLENBQUE7QUFHekQ7SUF5QkM7O09BRUc7SUFDSDtRQXBCUSxVQUFLLEdBQVUsQ0FBQyxDQUFDO1FBc0J4QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUQ7O09BRUc7SUFDSyw2QkFBSSxHQUFaO1FBRUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssbUNBQVUsR0FBbEI7UUFFQyxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGNBQUksQ0FB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RyxHQUFHLENBQUM7WUFDbkMsQ0FBQztRQUNGLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNMLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsSUFBSSxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNoRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztZQUM3QyxDQUFDO1FBQ0YsQ0FBQztJQUNGLENBQUM7SUFFTyxpQ0FBUSxHQUFoQixVQUFpQixLQUFZO1FBQVoscUJBQVksR0FBWixZQUFZO1FBRTVCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFXLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBVyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBTSxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQzNDLENBQUM7SUFFRixxQkFBQztBQUFELENBeFJBLEFBd1JDLElBQUEiLCJmaWxlIjoicGFyc2Vycy9BV0QzUGFyc2VyVGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5cbiBBV0QzIGZpbGUgbG9hZGluZyBleGFtcGxlIGluIEF3YXlKU1xuXG4gRGVtb25zdHJhdGVzOlxuXG4gSG93IHRvIHVzZSB0aGUgTG9hZGVyIG9iamVjdCB0byBsb2FkIGFuIGVtYmVkZGVkIGludGVybmFsIGF3ZCBtb2RlbC5cblxuIENvZGUgYnkgUm9iIEJhdGVtYW5cbiByb2JAaW5maW5pdGV0dXJ0bGVzLmNvLnVrXG4gaHR0cDovL3d3dy5pbmZpbml0ZXR1cnRsZXMuY28udWtcblxuIFRoaXMgY29kZSBpcyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcblxuIENvcHlyaWdodCAoYykgVGhlIEF3YXkgRm91bmRhdGlvbiBodHRwOi8vd3d3LnRoZWF3YXlmb3VuZGF0aW9uLm9yZ1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIOKAnFNvZnR3YXJl4oCdKSwgdG8gZGVhbFxuIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQg4oCcQVMgSVPigJ0sIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuXG4gKi9cblxuaW1wb3J0IEFzc2V0TGlicmFyeVx0XHRcdFx0XHRmcm9tIFwiYXdheWpzLWNvcmUvbGliL2xpYnJhcnkvQXNzZXRMaWJyYXJ5XCI7XG5pbXBvcnQgTG9hZGVyXHRcdFx0XHRcdFx0ZnJvbSBcImF3YXlqcy1jb3JlL2xpYi9saWJyYXJ5L0xvYWRlclwiO1xuaW1wb3J0IEFzc2V0RXZlbnRcdFx0XHRcdFx0ZnJvbSBcImF3YXlqcy1jb3JlL2xpYi9ldmVudHMvQXNzZXRFdmVudFwiO1xuaW1wb3J0IFVSTFJlcXVlc3RcdFx0XHRcdFx0ZnJvbSBcImF3YXlqcy1jb3JlL2xpYi9uZXQvVVJMUmVxdWVzdFwiO1xuaW1wb3J0IExvYWRlckV2ZW50XHRcdFx0XHRcdGZyb20gXCJhd2F5anMtY29yZS9saWIvZXZlbnRzL0xvYWRlckV2ZW50XCI7XG5pbXBvcnQgT3J0aG9ncmFwaGljUHJvamVjdGlvblx0XHRmcm9tIFwiYXdheWpzLWNvcmUvbGliL3Byb2plY3Rpb25zL09ydGhvZ3JhcGhpY1Byb2plY3Rpb25cIjtcbmltcG9ydCBDb29yZGluYXRlU3lzdGVtXHRcdFx0XHRmcm9tIFwiYXdheWpzLWNvcmUvbGliL3Byb2plY3Rpb25zL0Nvb3JkaW5hdGVTeXN0ZW1cIjtcbmltcG9ydCBQZXJzcGVjdGl2ZVByb2plY3Rpb25cdFx0ZnJvbSBcImF3YXlqcy1jb3JlL2xpYi9wcm9qZWN0aW9ucy9QZXJzcGVjdGl2ZVByb2plY3Rpb25cIjtcbmltcG9ydCBSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcdFx0ZnJvbSBcImF3YXlqcy1jb3JlL2xpYi91dGlscy9SZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIjtcblxuaW1wb3J0IFZpZXdcdFx0XHRcdFx0XHRcdGZyb20gXCJhd2F5anMtZGlzcGxheS9saWIvVmlld1wiO1xuaW1wb3J0IEhvdmVyQ29udHJvbGxlclx0XHRcdFx0ZnJvbSBcImF3YXlqcy1kaXNwbGF5L2xpYi9jb250cm9sbGVycy9Ib3ZlckNvbnRyb2xsZXJcIjtcbmltcG9ydCBNb3ZpZUNsaXBcdFx0XHRcdFx0ZnJvbSBcImF3YXlqcy1kaXNwbGF5L2xpYi9kaXNwbGF5L01vdmllQ2xpcFwiO1xuaW1wb3J0IENhbWVyYVx0XHRcdFx0XHRcdGZyb20gXCJhd2F5anMtZGlzcGxheS9saWIvZGlzcGxheS9DYW1lcmFcIjtcbmltcG9ydCBTY2VuZUdyYXBoUGFydGl0aW9uXHRcdFx0ZnJvbSBcImF3YXlqcy1kaXNwbGF5L2xpYi9wYXJ0aXRpb24vU2NlbmVHcmFwaFBhcnRpdGlvblwiO1xuXG5pbXBvcnQgRGVmYXVsdFJlbmRlcmVyXHRcdFx0XHRmcm9tIFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL0RlZmF1bHRSZW5kZXJlclwiO1xuXG5pbXBvcnQgQVdEUGFyc2VyXHRcdFx0XHRcdGZyb20gXCJhd2F5anMtcGFyc2Vycy9saWIvQVdEUGFyc2VyXCI7XG5cblxuY2xhc3MgQVdEM1BhcnNlclRlc3Rcbntcblx0Ly9lbmdpbmUgdmFyaWFibGVzXG5cdHByaXZhdGUgX3ZpZXc6VmlldztcblxuXHRwcml2YXRlIF9yb290VGltZUxpbmU6TW92aWVDbGlwO1xuXG5cdHByaXZhdGUgX3RpbWVyOlJlcXVlc3RBbmltYXRpb25GcmFtZTtcblx0cHJpdmF0ZSBfdGltZTpudW1iZXIgPSAwO1xuXG5cdC8vbmF2aWdhdGlvblxuXHRwcml2YXRlIF9sYXN0UGFuQW5nbGU6bnVtYmVyO1xuXHRwcml2YXRlIF9sYXN0VGlsdEFuZ2xlOm51bWJlcjtcblx0cHJpdmF0ZSBfbGFzdE1vdXNlWDpudW1iZXI7XG5cdHByaXZhdGUgX2xhc3RNb3VzZVk6bnVtYmVyO1xuXHRwcml2YXRlIF9tb3ZlOmJvb2xlYW47XG5cdHByaXZhdGUgX2lzcGVyc3BlY3RpdmU6Ym9vbGVhbjtcblx0cHJpdmF0ZSBfcHJvamVjdGlvbjpQZXJzcGVjdGl2ZVByb2plY3Rpb247XG5cdHByaXZhdGUgX29ydGhvX3Byb2plY3Rpb246T3J0aG9ncmFwaGljUHJvamVjdGlvbjtcblx0cHJpdmF0ZSBfaG92ZXJDb250cm9sOkhvdmVyQ29udHJvbGxlcjtcblx0cHJpdmF0ZSBfY2FtZXJhX3BlcnNwZWN0aXZlOkNhbWVyYTtcblx0cHJpdmF0ZSBfY2FtZXJhX29ydGhvOkNhbWVyYTtcblx0cHJpdmF0ZSBfc3RhZ2Vfd2lkdGg6bnVtYmVyO1xuXHRwcml2YXRlIF9zdGFnZV9oZWlnaHQ6bnVtYmVyO1xuXG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3RvclxuXHQgKi9cblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHQvKipcblx0ICogR2xvYmFsIGluaXRpYWxpc2UgZnVuY3Rpb25cblx0ICovXG5cdHByaXZhdGUgaW5pdCgpXG5cdHtcblx0XHR0aGlzLmluaXRFbmdpbmUoKTtcblx0XHR0aGlzLmluaXRPYmplY3RzKCk7XG5cdFx0dGhpcy5pbml0TGlzdGVuZXJzKCk7XG5cdH1cblxuXHQvKipcblx0ICogSW5pdGlhbGlzZSB0aGUgZW5naW5lXG5cdCAqL1xuXHRwcml2YXRlIGluaXRFbmdpbmUoKVxuXHR7XG5cdFx0Ly9jcmVhdGUgdGhlIHZpZXdcblx0XHR0aGlzLl92aWV3ID0gbmV3IFZpZXcobmV3IERlZmF1bHRSZW5kZXJlcigpKTtcblx0XHQvL3RoaXMuX3ZpZXcucmVuZGVyZXIucmVuZGVyYWJsZVNvcnRlciA9IG5ldyBSZW5kZXJhYmxlTnVsbFNvcnQoKTtcblx0XHR0aGlzLl92aWV3LmJhY2tncm91bmRDb2xvciA9IDB4ZmZmZmZmO1xuXHRcdC8vdGhpcy5fdmlldy5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJnQ29sb3JcIikuaW5uZXJIVE1MLnJlcGxhY2UoXCIjXCIsIFwiMHhcIikpO1xuXHRcdHRoaXMuX3N0YWdlX3dpZHRoID0gNTUwOyAvL3BhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXdkV2lkdGhcIikuaW5uZXJIVE1MKTtcblx0XHR0aGlzLl9zdGFnZV9oZWlnaHQgPSA0MDA7IC8vcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhd2RIZWlnaHRcIikuaW5uZXJIVE1MKTtcblx0XHR0aGlzLl9pc3BlcnNwZWN0aXZlPXRydWU7XG5cdFx0dGhpcy5fcHJvamVjdGlvbiA9IG5ldyBQZXJzcGVjdGl2ZVByb2plY3Rpb24oKTtcblx0XHR0aGlzLl9wcm9qZWN0aW9uLmNvb3JkaW5hdGVTeXN0ZW0gPSBDb29yZGluYXRlU3lzdGVtLlJJR0hUX0hBTkRFRDtcblx0XHR0aGlzLl9wcm9qZWN0aW9uLmZvY2FsTGVuZ3RoID0gMTAwMDtcblx0XHR0aGlzLl9wcm9qZWN0aW9uLnByZXNlcnZlRm9jYWxMZW5ndGggPSB0cnVlO1xuXHRcdHRoaXMuX3Byb2plY3Rpb24ub3JpZ2luWCA9IDAuNTtcblx0XHR0aGlzLl9wcm9qZWN0aW9uLm9yaWdpblkgPSAwLjU7XG5cdFx0dGhpcy5fY2FtZXJhX3BlcnNwZWN0aXZlID0gbmV3IENhbWVyYSgpO1xuXHRcdHRoaXMuX2NhbWVyYV9wZXJzcGVjdGl2ZS5wcm9qZWN0aW9uID0gdGhpcy5fcHJvamVjdGlvbjtcblx0XHQvL3RoaXMuX3Byb2plY3Rpb24uZmFyID0gNTAwMDAwO1xuXHRcdHRoaXMuX2hvdmVyQ29udHJvbCA9IG5ldyBIb3ZlckNvbnRyb2xsZXIodGhpcy5fY2FtZXJhX3BlcnNwZWN0aXZlLCBudWxsLCAxODAsIDAsIDEwMDApO1xuXHRcdHRoaXMuX29ydGhvX3Byb2plY3Rpb24gPSBuZXcgT3J0aG9ncmFwaGljUHJvamVjdGlvbig1MDApO1xuXHRcdHRoaXMuX29ydGhvX3Byb2plY3Rpb24uY29vcmRpbmF0ZVN5c3RlbSA9IENvb3JkaW5hdGVTeXN0ZW0uUklHSFRfSEFOREVEO1xuXHRcdHRoaXMuX29ydGhvX3Byb2plY3Rpb24uZmFyID0gNTAwMDAwO1xuXHRcdHRoaXMuX29ydGhvX3Byb2plY3Rpb24ubmVhciA9IDAuMTtcblx0XHR0aGlzLl9vcnRob19wcm9qZWN0aW9uLm9yaWdpblggPSAwLjU7XG5cdFx0dGhpcy5fb3J0aG9fcHJvamVjdGlvbi5vcmlnaW5ZID0gMC41O1xuXHRcdHRoaXMuX2NhbWVyYV9vcnRobyA9IG5ldyBDYW1lcmEoKTtcblx0XHR0aGlzLl9jYW1lcmFfb3J0aG8ucHJvamVjdGlvbiA9IHRoaXMuX29ydGhvX3Byb2plY3Rpb247XG5cdFx0dGhpcy5fdmlldy5jYW1lcmEgPSB0aGlzLl9jYW1lcmFfcGVyc3BlY3RpdmU7XG5cdFx0dGhpcy5fY2FtZXJhX29ydGhvLnggPSAwO1xuXHRcdHRoaXMuX2NhbWVyYV9vcnRoby55ID0gMDtcblx0XHR0aGlzLl9jYW1lcmFfb3J0aG8uc2NhbGVZID0gLTE7XG5cdFx0dGhpcy5fY2FtZXJhX29ydGhvLnogPSAwO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpc2UgdGhlIHNjZW5lIG9iamVjdHNcblx0ICovXG5cdHByaXZhdGUgaW5pdE9iamVjdHMoKVxuXHR7XG5cdFx0QXNzZXRMaWJyYXJ5LmVuYWJsZVBhcnNlcihBV0RQYXJzZXIpO1xuXG5cdFx0Ly9raWNrb2ZmIGFzc2V0IGxvYWRpbmdcblx0XHR2YXIgbG9hZGVyOkxvYWRlciA9IG5ldyBMb2FkZXIoKTtcblx0XHRsb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcihBc3NldEV2ZW50LkFTU0VUX0NPTVBMRVRFLCAoZXZlbnQ6QXNzZXRFdmVudCkgPT4gdGhpcy5vbkFzc2V0Q29tcGxldGUoZXZlbnQpKTtcblx0XHRsb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcihMb2FkZXJFdmVudC5MT0FEX0NPTVBMRVRFLCAoZXZlbnQ6TG9hZGVyRXZlbnQpID0+IHRoaXMub25Mb2FkQ29tcGxldGUoZXZlbnQpKTtcblxuXG5cdFx0Ly9sb2FkZXIubG9hZChuZXcgVVJMUmVxdWVzdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF3ZFBhdGhcIikuaW5uZXJIVE1MKSk7XG5cdFx0bG9hZGVyLmxvYWQobmV3IFVSTFJlcXVlc3QoXCJhc3NldHMvQVdEMy9TY2FyZUNyb3cuYXdkXCIpKTtcblx0XHQvL2xvYWRlci5sb2FkKG5ldyBVUkxSZXF1ZXN0KFwiYXNzZXRzL0FXRDMvTmVzdGVkVHdlZW4uYXdkXCIpKTtcblx0XHQvL2xvYWRlci5sb2FkKG5ldyBVUkxSZXF1ZXN0KFwiYXNzZXRzL0FXRDMvU2ltcGxlU2hhcGUuYXdkXCIpKTtcblx0XHQvL2xvYWRlci5sb2FkKG5ldyBVUkxSZXF1ZXN0KFwiYXNzZXRzL0FXRDMvQ29tcGxleFNoYXBlLmF3ZFwiKSk7XG5cdFx0Ly9sb2FkZXIubG9hZChuZXcgVVJMUmVxdWVzdChcImFzc2V0cy9BV0QzL1NpbXBsZV9tYXNrX3Rlc3QuYXdkXCIpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXNlIHRoZSBsaXN0ZW5lcnNcblx0ICovXG5cdHByaXZhdGUgaW5pdExpc3RlbmVycygpXG5cdHtcblx0XHR3aW5kb3cub25yZXNpemUgID0gKGV2ZW50KSA9PiB0aGlzLm9uUmVzaXplKGV2ZW50KTtcblxuXHRcdGRvY3VtZW50Lm9ua2V5ZG93biA9IChldmVudCkgPT4gdGhpcy5vbktleURvd24oZXZlbnQpO1xuXHRcdGRvY3VtZW50Lm9ubW91c2Vkb3duID0gKGV2ZW50KSA9PiB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcblx0XHRkb2N1bWVudC5vbm1vdXNldXAgPSAoZXZlbnQpID0+IHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcblx0XHRkb2N1bWVudC5vbm1vdXNlbW92ZSA9IChldmVudCkgPT4gdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG5cdFx0ZG9jdW1lbnQub25tb3VzZXdoZWVsID0gKGV2ZW50KSA9PiB0aGlzLm9uTW91c2VXaGVlbChldmVudCk7XG5cblx0XHR0aGlzLm9uUmVzaXplKCk7XG5cblx0XHR0aGlzLl90aW1lciA9IG5ldyBSZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5vbkVudGVyRnJhbWUsIHRoaXMpO1xuXHRcdHRoaXMuX3RpbWVyLnN0YXJ0KCk7XG5cdH1cblxuXHQvKipcblx0ICogbG9hZGVyIGxpc3RlbmVyIGZvciBhc3NldCBjb21wbGV0ZSBldmVudHNcblx0ICovXG5cdHByaXZhdGUgb25Bc3NldENvbXBsZXRlKGV2ZW50OkFzc2V0RXZlbnQpXG5cdHtcblx0XHRpZihldmVudC5hc3NldC5pc0Fzc2V0KE1vdmllQ2xpcCkpIHtcblx0XHRcdHRoaXMuX3Jvb3RUaW1lTGluZSA9IDxNb3ZpZUNsaXA+IGV2ZW50LmFzc2V0O1xuXHRcdFx0dGhpcy5fcm9vdFRpbWVMaW5lLnBhcnRpdGlvbiA9IG5ldyBTY2VuZUdyYXBoUGFydGl0aW9uKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIGxvYWRlciBsaXN0ZW5lciBmb3IgYXNzZXQgY29tcGxldGUgZXZlbnRzXG5cdCAqL1xuXHRwcml2YXRlIG9uTG9hZENvbXBsZXRlKGV2ZW50OkxvYWRlckV2ZW50KVxuXHR7XG5cdFx0aWYgKHRoaXMuX3Jvb3RUaW1lTGluZSkge1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhcIkxPQURJTkcgQSBST09UIG5hbWUgPSBcIiArIHRoaXMuX3Jvb3RUaW1lTGluZS5uYW1lICsgXCIgZHVyYXRpb249XCIgKyB0aGlzLl9yb290VGltZUxpbmUuZHVyYXRpb24pO1xuXHRcdFx0dGhpcy5fdmlldy5zY2VuZS5hZGRDaGlsZCh0aGlzLl9yb290VGltZUxpbmUpO1xuXHRcdFx0dGhpcy5fcm9vdFRpbWVMaW5lLng9LXRoaXMuX3N0YWdlX3dpZHRoLzI7XG5cdFx0XHR0aGlzLl9yb290VGltZUxpbmUueT0tdGhpcy5fc3RhZ2VfaGVpZ2h0LzI7XG5cdFx0XHQvLyBhdXRvcGxheSBsaWtlIGluIEZsYXNoXG5cdFx0XHQvL3RoaXMuX3Jvb3RUaW1lTGluZS5wbGF5KCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlbmRlciBsb29wXG5cdCAqL1xuXHRwcml2YXRlIG9uRW50ZXJGcmFtZShkdDpudW1iZXIpXG5cdHtcblx0XHR0aGlzLl90aW1lICs9IGR0O1xuXG5cdFx0Ly91cGRhdGUgY2FtZXJhIGNvbnRyb2xlclxuXHRcdC8vIHRoaXMuX2NhbWVyYUNvbnRyb2xsZXIudXBkYXRlKCk7XG5cblx0XHRpZiAodGhpcy5fcm9vdFRpbWVMaW5lICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhcIlJFTkRFUiA9IFwiKTtcblx0XHRcdHRoaXMuX3Jvb3RUaW1lTGluZS51cGRhdGUoKTtcblx0XHR9XG5cdFx0Ly9jb25zb2xlLmxvZyhcIlJFTkRFUiA9IFwiKTtcblx0XHQvL3VwZGF0ZSB2aWV3XG5cdFx0dGhpcy5fdmlldy5yZW5kZXIoKTtcblx0fVxuXG5cdHByaXZhdGUgb25LZXlEb3duKGV2ZW50KVxuXHR7XG5cdFx0Y29uc29sZS5sb2coXCJrZXljb2RlID0gXCIrZXZlbnQua2V5Q29kZSk7XG5cdFx0aWYgKGV2ZW50LmtleUNvZGUgPT0gODApIHtcblx0XHRcdHRoaXMuX2lzcGVyc3BlY3RpdmUgPSB0cnVlO1xuXHRcdFx0dGhpcy5fdmlldy5jYW1lcmEgPSB0aGlzLl9jYW1lcmFfcGVyc3BlY3RpdmU7XG5cdFx0fVxuXHRcdGlmIChldmVudC5rZXlDb2RlID09IDc5KSB7XG5cdFx0XHR0aGlzLl9pc3BlcnNwZWN0aXZlID0gZmFsc2U7XG5cdFx0XHR0aGlzLl92aWV3LmNhbWVyYSA9IHRoaXMuX2NhbWVyYV9vcnRobztcblx0XHR9XG5cdFx0aWYgKGV2ZW50LmtleUNvZGUgPT0gODEpIHtcblx0XHRcdGlmICh0aGlzLl9pc3BlcnNwZWN0aXZlKSB7XG5cdFx0XHRcdHRoaXMuX2hvdmVyQ29udHJvbC5kaXN0YW5jZSArPSA1O1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMuX29ydGhvX3Byb2plY3Rpb24ucHJvamVjdGlvbkhlaWdodCArPSA1O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIGlmIChldmVudC5rZXlDb2RlID09IDg3KSB7XG5cdFx0XHRpZiAodGhpcy5faXNwZXJzcGVjdGl2ZSkge1xuXHRcdFx0XHR0aGlzLl9ob3ZlckNvbnRyb2wuZGlzdGFuY2UgLT0gNTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9vcnRob19wcm9qZWN0aW9uLnByb2plY3Rpb25IZWlnaHQgLT0gNTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGV2ZW50LmtleUNvZGUgPT0gNjUpIHtcblx0XHRcdGlmICh0aGlzLl9pc3BlcnNwZWN0aXZlKSB7XG5cdFx0XHRcdHRoaXMuX2hvdmVyQ29udHJvbC5kaXN0YW5jZSArPSA1MDtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9vcnRob19wcm9qZWN0aW9uLnByb2plY3Rpb25IZWlnaHQgKz0gNTA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT0gODMpIHtcblx0XHRcdGlmICh0aGlzLl9pc3BlcnNwZWN0aXZlKSB7XG5cdFx0XHRcdHRoaXMuX2hvdmVyQ29udHJvbC5kaXN0YW5jZSAtPSA1MDtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9vcnRob19wcm9qZWN0aW9uLnByb2plY3Rpb25IZWlnaHQgLT0gNTA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBvbk1vdXNlRG93bihldmVudClcblx0e1xuXHRcdHRoaXMuX2xhc3RQYW5BbmdsZSA9IHRoaXMuX2hvdmVyQ29udHJvbC5wYW5BbmdsZTtcblx0XHR0aGlzLl9sYXN0VGlsdEFuZ2xlID0gdGhpcy5faG92ZXJDb250cm9sLnRpbHRBbmdsZTtcblx0XHR0aGlzLl9sYXN0TW91c2VYID0gZXZlbnQuY2xpZW50WDtcblx0XHR0aGlzLl9sYXN0TW91c2VZID0gZXZlbnQuY2xpZW50WTtcblx0XHR0aGlzLl9tb3ZlID0gdHJ1ZTtcblx0fVxuXG5cdHByaXZhdGUgb25Nb3VzZVVwKGV2ZW50KVxuXHR7XG5cdFx0dGhpcy5fbW92ZSA9IGZhbHNlO1xuXHR9XG5cblx0cHJpdmF0ZSBvbk1vdXNlTW92ZShldmVudClcblx0e1xuXHRcdGlmICh0aGlzLl9tb3ZlKSB7XG5cdFx0XHRpZiAodGhpcy5faXNwZXJzcGVjdGl2ZSkge1xuXHRcdFx0XHR0aGlzLl9ob3ZlckNvbnRyb2wucGFuQW5nbGUgPSAwLjMgKiAoZXZlbnQuY2xpZW50WCAtIHRoaXMuX2xhc3RNb3VzZVgpICsgdGhpcy5fbGFzdFBhbkFuZ2xlO1xuXHRcdFx0XHR0aGlzLl9ob3ZlckNvbnRyb2wudGlsdEFuZ2xlID0gLTAuMyAqIChldmVudC5jbGllbnRZIC0gdGhpcy5fbGFzdE1vdXNlWSkgKyB0aGlzLl9sYXN0VGlsdEFuZ2xlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGlmIChldmVudC5jbGllbnRYID4gKHRoaXMuX2xhc3RNb3VzZVggKyAxMCkpXG5cdFx0XHRcdFx0dGhpcy5fY2FtZXJhX29ydGhvLnggLT0gMTA7XG5cdFx0XHRcdGVsc2UgaWYgKGV2ZW50LmNsaWVudFggPiB0aGlzLl9sYXN0TW91c2VYKVxuXHRcdFx0XHRcdHRoaXMuX2NhbWVyYV9vcnRoby54LS07XG5cdFx0XHRcdGVsc2UgaWYgKGV2ZW50LmNsaWVudFggPCAodGhpcy5fbGFzdE1vdXNlWCAtIDEwKSlcblx0XHRcdFx0XHR0aGlzLl9jYW1lcmFfb3J0aG8ueCArPSAxMDtcblx0XHRcdFx0ZWxzZSBpZiAoZXZlbnQuY2xpZW50WCA8IHRoaXMuX2xhc3RNb3VzZVgpXG5cdFx0XHRcdFx0dGhpcy5fY2FtZXJhX29ydGhvLngrKztcblx0XHRcdFx0aWYgKGV2ZW50LmNsaWVudFkgPiAodGhpcy5fbGFzdE1vdXNlWSArIDEwKSlcblx0XHRcdFx0XHR0aGlzLl9jYW1lcmFfb3J0aG8ueSAtPSAxMDtcblx0XHRcdFx0ZWxzZSBpZiAoZXZlbnQuY2xpZW50WSA+IHRoaXMuX2xhc3RNb3VzZVkpXG5cdFx0XHRcdFx0dGhpcy5fY2FtZXJhX29ydGhvLnktLTtcblx0XHRcdFx0ZWxzZSBpZiAoZXZlbnQuY2xpZW50WSA8ICh0aGlzLl9sYXN0TW91c2VZIC0gMTApKVxuXHRcdFx0XHRcdHRoaXMuX2NhbWVyYV9vcnRoby55ICs9IDEwO1xuXHRcdFx0XHRlbHNlIGlmIChldmVudC5jbGllbnRZIDwgdGhpcy5fbGFzdE1vdXNlWSlcblx0XHRcdFx0XHR0aGlzLl9jYW1lcmFfb3J0aG8ueSsrO1xuXHRcdFx0XHR0aGlzLl9sYXN0TW91c2VYID0gZXZlbnQuY2xpZW50WDtcblx0XHRcdFx0dGhpcy5fbGFzdE1vdXNlWSA9IGV2ZW50LmNsaWVudFk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBvbk1vdXNlV2hlZWwoZXZlbnQpXG5cdHtcblxuXHRcdGlmICh0aGlzLl9pc3BlcnNwZWN0aXZlKSB7XG5cdFx0XHR0aGlzLl9ob3ZlckNvbnRyb2wuZGlzdGFuY2UgLT0gZXZlbnQud2hlZWxEZWx0YSAqIDU7XG5cdFx0XHRpZiAodGhpcy5faG92ZXJDb250cm9sLmRpc3RhbmNlIDwgMTAwKSB7XG5cdFx0XHRcdHRoaXMuX2hvdmVyQ29udHJvbC5kaXN0YW5jZSA9IDEwMDtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLl9vcnRob19wcm9qZWN0aW9uLnByb2plY3Rpb25IZWlnaHQgLT0gZXZlbnQud2hlZWxEZWx0YSAqIDU7XG5cdFx0XHRpZiAodGhpcy5fb3J0aG9fcHJvamVjdGlvbi5wcm9qZWN0aW9uSGVpZ2h0IDwgNSkge1xuXHRcdFx0XHR0aGlzLl9vcnRob19wcm9qZWN0aW9uLnByb2plY3Rpb25IZWlnaHQgPSA1O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgb25SZXNpemUoZXZlbnQgPSBudWxsKVxuXHR7XG5cdFx0dGhpcy5fdmlldy55ICAgICAgICAgPSAwO1xuXHRcdHRoaXMuX3ZpZXcueCAgICAgICAgID0gMDtcblx0XHR0aGlzLl92aWV3LndpZHRoICAgICA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdHRoaXMuX3ZpZXcuaGVpZ2h0ICAgID0gd2luZG93LmlubmVySGVpZ2h0O1xuXHR9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIuL3Rlc3RzIn0=
