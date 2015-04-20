
import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");
import AWD3Utils				= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");


import TextFormat					= require("awayjs-display/lib/text/TextFormat");
import TextFieldType				= require("awayjs-display/lib/text/TextFieldType");

import AS2SceneGraphFactory 		= require("awayjs-player/lib/factories/AS2SceneGraphFactory");

class TextfieldAWDParser extends AWDBlockParserBase
{

	private factory:AS2SceneGraphFactory;
	constructor()
	{
		super();
		this.factory = new AS2SceneGraphFactory();
	}


	public parseFromBytes():void
	{
		var newTextField = this.factory.createTextField();
		this.awd_file_data.cur_block.name = this.awd_file_data.parseVarStr();
		var text_field_type:number=this.awd_file_data.newBlockBytes.readUnsignedByte();
		if(text_field_type==0) {
			newTextField.type = "static";
		}
		else if(text_field_type==1) {
			newTextField.type = "dynamic";
		}
		else if(text_field_type==2) {
			newTextField.type = "input";
		}
		else if(text_field_type==3) {
			newTextField.type ="input";
			newTextField.displayAsPassword=true;
		}

		newTextField.width=this.awd_file_data.newBlockBytes.readFloat();
		newTextField.height=this.awd_file_data.newBlockBytes.readFloat();
		var num_paragraphs:number = this.awd_file_data.newBlockBytes.readUnsignedInt();
		var complete_text:string = "";
		//console.log("num_paragraphs  '" + num_paragraphs);
		var text_format:TextFormat;
		for(var paracnt:number=0; paracnt<num_paragraphs; paracnt++){

			var num_textruns:number = this.awd_file_data.newBlockBytes.readUnsignedInt();
			//console.log("num_textruns  '" + num_textruns);
			for(var textrun_cnt:number=0; textrun_cnt<num_textruns; textrun_cnt++) {

				var format_id:number = this.awd_file_data.newBlockBytes.readUnsignedInt();
				//console.log("format_id  '" + format_id);
				var textFormat:TextFormat = <TextFormat>this.awd_file_data.getAssetByID(format_id);
				if (textFormat==undefined) {
					text_format = new TextFormat();
				}
				//console.log("text_format  '" + text_format.name);
				var txt_length = this.awd_file_data.newBlockBytes.readUnsignedInt();
				//console.log("txt_length  '" + txt_length);
				if (txt_length > 0) {
					var this_txt:string = this.awd_file_data.newBlockBytes.readUTFBytes(txt_length);
					//newTextField.appendText(this_txt, text_format);
					complete_text+=this_txt;
					//console.log("this_txt  '" + this_txt);
				}
			}
			//newTextField.closeParagraph();
		}
		newTextField.textFormat=text_format;
		newTextField.text=complete_text;

		//newTextField.construct_geometry();

		// todo: optional matrix etc can be put in properties.
		var props:AWDProperties = this.awd_file_data.parseProperties({1:AWD3Utils.BOOL, 3:AWD3Utils.BOOL, 4:AWD3Utils.BOOL, 5:AWD3Utils.BOOL, 7:AWD3Utils.UINT8, 8:AWD3Utils.UINT8, 9:AWD3Utils.UINT8});
		newTextField.selectable = props.get(1, false);
		newTextField.border =  props.get(3, false);
		//newTextField.renderHTML =  props.get(4, false);
		//newTextField.scrollable =  props.get(5, false);
		//newTextField.text_flow =  props.get(7, 0);
		//newTextField.orientationMode =  props.get(8, 0);
		//newTextField.line_mode =  props.get(9, 0);

		newTextField.extra = this.awd_file_data.parseUserAttributes();
		this.awd_file_data.cur_block.data = newTextField;
		if (this.awd_file_data.debug) {
			console.log("Parsed a TextField: Name = '" + newTextField.name + "| text  = " + complete_text);
		}

	}


}

export = TextfieldAWDParser;