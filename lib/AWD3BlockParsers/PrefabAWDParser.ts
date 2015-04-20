
import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");
import AWD3Utils				= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");

import PrefabBase						= require("awayjs-display/lib/prefabs/PrefabBase");
import PrimitiveCapsulePrefab			= require("awayjs-display/lib/prefabs/PrimitiveCapsulePrefab");
import PrimitiveConePrefab				= require("awayjs-display/lib/prefabs/PrimitiveConePrefab");
import PrimitiveCubePrefab				= require("awayjs-display/lib/prefabs/PrimitiveCubePrefab");
import PrimitiveCylinderPrefab			= require("awayjs-display/lib/prefabs/PrimitiveCylinderPrefab");
import PrimitivePlanePrefab				= require("awayjs-display/lib/prefabs/PrimitivePlanePrefab");
import PrimitiveSpherePrefab			= require("awayjs-display/lib/prefabs/PrimitiveSpherePrefab");
import PrimitiveTorusPrefab				= require("awayjs-display/lib/prefabs/PrimitiveTorusPrefab");
import Matrix3D							= require("awayjs-core/lib/geom/Matrix3D");

class PrefabAWDParser extends AWDBlockParserBase
{

	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{
		var name:string;
		var prefab:PrefabBase;
		var primType:number;
		var subs_parsed:number;
		var props:AWDProperties;
		var bsm:Matrix3D;

		// Read name and sub count
		this.awd_file_data.cur_block.name = this.awd_file_data.parseVarStr();
		primType = this.awd_file_data.newBlockBytes.readUnsignedByte();
		props = this.awd_file_data.parseProperties({101:this.awd_file_data.geoNrType, 102:this.awd_file_data.geoNrType, 103:this.awd_file_data.geoNrType, 110:this.awd_file_data.geoNrType, 111:this.awd_file_data.geoNrType, 301:AWD3Utils.UINT16, 302:AWD3Utils.UINT16, 303:AWD3Utils.UINT16, 701:AWD3Utils.BOOL, 702:AWD3Utils.BOOL, 703:AWD3Utils.BOOL, 704:AWD3Utils.BOOL});

		var primitiveTypes:Array<string> = ["Unsupported Type-ID", "PrimitivePlanePrefab", "PrimitiveCubePrefab", "PrimitiveSpherePrefab", "PrimitiveCylinderPrefab", "PrimitivesConePrefab", "PrimitivesCapsulePrefab", "PrimitivesTorusPrefab"]

		switch (primType) {
			// to do, not all properties are set on all primitives

			case 1:
				prefab = new PrimitivePlanePrefab(props.get(101, 100), props.get(102, 100), props.get(301, 1), props.get(302, 1), props.get(701, true), props.get(702, false));
				break;

			case 2:
				prefab = new PrimitiveCubePrefab(props.get(101, 100), props.get(102, 100), props.get(103, 100), props.get(301, 1), props.get(302, 1), props.get(303, 1), props.get(701, true));
				break;

			case 3:
				prefab = new PrimitiveSpherePrefab(props.get(101, 50), props.get(301, 16), props.get(302, 12), props.get(701, true));
				break;

			case 4:
				prefab = new PrimitiveCylinderPrefab(props.get(101, 50), props.get(102, 50), props.get(103, 100), props.get(301, 16), props.get(302, 1), true, true, true); // bool701, bool702, bool703, bool704);
				if (!props.get(701, true))
					(<PrimitiveCylinderPrefab>prefab).topClosed = false;
				if (!props.get(702, true))
					(<PrimitiveCylinderPrefab>prefab).bottomClosed = false;
				if (!props.get(703, true))
					(<PrimitiveCylinderPrefab>prefab).yUp = false;

				break;

			case 5:
				prefab = new PrimitiveConePrefab(props.get(101, 50), props.get(102, 100), props.get(301, 16), props.get(302, 1), props.get(701, true), props.get(702, true));
				break;

			case 6:
				prefab = new PrimitiveCapsulePrefab(props.get(101, 50), props.get(102, 100), props.get(301, 16), props.get(302, 15), props.get(701, true));
				break;

			case 7:
				prefab = new PrimitiveTorusPrefab(props.get(101, 50), props.get(102, 50), props.get(301, 16), props.get(302, 8), props.get(701, true));
				break;

			default:
				prefab = new PrefabBase();
				console.log("ERROR: UNSUPPORTED PREFAB_TYPE");
				break;
		}

		if ((props.get(110, 1) != 1) || (props.get(111, 1) != 1)) {
			//geom.subGeometries;
			//geom.scaleUV(props.get(110, 1), props.get(111, 1)); //TODO add back scaling to prefabs
		}

		this.awd_file_data.parseUserAttributes();
		this.awd_file_data.cur_block.data = prefab;

		if (this.awd_file_data.debug) {
			if ((primType < 0) || (primType > 7)) {
				primType = 0;
			}
			console.log("Parsed a Primivite: Name = " + this.awd_file_data.cur_block.name + "| type = " + primitiveTypes[primType]);
		}
	}


}

export = PrefabAWDParser;