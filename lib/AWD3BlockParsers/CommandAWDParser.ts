
import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");
import DisplayObject					= require("awayjs-display/lib/base/DisplayObject");
import DisplayObjectContainer	= require("awayjs-display/lib/containers/DisplayObjectContainer");
import Matrix3D							= require("awayjs-core/lib/geom/Matrix3D");
import Vector3D							= require("awayjs-core/lib/geom/Vector3D");

import AWD3Utils						= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");

class CommandAWDParser extends AWDBlockParserBase
{

	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{
		this.awd_file_data.cur_block.state=AWD3Utils.BLOCKSTATE_NO_ASSET;
		var hasBlocks:boolean = ( this.awd_file_data.newBlockBytes.readUnsignedByte() == 1 );
		var par_id:number = this.awd_file_data.newBlockBytes.readUnsignedInt();
		var mtx:Matrix3D = this.awd_file_data.parseMatrix3D();
		var name:string = this.awd_file_data.parseVarStr();

		var parentObject:DisplayObjectContainer;
		var targetObject:DisplayObject;

		if(par_id>0)
			parentObject = <DisplayObjectContainer>this.awd_file_data.getAssetByID(par_id); //for no only light is requested!!!!

		var numCommands:number = this.awd_file_data.newBlockBytes.readShort();
		var typeCommand:number = this.awd_file_data.newBlockBytes.readShort();

		var props:AWDProperties = this.awd_file_data.parseProperties({1:AWD3Utils.BADDR});

		switch (typeCommand) {
			case 1:

				var targetID:number = props.get(1, 0);
				//var returnedArrayTarget:Array<any> = this.getAssetByID(targetID, [LightBase.assetType, TextureProjector.assetType]); //for no only light is requested!!!!
				targetObject = <DisplayObject>this.awd_file_data.getAssetByID(targetID); //for no only light is requested!!!!
				if(targetObject==undefined){
					//this._awd_data._blocks[blockID].addError("Could not find the light (ID = " + targetID + " ( for this CommandBock!");
					return;
				}

				if (parentObject) {
					parentObject.addChild(targetObject);
				}
				targetObject.transform.matrix3D = mtx;
				break;
		}

		if (targetObject) {
			props = this.awd_file_data.parseProperties({1:this.awd_file_data.matrixNrType, 2:this.awd_file_data.matrixNrType, 3:this.awd_file_data.matrixNrType, 4:AWD3Utils.UINT8});

			targetObject.pivot = new Vector3D(props.get(1, 0), props.get(2, 0), props.get(3, 0));
			targetObject.extra = this.awd_file_data.parseUserAttributes();

		}
		//this._awd_data._blocks[blockID].data = targetObject

		if (this.awd_file_data.debug) {
			console.log("Parsed a CommandBlock: Name = '" + name);
		}
	}


}

export = CommandAWDParser;