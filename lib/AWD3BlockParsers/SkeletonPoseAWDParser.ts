
import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");
import AWD3Utils				= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");

import SkeletonPose						= require("awayjs-renderergl/lib/animators/data/SkeletonPose");
import JointPose						= require("awayjs-renderergl/lib/animators/data/JointPose");
import Matrix3D							= require("awayjs-core/lib/geom/Matrix3D");

class SkeletonPoseAWDParser extends AWDBlockParserBase
{

	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{
		var pose:SkeletonPose = new SkeletonPose();
		this.awd_file_data.cur_block.name = this.awd_file_data.parseVarStr();
		var num_joints:number /*uint*/ = this.awd_file_data.newBlockBytes.readUnsignedShort();
		this.awd_file_data.parseProperties(null); // Ignore properties for now


		var joints_parsed:number /*uint*/ = 0;
		while (joints_parsed < num_joints) {
			var joint_pose:JointPose;
			var has_transform:number /*uint*/;
			joint_pose = new JointPose();
			has_transform = this.awd_file_data.newBlockBytes.readUnsignedByte();
			if (has_transform == 1) {
				var mtx_data:Float32Array = this.awd_file_data.parseMatrix43RawData();

				var mtx:Matrix3D = new Matrix3D(mtx_data);
				joint_pose.orientation.fromMatrix(mtx);
				joint_pose.translation.copyFrom(mtx.position);

				pose.jointPoses[joints_parsed] = joint_pose;
			}
			joints_parsed++;
		}
		// Skip attributes for now
		this.awd_file_data.parseUserAttributes();
		this.awd_file_data.cur_block.data = pose;
		if (this.awd_file_data.debug)
			console.log("Parsed a SkeletonPose: Name = " + this.awd_file_data.cur_block.name + " | Number of Joints = " + joints_parsed);
	}


}

export = SkeletonPoseAWDParser;