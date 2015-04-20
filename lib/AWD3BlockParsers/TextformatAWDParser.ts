
import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");
import AWD3Utils				= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");

import TextFormat					= require("awayjs-display/lib/text/TextFormat");
import TesselatedFontTable			= require("awayjs-display/lib/text/TesselatedFontTable");
import Font							= require("awayjs-display/lib/text/Font");
import BasicMaterial					= require("awayjs-display/lib/materials/BasicMaterial");
import MaterialBase						= require("awayjs-display/lib/materials/MaterialBase");

class TextformatAWDParser extends AWDBlockParserBase
{

	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{
		var newTextFormat:TextFormat = new TextFormat();
		this.awd_file_data.cur_block.name = this.awd_file_data.parseVarStr();
		//console.log("this.awd_file_data._blocks[blockID].name  '" + this.awd_file_data._blocks[blockID].name );
		var font_id:number = this.awd_file_data.newBlockBytes.readUnsignedInt();
		//console.log("font_id  '" + font_id);
		var font_style_name:string = this.awd_file_data.parseVarStr();
		//console.log("font_style_name  '" + font_style_name);
		var font:Font = <Font>this.awd_file_data.getAssetByID(font_id);
		if (font==undefined) {
			font = new Font();
		}
		newTextFormat.font_name = font.name;
		var font_table:TesselatedFontTable = font.get_font_table(font_style_name);
		if(font_table!=null){
			newTextFormat.font_style = font_style_name;
			newTextFormat.font_table = font_table;
		}

		var data_id:number = this.awd_file_data.newBlockBytes.readUnsignedInt();
		//console.log("mat  '" + data_id);
		var mat:BasicMaterial = <BasicMaterial> this.awd_file_data.getAssetByID(data_id);

		if (mat==undefined) {
			mat = new BasicMaterial();
		}
		mat.bothSides=true;

		var num_uv_values:number = this.awd_file_data.newBlockBytes.readUnsignedByte();
		//console.log("num_uv_values  '" + num_uv_values);
		var uv_values:Array<number>=[];
		for(var uvcnt:number=0; uvcnt<num_uv_values; uvcnt++){
			var uv_value:number=this.awd_file_data.newBlockBytes.readFloat();
			uv_values.push(uv_value);
			//console.log("uv_value  '" + uv_value);
		}
		newTextFormat.uv_values=uv_values;
		var format_props:AWDProperties = this.awd_file_data.parseProperties({1:AWD3Utils.UINT16, 2:AWD3Utils.UINT16, 3:AWD3Utils.UINT8,4:AWD3Utils.UINT8,5:AWD3Utils.UINT8,6:AWD3Utils.UINT8, 7:AWD3Utils.UINT16, 8:AWD3Utils.UINT16, 9:AWD3Utils.UINT16, 10:AWD3Utils.UINT16});

		newTextFormat.size = format_props.get(1,12);
		newTextFormat.letterSpacing = format_props.get(2,0);
		//newTextFormat.rotated = format_props.get(3,false);
		newTextFormat.kerning = format_props.get(4,true);
		//newTextFormat.baseline_shift = format_props.get(5,1);
		//newTextFormat.align = format_props.get(6,0);
		newTextFormat.indent = format_props.get(7,0);
		newTextFormat.leftMargin = format_props.get(8,0);
		newTextFormat.rightMargin = format_props.get(9,0);
		//newTextFormat.linespacing = format_props.get(10,0);
		newTextFormat.size = format_props.get(1,12);
		newTextFormat.letterSpacing = format_props.get(2,0);
		//newTextFormat.rotated = format_props.get(3,false);
		newTextFormat.kerning = format_props.get(4,true);
		//newTextFormat.baseline_shift = format_props.get(5,1);
		newTextFormat.material = mat;
		this.awd_file_data.parseUserAttributes();// textformat has no extra-properties
		//newTextFormat.extra =

		this.awd_file_data.cur_block.data = newTextFormat;
		if (this.awd_file_data.debug) {
			console.log("Parsed a TextFormat: Name = '" + name + " font: "+font.name);
		}
	}


}

export = TextformatAWDParser;/**
 * Created by 80prozent on 4/18/2015.
 */
