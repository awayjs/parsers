import {AssetBase}				from "@awayjs/core/lib/library/AssetBase";
import {AWDBlock}				from "../lib/AWD3ParserUtils/AWDBlock";
import {IAsset} 				from "@awayjs/core/lib/library/IAsset";
import {ByteArray}						from "@awayjs/core/lib/utils/ByteArray";
import {AWDEncoder}						from "../lib/AWDEncoder";
/**
 * TextureAtlasParser provides a "parser" for natively supported image types (jpg, png). While it simply loads bytes into
 * a loader object, it wraps it in a BitmapImage2DResource so resource management can happen consistently without
 * exception cases.
 */
export class AWDFile extends AssetBase implements AssetBase
{
	public static assetType:string = "[asset AWDFile]";
	private _awdBlocks:Array<AWDBlock>;
	private _mapIAssetsToID:Object;
	private _bytes:ByteArray;
	constructor()
	{
		super();
		this._awdBlocks=[];
		this._mapIAssetsToID={};
		
		// create the metadatablock
		
	}

	public get assetType():string
	{
		return AWDFile.assetType;
	}
	
	public get awdBlocks():Array<AWDBlock>
	{
		return this.awdBlocks;
	}
	public addAsset(asset:IAsset, dependenciesMode:number=AWDDependenciesMode.ADD_DEPENDENCIES):void
	{
		var newAWDBlock:AWDBlock=new AWDBlock(0,0);
		newAWDBlock.data = asset;
		this._awdBlocks.push(newAWDBlock);
	}
	public getBytes():ByteArray
	{

		var bodyLength:number=0;
		var i:number=0;
		for (i=0; i<this._awdBlocks.length; i++){
			bodyLength+=1;	// todo get the length of bytes for each block
		}
		// write the header of the file
		//AWDEncoder.writeAWDHeader(exportBytes, 0, 0, bodyLength);
		for (i=0; i<this._awdBlocks.length; i++){
			// write all blocks to file
		}
		
		
		return null;
	}
}
class AWDDependenciesMode{
	public static ADD_DEPENDENCIES:number=0;
	public static ADD_EXTERNAL_DEPENDENCIES:number=1;
	public static ADD_NO_DEPENDENCIES:number=2;

}
