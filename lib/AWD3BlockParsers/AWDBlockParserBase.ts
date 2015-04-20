
import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDProperties			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");
import AWD3FileData				= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3FileData");


class AWDAssetParserBase
{

	private _awd_file_data:AWD3FileData;
	constructor()
	{
	}


	public get awd_file_data():AWD3FileData
	{
		return this._awd_file_data;
	}
	public set awd_file_data(awd_file_data:AWD3FileData)
	{
		this._awd_file_data=awd_file_data;
	}
	public parseFromBytes():void
	{
		throw new AbstractMethodError();
	}


}

export = AWDAssetParserBase;

