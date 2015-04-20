/**
 * Created by 80prozent on 4/18/2015.
 */

import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");

import Mesh								= require("awayjs-display/lib/entities/Mesh");
import AnimationSetBase					= require("awayjs-renderergl/lib/animators/AnimationSetBase");
import AnimatorBase						= require("awayjs-renderergl/lib/animators/AnimatorBase");
import VertexAnimationSet				= require("awayjs-renderergl/lib/animators/VertexAnimationSet");
import VertexAnimator					= require("awayjs-renderergl/lib/animators/VertexAnimator");
import SkeletonAnimationSet				= require("awayjs-renderergl/lib/animators/SkeletonAnimationSet");
import SkeletonAnimator					= require("awayjs-renderergl/lib/animators/SkeletonAnimator");
import Skeleton							= require("awayjs-renderergl/lib/animators/data/Skeleton");
import AWD3Utils						= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");

class AnimatorAWDParser extends AWDBlockParserBase
{


	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{
		var animSetBlockAdress:number; /*int*/
		var targetAnimationSet:AnimationSetBase;
		this.awd_file_data.cur_block.name = this.awd_file_data.parseVarStr();
		var type:number /*uint*/ = this.awd_file_data.newBlockBytes.readUnsignedShort();

		var props:AWDProperties = this.awd_file_data.parseProperties({1:AWD3Utils.BADDR});

		animSetBlockAdress = this.awd_file_data.newBlockBytes.readUnsignedInt();
		var targetMeshLength:number /*uint*/ = this.awd_file_data.newBlockBytes.readUnsignedShort();
		var meshAdresses:Array<number> /*uint*/ = new Array<number>() /*uint*/;
		for (var i:number /*int*/ = 0; i < targetMeshLength; i++)
			meshAdresses.push(this.awd_file_data.newBlockBytes.readUnsignedInt());

		var activeState:number /*uint*/ = this.awd_file_data.newBlockBytes.readUnsignedShort();
		var autoplay:boolean = ( this.awd_file_data.newBlockBytes.readUnsignedByte() == 1 );
		this.awd_file_data.parseUserAttributes();
		this.awd_file_data.parseUserAttributes();

		var returnedArray:Array<any>;
		var targetMeshes:Array<Mesh> = new Array<Mesh>();

		for (i = 0; i < meshAdresses.length; i++) {
			var targetMesh:Mesh = <Mesh>this.awd_file_data.getAssetByID(meshAdresses[i]);
			if (targetMesh!=undefined)
				targetMeshes.push(targetMesh);
		}
		var targetAnimationSet:AnimationSetBase = <AnimationSetBase>this.awd_file_data.getAssetByID(animSetBlockAdress);
		if (targetAnimationSet==undefined) {
			//this.awd_file_data._blocks[blockID].addError("Could not find the AnimationSet ( " + animSetBlockAdress + " ) for this.awd_file_data Animator");
			return undefined;
		}
		var thisAnimator:AnimatorBase;
		if (type == 1) {

			var skeleton:Skeleton = <Skeleton>this.awd_file_data.getAssetByID(props.get(1, 0));
			if (skeleton==undefined) {
				//this.awd_file_data._blocks[blockID].addError("Could not find the Skeleton ( " + props.get(1, 0) + " ) for this.awd_file_data Animator");
				return;
			}
			thisAnimator = new SkeletonAnimator(<SkeletonAnimationSet> targetAnimationSet, <Skeleton> returnedArray[1]);

		} else if (type == 2)
			thisAnimator = new VertexAnimator(<VertexAnimationSet> targetAnimationSet);

		for (i = 0; i < targetMeshes.length; i++) {
			if (type == 1)
				targetMeshes[i].animator = (<SkeletonAnimator> thisAnimator);
			if (type == 2)
				targetMeshes[i].animator = (<VertexAnimator> thisAnimator);
		}
		this.awd_file_data.cur_block.data = thisAnimator;
		if (this.awd_file_data.debug)
			console.log("Parsed a Animator: Name = " + this.awd_file_data.cur_block.name);
	}


}

export = AnimatorAWDParser;