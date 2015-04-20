
import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");
import AWD3Utils				= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");

import TriangleSubGeometry				= require("awayjs-core/lib/data/TriangleSubGeometry");
import VertexClipNode					= require("awayjs-renderergl/lib/animators/nodes/VertexClipNode");
import Geometry							= require("awayjs-core/lib/data/Geometry");

class VertexAnimClipAWDParser extends AWDBlockParserBase
{

	constructor()
	{
		super();
	}

	public parseFromBytes():void
	{
		var poseOnly:boolean=false;
		if(this.awd_file_data.cur_block.type==111){
			poseOnly=true
		}
		var num_frames:number /*uint*/ = 1;
		var num_submeshes:number /*uint*/;
		var frames_parsed:number /*uint*/;
		var subMeshParsed:number /*uint*/;
		var frame_dur:number;
		var x:number;
		var y:number;
		var z:number;
		var str_len:number;
		var str_end:number;
		var geometry:Geometry;
		var subGeom:TriangleSubGeometry;
		var idx:number /*int*/ = 0;
		var indices:Array<number> /*uint*/;
		var verts:Array<number>;
		var num_Streams:number /*int*/ = 0;
		var streamsParsed:number /*int*/ = 0;
		var streamtypes:Array<number> /*int*/ = new Array<number>() /*int*/;
		var props:AWDProperties;
		var thisGeo:Geometry;
		var clip:VertexClipNode = new VertexClipNode();
		this.awd_file_data.cur_block.name = this.awd_file_data.parseVarStr();
		var geoAdress:number /*int*/ = this.awd_file_data.newBlockBytes.readUnsignedInt();
		var geom:Geometry = <Geometry>this.awd_file_data.getAssetByID(geoAdress);
		if (geom==undefined) {
			//this.awd_file_data._blocks[blockID].addError("Could not find the target-Geometry-Object " + geoAdress + " ) for this.awd_file_data VertexClipNode");
			return;
		}
		var uvs:Array<Array<number>> = this.awd_file_data.getUVForVertexAnimation(geoAdress);
		if (!poseOnly)
			num_frames = this.awd_file_data.newBlockBytes.readUnsignedShort();

		num_submeshes = this.awd_file_data.newBlockBytes.readUnsignedShort();
		num_Streams = this.awd_file_data.newBlockBytes.readUnsignedShort();
		streamsParsed = 0;
		while (streamsParsed < num_Streams) {
			streamtypes.push(this.awd_file_data.newBlockBytes.readUnsignedShort());
			streamsParsed++;
		}
		props = this.awd_file_data.parseProperties({1:AWD3Utils.BOOL, 2:AWD3Utils.BOOL});

		clip.looping = props.get(1, true);
		clip.stitchFinalFrame = props.get(2, false);

		frames_parsed = 0;
		while (frames_parsed < num_frames) {
			frame_dur = this.awd_file_data.newBlockBytes.readUnsignedShort();
			geometry = new Geometry();
			subMeshParsed = 0;
			while (subMeshParsed < num_submeshes) {
				streamsParsed = 0;
				str_len = this.awd_file_data.newBlockBytes.readUnsignedInt();
				str_end = this.awd_file_data.newBlockBytes.position + str_len;
				while (streamsParsed < num_Streams) {
					if (streamtypes[streamsParsed] == 1) {
						indices = geom.subGeometries[subMeshParsed].indices;
						verts = new Array<number>();
						idx = 0;
						while (this.awd_file_data.newBlockBytes.position < str_end) {
							x = this.awd_file_data.readNumber(this.awd_file_data.accuracyGeo)
							y = this.awd_file_data.readNumber(this.awd_file_data.accuracyGeo)
							z = this.awd_file_data.readNumber(this.awd_file_data.accuracyGeo)
							verts[idx++] = x;
							verts[idx++] = y;
							verts[idx++] = z;
						}
						subGeom = new TriangleSubGeometry(true);
						subGeom.updateIndices(indices);
						subGeom.updatePositions(verts);
						subGeom.updateUVs(uvs[subMeshParsed]);
						subGeom.updateVertexNormals(null);
						subGeom.updateVertexTangents(null);
						subGeom.autoDeriveNormals = false;
						subGeom.autoDeriveTangents = false;
						subMeshParsed++;
						geometry.addSubGeometry(subGeom)
					} else
						this.awd_file_data.newBlockBytes.position = str_end;
					streamsParsed++;
				}
			}
			clip.addFrame(geometry, frame_dur);
			frames_parsed++;
		}
		this.awd_file_data.parseUserAttributes();
		this.awd_file_data.cur_block.data=clip;
		if (this.awd_file_data.debug)
			console.log("Parsed a VertexClipNode: Name = " + clip.name + " | Target-Geometry-Name = " + geom.name + " | Number of Frames = " + clip.frames.length);
	}


}

export = VertexAnimClipAWDParser;