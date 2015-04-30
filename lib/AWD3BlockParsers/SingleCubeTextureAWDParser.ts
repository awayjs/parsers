import EventDispatcher					= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray						= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError				= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset							= require("awayjs-core/lib/library/IAsset");
import URLRequest						= require("awayjs-core/lib/net/URLRequest");
import ParserUtils						= require("awayjs-core/lib/parsers/ParserUtils");

import SingleCubeTexture				= require("awayjs-display/lib/textures/SingleCubeTexture");

import AWDBlockParserBase				= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties					= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");
import AWD3Utils						= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");


class SingleCubeTextureAWDParser extends AWDBlockParserBase
{

	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{
		var data_len:number;
		var i:number;

		//this.awd_file_data._cubeTextures = new Array<any>();
		//this.awd_file_data._texture_users[ this.awd_file_data._cur_block_id.toString() ] = [];

		var type:number = this.awd_file_data.newBlockBytes.readUnsignedByte();

		//this.awd_file_data._blocks[blockID].name =

		this.awd_file_data.cur_block.name = this.awd_file_data.parseVarStr();

		for (i = 0; i < 6; i++) {
			//this.awd_file_data.texture_users[this.awd_file_data.cur_block_id.toString()] = [];
			//this.awd_file_data.cubeTextures.push(null);

			// External
			if (type == 0) {
				data_len = this.awd_file_data.newBlockBytes.readUnsignedInt();
				var url:string;
				url = this.awd_file_data.newBlockBytes.readUTFBytes(data_len);

				this.awd_file_data.cur_block.dependencies_urls.push(url);
				//this.awd_file_data._pAddDependency(this.awd_file_data.cur_block_id.toString() + "#" + i, new URLRequest(url), false, null, true);
			} else {

				data_len = this.awd_file_data.newBlockBytes.readUnsignedInt();
				var data:ByteArray;
				data = new ByteArray();

				this.awd_file_data.newBlockBytes.readBytes(data, 0, data_len);

				this.awd_file_data.cur_block.dependencies_data.push(data);
				//this.awd_file_data._pAddDependency(this.awd_file_data.cur_block_id.toString() + "#" + i, null, false, ParserUtils.byteArrayToImage(data), true);
			}
		}
		this.awd_file_data.cur_block.state=AWD3Utils.BLOCKSTATE_LOAD_DEPENDENICES;
		// Ignore for now
		this.awd_file_data.parseProperties(null);
		this.awd_file_data.parseUserAttributes();
		//this.awd_file_data._pPauseAndRetrieveDependencies();
		//this.awd_file_data._blocks[blockID].data = asset;

		if (this.awd_file_data.debug) {
			var textureStylesNames:Array<string> = ["external", "embed"]
			console.log("Start parsing 6 " + textureStylesNames[type] + " Bitmaps for CubeTexture");
		}
	}


}

export = SingleCubeTextureAWDParser;