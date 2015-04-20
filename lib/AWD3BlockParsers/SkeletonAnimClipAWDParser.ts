
import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");
import AWD3Utils				= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");

import SkeletonClipNode					= require("awayjs-renderergl/lib/animators/nodes/SkeletonClipNode");
import SkeletonPose						= require("awayjs-renderergl/lib/animators/data/SkeletonPose");

class SkeletonAnimClipAWDParser extends AWDBlockParserBase
{

	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{
		var frame_dur:number;
		var pose_addr:number /*uint*/;
		var clip:SkeletonClipNode = new SkeletonClipNode();
		this.awd_file_data.cur_block.name = this.awd_file_data.parseVarStr();
		var num_frames:number /*uint*/ = this.awd_file_data.newBlockBytes.readUnsignedShort();
		this.awd_file_data.parseProperties(null); // Ignore properties for now

		var frames_parsed:number /*uint*/ = 0;
		while (frames_parsed < num_frames) {
			pose_addr = this.awd_file_data.newBlockBytes.readUnsignedInt();
			frame_dur = this.awd_file_data.newBlockBytes.readUnsignedShort();
			var skel_pose:SkeletonPose = <SkeletonPose>this.awd_file_data.getAssetByID(pose_addr);
			if (skel_pose!=undefined) {
				clip.addFrame(skel_pose, frame_dur);
			}
			frames_parsed++;
		}
		// Ignore attributes for now
		this.awd_file_data.parseUserAttributes();
		this.awd_file_data.cur_block.data = clip;
		if (this.awd_file_data.debug)
			console.log("Parsed a SkeletonClipNode: Name = " + this.awd_file_data.cur_block.name + " | Number of Frames = " + clip.frames.length);
	}


}

export = SkeletonAnimClipAWDParser;