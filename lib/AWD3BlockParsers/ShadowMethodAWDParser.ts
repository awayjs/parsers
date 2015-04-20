
import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");
import AWD3Utils				= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");

import LightBase						= require("awayjs-display/lib/base/LightBase");
import DirectionalLight					= require("awayjs-display/lib/entities/DirectionalLight");
import PointLight						= require("awayjs-display/lib/entities/PointLight");

import ShadowMapMethodBase				= require("awayjs-methodmaterials/lib/methods/ShadowMapMethodBase");
import ShadowMethodBase					= require("awayjs-methodmaterials/lib/methods/ShadowMethodBase");
import ShadowDitheredMethod				= require("awayjs-methodmaterials/lib/methods/ShadowDitheredMethod");
import ShadowFilteredMethod				= require("awayjs-methodmaterials/lib/methods/ShadowFilteredMethod");
import ShadowHardMethod					= require("awayjs-methodmaterials/lib/methods/ShadowHardMethod");
import ShadowNearMethod					= require("awayjs-methodmaterials/lib/methods/ShadowNearMethod");
import ShadowSoftMethod					= require("awayjs-methodmaterials/lib/methods/ShadowSoftMethod");

class ShadowMethodAWDParser extends AWDBlockParserBase
{

	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{
		var type:number;
		var data_len:number;
		var asset:ShadowMethodBase;
		var shadowLightID:number;
		this.awd_file_data.cur_block.name = this.awd_file_data.parseVarStr();

		shadowLightID = this.awd_file_data.newBlockBytes.readUnsignedInt();
		var light:LightBase=<LightBase> this.awd_file_data.getAssetByID(shadowLightID);

		if (light==undefined) {
			//this.awd_file_data._blocks[blockID].addError("Could not find the TargetLight (ID = " + shadowLightID + " ) for this.awd_file_data ShadowMethod - ShadowMethod not created");
			return;
		}

		asset = this.parseShadowMethodList(light);

		if (!asset)
			return;
		this.awd_file_data.parseUserAttributes(); // Ignore for now
		this.awd_file_data.cur_block.data = asset;
		if (this.awd_file_data.debug) {
			console.log("Parsed a ShadowMapMethodMethod: Name = " + asset.name + " | Type = " + asset + " | Light-Name = ", light.name);
		}
	}


	// this.awd_file_data functions reads and creates a ShadowMethodMethod
	private parseShadowMethodList(light:LightBase):ShadowMethodBase
	{

		var methodType:number = this.awd_file_data.newBlockBytes.readUnsignedShort();
		var shadowMethod:ShadowMethodBase;
		var props:AWDProperties = this.awd_file_data.parseProperties({1:AWD3Utils.BADDR, 2:AWD3Utils.BADDR, 3:AWD3Utils.BADDR, 101:this.awd_file_data.propsNrType, 102:this.awd_file_data.propsNrType, 103:this.awd_file_data.propsNrType, 201:AWD3Utils.UINT32, 202:AWD3Utils.UINT32, 301:AWD3Utils.UINT16, 302:AWD3Utils.UINT16, 401:AWD3Utils.UINT8, 402:AWD3Utils.UINT8, 601:AWD3Utils.COLOR, 602:AWD3Utils.COLOR, 701:AWD3Utils.BOOL, 702:AWD3Utils.BOOL, 801:AWD3Utils.MTX4x4});

		var targetID:number;
		var returnedArray:Array<any>
		switch (methodType) {
			//				case 1001: //CascadeShadowMapMethod
			//					targetID = props.get(1, 0);
			//					returnedArray = getAssetByID(targetID, [ShadowMapMethodBase.assetType]);
			//					if (!returnedArray[0]) {
			//						_blocks[blockID].addError("Could not find the ShadowBaseMethod (ID = " + targetID + " ) for this.awd_file_data CascadeShadowMapMethod - ShadowMethod not created");
			//						return shadowMethod;
			//					}
			//					shadowMethod = new CascadeShadowMapMethod(returnedArray[1]);
			//					break;
			case 1002: //ShadowNearMethod
				targetID = props.get(1, 0);
				var shadow_meth:ShadowMapMethodBase = <ShadowMapMethodBase>this.awd_file_data.getAssetByID(targetID);
				if (shadow_meth==undefined) {
					//this.awd_file_data._blocks[blockID].addError("Could not find the ShadowBaseMethod (ID = " + targetID + " ) for this.awd_file_data ShadowNearMethod - ShadowMethod not created");
					return shadowMethod;
				}
				shadowMethod = new ShadowNearMethod(<ShadowMethodBase> shadow_meth);
				break;
			case 1101: //ShadowFilteredMethod

				shadowMethod = new ShadowFilteredMethod(<DirectionalLight> light);
				(<ShadowFilteredMethod> shadowMethod).alpha = props.get(101, 1);
				(<ShadowFilteredMethod> shadowMethod).epsilon = props.get(102, 0.002);
				break;

			case 1102: //ShadowDitheredMethod


				shadowMethod = new ShadowDitheredMethod(<DirectionalLight> light, <number> props.get(201, 5));
				(<ShadowDitheredMethod> shadowMethod).alpha = props.get(101, 1);
				(<ShadowDitheredMethod> shadowMethod).epsilon = props.get(102, 0.002);
				(<ShadowDitheredMethod> shadowMethod).range = props.get(103, 1);

				break;
			case 1103: //ShadowSoftMethod

				shadowMethod = new ShadowSoftMethod(<DirectionalLight> light, <number> props.get(201, 5));
				(<ShadowSoftMethod> shadowMethod).alpha = props.get(101, 1);
				(<ShadowSoftMethod> shadowMethod).epsilon = props.get(102, 0.002);
				(<ShadowSoftMethod> shadowMethod).range = props.get(103, 1);

				break;
			case 1104: //ShadowHardMethod
				shadowMethod = new ShadowHardMethod(light);
				(<ShadowHardMethod> shadowMethod).alpha = props.get(101, 1);
				(<ShadowHardMethod> shadowMethod).epsilon = props.get(102, 0.002);
				break;

		}
		this.awd_file_data.parseUserAttributes();
		return shadowMethod;
	}
}

export = ShadowMethodAWDParser;