
import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import Matrix3D					= require("awayjs-core/lib/geom/Matrix3D");
import Vector3D					= require("awayjs-core/lib/geom/Vector3D");

import AWDProperties			= require("../AWD3ParserUtils/AWDProperties");

import DisplayObjectContainer	= require("awayjs-display/lib/containers/DisplayObjectContainer");
import DisplayObject			= require("awayjs-display/lib/base/DisplayObject");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWD3Utils				= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");


class DisplayObjectContainerAWDParser extends AWDBlockParserBase
{

	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{

		var par_id:number;
		var mtx:Matrix3D;
		var ctr:DisplayObjectContainer;
		var parent:DisplayObjectContainer;

		ctr = new DisplayObjectContainer();
		par_id = this.awd_file_data.newBlockBytes.readUnsignedInt();
		mtx = this.awd_file_data.parseMatrix3D();
		this.awd_file_data.cur_block.name = this.awd_file_data.parseVarStr();

		var parentName:string = "Root (TopLevel)";
		ctr.transform.matrix3D = mtx;


		if (par_id > 0) {
			var parent:DisplayObjectContainer = <DisplayObjectContainer>this.awd_file_data.getAssetByID(par_id);
			if (parent != undefined) {
				parent.addChild(ctr);
				parentName = parent.name;
			}
		}

		// in AWD version 2.1 we read the Container properties
		if ((this.awd_file_data.major_version > 2)||((this.awd_file_data.major_version >= 2) && (this.awd_file_data.minor_version == 1))) {
			var props:AWDProperties = this.awd_file_data.parseProperties({1:this.awd_file_data.matrixNrType, 2:this.awd_file_data.matrixNrType, 3:this.awd_file_data.matrixNrType, 4:AWD3Utils.UINT8});
			ctr.pivot = new Vector3D(props.get(1, 0), props.get(2, 0), props.get(3, 0));
		}
		// in other versions we do not read the Container properties
		else {
			this.awd_file_data.parseProperties(null);
		}

		// the extraProperties should only be set for AWD2.1-Files, but is read for both versions
		ctr.extra = this.awd_file_data.parseUserAttributes();
		this.awd_file_data.cur_block.data=ctr;
		if (this.awd_file_data.debug) {
			console.log("Parsed a Container: Name = '" + ctr.name + "' | Parent-Name = " + parentName);
		}
	}


}

export = DisplayObjectContainerAWDParser;