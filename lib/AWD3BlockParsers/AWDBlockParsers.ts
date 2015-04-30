
import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");

import AWDAssetParserBase							= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWD3FileData 								= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3FileData");

import GeometryAWDParser 							= require("awayjs-parsers/lib/AWD3BlockParsers/GeometryAWDParser");
import PrefabAWDParser 								= require("awayjs-parsers/lib/AWD3BlockParsers/PrefabAWDParser");
import DisplayObjectContainerAWDParser 				= require("awayjs-parsers/lib/AWD3BlockParsers/DisplayObjectContainerAWDParser");
import MeshAWDParser 								= require("awayjs-parsers/lib/AWD3BlockParsers/MeshAWDParser");
import BillboardAWDParser 							= require("awayjs-parsers/lib/AWD3BlockParsers/BillboardAWDParser");
import Single2DTextureAWDParser 					= require("awayjs-parsers/lib/AWD3BlockParsers/Single2DTextureAWDParser");
import CameraAWDParser 								= require("awayjs-parsers/lib/AWD3BlockParsers/CameraAWDParser");
import SingleCubeTextureAWDParser 					= require("awayjs-parsers/lib/AWD3BlockParsers/SingleCubeTextureAWDParser");
import LightAWDParser 								= require("awayjs-parsers/lib/AWD3BlockParsers/LightAWDParser");
import LightPickerAWDParser 						= require("awayjs-parsers/lib/AWD3BlockParsers/LightPickerAWDParser");
import MaterialAWDParser 							= require("awayjs-parsers/lib/AWD3BlockParsers/MaterialAWDParser");
import MovieClipAWDParser 							= require("awayjs-parsers/lib/AWD3BlockParsers/MovieClipAWDParser");
import ShadowMethodAWDParser 						= require("awayjs-parsers/lib/AWD3BlockParsers/ShadowMethodAWDParser");
import SharedMethodAWDParser 						= require("awayjs-parsers/lib/AWD3BlockParsers/SharedMethodAWDParser");
import SkeletonAnimClipAWDParser 					= require("awayjs-parsers/lib/AWD3BlockParsers/SkeletonAnimClipAWDParser");
import SkeletonAWDParser 							= require("awayjs-parsers/lib/AWD3BlockParsers/SkeletonAWDParser");
import SkeletonPoseAWDParser 						= require("awayjs-parsers/lib/AWD3BlockParsers/SkeletonPoseAWDParser");
import SkyboxAWDParser 								= require("awayjs-parsers/lib/AWD3BlockParsers/SkyboxAWDParser");
import TesselatedFontAWDParser 						= require("awayjs-parsers/lib/AWD3BlockParsers/TesselatedFontAWDParser");
import TextfieldAWDParser 							= require("awayjs-parsers/lib/AWD3BlockParsers/TextfieldAWDParser");
import TextformatAWDParser 							= require("awayjs-parsers/lib/AWD3BlockParsers/TextformatAWDParser");
import VertexAnimationSetAWDParser 					= require("awayjs-parsers/lib/AWD3BlockParsers/VertexAnimationSetAWDParser");
import VertexAnimClipAWDParser 						= require("awayjs-parsers/lib/AWD3BlockParsers/VertexAnimClipAWDParser");
import CommandAWDParser 							= require("awayjs-parsers/lib/AWD3BlockParsers/CommandAWDParser");
import MetadataAWDParser 							= require("awayjs-parsers/lib/AWD3BlockParsers/MetadataAWDParser");
import BlockNameSpaceAWDParser 						= require("awayjs-parsers/lib/AWD3BlockParsers/BlockNameSpaceAWDParser");
import AnimatorAWDParser 							= require("awayjs-parsers/lib/AWD3BlockParsers/AnimatorAWDParser");
import AudioAWDParser 								= require("awayjs-parsers/lib/AWD3BlockParsers/AudioAWDParser");



class AWDBlockParsers
{

	private _supported_asset_blocks:Object = {};
	private _all_block_parsers:Array<AWDAssetParserBase>;
	constructor()
	{
		this._all_block_parsers=new Array<AWDAssetParserBase>();

		this.add_block_parser(new GeometryAWDParser(), [1]);
		this.add_block_parser(new PrefabAWDParser(), [11]);
		this.add_block_parser(new DisplayObjectContainerAWDParser(), [22]);
		this.add_block_parser(new MeshAWDParser(), [23, 24]);

		this.add_block_parser(new BillboardAWDParser(), [25]);
		this.add_block_parser(new SkyboxAWDParser(), [31]);
		this.add_block_parser(new LightAWDParser(), [41]);
		this.add_block_parser(new CameraAWDParser(), [42]);
		//this.add_block_parser(new TextureprojectorAWDParser(), [43]);
		this.add_block_parser(new AudioAWDParser(), [44]);
		this.add_block_parser(new LightPickerAWDParser(), [51]);
		this.add_block_parser(new MaterialAWDParser(), [81]);
		this.add_block_parser(new Single2DTextureAWDParser(), [82]);
		this.add_block_parser(new SingleCubeTextureAWDParser(), [83]);
		this.add_block_parser(new SharedMethodAWDParser(), [91]);
		this.add_block_parser(new ShadowMethodAWDParser(), [92]);
		this.add_block_parser(new SkeletonAWDParser(), [101]);
		this.add_block_parser(new SkeletonPoseAWDParser(), [102]);
		this.add_block_parser(new SkeletonAnimClipAWDParser(), [103]);
		this.add_block_parser(new VertexAnimClipAWDParser(), [111, 112]);
		this.add_block_parser(new VertexAnimationSetAWDParser(), [113]);
		//this.add_block_parser(new UVAnimationClipAWDParser(), [121]);
		this.add_block_parser(new AnimatorAWDParser(), [122]);
		this.add_block_parser(new MovieClipAWDParser(), [133]);
		this.add_block_parser(new TextfieldAWDParser(), [134]);
		this.add_block_parser(new TesselatedFontAWDParser(), [135]);
		this.add_block_parser(new TextformatAWDParser(), [136]);


		this.add_block_parser(new CommandAWDParser(), [253]);
		this.add_block_parser(new BlockNameSpaceAWDParser(), [254]);
		this.add_block_parser(new MetadataAWDParser(), [255]);


	}

	public add_block_parser(block_parser:AWDAssetParserBase, block_types:Array<number>):void
	{
		for(var i:number=0; i<block_types.length;i++){
			this._supported_asset_blocks[block_types[i]]  = block_parser;
		}
		this._all_block_parsers.push(block_parser);

	}

	public init_parser(file_data:AWD3FileData):void
	{
		for(var i:number=0; i<this._all_block_parsers.length;i++){
			this._all_block_parsers[i].awd_file_data=file_data;
		}

	}
	public parseAsset(type:number):boolean
	{

		var this_parser:AWDAssetParserBase=this._supported_asset_blocks[type];
		if(this_parser!=undefined){
			this_parser.parseFromBytes();
			return true;
		}

		return false;
	}

}

export = AWDBlockParsers;