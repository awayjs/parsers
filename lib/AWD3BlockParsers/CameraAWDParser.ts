
import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");
import AWD3Parser				= require("awayjs-parsers/lib/AWD3Parser");

import Camera							= require("awayjs-display/lib/entities/Camera");
import ProjectionBase					= require("awayjs-core/lib/projections/ProjectionBase");
import PerspectiveProjection			= require("awayjs-core/lib/projections/PerspectiveProjection");
import OrthographicProjection			= require("awayjs-core/lib/projections/OrthographicProjection");
import OrthographicOffCenterProjection	= require("awayjs-core/lib/projections/OrthographicOffCenterProjection");
import DisplayObjectContainer			= require("awayjs-display/lib/containers/DisplayObjectContainer");
import Matrix3D							= require("awayjs-core/lib/geom/Matrix3D");
import Vector3D							= require("awayjs-core/lib/geom/Vector3D");
import AWD3Utils						= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");

class CameraAWD3Parser extends AWDBlockParserBase
{

	constructor()
	{
		super();
	}


	public parseFromBytes():void {
		var par_id:number = this.awd_file_data.newBlockBytes.readUnsignedInt();
		var mtx:Matrix3D = this.awd_file_data.parseMatrix3D();
		this.awd_file_data.cur_block.name = this.awd_file_data.parseVarStr();
		var parentName:string = "Root (TopLevel)";
		var projection:ProjectionBase;

		this.awd_file_data.newBlockBytes.readUnsignedByte(); //set as active camera
		this.awd_file_data.newBlockBytes.readShort(); //lengthof lenses - not used yet

		var projectiontype:number = this.awd_file_data.newBlockBytes.readShort();
		var props:AWDProperties = this.awd_file_data.parseProperties({
			101: this.awd_file_data.propsNrType,
			102: this.awd_file_data.propsNrType,
			103: this.awd_file_data.propsNrType,
			104: this.awd_file_data.propsNrType
		});

		switch (projectiontype) {
			case 5001:
				projection = new PerspectiveProjection(props.get(101, 60));
				break;
			case 5002:
				projection = new OrthographicProjection(props.get(101, 500));
				break;
			case 5003:
				projection = new OrthographicOffCenterProjection(props.get(101, -400), props.get(102, 400), props.get(103, -300), props.get(104, 300));
				break;
			default:
				console.log("unsupportedLenstype");
				return;
		}

		var camera:Camera = new Camera(projection);
		camera.transform.matrix3D = mtx;
		if (par_id > 0) {
			var parent:DisplayObjectContainer = <DisplayObjectContainer>this.awd_file_data.getAssetByID(par_id);
			if (parent != undefined) {
				parent.addChild(camera);
				parentName = parent.name;
			}
		}

		camera.name = name;
		props = this.awd_file_data.parseProperties({1:this.awd_file_data.matrixNrType, 2:this.awd_file_data.matrixNrType, 3:this.awd_file_data.matrixNrType, 4:AWD3Utils.UINT8});
		camera.pivot = new Vector3D(props.get(1, 0), props.get(2, 0), props.get(3, 0));
		camera.extra = this.awd_file_data.parseUserAttributes();
		this.awd_file_data.cur_block.data = camera;

		if (this.awd_file_data.debug) {
			console.log("Parsed a Camera: Name = '" + camera.name + "' | Projectiontype = " + projection + " | Parent-Name = " + parentName);
		}

	}


}

export = CameraAWD3Parser;