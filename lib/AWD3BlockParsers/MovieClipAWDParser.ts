
import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDBitFlags				= require("awayjs-parsers/lib/AWD3ParserUtils/AWDBitFlags");
import DisplayObject					= require("awayjs-display/lib/base/DisplayObject");

import ColorTransform					= require("awayjs-core/lib/geom/ColorTransform");
import Matrix3D							= require("awayjs-core/lib/geom/Matrix3D");

import MovieClip 					= require("awayjs-display/lib/entities/MovieClip");
import Timeline			 			= require("awayjs-display/lib/base/Timeline");

import Vector3D							= require("awayjs-core/lib/geom/Vector3D");

import TextField					= require("awayjs-display/lib/entities/TextField");
import View			= require("awayjs-display/lib/containers/View");

import AS2SceneGraphFactory 		= require("awayjs-player/lib/factories/AS2SceneGraphFactory");

class MovieClipAWDParser extends AWDBlockParserBase
{

	private factory:AS2SceneGraphFactory;
	constructor(view:View = null)
	{
		super();
		this.factory = new AS2SceneGraphFactory(view);
	}


	public parseFromBytes():void
	{

		var i:number;
		var j:number;
		var c:number;
		var new_timeline:Timeline = new Timeline();
		var new_mc = this.factory.createMovieClip(new_timeline)
		this.awd_file_data.cur_block.name = this.awd_file_data.parseVarStr();
		var isScene = !!this.awd_file_data.newBlockBytes.readUnsignedByte();
		var sceneID = this.awd_file_data.newBlockBytes.readUnsignedByte();
		var fps:number = this.awd_file_data.newBlockBytes.readFloat();
		//console.log("fps = "+fps);
		//new_mc.fps=fps;
		var ms_per_frame = 1000 / fps;
		var num_instances:number=0;
		var num_all_display_instances:number=0;


		// register list of potential childs
		// a potential child can be reused on a timeline (added / removed / added)
		// However, for each potential child, we need to register the max-number of instances that a frame contains
		// we parse 2 lists of potential-childs:
		// -	the first list contains potential-childs that are only ever instanced once per frame.
		// -	the second list contains potential-childs that are instanced multiple times on some frames.

		// on registering a child, the child gets a incremental-id assigned. This is the id, that the commands are using to access the childs.
		// hence we need to be careful to register all objects in correct order.

		var num_potential_childs:number = this.awd_file_data.newBlockBytes.readUnsignedShort();
		for (i = 0; i < num_potential_childs; i++) {
			resourceID = this.awd_file_data.newBlockBytes.readUnsignedInt();
			var cmd_asset:DisplayObject = <DisplayObject>this.awd_file_data.getAssetByID(resourceID);
			if (cmd_asset != null) {
				new_timeline.registerPotentialChild(cmd_asset);
			}
			else{
				//todo: register a default display object on timeline, so we do not mess up the incremental obj-id
				//new_mc.registerPotentialChild(cmd_asset);
				console.log("ERROR when collecting objects for timeline");
			}
		}
		num_all_display_instances+=num_potential_childs;
		var num_potential_childs_multi_instanced = this.awd_file_data.newBlockBytes.readUnsignedShort();
		num_potential_childs+=num_potential_childs_multi_instanced;
		for (i = 0; i < num_potential_childs_multi_instanced; i++) {
			resourceID = this.awd_file_data.newBlockBytes.readUnsignedInt();
			num_instances = this.awd_file_data.newBlockBytes.readUnsignedShort();
			num_all_display_instances+=num_instances;
			var cmd_asset:DisplayObject = <DisplayObject>this.awd_file_data.getAssetByID(resourceID);
			if (cmd_asset != null) {
				for (j = 0; j < num_instances; j++) {
					new_timeline.registerPotentialChild(cmd_asset);
				}
			}
			else{
				for (j = 0; j < num_instances; j++) {
					//todo: register a default display object on timeline, so we do not mess up the incremental obj-id
					//new_mc.registerPotentialChild(cmd_asset);
					console.log("ERROR when collecting objects for timeline");
				}
			}
		}
		//console.log("Parsed "+num_potential_childs+" potential childs. They will be used by "+num_all_display_instances+" instances.");

		// register list of potential sounds
		// a potential child can be reused on a timeline (added / removed / added)
		var num_potential_sounds = this.awd_file_data.newBlockBytes.readUnsignedShort();
		for (i = 0; i < num_potential_sounds; i++) {
			resourceID = this.awd_file_data.newBlockBytes.readUnsignedInt();
			var cmd_asset:DisplayObject = <DisplayObject>this.awd_file_data.getAssetByID(resourceID);
			if (cmd_asset != null) {
				//todo: register sound objects on movieclip
				console.log("ERROR when collecting objects for timeline");
				//new_mc.registerPotentialChild(cmd_asset);
			}
			else{
				//todo: this.awd_file_data is a error that might break complete timeline, because all sound obj-id shift
			}
		}
		//console.log("Parsed "+num_potential_sounds+" potential sounds");

		var numFrames = this.awd_file_data.newBlockBytes.readUnsignedShort();

		//console.log("numFrames "+numFrames);

		var totalDuration:number = 0;
		var frameDuration:number;
		var numLabels:number;
		var numCommands:number;
		var objectID:number;
		var target_depth:number;
		var resourceID:number;
		var number_of_obj:number;
		var commandType:number;
		//var frame:TimelineKeyFrame;
		var hasDepthChanges:boolean;
		var sessionCount:number=0;
		for (i = 0; i < numFrames; i++) {
			// todo: remove the ms_per_frame to set the duration in frames
			frameDuration = this.awd_file_data.newBlockBytes.readUnsignedInt()*ms_per_frame;
			//frame = new TimelineKeyFrame(totalDuration, frameDuration);
			totalDuration += frameDuration;

			numLabels = this.awd_file_data.newBlockBytes.readUnsignedByte();
			//for (j = 0; j < numLabels; j++)
			//	new_timeline._labels[this.awd_file_data.parseVarStr()]=new_timeline.numKeyFrames();

			numCommands = this.awd_file_data.newBlockBytes.readUnsignedShort();
			//console.log("numCommands "+numCommands);
			//traceString += "\n      Commands " + numCommands;
			hasDepthChanges = false;
			for (j = 0; j < numCommands; j++) {
				commandType = this.awd_file_data.newBlockBytes.readUnsignedByte();

				// 1 = remove a number of objects by depth
				// 2 = add a object by child-id at specific depth
				// 3 = update a object by child-id
				// 4 = add / update sound - (not finished)

				switch (commandType) {

					case 1:// remove a number of objects at specific depth
						number_of_obj = this.awd_file_data.newBlockBytes.readUnsignedShort();
						//console.log("number_of_obj ", number_of_obj);
						var remove_depths:Array<number>=new Array<number>();
						for (c = 0; c < number_of_obj; c++) {
							// Remove Object Command
							target_depth = this.awd_file_data.newBlockBytes.readShort();
							remove_depths.push(target_depth);
							//console.log("\n       - Remove object at depth: " + target_depth);
						}
						//frame.frameConstructCommands.push(new RemoveChildrenAtDepthCommand(remove_depths));
						break;

					case 2:// add a of object by child-id at specific depth
					case 3:// update a object by child-id
						objectID = this.awd_file_data.newBlockBytes.readUnsignedShort();
						//console.log("add / update objectID ", objectID);
						if (commandType == 2) {
							hasDepthChanges=true;
							target_depth = this.awd_file_data.newBlockBytes.readShort();
							//console.log("target_depth ", target_depth);
							var potChild = new_timeline.getPotentialChildPrototype(objectID);
							if (potChild != undefined) {
								//frame.frameConstructCommands.push(new AddChildAtDepthCommand(objectID, target_depth, sessionCount));
								sessionCount++;
								// if the object is a tetfield, we set the textfield-name as instancename
								if(potChild.isAsset(TextField)) {
									//frame.frameConstructCommands.push(new SetInstanceNameCommand(objectID, potChild.name));
								}
							}
							else{
								console.log("ERROR: could not find the objectID ", objectID);
							}
						}
						var props_flag = this.awd_file_data.newBlockBytes.readUnsignedShort();
						/*	Props_flags
						 1: read display matrix - 6 x float,
						 2: read display matrix - read another UINT8-bitflag that determinates what matrix components to parse
						 3: read color matrix - 4 x float, 4 x uint16
						 4: read color matrix - read another UINT8-bitflag that determinates what matrix components to parse
						 5: blendmode - uint8
						 6: visible - boolean
						 7: AWD3Parser.UINT8
						 });*/
						// read display matrix
						if (AWDBitFlags.test(props_flag, AWDBitFlags.FLAG1)) {
							var thisMatrix = new Matrix3D();
							if (AWDBitFlags.test(props_flag, AWDBitFlags.FLAG2)) {
							}
							else {
								thisMatrix.rawData[0] = this.awd_file_data.newBlockBytes.readFloat();
								thisMatrix.rawData[1] = this.awd_file_data.newBlockBytes.readFloat();
								thisMatrix.rawData[4] = this.awd_file_data.newBlockBytes.readFloat();
								thisMatrix.rawData[5] = this.awd_file_data.newBlockBytes.readFloat();
								thisMatrix.position = new Vector3D(this.awd_file_data.newBlockBytes.readFloat(), this.awd_file_data.newBlockBytes.readFloat(), 0);
							}
							//frame.frameConstructCommands.push(new UpdatePropertyCommand(objectID, "_iMatrix3D", thisMatrix));
						}
						// read colortransforms
						if (AWDBitFlags.test(props_flag, AWDBitFlags.FLAG3)) {
							var thisColorTransform = new ColorTransform();
							if (AWDBitFlags.test(props_flag, AWDBitFlags.FLAG4)) {
							}
							else {
								thisColorTransform.redMultiplier = this.awd_file_data.newBlockBytes.readFloat();
								thisColorTransform.greenMultiplier = this.awd_file_data.newBlockBytes.readFloat();
								thisColorTransform.blueMultiplier = this.awd_file_data.newBlockBytes.readFloat();
								thisColorTransform.alphaMultiplier = this.awd_file_data.newBlockBytes.readFloat();
								thisColorTransform.redOffset = this.awd_file_data.newBlockBytes.readShort();
								thisColorTransform.greenOffset = this.awd_file_data.newBlockBytes.readShort();
								thisColorTransform.blueOffset = this.awd_file_data.newBlockBytes.readShort();
								thisColorTransform.alphaOffset = this.awd_file_data.newBlockBytes.readShort();
							}
						}
						if (AWDBitFlags.test(props_flag, AWDBitFlags.FLAG5)) {
							var blendmode_int = this.awd_file_data.newBlockBytes.readUnsignedByte();
							var blendmode_string = this.awd_file_data.getBlendModeStringFromEnum(blendmode_int);
						}
						if (AWDBitFlags.test(props_flag, AWDBitFlags.FLAG6)) {
							//frame.frameConstructCommands.push(new UpdatePropertyCommand(objectID, "visible", this.awd_file_data.newBlockBytes.readByte()));
						}
						if (AWDBitFlags.test(props_flag, AWDBitFlags.FLAG7)) {
							var instanceName = this.awd_file_data.parseVarStr();
							if (instanceName.length) {
								//frame.frameConstructCommands.push(new SetInstanceNameCommand(objectID, instanceName));
							}
						}
						if (AWDBitFlags.test(props_flag, AWDBitFlags.FLAG8)) {
							var mask_id_nums = this.awd_file_data.newBlockBytes.readUnsignedShort();
							var mask_ids = new Array();
							for (var mi_cnt = 0; mi_cnt < mask_id_nums; mi_cnt++) {
								mask_ids.push(this.awd_file_data.newBlockBytes.readShort());
							}
							if (mask_ids.length > 0) {
								if ((mask_ids.length == 1) && (mask_ids[0] == -1)) {
									// TODO: this.awd_file_data object is used as mask
									//frame.frameConstructCommands.push(new UpdatePropertyCommand(objectID, "_iMaskID", objectID));
								}
								//else
								//	frame.frameConstructCommands.push(new SetMaskCommand(objectID, mask_ids));
							}
						}
						break;

					case 4:

						// Add Sound Command
						// TODO: create CommandPropsSound and check which asset to use
						objectID = this.awd_file_data.newBlockBytes.readUnsignedInt();
						resourceID = this.awd_file_data.newBlockBytes.readUnsignedInt();
						// TODO: implement sound in timeline
						//commandString += "\n      - Add new Sound AWD-ID = " + resourceID.toString() + " as object_id = " + objectID.toString();
						break;

					default:

						//commandString += "\n       - Unknown Command Type = " + commandType;
						break;

				}
			}

			if (hasDepthChanges) {
				// only want to do this.awd_file_data once after all children's depth values are updated
				//frame.frameConstructCommands.push(new ApplyAS2DepthsCommand());
				hasDepthChanges = false;
			}

			var length_code = this.awd_file_data.newBlockBytes.readUnsignedInt();
			if (length_code > 0) {
				// TODO: Script should probably not be attached to keyframes?
				//var frame_code = this.awd_file_data.newBlockBytes.readUTFBytes(length_code);
				//frame.framePostConstructCommands.push(new ExecuteScriptCommand(frame_code));
				//traceString += "\nframe-code = " + frame_code;
			}
			//traceString += commandString;
			//trace("length_code = "+length_code+" frame_code = "+frame_code);
			this.awd_file_data.newBlockBytes.readUnsignedInt();// user attributes - skip for now
			//console.log(traceString);
			//new_timeline.addFrame(frame);

		}
		this.awd_file_data.parseProperties(null);
		this.awd_file_data.parseUserAttributes();
		this.awd_file_data.cur_block.data = new_mc;
		if (this.awd_file_data.debug)
			console.log("Parsed a TIMELINE: Name = " + name + "| isScene = " + isScene + "| sceneID = " + sceneID + "| numFrames = " + numFrames);
	}


}

export = MovieClipAWDParser;