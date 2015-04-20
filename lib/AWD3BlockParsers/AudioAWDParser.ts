
import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");
import AWD3Utils				= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");


class AudioAWDParser extends AWDBlockParserBase
{

	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{

		this.awd_file_data.cur_block.name = this.awd_file_data.parseVarStr();

		var type:number = this.awd_file_data.newBlockBytes.readUnsignedByte();
		var data_len:number;

		//this.awd_file_data._texture_users[this.awd_file_data._cur_block_id.toString()] = [];

		// External
		if (type == 0) {
			data_len = this.awd_file_data.newBlockBytes.readUnsignedInt();
			var url:string;
			url = this.awd_file_data.newBlockBytes.readUTFBytes(data_len);
			this.awd_file_data.cur_block.dependencies_urls.push(url);
			//this.awd_file_data._pAddDependency(this.awd_file_data.cur_block.id.toString(), new URLRequest(url), false, null, true);

		} else {
			data_len = this.awd_file_data.newBlockBytes.readUnsignedInt();

			var data:ByteArray;
			data = new ByteArray();
			this.awd_file_data.newBlockBytes.readBytes(data, 0, data_len);
			this.awd_file_data.cur_block.dependencies_data.push(data);

			//
			// AWD3Parserutils - Fix for FireFox Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=715075 .
			//
			// Converting data to image here instead of parser - fix FireFox bug where image width / height is 0 when created from data
			// This gives the browser time to initialise image width / height.

			//this.awd_file_data._pAddDependency(this.awd_file_data._cur_block_id.toString(), null, false, ParserUtils.byteArrayToImage(data), true);
			//this.awd_file_data._pAddDependency(this.awd_file_data._cur_block_id.toString(), null, false, data, true);

		}
		this.awd_file_data.cur_block.state=AWD3Utils.BLOCKSTATE_LOAD_DEPENDENICES;
		// Ignore for now
		this.awd_file_data.parseProperties(null);
		this.awd_file_data.parseUserAttributes();
		//this.awd_file_data._pPauseAndRetrieveDependencies();

		if (this.awd_file_data.debug) {
			var audioStylesNames:Array<string> = ["external", "embed"]
			console.log("Start parsing a " + audioStylesNames[type] + " AudioFile");
		}
	}


}

export = AudioAWDParser;