/**
 * Created by 80prozent on 4/18/2015.
 */

import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");

import Matrix3D							= require("awayjs-core/lib/geom/Matrix3D");
import Mesh								= require("awayjs-display/lib/entities/Mesh");

import DisplayObjectContainer			= require("awayjs-display/lib/containers/DisplayObjectContainer");
import DisplayObject					= require("awayjs-display/lib/base/DisplayObject");
import MaterialBase						= require("awayjs-display/lib/materials/MaterialBase");
import Geometry							= require("awayjs-core/lib/data/Geometry");
import Vector3D							= require("awayjs-core/lib/geom/Vector3D");
import AWD3Utils			= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");

class MeshAWDParser extends AWDBlockParserBase
{


	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{
		var num_materials:number;
		var materials_parsed:number;
		if(this.awd_file_data.cur_block.type==23) {
			var par_id:number = this.awd_file_data.newBlockBytes.readUnsignedInt();
			var mtx:Matrix3D = this.awd_file_data.parseMatrix3D();
		}
		this.awd_file_data.cur_block.name = this.awd_file_data.parseVarStr();
		var parentName:string = "Root (TopLevel)";
		var data_id:number = this.awd_file_data.newBlockBytes.readUnsignedInt();
		var geom:Geometry = <Geometry>this.awd_file_data.getAssetByID(data_id)

		if (geom==undefined) {
			geom = new Geometry();
		}

		this.awd_file_data.cur_block.geoID = data_id;
		var materials:Array<MaterialBase> = new Array<MaterialBase>();
		num_materials = this.awd_file_data.newBlockBytes.readUnsignedShort();

		var materialNames:Array<string> = new Array<string>();
		materials_parsed = 0;


		while (materials_parsed < num_materials) {
			var mat_id:number;
			mat_id = this.awd_file_data.newBlockBytes.readUnsignedInt();
			var m:MaterialBase = <MaterialBase> this.awd_file_data.getAssetByID(mat_id);
			if(m!=undefined) {
				materials.push(m);
				materialNames.push(m.name);
			}
			materials_parsed++;
		}

		var mesh:Mesh = new Mesh(geom, null);

		if(this.awd_file_data.cur_block.type==23) {

			mesh.transform.matrix3D = mtx;
			if(par_id>0) {
				var parent:DisplayObjectContainer = <DisplayObjectContainer>this.awd_file_data.getAssetByID(par_id)

				if (parent != undefined) {
					parent.addChild(mesh);
					parentName = parent.name;
				}
			}
		}

		if (materials.length >= 1 && mesh.subMeshes.length == 1) {
			mesh.material = materials[0];
		} else if (materials.length > 1) {
			var i:number;

			// Assign each sub-mesh in the mesh a material from the list. If more sub-meshes
			// than materials, repeat the last material for all remaining sub-meshes.
			for (i = 0; i < mesh.subMeshes.length; i++) {
				mesh.subMeshes[i].material = materials[Math.min(materials.length - 1, i)];
			}
		}
		if ((this.awd_file_data.major_version > 2)||((this.awd_file_data.major_version >= 2) && (this.awd_file_data.minor_version == 1))) {
			var props:AWDProperties = this.awd_file_data.parseProperties({1:this.awd_file_data.matrixNrType, 2:this.awd_file_data.matrixNrType, 3:this.awd_file_data.matrixNrType, 4:AWD3Utils.UINT8, 5:AWD3Utils.BOOL});
			mesh.pivot = new Vector3D(<number>props.get(1, 0), <number>props.get(2, 0), <number> props.get(3, 0));
			mesh.castsShadows = props.get(5, true);
		} else {
			this.awd_file_data.parseProperties(null);
		}

		mesh.extra = this.awd_file_data.parseUserAttributes();
		this.awd_file_data.cur_block.data = mesh;
		if (this.awd_file_data.debug) {
			console.log("Parsed a Mesh: Name = '" + name + "' | Parent-Name = " + parentName + "| Geometry-Name = " + geom.name + " | SubMeshes = " + mesh.subMeshes.length + " | Mat-Names = " + materialNames.toString());
		}
	}


}

export = MeshAWDParser;