
import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");


import MaterialBase						= require("awayjs-display/lib/materials/MaterialBase");
import Billboard						= require("awayjs-display/lib/entities/Billboard");
import BasicMaterial					= require("awayjs-display/lib/materials/BasicMaterial");

class BillboardAWDParser extends AWDBlockParserBase
{

	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{
		this.awd_file_data.cur_block.name = this.awd_file_data.parseVarStr();

		var data_id:number = this.awd_file_data.newBlockBytes.readUnsignedInt();
		var mat:MaterialBase= <MaterialBase> this.awd_file_data.getAssetByID(data_id);

		if (mat==undefined) {
			mat = new BasicMaterial();
		}
		mat.bothSides=true;
		var billboard:Billboard = new Billboard(mat);
		this.awd_file_data.cur_block.data = billboard;
		// todo: optional matrix etc can be put in properties.
		this.awd_file_data.parseProperties(null);

		billboard.extra = this.awd_file_data.parseUserAttributes();


		if (this.awd_file_data.debug) {
			console.log("Parsed a Library-Billboard: Name = '" + billboard.name + "| Material-Name = " + mat.name);
		}

	}


}

export = BillboardAWDParser;