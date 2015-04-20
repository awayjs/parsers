import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");
import AWD3Utils				= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");

import Font							= require("awayjs-display/lib/text/Font");
import TesselatedFontTable			= require("awayjs-display/lib/text/TesselatedFontTable");
import SubGeometryBase					= require("awayjs-core/lib/data/SubGeometryBase");
import CurveSubGeometry					= require("awayjs-core/lib/data/CurveSubGeometry");

class TesselatedFontAWDParser extends AWDBlockParserBase
{

	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{
		var new_font:Font=new Font();
		this.awd_file_data.cur_block.name = this.awd_file_data.parseVarStr();
		var font_style_cnt:number = this.awd_file_data.newBlockBytes.readUnsignedInt();
		//console.log("Font font_style_cnt = "+font_style_cnt);
		for (var i:number = 0; i < font_style_cnt; ++i) {
			var font_style_name:string = this.awd_file_data.parseVarStr();
			//console.log("Font font_style_name = "+font_style_name);
			var new_font_style:TesselatedFontTable=new_font.get_font_table(font_style_name);
			new_font_style.set_font_em_size(this.awd_file_data.newBlockBytes.readUnsignedInt());
			//console.log("Font new_font_style.font_em_size = "+new_font_style.get_font_em_size);
			var font_style_char_cnt:number = this.awd_file_data.newBlockBytes.readUnsignedInt();
			//console.log("Font font_style_char_cnt = "+font_style_char_cnt);
			for (var i:number = 0; i < font_style_char_cnt; ++i) {

				var font_style_char:number = this.awd_file_data.newBlockBytes.readUnsignedInt();
				//console.log("Font font_style_char = "+font_style_char);
				// todo: this.awd_file_data is basically a simplified version of the subgeom-parsing done in parseTriangleGeometry. Make a parseSubGeom() instead (?)
				var sm_len:number = this.awd_file_data.newBlockBytes.readUnsignedInt();
				var sm_end:number = this.awd_file_data.newBlockBytes.position + sm_len;
				//console.log("Font sm_len = "+sm_len);

				//this.awd_file_data.parseProperties(null); // no properties for font-table subgeos
				// Loop through data streams
				while (this.awd_file_data.newBlockBytes.position < sm_end) {
					var idx:number = 0;
					var str_ftype:number, str_type:number, str_len:number, str_end:number;

					// Type, field type, length
					str_type = this.awd_file_data.newBlockBytes.readUnsignedByte();
					str_ftype = this.awd_file_data.newBlockBytes.readUnsignedByte();
					str_len = this.awd_file_data.newBlockBytes.readUnsignedInt();
					str_end = this.awd_file_data.newBlockBytes.position + str_len;

					if (str_type == 2) {//face indicies positions
						var indices:Array<number> = new Array<number>();

						while (this.awd_file_data.newBlockBytes.position < str_end) {
							indices[idx++] = this.awd_file_data.newBlockBytes.readUnsignedShort();
						}
					} else if (str_type == 10) {// combined vertex2D stream 5 x float32
						var idx_pos:number = 0;
						var idx_curves:number = 0;
						var idx_uvs:number = 0;

						var positions:Array<number> = new Array<number>();
						var curveData:Array<number> = new Array<number>();
						var uvs:Array<number> = new Array<number>();

						while (this.awd_file_data.newBlockBytes.position < str_end) {

							positions[idx_pos++] = this.awd_file_data.readNumber(this.awd_file_data.accuracyGeo);// x
							positions[idx_pos++] = this.awd_file_data.readNumber(this.awd_file_data.accuracyGeo);// y
							positions[idx_pos++] = this.awd_file_data.readNumber(this.awd_file_data.accuracyGeo);// type

							curveData[idx_curves++] = this.awd_file_data.readNumber(this.awd_file_data.accuracyGeo);// curve value 1
							curveData[idx_curves++] = this.awd_file_data.readNumber(this.awd_file_data.accuracyGeo);// curve value 2

							uvs[idx_uvs++] = this.awd_file_data.readNumber(this.awd_file_data.accuracyGeo);// curve value 1
							uvs[idx_uvs++] = this.awd_file_data.readNumber(this.awd_file_data.accuracyGeo);// curve value 1
						}
					}
					else {
						this.awd_file_data.newBlockBytes.position = str_end;
					}
				}
				//this.awd_file_data.parseProperties(null);// no attributes for font-table subgeos
				var curve_sub_geom:CurveSubGeometry = new CurveSubGeometry(true);
				curve_sub_geom.updateIndices(indices);
				curve_sub_geom.updatePositions(positions);
				curve_sub_geom.updateCurves(curveData);
				curve_sub_geom.updateUVs(uvs);
				new_font_style.set_subgeo_for_char(font_style_char.toString(), curve_sub_geom);
			}
			//console.log("Parsed a font-table");

		}
		//console.log("Parsed a font");
		this.awd_file_data.parseProperties(null);
		this.awd_file_data.parseUserAttributes();
		this.awd_file_data.cur_block.data = new_font;
		if (this.awd_file_data.debug) {
			console.log("Parsed a font: Name = '" + this.awd_file_data.cur_block.name);
		}

	}

}

export = TesselatedFontAWDParser;