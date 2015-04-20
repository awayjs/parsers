
import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");

import LightPickerBase					= require("awayjs-display/lib/materials/lightpickers/LightPickerBase");
import StaticLightPicker				= require("awayjs-display/lib/materials/lightpickers/StaticLightPicker");
import LightBase						= require("awayjs-display/lib/base/LightBase");

class LightPickerAWDParser extends AWDBlockParserBase
{

	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{
		this.awd_file_data.cur_block.name = this.awd_file_data.parseVarStr();
		var numLights:number = this.awd_file_data.newBlockBytes.readUnsignedShort();
		var lightsArray:Array<LightBase> = new Array<LightBase>();
		var k:number = 0;
		var lightID:number = 0;

		var returnedArrayLight:Array<any>;
		var lightsArrayNames:Array<string> = new Array<string>();

		for (k = 0; k < numLights; k++) {
			lightID = this.awd_file_data.newBlockBytes.readUnsignedInt();
			var light:LightBase = <LightBase>this.awd_file_data.getAssetByID(lightID)

			if (light!=undefined) {
				lightsArray.push(<LightBase> light);
				lightsArrayNames.push(( <LightBase> light).name);

			} else {
				//this.awd_file_data._blocks[blockID].addError("Could not find a Light Nr " + k + " (ID = " + lightID + " ) for this.awd_file_data LightPicker");
			}
		}

		if (lightsArray.length == 0) {
			//this.awd_file_data._blocks[blockID].addError("Could not create this.awd_file_data LightPicker, cause no Light was found.");
			this.awd_file_data.parseUserAttributes();
			return undefined; //return without any more parsing for this.awd_file_data block
		}

		var lightPicker:LightPickerBase = new StaticLightPicker(lightsArray);
		this.awd_file_data.cur_block.data = lightPicker;

		this.awd_file_data.parseUserAttributes();
		if (this.awd_file_data.debug) {
			console.log("Parsed a StaticLightPicker: Name = '" + this.awd_file_data.cur_block.name + "' | Texture-Name = " + lightsArrayNames.toString());
		}
	}


}

export = LightPickerAWDParser;