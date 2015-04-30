import EventDispatcher					= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray						= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError				= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset							= require("awayjs-core/lib/library/IAsset");
import ColorTransform					= require("awayjs-core/lib/geom/ColorTransform");

import TextureBase						= require("awayjs-display/lib/textures/TextureBase");
import SingleCubeTexture				= require("awayjs-display/lib/textures/SingleCubeTexture");
import AWDBlockParserBase				= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties					= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");
import AWD3Utils						= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");

import EffectMethodBase					= require("awayjs-methodmaterials/lib/methods/EffectMethodBase");
import EffectColorMatrixMethod			= require("awayjs-methodmaterials/lib/methods/EffectColorMatrixMethod");
import EffectColorTransformMethod		= require("awayjs-methodmaterials/lib/methods/EffectColorTransformMethod");
import EffectEnvMapMethod				= require("awayjs-methodmaterials/lib/methods/EffectEnvMapMethod");
import EffectAlphaMaskMethod			= require("awayjs-methodmaterials/lib/methods/EffectAlphaMaskMethod");
import EffectFogMethod					= require("awayjs-methodmaterials/lib/methods/EffectFogMethod");
import EffectFresnelEnvMapMethod		= require("awayjs-methodmaterials/lib/methods/EffectFresnelEnvMapMethod");
import EffectLightMapMethod				= require("awayjs-methodmaterials/lib/methods/EffectLightMapMethod");
import EffectRimLightMethod				= require("awayjs-methodmaterials/lib/methods/EffectRimLightMethod");

class SharedMethodAWDParser extends AWDBlockParserBase
{

	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{

		var asset:EffectMethodBase;

		this.awd_file_data.cur_block.name = this.awd_file_data.parseVarStr();
		asset = this.parseSharedMethodList();
		this.awd_file_data.parseUserAttributes();
		this.awd_file_data.cur_block.data = asset;
		if (this.awd_file_data.debug) {
			console.log("Parsed a EffectMethod: Name = " + asset.name + " Type = " + asset);
		}
	}

