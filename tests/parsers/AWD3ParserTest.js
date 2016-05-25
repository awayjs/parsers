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
        this._view = new View_1.View(new DefaultRenderer_1.DefaultRenderer());
        //this._view.renderer.renderableSorter = new RenderableNullSort();
        this._view.backgroundColor = 0xffffff;
        //this._view.backgroundColor = parseInt(document.getElementById("bgColor").innerHTML.replace("#", "0x"));
        this._stage_width = 550; //parseInt(document.getElementById("awdWidth").innerHTML);
        this._stage_height = 400; //parseInt(document.getElementById("awdHeight").innerHTML);
        this._isperspective = true;
        this._projection = new PerspectiveProjection_1.PerspectiveProjection();
        this._projection.coordinateSystem = CoordinateSystem_1.CoordinateSystem.RIGHT_HANDED;
        this._projection.focalLength = 1000;
        this._projection.preserveFocalLength = true;
        this._projection.originX = 0.5;
        this._projection.originY = 0.5;
        this._camera_perspective = new Camera_1.Camera();
        this._camera_perspective.projection = this._projection;
        //this._projection.far = 500000;
        this._hoverControl = new HoverController_1.HoverController(this._camera_perspective, null, 180, 0, 1000);
        this._ortho_projection = new OrthographicProjection_1.OrthographicProjection(500);
        this._ortho_projection.coordinateSystem = CoordinateSystem_1.CoordinateSystem.RIGHT_HANDED;
        this._ortho_projection.far = 500000;
        this._ortho_projection.near = 0.1;
        this._ortho_projection.originX = 0.5;
        this._ortho_projection.originY = 0.5;
        this._camera_ortho = new Camera_1.Camera();
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
        AssetLibrary_1.AssetLibrary.enableParser(AWDParser_1.AWDParser);
        //kickoff asset loading
        var loader = new Loader_1.Loader();
        loader.addEventListener(AssetEvent_1.AssetEvent.ASSET_COMPLETE, function (event) { return _this.onAssetComplete(event); });
        loader.addEventListener(LoaderEvent_1.LoaderEvent.LOAD_COMPLETE, function (event) { return _this.onLoadComplete(event); });
        //loader.load(new URLRequest(document.getElementById("awdPath").innerHTML));
        loader.load(new URLRequest_1.URLRequest("assets/AWD3/ScareCrow.awd"));
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
        this._timer = new RequestAnimationFrame_1.RequestAnimationFrame(this.onEnterFrame, this);
        this._timer.start();
    };
    /**
     * loader listener for asset complete events
     */
    AWD3ParserTest.prototype.onAssetComplete = function (event) {
        if (event.asset.isAsset(MovieClip_1.MovieClip)) {
            this._rootTimeLine = event.asset;
            this._rootTimeLine.partition = new SceneGraphPartition_1.SceneGraphPartition();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlcnMvQVdEM1BhcnNlclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQ0c7O0FBRUgsNkJBQStCLHNDQUFzQyxDQUFDLENBQUE7QUFDdEUsdUJBQTBCLGdDQUFnQyxDQUFDLENBQUE7QUFDM0QsMkJBQTZCLG1DQUFtQyxDQUFDLENBQUE7QUFDakUsMkJBQTZCLGdDQUFnQyxDQUFDLENBQUE7QUFDOUQsNEJBQThCLG9DQUFvQyxDQUFDLENBQUE7QUFDbkUsdUNBQXNDLG9EQUFvRCxDQUFDLENBQUE7QUFDM0YsaUNBQWtDLDhDQUE4QyxDQUFDLENBQUE7QUFDakYsc0NBQXFDLG1EQUFtRCxDQUFDLENBQUE7QUFDekYsc0NBQXFDLDZDQUE2QyxDQUFDLENBQUE7QUFFbkYscUJBQXlCLHlCQUF5QixDQUFDLENBQUE7QUFDbkQsZ0NBQWlDLGdEQUFnRCxDQUFDLENBQUE7QUFDbEYsMEJBQTRCLHNDQUFzQyxDQUFDLENBQUE7QUFDbkUsdUJBQTBCLG1DQUFtQyxDQUFDLENBQUE7QUFDOUQsb0NBQW9DLGtEQUFrRCxDQUFDLENBQUE7QUFFdkYsZ0NBQWlDLHVDQUF1QyxDQUFDLENBQUE7QUFFekUsMEJBQTRCLDhCQUE4QixDQUFDLENBQUE7QUFHM0Q7SUF5QkM7O09BRUc7SUFDSDtRQXBCUSxVQUFLLEdBQVUsQ0FBQyxDQUFDO1FBc0J4QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUQ7O09BRUc7SUFDSyw2QkFBSSxHQUFaO1FBRUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssbUNBQVUsR0FBbEI7UUFFQyxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFdBQUksQ0FB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QUFHLENBQUM7WUFDbkMsQ0FBQztRQUNGLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNMLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsSUFBSSxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNoRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztZQUM3QyxDQUFDO1FBQ0YsQ0FBQztJQUNGLENBQUM7SUFFTyxpQ0FBUSxHQUFoQixVQUFpQixLQUFZO1FBQVoscUJBQVksR0FBWixZQUFZO1FBRTVCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFXLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBVyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBTSxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQzNDLENBQUM7SUFFRixxQkFBQztBQUFELENBeFJBLEFBd1JDLElBQUEiLCJmaWxlIjoicGFyc2Vycy9BV0QzUGFyc2VyVGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5cbiBBV0QzIGZpbGUgbG9hZGluZyBleGFtcGxlIGluIEF3YXlKU1xuXG4gRGVtb25zdHJhdGVzOlxuXG4gSG93IHRvIHVzZSB0aGUgTG9hZGVyIG9iamVjdCB0byBsb2FkIGFuIGVtYmVkZGVkIGludGVybmFsIGF3ZCBtb2RlbC5cblxuIENvZGUgYnkgUm9iIEJhdGVtYW5cbiByb2JAaW5maW5pdGV0dXJ0bGVzLmNvLnVrXG4gaHR0cDovL3d3dy5pbmZpbml0ZXR1cnRsZXMuY28udWtcblxuIFRoaXMgY29kZSBpcyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcblxuIENvcHlyaWdodCAoYykgVGhlIEF3YXkgRm91bmRhdGlvbiBodHRwOi8vd3d3LnRoZWF3YXlmb3VuZGF0aW9uLm9yZ1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIOKAnFNvZnR3YXJl4oCdKSwgdG8gZGVhbFxuIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQg4oCcQVMgSVPigJ0sIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuXG4gKi9cblxuaW1wb3J0IHtBc3NldExpYnJhcnl9XHRcdFx0XHRcdGZyb20gXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9Bc3NldExpYnJhcnlcIjtcbmltcG9ydCB7TG9hZGVyfVx0XHRcdFx0XHRcdGZyb20gXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9Mb2FkZXJcIjtcbmltcG9ydCB7QXNzZXRFdmVudH1cdFx0XHRcdFx0ZnJvbSBcImF3YXlqcy1jb3JlL2xpYi9ldmVudHMvQXNzZXRFdmVudFwiO1xuaW1wb3J0IHtVUkxSZXF1ZXN0fVx0XHRcdFx0XHRmcm9tIFwiYXdheWpzLWNvcmUvbGliL25ldC9VUkxSZXF1ZXN0XCI7XG5pbXBvcnQge0xvYWRlckV2ZW50fVx0XHRcdFx0XHRmcm9tIFwiYXdheWpzLWNvcmUvbGliL2V2ZW50cy9Mb2FkZXJFdmVudFwiO1xuaW1wb3J0IHtPcnRob2dyYXBoaWNQcm9qZWN0aW9ufVx0XHRmcm9tIFwiYXdheWpzLWNvcmUvbGliL3Byb2plY3Rpb25zL09ydGhvZ3JhcGhpY1Byb2plY3Rpb25cIjtcbmltcG9ydCB7Q29vcmRpbmF0ZVN5c3RlbX1cdFx0XHRcdGZyb20gXCJhd2F5anMtY29yZS9saWIvcHJvamVjdGlvbnMvQ29vcmRpbmF0ZVN5c3RlbVwiO1xuaW1wb3J0IHtQZXJzcGVjdGl2ZVByb2plY3Rpb259XHRcdGZyb20gXCJhd2F5anMtY29yZS9saWIvcHJvamVjdGlvbnMvUGVyc3BlY3RpdmVQcm9qZWN0aW9uXCI7XG5pbXBvcnQge1JlcXVlc3RBbmltYXRpb25GcmFtZX1cdFx0ZnJvbSBcImF3YXlqcy1jb3JlL2xpYi91dGlscy9SZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIjtcblxuaW1wb3J0IHtWaWV3fVx0XHRcdFx0XHRcdFx0ZnJvbSBcImF3YXlqcy1kaXNwbGF5L2xpYi9WaWV3XCI7XG5pbXBvcnQge0hvdmVyQ29udHJvbGxlcn1cdFx0XHRcdGZyb20gXCJhd2F5anMtZGlzcGxheS9saWIvY29udHJvbGxlcnMvSG92ZXJDb250cm9sbGVyXCI7XG5pbXBvcnQge01vdmllQ2xpcH1cdFx0XHRcdFx0ZnJvbSBcImF3YXlqcy1kaXNwbGF5L2xpYi9kaXNwbGF5L01vdmllQ2xpcFwiO1xuaW1wb3J0IHtDYW1lcmF9XHRcdFx0XHRcdFx0ZnJvbSBcImF3YXlqcy1kaXNwbGF5L2xpYi9kaXNwbGF5L0NhbWVyYVwiO1xuaW1wb3J0IHtTY2VuZUdyYXBoUGFydGl0aW9ufVx0XHRcdGZyb20gXCJhd2F5anMtZGlzcGxheS9saWIvcGFydGl0aW9uL1NjZW5lR3JhcGhQYXJ0aXRpb25cIjtcblxuaW1wb3J0IHtEZWZhdWx0UmVuZGVyZXJ9XHRcdFx0XHRmcm9tIFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL0RlZmF1bHRSZW5kZXJlclwiO1xuXG5pbXBvcnQge0FXRFBhcnNlcn1cdFx0XHRcdFx0ZnJvbSBcImF3YXlqcy1wYXJzZXJzL2xpYi9BV0RQYXJzZXJcIjtcblxuXG5jbGFzcyBBV0QzUGFyc2VyVGVzdFxue1xuXHQvL2VuZ2luZSB2YXJpYWJsZXNcblx0cHJpdmF0ZSBfdmlldzpWaWV3O1xuXG5cdHByaXZhdGUgX3Jvb3RUaW1lTGluZTpNb3ZpZUNsaXA7XG5cblx0cHJpdmF0ZSBfdGltZXI6UmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRwcml2YXRlIF90aW1lOm51bWJlciA9IDA7XG5cblx0Ly9uYXZpZ2F0aW9uXG5cdHByaXZhdGUgX2xhc3RQYW5BbmdsZTpudW1iZXI7XG5cdHByaXZhdGUgX2xhc3RUaWx0QW5nbGU6bnVtYmVyO1xuXHRwcml2YXRlIF9sYXN0TW91c2VYOm51bWJlcjtcblx0cHJpdmF0ZSBfbGFzdE1vdXNlWTpudW1iZXI7XG5cdHByaXZhdGUgX21vdmU6Ym9vbGVhbjtcblx0cHJpdmF0ZSBfaXNwZXJzcGVjdGl2ZTpib29sZWFuO1xuXHRwcml2YXRlIF9wcm9qZWN0aW9uOlBlcnNwZWN0aXZlUHJvamVjdGlvbjtcblx0cHJpdmF0ZSBfb3J0aG9fcHJvamVjdGlvbjpPcnRob2dyYXBoaWNQcm9qZWN0aW9uO1xuXHRwcml2YXRlIF9ob3ZlckNvbnRyb2w6SG92ZXJDb250cm9sbGVyO1xuXHRwcml2YXRlIF9jYW1lcmFfcGVyc3BlY3RpdmU6Q2FtZXJhO1xuXHRwcml2YXRlIF9jYW1lcmFfb3J0aG86Q2FtZXJhO1xuXHRwcml2YXRlIF9zdGFnZV93aWR0aDpudW1iZXI7XG5cdHByaXZhdGUgX3N0YWdlX2hlaWdodDpudW1iZXI7XG5cblx0LyoqXG5cdCAqIENvbnN0cnVjdG9yXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpXG5cdHtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHbG9iYWwgaW5pdGlhbGlzZSBmdW5jdGlvblxuXHQgKi9cblx0cHJpdmF0ZSBpbml0KClcblx0e1xuXHRcdHRoaXMuaW5pdEVuZ2luZSgpO1xuXHRcdHRoaXMuaW5pdE9iamVjdHMoKTtcblx0XHR0aGlzLmluaXRMaXN0ZW5lcnMoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXNlIHRoZSBlbmdpbmVcblx0ICovXG5cdHByaXZhdGUgaW5pdEVuZ2luZSgpXG5cdHtcblx0XHQvL2NyZWF0ZSB0aGUgdmlld1xuXHRcdHRoaXMuX3ZpZXcgPSBuZXcgVmlldyhuZXcgRGVmYXVsdFJlbmRlcmVyKCkpO1xuXHRcdC8vdGhpcy5fdmlldy5yZW5kZXJlci5yZW5kZXJhYmxlU29ydGVyID0gbmV3IFJlbmRlcmFibGVOdWxsU29ydCgpO1xuXHRcdHRoaXMuX3ZpZXcuYmFja2dyb3VuZENvbG9yID0gMHhmZmZmZmY7XG5cdFx0Ly90aGlzLl92aWV3LmJhY2tncm91bmRDb2xvciA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmdDb2xvclwiKS5pbm5lckhUTUwucmVwbGFjZShcIiNcIiwgXCIweFwiKSk7XG5cdFx0dGhpcy5fc3RhZ2Vfd2lkdGggPSA1NTA7IC8vcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhd2RXaWR0aFwiKS5pbm5lckhUTUwpO1xuXHRcdHRoaXMuX3N0YWdlX2hlaWdodCA9IDQwMDsgLy9wYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF3ZEhlaWdodFwiKS5pbm5lckhUTUwpO1xuXHRcdHRoaXMuX2lzcGVyc3BlY3RpdmU9dHJ1ZTtcblx0XHR0aGlzLl9wcm9qZWN0aW9uID0gbmV3IFBlcnNwZWN0aXZlUHJvamVjdGlvbigpO1xuXHRcdHRoaXMuX3Byb2plY3Rpb24uY29vcmRpbmF0ZVN5c3RlbSA9IENvb3JkaW5hdGVTeXN0ZW0uUklHSFRfSEFOREVEO1xuXHRcdHRoaXMuX3Byb2plY3Rpb24uZm9jYWxMZW5ndGggPSAxMDAwO1xuXHRcdHRoaXMuX3Byb2plY3Rpb24ucHJlc2VydmVGb2NhbExlbmd0aCA9IHRydWU7XG5cdFx0dGhpcy5fcHJvamVjdGlvbi5vcmlnaW5YID0gMC41O1xuXHRcdHRoaXMuX3Byb2plY3Rpb24ub3JpZ2luWSA9IDAuNTtcblx0XHR0aGlzLl9jYW1lcmFfcGVyc3BlY3RpdmUgPSBuZXcgQ2FtZXJhKCk7XG5cdFx0dGhpcy5fY2FtZXJhX3BlcnNwZWN0aXZlLnByb2plY3Rpb24gPSB0aGlzLl9wcm9qZWN0aW9uO1xuXHRcdC8vdGhpcy5fcHJvamVjdGlvbi5mYXIgPSA1MDAwMDA7XG5cdFx0dGhpcy5faG92ZXJDb250cm9sID0gbmV3IEhvdmVyQ29udHJvbGxlcih0aGlzLl9jYW1lcmFfcGVyc3BlY3RpdmUsIG51bGwsIDE4MCwgMCwgMTAwMCk7XG5cdFx0dGhpcy5fb3J0aG9fcHJvamVjdGlvbiA9IG5ldyBPcnRob2dyYXBoaWNQcm9qZWN0aW9uKDUwMCk7XG5cdFx0dGhpcy5fb3J0aG9fcHJvamVjdGlvbi5jb29yZGluYXRlU3lzdGVtID0gQ29vcmRpbmF0ZVN5c3RlbS5SSUdIVF9IQU5ERUQ7XG5cdFx0dGhpcy5fb3J0aG9fcHJvamVjdGlvbi5mYXIgPSA1MDAwMDA7XG5cdFx0dGhpcy5fb3J0aG9fcHJvamVjdGlvbi5uZWFyID0gMC4xO1xuXHRcdHRoaXMuX29ydGhvX3Byb2plY3Rpb24ub3JpZ2luWCA9IDAuNTtcblx0XHR0aGlzLl9vcnRob19wcm9qZWN0aW9uLm9yaWdpblkgPSAwLjU7XG5cdFx0dGhpcy5fY2FtZXJhX29ydGhvID0gbmV3IENhbWVyYSgpO1xuXHRcdHRoaXMuX2NhbWVyYV9vcnRoby5wcm9qZWN0aW9uID0gdGhpcy5fb3J0aG9fcHJvamVjdGlvbjtcblx0XHR0aGlzLl92aWV3LmNhbWVyYSA9IHRoaXMuX2NhbWVyYV9wZXJzcGVjdGl2ZTtcblx0XHR0aGlzLl9jYW1lcmFfb3J0aG8ueCA9IDA7XG5cdFx0dGhpcy5fY2FtZXJhX29ydGhvLnkgPSAwO1xuXHRcdHRoaXMuX2NhbWVyYV9vcnRoby5zY2FsZVkgPSAtMTtcblx0XHR0aGlzLl9jYW1lcmFfb3J0aG8ueiA9IDA7XG5cdH1cblxuXHQvKipcblx0ICogSW5pdGlhbGlzZSB0aGUgc2NlbmUgb2JqZWN0c1xuXHQgKi9cblx0cHJpdmF0ZSBpbml0T2JqZWN0cygpXG5cdHtcblx0XHRBc3NldExpYnJhcnkuZW5hYmxlUGFyc2VyKEFXRFBhcnNlcik7XG5cblx0XHQvL2tpY2tvZmYgYXNzZXQgbG9hZGluZ1xuXHRcdHZhciBsb2FkZXI6TG9hZGVyID0gbmV3IExvYWRlcigpO1xuXHRcdGxvYWRlci5hZGRFdmVudExpc3RlbmVyKEFzc2V0RXZlbnQuQVNTRVRfQ09NUExFVEUsIChldmVudDpBc3NldEV2ZW50KSA9PiB0aGlzLm9uQXNzZXRDb21wbGV0ZShldmVudCkpO1xuXHRcdGxvYWRlci5hZGRFdmVudExpc3RlbmVyKExvYWRlckV2ZW50LkxPQURfQ09NUExFVEUsIChldmVudDpMb2FkZXJFdmVudCkgPT4gdGhpcy5vbkxvYWRDb21wbGV0ZShldmVudCkpO1xuXG5cblx0XHQvL2xvYWRlci5sb2FkKG5ldyBVUkxSZXF1ZXN0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXdkUGF0aFwiKS5pbm5lckhUTUwpKTtcblx0XHRsb2FkZXIubG9hZChuZXcgVVJMUmVxdWVzdChcImFzc2V0cy9BV0QzL1NjYXJlQ3Jvdy5hd2RcIikpO1xuXHRcdC8vbG9hZGVyLmxvYWQobmV3IFVSTFJlcXVlc3QoXCJhc3NldHMvQVdEMy9OZXN0ZWRUd2Vlbi5hd2RcIikpO1xuXHRcdC8vbG9hZGVyLmxvYWQobmV3IFVSTFJlcXVlc3QoXCJhc3NldHMvQVdEMy9TaW1wbGVTaGFwZS5hd2RcIikpO1xuXHRcdC8vbG9hZGVyLmxvYWQobmV3IFVSTFJlcXVlc3QoXCJhc3NldHMvQVdEMy9Db21wbGV4U2hhcGUuYXdkXCIpKTtcblx0XHQvL2xvYWRlci5sb2FkKG5ldyBVUkxSZXF1ZXN0KFwiYXNzZXRzL0FXRDMvU2ltcGxlX21hc2tfdGVzdC5hd2RcIikpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpc2UgdGhlIGxpc3RlbmVyc1xuXHQgKi9cblx0cHJpdmF0ZSBpbml0TGlzdGVuZXJzKClcblx0e1xuXHRcdHdpbmRvdy5vbnJlc2l6ZSAgPSAoZXZlbnQpID0+IHRoaXMub25SZXNpemUoZXZlbnQpO1xuXG5cdFx0ZG9jdW1lbnQub25rZXlkb3duID0gKGV2ZW50KSA9PiB0aGlzLm9uS2V5RG93bihldmVudCk7XG5cdFx0ZG9jdW1lbnQub25tb3VzZWRvd24gPSAoZXZlbnQpID0+IHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuXHRcdGRvY3VtZW50Lm9ubW91c2V1cCA9IChldmVudCkgPT4gdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuXHRcdGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gKGV2ZW50KSA9PiB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcblx0XHRkb2N1bWVudC5vbm1vdXNld2hlZWwgPSAoZXZlbnQpID0+IHRoaXMub25Nb3VzZVdoZWVsKGV2ZW50KTtcblxuXHRcdHRoaXMub25SZXNpemUoKTtcblxuXHRcdHRoaXMuX3RpbWVyID0gbmV3IFJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm9uRW50ZXJGcmFtZSwgdGhpcyk7XG5cdFx0dGhpcy5fdGltZXIuc3RhcnQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBsb2FkZXIgbGlzdGVuZXIgZm9yIGFzc2V0IGNvbXBsZXRlIGV2ZW50c1xuXHQgKi9cblx0cHJpdmF0ZSBvbkFzc2V0Q29tcGxldGUoZXZlbnQ6QXNzZXRFdmVudClcblx0e1xuXHRcdGlmKGV2ZW50LmFzc2V0LmlzQXNzZXQoTW92aWVDbGlwKSkge1xuXHRcdFx0dGhpcy5fcm9vdFRpbWVMaW5lID0gPE1vdmllQ2xpcD4gZXZlbnQuYXNzZXQ7XG5cdFx0XHR0aGlzLl9yb290VGltZUxpbmUucGFydGl0aW9uID0gbmV3IFNjZW5lR3JhcGhQYXJ0aXRpb24oKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogbG9hZGVyIGxpc3RlbmVyIGZvciBhc3NldCBjb21wbGV0ZSBldmVudHNcblx0ICovXG5cdHByaXZhdGUgb25Mb2FkQ29tcGxldGUoZXZlbnQ6TG9hZGVyRXZlbnQpXG5cdHtcblx0XHRpZiAodGhpcy5fcm9vdFRpbWVMaW5lKSB7XG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiTE9BRElORyBBIFJPT1QgbmFtZSA9IFwiICsgdGhpcy5fcm9vdFRpbWVMaW5lLm5hbWUgKyBcIiBkdXJhdGlvbj1cIiArIHRoaXMuX3Jvb3RUaW1lTGluZS5kdXJhdGlvbik7XG5cdFx0XHR0aGlzLl92aWV3LnNjZW5lLmFkZENoaWxkKHRoaXMuX3Jvb3RUaW1lTGluZSk7XG5cdFx0XHR0aGlzLl9yb290VGltZUxpbmUueD0tdGhpcy5fc3RhZ2Vfd2lkdGgvMjtcblx0XHRcdHRoaXMuX3Jvb3RUaW1lTGluZS55PS10aGlzLl9zdGFnZV9oZWlnaHQvMjtcblx0XHRcdC8vIGF1dG9wbGF5IGxpa2UgaW4gRmxhc2hcblx0XHRcdC8vdGhpcy5fcm9vdFRpbWVMaW5lLnBsYXkoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmVuZGVyIGxvb3Bcblx0ICovXG5cdHByaXZhdGUgb25FbnRlckZyYW1lKGR0Om51bWJlcilcblx0e1xuXHRcdHRoaXMuX3RpbWUgKz0gZHQ7XG5cblx0XHQvL3VwZGF0ZSBjYW1lcmEgY29udHJvbGVyXG5cdFx0Ly8gdGhpcy5fY2FtZXJhQ29udHJvbGxlci51cGRhdGUoKTtcblxuXHRcdGlmICh0aGlzLl9yb290VGltZUxpbmUgIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiUkVOREVSID0gXCIpO1xuXHRcdFx0dGhpcy5fcm9vdFRpbWVMaW5lLnVwZGF0ZSgpO1xuXHRcdH1cblx0XHQvL2NvbnNvbGUubG9nKFwiUkVOREVSID0gXCIpO1xuXHRcdC8vdXBkYXRlIHZpZXdcblx0XHR0aGlzLl92aWV3LnJlbmRlcigpO1xuXHR9XG5cblx0cHJpdmF0ZSBvbktleURvd24oZXZlbnQpXG5cdHtcblx0XHRjb25zb2xlLmxvZyhcImtleWNvZGUgPSBcIitldmVudC5rZXlDb2RlKTtcblx0XHRpZiAoZXZlbnQua2V5Q29kZSA9PSA4MCkge1xuXHRcdFx0dGhpcy5faXNwZXJzcGVjdGl2ZSA9IHRydWU7XG5cdFx0XHR0aGlzLl92aWV3LmNhbWVyYSA9IHRoaXMuX2NhbWVyYV9wZXJzcGVjdGl2ZTtcblx0XHR9XG5cdFx0aWYgKGV2ZW50LmtleUNvZGUgPT0gNzkpIHtcblx0XHRcdHRoaXMuX2lzcGVyc3BlY3RpdmUgPSBmYWxzZTtcblx0XHRcdHRoaXMuX3ZpZXcuY2FtZXJhID0gdGhpcy5fY2FtZXJhX29ydGhvO1xuXHRcdH1cblx0XHRpZiAoZXZlbnQua2V5Q29kZSA9PSA4MSkge1xuXHRcdFx0aWYgKHRoaXMuX2lzcGVyc3BlY3RpdmUpIHtcblx0XHRcdFx0dGhpcy5faG92ZXJDb250cm9sLmRpc3RhbmNlICs9IDU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5fb3J0aG9fcHJvamVjdGlvbi5wcm9qZWN0aW9uSGVpZ2h0ICs9IDU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT0gODcpIHtcblx0XHRcdGlmICh0aGlzLl9pc3BlcnNwZWN0aXZlKSB7XG5cdFx0XHRcdHRoaXMuX2hvdmVyQ29udHJvbC5kaXN0YW5jZSAtPSA1O1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMuX29ydGhvX3Byb2plY3Rpb24ucHJvamVjdGlvbkhlaWdodCAtPSA1O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoZXZlbnQua2V5Q29kZSA9PSA2NSkge1xuXHRcdFx0aWYgKHRoaXMuX2lzcGVyc3BlY3RpdmUpIHtcblx0XHRcdFx0dGhpcy5faG92ZXJDb250cm9sLmRpc3RhbmNlICs9IDUwO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMuX29ydGhvX3Byb2plY3Rpb24ucHJvamVjdGlvbkhlaWdodCArPSA1MDtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PSA4Mykge1xuXHRcdFx0aWYgKHRoaXMuX2lzcGVyc3BlY3RpdmUpIHtcblx0XHRcdFx0dGhpcy5faG92ZXJDb250cm9sLmRpc3RhbmNlIC09IDUwO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMuX29ydGhvX3Byb2plY3Rpb24ucHJvamVjdGlvbkhlaWdodCAtPSA1MDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIG9uTW91c2VEb3duKGV2ZW50KVxuXHR7XG5cdFx0dGhpcy5fbGFzdFBhbkFuZ2xlID0gdGhpcy5faG92ZXJDb250cm9sLnBhbkFuZ2xlO1xuXHRcdHRoaXMuX2xhc3RUaWx0QW5nbGUgPSB0aGlzLl9ob3ZlckNvbnRyb2wudGlsdEFuZ2xlO1xuXHRcdHRoaXMuX2xhc3RNb3VzZVggPSBldmVudC5jbGllbnRYO1xuXHRcdHRoaXMuX2xhc3RNb3VzZVkgPSBldmVudC5jbGllbnRZO1xuXHRcdHRoaXMuX21vdmUgPSB0cnVlO1xuXHR9XG5cblx0cHJpdmF0ZSBvbk1vdXNlVXAoZXZlbnQpXG5cdHtcblx0XHR0aGlzLl9tb3ZlID0gZmFsc2U7XG5cdH1cblxuXHRwcml2YXRlIG9uTW91c2VNb3ZlKGV2ZW50KVxuXHR7XG5cdFx0aWYgKHRoaXMuX21vdmUpIHtcblx0XHRcdGlmICh0aGlzLl9pc3BlcnNwZWN0aXZlKSB7XG5cdFx0XHRcdHRoaXMuX2hvdmVyQ29udHJvbC5wYW5BbmdsZSA9IDAuMyAqIChldmVudC5jbGllbnRYIC0gdGhpcy5fbGFzdE1vdXNlWCkgKyB0aGlzLl9sYXN0UGFuQW5nbGU7XG5cdFx0XHRcdHRoaXMuX2hvdmVyQ29udHJvbC50aWx0QW5nbGUgPSAtMC4zICogKGV2ZW50LmNsaWVudFkgLSB0aGlzLl9sYXN0TW91c2VZKSArIHRoaXMuX2xhc3RUaWx0QW5nbGU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0aWYgKGV2ZW50LmNsaWVudFggPiAodGhpcy5fbGFzdE1vdXNlWCArIDEwKSlcblx0XHRcdFx0XHR0aGlzLl9jYW1lcmFfb3J0aG8ueCAtPSAxMDtcblx0XHRcdFx0ZWxzZSBpZiAoZXZlbnQuY2xpZW50WCA+IHRoaXMuX2xhc3RNb3VzZVgpXG5cdFx0XHRcdFx0dGhpcy5fY2FtZXJhX29ydGhvLngtLTtcblx0XHRcdFx0ZWxzZSBpZiAoZXZlbnQuY2xpZW50WCA8ICh0aGlzLl9sYXN0TW91c2VYIC0gMTApKVxuXHRcdFx0XHRcdHRoaXMuX2NhbWVyYV9vcnRoby54ICs9IDEwO1xuXHRcdFx0XHRlbHNlIGlmIChldmVudC5jbGllbnRYIDwgdGhpcy5fbGFzdE1vdXNlWClcblx0XHRcdFx0XHR0aGlzLl9jYW1lcmFfb3J0aG8ueCsrO1xuXHRcdFx0XHRpZiAoZXZlbnQuY2xpZW50WSA+ICh0aGlzLl9sYXN0TW91c2VZICsgMTApKVxuXHRcdFx0XHRcdHRoaXMuX2NhbWVyYV9vcnRoby55IC09IDEwO1xuXHRcdFx0XHRlbHNlIGlmIChldmVudC5jbGllbnRZID4gdGhpcy5fbGFzdE1vdXNlWSlcblx0XHRcdFx0XHR0aGlzLl9jYW1lcmFfb3J0aG8ueS0tO1xuXHRcdFx0XHRlbHNlIGlmIChldmVudC5jbGllbnRZIDwgKHRoaXMuX2xhc3RNb3VzZVkgLSAxMCkpXG5cdFx0XHRcdFx0dGhpcy5fY2FtZXJhX29ydGhvLnkgKz0gMTA7XG5cdFx0XHRcdGVsc2UgaWYgKGV2ZW50LmNsaWVudFkgPCB0aGlzLl9sYXN0TW91c2VZKVxuXHRcdFx0XHRcdHRoaXMuX2NhbWVyYV9vcnRoby55Kys7XG5cdFx0XHRcdHRoaXMuX2xhc3RNb3VzZVggPSBldmVudC5jbGllbnRYO1xuXHRcdFx0XHR0aGlzLl9sYXN0TW91c2VZID0gZXZlbnQuY2xpZW50WTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIG9uTW91c2VXaGVlbChldmVudClcblx0e1xuXG5cdFx0aWYgKHRoaXMuX2lzcGVyc3BlY3RpdmUpIHtcblx0XHRcdHRoaXMuX2hvdmVyQ29udHJvbC5kaXN0YW5jZSAtPSBldmVudC53aGVlbERlbHRhICogNTtcblx0XHRcdGlmICh0aGlzLl9ob3ZlckNvbnRyb2wuZGlzdGFuY2UgPCAxMDApIHtcblx0XHRcdFx0dGhpcy5faG92ZXJDb250cm9sLmRpc3RhbmNlID0gMTAwO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuX29ydGhvX3Byb2plY3Rpb24ucHJvamVjdGlvbkhlaWdodCAtPSBldmVudC53aGVlbERlbHRhICogNTtcblx0XHRcdGlmICh0aGlzLl9vcnRob19wcm9qZWN0aW9uLnByb2plY3Rpb25IZWlnaHQgPCA1KSB7XG5cdFx0XHRcdHRoaXMuX29ydGhvX3Byb2plY3Rpb24ucHJvamVjdGlvbkhlaWdodCA9IDU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBvblJlc2l6ZShldmVudCA9IG51bGwpXG5cdHtcblx0XHR0aGlzLl92aWV3LnkgICAgICAgICA9IDA7XG5cdFx0dGhpcy5fdmlldy54ICAgICAgICAgPSAwO1xuXHRcdHRoaXMuX3ZpZXcud2lkdGggICAgID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0dGhpcy5fdmlldy5oZWlnaHQgICAgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii4vdGVzdHMifQ==
