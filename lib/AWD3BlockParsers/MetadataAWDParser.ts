
import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");

import AWD3Utils						= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");

class MetadataAWDParser extends AWDBlockParserBase
{

	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{
		this.awd_file_data.cur_block.state=AWD3Utils.BLOCKSTATE_NO_ASSET;
		var props:AWDProperties = this.awd_file_data.parseProperties({1:AWD3Utils.UINT32, 2:AWD3Utils.AWDSTRING, 3:AWD3Utils.AWDSTRING, 4:AWD3Utils.AWDSTRING, 5:AWD3Utils.AWDSTRING});

		if (this.awd_file_data.debug) {
			console.log("Parsed a MetaDataBlock: TimeStamp         = " + props.get(1, 0));
			console.log("                        EncoderName       = " + props.get(2, "unknown"));
			console.log("                        EncoderVersion    = " + props.get(3, "unknown"));
			console.log("                        GeneratorName     = " + props.get(4, "unknown"));
			console.log("                        GeneratorVersion  = " + props.get(5, "unknown"));
		}
	}


}

export = MetadataAWDParser;