
import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");
import AWD3Utils				= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");

import AnimationNodeBase				= require("awayjs-display/lib/animators/nodes/AnimationNodeBase");
import SkeletonClipNode					= require("awayjs-renderergl/lib/animators/nodes/SkeletonClipNode");
import VertexClipNode					= require("awayjs-renderergl/lib/animators/nodes/VertexClipNode");
import VertexAnimationSet				= require("awayjs-renderergl/lib/animators/VertexAnimationSet");
import SkeletonAnimationSet				= require("awayjs-renderergl/lib/animators/SkeletonAnimationSet");

class VertexAnimationSetAWDParser extends AWDBlockParserBase
{

	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{
		var poseBlockAdress:number /*int*/
		var outputString:string = "";
		var name:string = this.awd_file_data.parseVarStr();
		var num_frames:number /*uint*/ = this.awd_file_data.newBlockBytes.readUnsignedShort();
		var props:AWDProperties = this.awd_file_data.parseProperties({1:AWD3Utils.UINT16});
		var frames_parsed:number /*uint*/ = 0;
		var skeletonFrames:Array<SkeletonClipNode> = new Array<SkeletonClipNode>();
		var vertexFrames:Array<VertexClipNode> = new Array<VertexClipNode>();
		while (frames_parsed < num_frames) {
			poseBlockAdress = this.awd_file_data.newBlockBytes.readUnsignedInt();
			var animNode:AnimationNodeBase = <AnimationNodeBase>this.awd_file_data.getAssetByID(poseBlockAdress);
			if (animNode==undefined) {
			//this.awd_file_data._blocks[blockID].addError("Could not find the AnimationClipNode Nr " + frames_parsed + " ( " + poseBlockAdress + " ) for this.awd_file_data AnimationSet");
			}
			else {
				if (animNode instanceof VertexClipNode)
					vertexFrames.push(<VertexClipNode>animNode)
				if (animNode instanceof SkeletonClipNode)
					skeletonFrames.push(<SkeletonClipNode>animNode)
			}
			frames_parsed++;
		}
		if ((vertexFrames.length == 0) && (skeletonFrames.length == 0)) {
			//this.awd_file_data._blocks[blockID].addError("Could not create this.awd_file_data AnimationSet, because it contains no animations");
			return;
		}
		this.awd_file_data.parseUserAttributes();
		if (vertexFrames.length > 0) {
			var newVertexAnimationSet:VertexAnimationSet = new VertexAnimationSet();
			for (var i:number /*int*/ = 0; i < vertexFrames.length; i++)
				newVertexAnimationSet.addAnimation(vertexFrames[i]);
			newVertexAnimationSet.name=name;
			if (this.awd_file_data.debug)
				console.log("Parsed a VertexAnimationSet: Name = " + newVertexAnimationSet.name + " | Animations = " + newVertexAnimationSet.animations.length + " | Animation-Names = " + newVertexAnimationSet.animationNames.toString());
			return;
		} else if (skeletonFrames.length > 0) {
			var newSkeletonAnimationSet:SkeletonAnimationSet = new SkeletonAnimationSet(props.get(1, 4)); //props.get(1,4));
			for (var i:number /*int*/ = 0; i < skeletonFrames.length; i++)
				newSkeletonAnimationSet.addAnimation(skeletonFrames[i]);
			newSkeletonAnimationSet.name=name;
			if (this.awd_file_data.debug)
				console.log("Parsed a SkeletonAnimationSet: Name = " + newSkeletonAnimationSet.name + " | Animations = " + newSkeletonAnimationSet.animations.length + " | Animation-Names = " + newSkeletonAnimationSet.animationNames.toString());
		}
	}


}

export = VertexAnimationSetAWDParser;