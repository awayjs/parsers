import Sampler2D					= require("awayjs-core/lib/image/Sampler2D");
import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");

import MethodMaterialMode				= require("awayjs-methodmaterials/lib/MethodMaterialMode");
import MethodMaterial					= require("awayjs-methodmaterials/lib/MethodMaterial");

import MaterialBase						= require("awayjs-display/lib/materials/MaterialBase");
import LightPickerBase					= require("awayjs-display/lib/materials/lightpickers/LightPickerBase")
import BasicMaterial					= require("awayjs-display/lib/materials/BasicMaterial");
import DefaultMaterialManager			= require("awayjs-display/lib/managers/DefaultMaterialManager");
import TextureBase						= require("awayjs-display/lib/textures/TextureBase");
import Single2DTexture					= require("awayjs-display/lib/textures/Single2DTexture");
import SingleCubeTexture				= require("awayjs-display/lib/textures/SingleCubeTexture");

import EffectMethodBase					= require("awayjs-methodmaterials/lib/methods/EffectMethodBase");
import AmbientEnvMapMethod				= require("awayjs-methodmaterials/lib/methods/AmbientEnvMapMethod");
import DiffuseDepthMethod				= require("awayjs-methodmaterials/lib/methods/DiffuseDepthMethod");
import DiffuseCelMethod					= require("awayjs-methodmaterials/lib/methods/DiffuseCelMethod");
import DiffuseGradientMethod			= require("awayjs-methodmaterials/lib/methods/DiffuseGradientMethod");
import DiffuseLightMapMethod			= require("awayjs-methodmaterials/lib/methods/DiffuseLightMapMethod");
import DiffuseWrapMethod				= require("awayjs-methodmaterials/lib/methods/DiffuseWrapMethod");
import NormalSimpleWaterMethod			= require("awayjs-methodmaterials/lib/methods/NormalSimpleWaterMethod");
import SpecularFresnelMethod			= require("awayjs-methodmaterials/lib/methods/SpecularFresnelMethod");
import SpecularAnisotropicMethod		= require("awayjs-methodmaterials/lib/methods/SpecularAnisotropicMethod");
import SpecularCelMethod				= require("awayjs-methodmaterials/lib/methods/SpecularCelMethod");
import SpecularPhongMethod				= require("awayjs-methodmaterials/lib/methods/SpecularPhongMethod");
import ShadowMapMethodBase				= require("awayjs-methodmaterials/lib/methods/ShadowMapMethodBase");
import ShadowMethodBase					= require("awayjs-methodmaterials/lib/methods/ShadowMethodBase");
import AWD3Utils				= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");

