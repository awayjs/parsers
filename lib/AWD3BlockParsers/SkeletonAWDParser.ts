
import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");
import AWD3Utils				= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");

import Skeleton							= require("awayjs-renderergl/lib/animators/data/Skeleton");
import SkeletonJoint					= require("awayjs-renderergl/lib/animators/data/SkeletonJoint");
import Matrix3D							= require("awayjs-core/lib/geom/Matrix3D");

class SkeletonAWDParser extends AWDBlockParserBase
{

	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{
		var skeleton:Skeleton = new Skeleton();
		this.awd_file_data.cur_block.name = this.awd_file_data.parseVarStr();
		var num_joints:number /*uint*/ = this.awd_file_data.newBlockBytes.readUnsignedShort();
		this.awd_file_data.parseProperties(null); // Discard properties for now

		var joints_parsed:number /*uint*/ = 0;
		while (joints_parsed < num_joints) {
			var joint:SkeletonJoint;
			var ibp:Matrix3D;
			// Ignore joint id
			this.awd_file_data.newBlockBytes.readUnsignedShort();
			joint = new SkeletonJoint();
			joint.parentIndex = this.awd_file_data.newBlockBytes.readUnsignedShort() - 1; // 0=null in AWD
			joint.name = this.awd_file_data.parseVarStr();

			ibp = this.awd_file_data.parseMatrix3D();
			joint.inverseBindPose = ibp.rawData;
			// Ignore joint props/attributes for now
			this.awd_file_data.parseProperties(null);
			this.awd_file_data.parseUserAttributes();
			skeleton.joints.push(joint);
			joints_parsed++;
		}

		// Discard attributes for now
		this.awd_file_data.parseUserAttributes();
		this.awd_file_data.cur_block.data = skeleton;
		if (this.awd_file_data.debug)
			console.log("Parsed a Skeleton: Name = " + this.awd_file_data.cur_block.name + " | Number of Joints = " + joints_parsed);
	}


}

export = SkeletonAWDParser;