	// this.awd_file_data functions reads and creates a EffectMethod
	private parseSharedMethodList():EffectMethodBase
	{

		var methodType:number = this.awd_file_data.newBlockBytes.readUnsignedShort();
		var effectMethodReturn:EffectMethodBase;

		var props:AWDProperties = this.awd_file_data.parseProperties({1:AWD3Utils.BADDR, 2:AWD3Utils.BADDR, 3:AWD3Utils.BADDR, 101:this.awd_file_data.propsNrType, 102:this.awd_file_data.propsNrType, 103:this.awd_file_data.propsNrType, 104:this.awd_file_data.propsNrType, 105:this.awd_file_data.propsNrType, 106:this.awd_file_data.propsNrType, 107:this.awd_file_data.propsNrType, 201:AWD3Utils.UINT32, 202:AWD3Utils.UINT32, 301:AWD3Utils.UINT16, 302:AWD3Utils.UINT16, 401:AWD3Utils.UINT8, 402:AWD3Utils.UINT8, 601:AWD3Utils.COLOR, 602:AWD3Utils.COLOR, 701:AWD3Utils.BOOL, 702:AWD3Utils.BOOL});
		var targetID:number;
		var returnedArray:Array<any>;

		switch (methodType) {
			// Effect Methods
			case 401: //ColorMatrix
				effectMethodReturn = new EffectColorMatrixMethod(props.get(101, new Array(0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)));
				break;
			case 402: //ColorTransform
				effectMethodReturn = new EffectColorTransformMethod();
				var offCol:number /*uint*/ = props.get(601, 0x00000000);
				(<EffectColorTransformMethod> effectMethodReturn).colorTransform = new ColorTransform(props.get(102, 1), props.get(103, 1), props.get(104, 1), props.get(101, 1), ((offCol >> 16) & 0xFF), ((offCol >> 8) & 0xFF), (offCol & 0xFF), ((offCol >> 24) & 0xFF));
				break;
			case 403: //EnvMap

				/*
				targetID = props.get(1, 0);
				console.log('ENV MAP', targetID);


				returnedArray = this.awd_file_data.getAssetByID(targetID, [ TextureBase.assetType ], "CubeTexture");
				//if (!returnedArray[0])
				//	this.awd_file_data._blocks[blockID].addError("Could not find the EnvMap (ID = " + targetID + " ) for this.awd_file_data EnvMapMethod");
				effectMethodReturn = new EffectEnvMapMethod(<SingleCubeTexture> returnedArray[1], <number> props.get(101, 1));
				targetID = props.get(2, 0);
				if (targetID > 0) {
					returnedArray = this.awd_file_data.getAssetByID(targetID, [TextureBase.assetType]);
					//if (!returnedArray[0])
					//	this.awd_file_data._blocks[blockID].addError("Could not find the Mask-texture (ID = " + targetID + " ) for this.awd_file_data EnvMapMethod");

					// Todo: test mask with EnvMapMethod
					//(<EnvMapMethod> effectMethodReturn).mask = <Texture2DBase> returnedArray[1];
				}
				*/
				break;
			case 404: //LightMapMethod
				/*
				targetID = props.get(1, 0);
				returnedArray = this.awd_file_data.getAssetByID(targetID, [TextureBase.assetType]);
				//if (!returnedArray[0])
				//	this.awd_file_data._blocks[blockID].addError("Could not find the LightMap (ID = " + targetID + " ) for this.awd_file_data LightMapMethod");
				effectMethodReturn = new EffectLightMapMethod(returnedArray[1], this.awd_file_data.getBlendModeStringFromEnum(props.get(401, 10))); //usesecondaryUV not set
				*/
				break;
			//				case 405: //ProjectiveTextureMethod
			//					targetID = props.get(1, 0);
			//					returnedArray = getAssetByID(targetID, [TextureProjector.assetType]);
			//					if (!returnedArray[0])
			//						_blocks[blockID].addError("Could not find the TextureProjector (ID = " + targetID + " ) for this.awd_file_data ProjectiveTextureMethod");
			//					effectMethodReturn = new ProjectiveTextureMethod(returnedArray[1], blendModeDic[props.get(401, 10)]);
			//					break;
			case 406: //RimLightMethod
				effectMethodReturn = new EffectRimLightMethod(props.get(601, 0xffffff), props.get(101, 0.4), props.get(101, 2)); //blendMode
				break;
			case 407: //AlphaMaskMethod
				/*
				targetID = props.get(1, 0);
				returnedArray = this.awd_file_data.getAssetByID(targetID, [TextureBase.assetType]);
				//if (!returnedArray[0])
				//	this.awd_file_data._blocks[blockID].addError("Could not find the Alpha-texture (ID = " + targetID + " ) for this.awd_file_data AlphaMaskMethod");
				effectMethodReturn = new EffectAlphaMaskMethod(returnedArray[1], props.get(701, false));
				*/
				break;
			//				case 408: //RefractionEnvMapMethod
			//					targetID = props.get(1, 0);
			//					returnedArray = getAssetByID(targetID, [TextureBase.assetType], "CubeTexture");
			//					if (!returnedArray[0])
			//						_blocks[blockID].addError("Could not find the EnvMap (ID = " + targetID + " ) for this.awd_file_data RefractionEnvMapMethod");
			//					effectMethodReturn = new RefractionEnvMapMethod(returnedArray[1], props.get(101, 0.1), props.get(102, 0.01), props.get(103, 0.01), props.get(104, 0.01));
			//					RefractionEnvMapMethod(effectMethodReturn).alpha = props.get(104, 1);
			//					break;
			//				case 409: //OutlineMethod
			//					effectMethodReturn = new OutlineMethod(props.get(601, 0x00000000), props.get(101, 1), props.get(701, true), props.get(702, false));
			//					break;
			case 410: //FresnelEnvMapMethod
				/*
				targetID = props.get(1, 0);
				returnedArray = this.awd_file_data.getAssetByID(targetID, [TextureBase.assetType], "CubeTexture");
				//if (!returnedArray[0])
				//	this.awd_file_data._blocks[blockID].addError("Could not find the EnvMap (ID = " + targetID + " ) for this.awd_file_data FresnelEnvMapMethod");
				effectMethodReturn = new EffectFresnelEnvMapMethod(returnedArray[1], props.get(101, 1));
				*/
				break;
			case 411: //FogMethod
				effectMethodReturn = new EffectFogMethod(props.get(101, 0), props.get(102, 1000), props.get(601, 0x808080));
				break;

		}
		this.awd_file_data.parseUserAttributes();
		return effectMethodReturn;

	}

}

export = SharedMethodAWDParser;