class MaterialAWDParser extends AWDBlockParserBase
{

	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{
		// version 2.0
		////blockLength = block.len;
		var name:string;
		var type:number;
		var props:AWDProperties;
		var mat:MethodMaterial;
		var attributes:Object;
		var finalize:boolean;
		var num_methods:number;
		var methods_parsed:number;
		var returnedArray:Array<any>;
		var mat:MethodMaterial;
		var normalTexture:Single2DTexture;
		var specTexture:Single2DTexture;
		var returnedArray:Array<any>;

		this.awd_file_data.cur_block.name = this.awd_file_data.parseVarStr();
		type = this.awd_file_data.newBlockBytes.readUnsignedByte();
		num_methods = this.awd_file_data.newBlockBytes.readUnsignedByte();

		if((this.awd_file_data.major_version==2)&&(this.awd_file_data.major_version==0)) {

			// Read material numerical properties
			// (1=color, 2=bitmap url, 10=alpha, 11=alpha_blending, 12=alpha_threshold, 13=repeat)
			props = this.awd_file_data.parseProperties({
				1: AWD3Utils.INT32,
				2: AWD3Utils.BADDR,
				10: this.awd_file_data.propsNrType,
				11: AWD3Utils.BOOL,
				12: this.awd_file_data.propsNrType,
				13: AWD3Utils.BOOL
			});
			methods_parsed = 0;
			while (methods_parsed < num_methods) {
				var method_type:number;

				method_type = this.awd_file_data.newBlockBytes.readUnsignedShort();
				this.awd_file_data.parseProperties(null);
				this.awd_file_data.parseUserAttributes();
				methods_parsed += 1;
			}
			var debugString:string = "";
			attributes = this.awd_file_data.parseUserAttributes();
			if (type === 1) { // Color material
				debugString += "Parsed a ColorMaterial(SinglePass): Name = '" + name + "' | ";
				var color:number;
				color = props.get(1, 0xffffff);
				/*if (this.awd_file_data.materialMode < 2) {
					mat = new MethodMaterial(color, props.get(10, 1.0));
				} else {
					mat = new MethodMaterial(color);
					mat.mode = MethodMaterialMode.MULTI_PASS;
				}*/
			} else if (type === 2) {
				var tex_addr:number = props.get(2, 0);
				var texture:TextureBase=undefined;
				if (tex_addr > 0) {
					var texture:TextureBase = <TextureBase> this.awd_file_data.getAssetByID(tex_addr);
				}
				if (texture==undefined) {
					texture= DefaultMaterialManager.getDefaultTexture();
				}

				mat = new MethodMaterial();
				mat.ambientMethod.texture = texture;
				/*
				if (this.awd_file_data.materialMode < 2) {
					mat.alphaBlending = props.get(11, false);
					mat.alpha = props.get(10, 1.0);
					debugString += "Parsed a MethodMaterial(SinglePass): Name = '" + name + "' | Texture-Name = " + mat.name;
				} else {
					mat.mode = MethodMaterialMode.MULTI_PASS;
					debugString += "Parsed a MethodMaterial(MultiPass): Name = '" + name + "' | Texture-Name = " + mat.name;
				}
				*/
			}

			mat.extra = attributes;
			mat.alphaThreshold = props.get(12, 0.0);
			mat.style.sampler = new Sampler2D(props.get(13, false));
			mat.name=name;
			if (this.awd_file_data.debug) {
				console.log(debugString);

			}
			this.awd_file_data.cur_block.data=mat;
			return;
		}

		// version 2.1+

		var props:AWDProperties = this.awd_file_data.parseProperties({1:AWD3Utils.UINT32, 2:AWD3Utils.BADDR, 3:AWD3Utils.BADDR, 4:AWD3Utils.UINT8, 5:AWD3Utils.BOOL, 6:AWD3Utils.BOOL, 7:AWD3Utils.BOOL, 8:AWD3Utils.BOOL, 9:AWD3Utils.UINT8, 10:this.awd_file_data.propsNrType, 11:AWD3Utils.BOOL, 12:this.awd_file_data.propsNrType, 13:AWD3Utils.BOOL, 15:this.awd_file_data.propsNrType, 16:AWD3Utils.UINT32, 17:AWD3Utils.BADDR, 18:this.awd_file_data.propsNrType, 19:this.awd_file_data.propsNrType, 20:AWD3Utils.UINT32, 21:AWD3Utils.BADDR, 22:AWD3Utils.BADDR});
		var spezialType:number = props.get(4, 0);
		var debugString:string = "Parsed Material ";

		if (spezialType >= 2) {//this.awd_file_data is no supported material
			//this.awd_file_data._blocks[blockID].addError("Material-spezialType '" + spezialType + "' is not supported, can only be 0:singlePass, 1:MultiPass !");
			return;
		}

		if (type <= 2) {// Color material
			/*
			if (this.awd_file_data.materialMode == 1)
				spezialType = 0;
			else if (this.awd_file_data.materialMode == 2)
				spezialType = 1;
				*/

			if (spezialType < 2) {//this.awd_file_data is SinglePass or MultiPass

				if (type == 1) {// Color material
					var color:number = props.get(1, 0xcccccc);//TODO temporarily swapped so that diffuse color goes to ambient

					if (spezialType == 1) {//	MultiPassMaterial
						mat = new MethodMaterial(color);
						mat.mode = MethodMaterialMode.MULTI_PASS;
						debugString += "Parsed a ColorMaterial(MultiPass): Name = '" + name + "' | ";

					} else { //	SinglePassMaterial
						mat = new MethodMaterial(color, props.get(10, 1.0));
						mat.alphaBlending = props.get(11, false);
						debugString += "Parsed a ColorMaterial(SinglePass): Name = '" + name + "' | ";
					}

				} else if (type == 2) {// texture material
					var tex_addr:number = props.get(2, 0);//TODO temporarily swapped so that diffuse texture goes to ambient
					var diftexture:TextureBase=undefined;
					if (tex_addr > 0) {
						diftexture = <TextureBase> this.awd_file_data.getAssetByID(tex_addr);
					}
					if (diftexture==undefined) {
						diftexture= DefaultMaterialManager.getDefaultTexture();
					}
					mat = new MethodMaterial();
					mat.ambientMethod.texture = diftexture;

					if (spezialType == 1) {// MultiPassMaterial
						mat.mode = MethodMaterialMode.MULTI_PASS;

						debugString += "Parsed a MethodMaterial(MultiPass): Name = '" + this.awd_file_data.cur_block.name + "' | Texture-Name = " + diftexture.name;
					} else {//	SinglePassMaterial
						mat.alpha = props.get(10, 1.0);
						mat.alphaBlending = props.get(11, false);

						debugString += "Parsed a MethodMaterial(SinglePass): Name = '" + this.awd_file_data.cur_block.name + "' | Texture-Name = " + diftexture.name;
					}
				}


				var diffuseTex_addr:number = props.get(17, 0);

				var diffuseTexture:TextureBase = undefined;
				if (diffuseTex_addr > 0) {
					diffuseTexture = <Single2DTexture> this.awd_file_data.getAssetByID(diffuseTex_addr);
				}
				if (diffuseTexture) {
					mat.diffuseTexture = <Single2DTexture>diffuseTexture;
					debugString += " | DiffuseTexture-Name = " + diffuseTexture.name;
				}

				var normalTex_addr:number = props.get(3, 0);


				normalTexture = undefined;
				if (normalTex_addr > 0) {
					normalTexture = <Single2DTexture> this.awd_file_data.getAssetByID(normalTex_addr);
				}

				var specTex_addr:number = props.get(21, 0);
				specTexture=undefined;
				if (specTex_addr > 0) {
					specTexture = <Single2DTexture> this.awd_file_data.getAssetByID(specTex_addr);
				}

				var lightPickerAddr:number = props.get(22, 0);
				if(lightPickerAddr>0) {
					mat.lightPicker = <LightPickerBase> this.awd_file_data.getAssetByID(lightPickerAddr);
				}

				mat.style.sampler = new Sampler2D(props.get(13, false), props.get(5, true), props.get(6, true));
				mat.bothSides = props.get(7, false);
				mat.alphaPremultiplied = props.get(8, false);
				mat.blendMode = this.awd_file_data.getBlendModeStringFromEnum(props.get(9, 0));
				mat.normalMethod.texture = normalTexture;
				mat.specularMethod.texture = specTexture;

				mat.alphaThreshold = props.get(12, 0.0);
				mat.ambientMethod.strength = props.get(15, 1.0);
				mat.diffuseMethod.color = props.get(16, 0xffffff);
				mat.specularMethod.strength = props.get(18, 1.0);
				mat.specularMethod.gloss = props.get(19, 50);
				mat.specularMethod.color = props.get(20, 0xffffff);

				var methods_parsed:number = 0;
				var targetID:number;

				while (methods_parsed < num_methods) {
					var method_type:number;
					method_type = this.awd_file_data.newBlockBytes.readUnsignedShort();

					props = this.awd_file_data.parseProperties({
						1: AWD3Utils.BADDR,
						2: AWD3Utils.BADDR,
						3: AWD3Utils.BADDR,
						101: this.awd_file_data.propsNrType,
						102: this.awd_file_data.propsNrType,
						103: this.awd_file_data.propsNrType,
						201: AWD3Utils.UINT32,
						202: AWD3Utils.UINT32,
						301: AWD3Utils.UINT16,
						302: AWD3Utils.UINT16,
						401: AWD3Utils.UINT8,
						402: AWD3Utils.UINT8,
						601: AWD3Utils.COLOR,
						602: AWD3Utils.COLOR,
						701: AWD3Utils.BOOL,
						702: AWD3Utils.BOOL,
						801: AWD3Utils.MTX4x4
					});

					switch (method_type) {
						case 999: //wrapper-Methods that will load a previous parsed EffectMethod

							targetID = props.get(1, 0);
							if (targetID>0) {
								var fx_method:EffectMethodBase = <EffectMethodBase>this.awd_file_data.getAssetByID(targetID);
								mat.addEffectMethod(fx_method);
								debugString += " | EffectMethod-Name = " + (<EffectMethodBase> fx_method).name;
							}

							break;

						case 998: //wrapper-Methods that will load a previous parsed ShadowMapMethod

							targetID = props.get(1, 0);
							if (targetID>0) {
								var shadow_method:ShadowMethodBase = <ShadowMethodBase>this.awd_file_data.getAssetByID(targetID);
								mat.shadowMethod=shadow_method;
								debugString += " | EffectMethod-Name = " + (<ShadowMethodBase> shadow_method).name;
							}

							break;

						case 1: //EnvMapAmbientMethod
							targetID = props.get(1, 0);
							var cubeTex:SingleCubeTexture=undefined;
							if (targetID>0) {
								cubeTex = <SingleCubeTexture>this.awd_file_data.getAssetByID(targetID);
							}
							if(cubeTex==undefined){
								cubeTex=<SingleCubeTexture>this.awd_file_data.getDefaultCubeTexture();
							}
							//if (!returnedArray[0])
								//this.awd_file_data._blocks[blockID].addError("Could not find the EnvMap (ID = " + targetID + " ) for this.awd_file_data EnvMapAmbientMethodMaterial");
							mat.ambientMethod = new AmbientEnvMapMethod();
							mat.ambientMethod.texture = cubeTex;
							debugString += " | AmbientEnvMapMethod | EnvMap-Name =" + (<SingleCubeTexture> cubeTex).name;
							break;

						case 51: //DepthDiffuseMethod
							mat.diffuseMethod = new DiffuseDepthMethod();
							debugString += " | DiffuseDepthMethod";
							break;
						case 52: //GradientDiffuseMethod
							targetID = props.get(1, 0);
							var thisTex:TextureBase=undefined;
							if (targetID>0) {
								thisTex = <TextureBase>this.awd_file_data.getAssetByID(targetID);
							}
							if(thisTex==undefined){
								thisTex=DefaultMaterialManager.getDefaultTexture();
							}
							//if (!returnedArray[0])
								//this.awd_file_data._blocks[blockID].addError("Could not find the GradientDiffuseTexture (ID = " + targetID + " ) for this.awd_file_data GradientDiffuseMethod");
							mat.diffuseMethod = new DiffuseGradientMethod(<Single2DTexture>thisTex);
							debugString += " | DiffuseGradientMethod | GradientDiffuseTexture-Name =" + (<Single2DTexture>thisTex).name;
							break;
						case 53: //WrapDiffuseMethod
							mat.diffuseMethod = new DiffuseWrapMethod(props.get(101, 5));
							debugString += " | DiffuseWrapMethod";
							break;
						case 54: //LightMapDiffuseMethod
							targetID = props.get(1, 0);
							var thisTex:TextureBase=undefined;
							if (targetID>0) {
								thisTex = <TextureBase>this.awd_file_data.getAssetByID(targetID);
							}
							if(thisTex==undefined){
								thisTex=DefaultMaterialManager.getDefaultTexture();
							}
							//if (!returnedArray[0])
								//this.awd_file_data._blocks[blockID].addError("Could not find the LightMap (ID = " + targetID + " ) for this.awd_file_data LightMapDiffuseMethod");
							mat.diffuseMethod = new DiffuseLightMapMethod(<Single2DTexture>thisTex, this.awd_file_data.getBlendModeStringFromEnum(props.get(401, 10)), false, mat.diffuseMethod);
							debugString += " | DiffuseLightMapMethod | LightMapTexture-Name =" + (<Single2DTexture> thisTex).name;
							break;
						case 55: //CelDiffuseMethod
							mat.diffuseMethod = new DiffuseCelMethod(props.get(401, 3), mat.diffuseMethod);
							(<DiffuseCelMethod> mat.diffuseMethod).smoothness = props.get(101, 0.1);
							debugString += " | DiffuseCelMethod";
							break;
						case 56: //SubSurfaceScatteringMethod
							//							mat.diffuseMethod = new DiffuseSubSurfaceMethod(); //depthMapSize and depthMapOffset ?
							//							(<DiffuseSubSurfaceMethod> mat.diffuseMethod).scattering = props.get(101, 0.2);
							//							(<DiffuseSubSurfaceMethod> mat.diffuseMethod).translucency = props.get(102, 1);
							//							(<DiffuseSubSurfaceMethod> mat.diffuseMethod).scatterColor = props.get(601, 0xffffff);
							//							debugString += " | DiffuseSubSurfaceMethod";
							break;

						case 101: //AnisotropicSpecularMethod
							mat.specularMethod = new SpecularAnisotropicMethod();
							debugString += " | SpecularAnisotropicMethod";
							break;
						case 102: //SpecularPhongMethod
							mat.specularMethod = new SpecularPhongMethod();
							debugString += " | SpecularPhongMethod";
							break;
						case 103: //CellSpecularMethod
							mat.specularMethod = new SpecularCelMethod(props.get(101, 0.5), mat.specularMethod);
							(<SpecularCelMethod> mat.specularMethod).smoothness = props.get(102, 0.1);
							debugString += " | SpecularCelMethod";
							break;
						case 104: //SpecularFresnelMethod
							mat.specularMethod = new SpecularFresnelMethod(props.get(701, true), mat.specularMethod);
							(<SpecularFresnelMethod> mat.specularMethod).fresnelPower = props.get(101, 5);
							(<SpecularFresnelMethod> mat.specularMethod).normalReflectance = props.get(102, 0.1);
							debugString += " | SpecularFresnelMethod";
							break;
						case 151://HeightMapNormalMethod - thios is not implemented for now, but might appear later
							break;
						case 152: //SimpleWaterNormalMethod
							targetID = props.get(1, 0);
							var thisTex:TextureBase=undefined;
							if (targetID>0) {
								thisTex = <TextureBase>this.awd_file_data.getAssetByID(targetID);
							}
							if(thisTex==undefined){
								thisTex=DefaultMaterialManager.getDefaultTexture();
							}
							//if (!returnedArray[0])
							//	this.awd_file_data._blocks[blockID].addError("Could not find the SecoundNormalMap (ID = " + targetID + " ) for this.awd_file_data SimpleWaterNormalMethod");
							//if (!mat.normalMap)
							//	this.awd_file_data._blocks[blockID].addError("Could not find a normal Map on this.awd_file_data Material to use with this.awd_file_data SimpleWaterNormalMethod");
							mat.normalMethod = new NormalSimpleWaterMethod(<Single2DTexture> mat.normalMethod.texture || thisTex, <Single2DTexture>thisTex);
							debugString += " | NormalSimpleWaterMethod | Second-NormalTexture-Name = " + (<Single2DTexture> thisTex).name;
							break;
					}
					this.awd_file_data.parseUserAttributes();
					methods_parsed += 1;
				}
			}
		}
		// todo: we should not need this.awd_file_data anymore (if using texture-atlas)
		else if ((type>=3)&&(type<=7)){
			// if this.awd_file_data is a curve material, we create it, finalize it, assign it to block-cache and return and return.
			var color:number = props.get(1, 0xcccccc);
			debugString+=color;
		
			var diffuseTex_addr:number = props.get(2, 0);
		
			var diffuseTexture:TextureBase=undefined;
			if (diffuseTex_addr>0) {
				diffuseTexture = <TextureBase>this.awd_file_data.getAssetByID(diffuseTex_addr);
			}
			if(diffuseTex_addr==undefined){
				diffuseTexture=DefaultMaterialManager.getDefaultTexture();
			}
		
			var basic_mat:BasicMaterial = new BasicMaterial();
			basic_mat.texture = diffuseTexture;

			//debugString+= " alpha = "+props.get(10, 1.0)+" ";
			debugString+= " texture = "+diffuseTex_addr+" ";
			basic_mat.bothSides = true;
			basic_mat.preserveAlpha = true;
			basic_mat.alphaBlending = true;
			basic_mat.extra = this.awd_file_data.parseUserAttributes();
			if (this.awd_file_data.debug)
				console.log(debugString);
			this.awd_file_data.cur_block.data=basic_mat;
			return;
		
		}
		mat.extra = this.awd_file_data.parseUserAttributes();
		this.awd_file_data.cur_block.data=mat;
		if (this.awd_file_data.debug) {
			console.log(debugString);
		}
	}

}

export = MaterialAWDParser;