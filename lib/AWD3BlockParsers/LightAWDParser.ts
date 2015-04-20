
import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");

import Matrix3D							= require("awayjs-core/lib/geom/Matrix3D");
import Vector3D							= require("awayjs-core/lib/geom/Vector3D");

import DisplayObjectContainer			= require("awayjs-display/lib/containers/DisplayObjectContainer");
import DisplayObject					= require("awayjs-display/lib/base/DisplayObject");
import CubeMapShadowMapper				= require("awayjs-display/lib/materials/shadowmappers/CubeMapShadowMapper");
import DirectionalShadowMapper			= require("awayjs-display/lib/materials/shadowmappers/DirectionalShadowMapper");
import ShadowMapperBase					= require("awayjs-display/lib/materials/shadowmappers/ShadowMapperBase");

import LightBase						= require("awayjs-display/lib/base/LightBase");
import DirectionalLight					= require("awayjs-display/lib/entities/DirectionalLight");
import PointLight						= require("awayjs-display/lib/entities/PointLight");
import AWD3Utils				= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");

class LightAWDParser extends AWDBlockParserBase
{

	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{	
		var light:LightBase;
		var newShadowMapper:ShadowMapperBase;

		var par_id:number = this.awd_file_data.newBlockBytes.readUnsignedInt();
		var mtx:Matrix3D = this.awd_file_data.parseMatrix3D();
		this.awd_file_data.cur_block.name = this.awd_file_data.parseVarStr();
		var lightType:number = this.awd_file_data.newBlockBytes.readUnsignedByte();
		var props:AWDProperties = this.awd_file_data.parseProperties({1:this.awd_file_data.propsNrType, 2:this.awd_file_data.propsNrType, 3:AWD3Utils.COLOR, 4:this.awd_file_data.propsNrType, 5:this.awd_file_data.propsNrType, 6:AWD3Utils.BOOL, 7:AWD3Utils.COLOR, 8:this.awd_file_data.propsNrType, 9:AWD3Utils.UINT8, 10:AWD3Utils.UINT8, 11:this.awd_file_data.propsNrType, 12:AWD3Utils.UINT16, 21:this.awd_file_data.matrixNrType, 22:this.awd_file_data.matrixNrType, 23:this.awd_file_data.matrixNrType});
		var shadowMapperType:number = props.get(9, 0);
		var parentName:string = "Root (TopLevel)";
		var lightTypes:Array<string> = ["Unsupported LightType", "PointLight", "DirectionalLight"];
		var shadowMapperTypes:Array<string> = ["No ShadowMapper", "DirectionalShadowMapper", "NearDirectionalShadowMapper", "CascadeShadowMapper", "CubeMapShadowMapper"];

		if (lightType == 1) {
			light = new PointLight();

			(<PointLight> light).radius = props.get(1, 90000);
			(<PointLight> light).fallOff = props.get(2, 100000);

			if (shadowMapperType > 0) {
				if (shadowMapperType == 4) {
					newShadowMapper = new CubeMapShadowMapper();
				}
			}

			light.transform.matrix3D = mtx;

		}

		if (lightType == 2) {

			light = new DirectionalLight(props.get(21, 0), props.get(22, -1), props.get(23, 1));

			if (shadowMapperType > 0) {
				if (shadowMapperType == 1) {
					newShadowMapper = new DirectionalShadowMapper();
				}

				//if (shadowMapperType == 2)
				//  newShadowMapper = new NearDirectionalShadowMapper(props.get(11, 0.5));
				//if (shadowMapperType == 3)
				//   newShadowMapper = new CascadeShadowMapper(props.get(12, 3));

			}

		}
		light.name=name;
		light.color = props.get(3, 0xffffff);
		light.specular = props.get(4, 1.0);
		light.diffuse = props.get(5, 1.0);
		light.ambientColor = props.get(7, 0xffffff);
		light.ambient = props.get(8, 0.0);

		// if a shadowMapper has been created, adjust the depthMapSize if needed, assign to light and set castShadows to true
		if (newShadowMapper) {
			if (newShadowMapper instanceof CubeMapShadowMapper) {
				if (props.get(10, 1) != 1) {
					newShadowMapper.depthMapSize = this.awd_file_data.getDepthSizeFromEnum(props.get(10, 1));
				}
			} else {
				if (props.get(10, 2) != 2) {
					newShadowMapper.depthMapSize = this.awd_file_data.getDepthSizeFromEnum(props.get(10, 2));
				}
			}

			light.shadowMapper = newShadowMapper;
			light.castsShadows = true;
		}

		if (par_id != 0) {

			var parent:DisplayObjectContainer = <DisplayObjectContainer>this.awd_file_data.getAssetByID(par_id)

			if (parent!=undefined){
				parent.addChild(light);
				parentName = parent.name;
			} else {
				//this.awd_file_data._blocks[blockID].addError("Could not find a parent for this.awd_file_data Light");
			}
		} else {
			//add to the content property
			//(<DisplayObjectContainer> this.awd_file_data._pContent).addChild(light);
		}

		this.awd_file_data.parseUserAttributes();
		this.awd_file_data.cur_block.data = light;


		if (this.awd_file_data.debug)
			console.log("Parsed a Light: Name = '" + this.awd_file_data.cur_block.name + "' | Type = " + lightTypes[lightType] + " | Parent-Name = " + parentName + " | ShadowMapper-Type = " + shadowMapperTypes[shadowMapperType]);
	}


}

export = LightAWDParser;