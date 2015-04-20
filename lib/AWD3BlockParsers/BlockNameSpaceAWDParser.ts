
import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");
import AWD3Utils						= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");

class BlockNameSpaceAWDParser extends AWDBlockParserBase
{

	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{
		this.awd_file_data.cur_block.state=AWD3Utils.BLOCKSTATE_NO_ASSET;
		var id:number = this.awd_file_data.newBlockBytes.readUnsignedByte();
		var nameSpaceString:string = this.awd_file_data.parseVarStr();
		if (this.awd_file_data.debug)
			console.log("Parsed a NameSpaceBlock: ID = " + id + " | String = " + nameSpaceString);
	}


}

export = BlockNameSpaceAWDParser;