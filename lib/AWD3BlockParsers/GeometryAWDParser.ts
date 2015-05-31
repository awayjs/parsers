import AttributesBuffer					= require("awayjs-core/lib/attributes/AttributesBuffer");
import EventDispatcher					= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray						= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError				= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset							= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase				= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties					= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");

import Geometry							= require("awayjs-core/lib/data/Geometry");
import SubGeometryBase					= require("awayjs-core/lib/data/SubGeometryBase");
import CurveSubGeometry					= require("awayjs-core/lib/data/CurveSubGeometry");
import TriangleSubGeometry				= require("awayjs-core/lib/data/TriangleSubGeometry");

class GeometryAWDParser extends AWDBlockParserBase
{


	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{
		var geom:Geometry = new Geometry();

		// Read name and sub count
		this.awd_file_data.cur_block.name = this.awd_file_data.parseVarStr();
		var num_subs:number = this.awd_file_data.newBlockBytes.readUnsignedShort();

		// Read optional properties
		var props:AWDProperties = this.awd_file_data.parseProperties({1:this.awd_file_data.geoNrType, 2:this.awd_file_data.geoNrType});
		var geoScaleU:number = props.get(1, 1);
		var geoScaleV:number = props.get(2, 1);

		// Loop through sub meshes
		var subs_parsed:number = 0;
		while (subs_parsed < num_subs) {
			var is_curve_geom:boolean=false;
			var i:number;
			var sm_len:number, sm_end:number;
			var w_indices:Array<number>;
			var weights:Array<number>;

			sm_len = this.awd_file_data.newBlockBytes.readUnsignedInt();
			sm_end = this.awd_file_data.newBlockBytes.position + sm_len;

			var subProps:AWDProperties = this.awd_file_data.parseProperties({1:this.awd_file_data.geoNrType, 2:this.awd_file_data.geoNrType});
			// Loop through data streams
			while (this.awd_file_data.newBlockBytes.position < sm_end) {
				var idx:number = 0;
				var str_ftype:number, str_type:number, str_len:number, str_end:number;

				// Type, field type, length
				str_type = this.awd_file_data.newBlockBytes.readUnsignedByte();
				str_ftype = this.awd_file_data.newBlockBytes.readUnsignedByte();
				str_len = this.awd_file_data.newBlockBytes.readUnsignedInt();
				str_end = this.awd_file_data.newBlockBytes.position + str_len;

				var x:number, y:number, z:number;

				if (str_type == 1) {//vertex 3d positions
					var verts:Array<number> = new Array<number>();

					while (this.awd_file_data.newBlockBytes.position < str_end) {

						x = this.awd_file_data.readNumber(this.awd_file_data.accuracyGeo);
						y = this.awd_file_data.readNumber(this.awd_file_data.accuracyGeo);
						z = this.awd_file_data.readNumber(this.awd_file_data.accuracyGeo);

						verts[idx++] = x;
						verts[idx++] = y;
						verts[idx++] = z;
					}
				} else if (str_type == 2) {//face indicies positions
					var indices:Array<number> = new Array<number>();

					while (this.awd_file_data.newBlockBytes.position < str_end) {
						indices[idx++] = this.awd_file_data.newBlockBytes.readUnsignedShort();
					}

				} else if (str_type == 3) {
					var uvs:Array<number> = new Array<number>();
					while (this.awd_file_data.newBlockBytes.position < str_end) {
						uvs[idx++] = this.awd_file_data.readNumber(this.awd_file_data.accuracyGeo);

					}
				} else if (str_type == 4) {

					var normals:Array<number> = new Array<number>();

					while (this.awd_file_data.newBlockBytes.position < str_end) {
						normals[idx++] = this.awd_file_data.readNumber(this.awd_file_data.accuracyGeo);
					}

				} else if (str_type == 6) {
					w_indices = Array<number>();

					while (this.awd_file_data.newBlockBytes.position < str_end) {
						w_indices[idx++] = this.awd_file_data.newBlockBytes.readUnsignedShort()*3;
					}

				} else if (str_type == 7) {

					weights = new Array<number>();

					while (this.awd_file_data.newBlockBytes.position < str_end) {
						weights[idx++] = this.awd_file_data.readNumber(this.awd_file_data.accuracyGeo);
					}
				} else if (str_type == 8) {// 2d-positions - not used yet.
					this.awd_file_data.newBlockBytes.position = str_end;
				} else if (str_type == 9) {// combined vertex3D stream 13 x float32
					this.awd_file_data.newBlockBytes.position = str_end;
				} else if (str_type == 10) {// combined vertex2D stream 5 x float32
					is_curve_geom=true;
					var idx_pos:number = 0;
					var idx_curves:number = 0;
					var idx_uvs:number = 0;

					var positions:Array<number> = new Array<number>();
					var curveData:Array<number> = new Array<number>();
					var uvs:Array<number> = new Array<number>();

					while (this.awd_file_data.newBlockBytes.position < str_end) {

						positions[idx_pos++] = this.awd_file_data.readNumber(this.awd_file_data.accuracyGeo);// x
						positions[idx_pos++] = this.awd_file_data.readNumber(this.awd_file_data.accuracyGeo);// y
						positions[idx_pos++] =  this.awd_file_data.readNumber(this.awd_file_data.accuracyGeo);// type

						curveData[idx_curves++] = this.awd_file_data.readNumber(this.awd_file_data.accuracyGeo);// curve value 1
						curveData[idx_curves++] = this.awd_file_data.readNumber(this.awd_file_data.accuracyGeo);// curve value 2

						uvs[idx_uvs++] = this.awd_file_data.readNumber(this.awd_file_data.accuracyGeo);// curve value 1
						uvs[idx_uvs++] = this.awd_file_data.readNumber(this.awd_file_data.accuracyGeo);// curve value 1
					}
				}
				else {
					this.awd_file_data.newBlockBytes.position = str_end;
				}

			}

			this.awd_file_data.parseUserAttributes(); // Ignore sub-mesh attributes for now
			if(is_curve_geom){
				var curve_sub_geom:CurveSubGeometry = new CurveSubGeometry(new AttributesBuffer());
				curve_sub_geom.setIndices(indices);
				curve_sub_geom.setPositions(positions);
				curve_sub_geom.setCurves(curveData);
				curve_sub_geom.setUVs(uvs);
				geom.addSubGeometry(curve_sub_geom);
				if (this.awd_file_data.debug)
					console.log("Parsed a CurveSubGeometry");
			}
			else {
				var triangle_sub_geom = new TriangleSubGeometry(new AttributesBuffer());
				if (weights)
					triangle_sub_geom.jointsPerVertex = weights.length / (verts.length / 3);
				if (normals)
					triangle_sub_geom.autoDeriveNormals = false;
				if (uvs)
					triangle_sub_geom.autoDeriveUVs = false;
				//triangle_sub_geom.autoDeriveNormals = false;
				if (true) {
					triangle_sub_geom.autoDeriveTangents = true;
				}
				triangle_sub_geom.setIndices(indices);
				triangle_sub_geom.setPositions(verts);
				triangle_sub_geom.setNormals(normals);
				triangle_sub_geom.setUVs(uvs);
				triangle_sub_geom.setTangents(null);
				triangle_sub_geom.setJointWeights(weights);
				triangle_sub_geom.setJointIndices(w_indices);

				var scaleU:number = subProps.get(1, 1);
				var scaleV:number = subProps.get(2, 1);
				var setSubUVs:boolean = false; //this should remain false atm, because in AwayBuilder the uv is only scaled by the geometry

				if ((geoScaleU != scaleU) || (geoScaleV != scaleV)) {
					setSubUVs = true;
					scaleU = geoScaleU / scaleU;
					scaleV = geoScaleV / scaleV;
				}

				if (setSubUVs)
					triangle_sub_geom.scaleUV(scaleU, scaleV);
				geom.addSubGeometry(triangle_sub_geom);
				if (this.awd_file_data.debug)
					console.log("Parsed a TriangleSubGeometry");
			}


			// TODO: Somehow map in-sub to out-sub indices to enable look-up
			// when creating meshes (and their material assignments.)

			subs_parsed++;
		}
		if ((geoScaleU != 1) || (geoScaleV != 1))
			geom.scaleUV(geoScaleU, geoScaleV);
		this.awd_file_data.parseUserAttributes();
		this.awd_file_data.cur_block.data=geom;
		if (this.awd_file_data.debug) {
			console.log("Parsed a TriangleGeometry: Name = " + name);
		}
	}

}

export = GeometryAWDParser;