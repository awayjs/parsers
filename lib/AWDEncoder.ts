import {AttributesBuffer}				from "@awayjs/core/lib/attributes/AttributesBuffer";
import {Short3Attributes}				from "@awayjs/core/lib/attributes/Short3Attributes";
import {Float3Attributes}				from "@awayjs/core/lib/attributes/Float3Attributes";
import {Float2Attributes}				from "@awayjs/core/lib/attributes/Float2Attributes";
import {Byte4Attributes}				from "@awayjs/core/lib/attributes/Byte4Attributes";

import {BitmapImage2D}					from "@awayjs/core/lib/image/BitmapImage2D";
import {BitmapImageCube}				from "@awayjs/core/lib/image/BitmapImageCube";
import {BlendMode}						from "@awayjs/core/lib/image/BlendMode";
import {Sampler2D}						from "@awayjs/core/lib/image/Sampler2D";
import {WaveAudio}						from "@awayjs/core/lib/audio/WaveAudio";
import {ColorTransform}					from "@awayjs/core/lib/geom/ColorTransform";
import {Matrix3D}						from "@awayjs/core/lib/geom/Matrix3D";
import {Vector3D}						from "@awayjs/core/lib/geom/Vector3D";
import {URLLoaderDataFormat}			from "@awayjs/core/lib/net/URLLoaderDataFormat";
import {URLRequest}						from "@awayjs/core/lib/net/URLRequest";
import {IAsset}							from "@awayjs/core/lib/library/IAsset";
import {ParserBase}						from "@awayjs/core/lib/parsers/ParserBase";
import {ParserUtils}					from "@awayjs/core/lib/parsers/ParserUtils";
import {ResourceDependency}				from "@awayjs/core/lib/parsers/ResourceDependency";
import {ProjectionBase}					from "@awayjs/core/lib/projections/ProjectionBase";
import {PerspectiveProjection}			from "@awayjs/core/lib/projections/PerspectiveProjection";
import {OrthographicProjection}			from "@awayjs/core/lib/projections/OrthographicProjection";
import {OrthographicOffCenterProjection}from "@awayjs/core/lib/projections/OrthographicOffCenterProjection";
import {ByteArray}						from "@awayjs/core/lib/utils/ByteArray";
import {Point}							from "@awayjs/core/lib/geom/Point";

import {AnimationNodeBase}				from "@awayjs/display/lib/animators/nodes/AnimationNodeBase";
import {DisplayObjectContainer}			from "@awayjs/display/lib/display/DisplayObjectContainer";
import {View}							from "@awayjs/display/lib/View";
import {DisplayObject}					from "@awayjs/display/lib/display/DisplayObject";
import {LightBase}						from "@awayjs/display/lib/display/LightBase";
import {Graphics}						from "@awayjs/display/lib/graphics/Graphics";
import {TriangleElements}				from "@awayjs/display/lib/graphics/TriangleElements";
import {ElementsBase}					from "@awayjs/display/lib/graphics/ElementsBase";
import {DirectionalLight}				from "@awayjs/display/lib/display/DirectionalLight";
import {PointLight}						from "@awayjs/display/lib/display/PointLight";
import {Camera}							from "@awayjs/display/lib/display/Camera";
import {TextField}						from "@awayjs/display/lib/display/TextField";
import {Billboard}						from "@awayjs/display/lib/display/Billboard";
import {Skybox}							from "@awayjs/display/lib/display/Skybox";
import {DefaultMaterialManager}			from "@awayjs/display/lib/managers/DefaultMaterialManager";
import {MaterialBase}					from "@awayjs/display/lib/materials/MaterialBase";
import {LightPickerBase}				from "@awayjs/display/lib/materials/lightpickers/LightPickerBase";
import {StaticLightPicker}				from "@awayjs/display/lib/materials/lightpickers/StaticLightPicker";
import {CubeMapShadowMapper}			from "@awayjs/display/lib/materials/shadowmappers/CubeMapShadowMapper";
import {DirectionalShadowMapper}		from "@awayjs/display/lib/materials/shadowmappers/DirectionalShadowMapper";
import {ShadowMapperBase}				from "@awayjs/display/lib/materials/shadowmappers/ShadowMapperBase";

import {PrefabBase}						from "@awayjs/display/lib/prefabs/PrefabBase";
import {PrimitivePrefabBase}			from "@awayjs/display/lib/prefabs/PrimitivePrefabBase";
import {PrimitiveCapsulePrefab}			from "@awayjs/display/lib/prefabs/PrimitiveCapsulePrefab";
import {PrimitiveConePrefab}			from "@awayjs/display/lib/prefabs/PrimitiveConePrefab";
import {PrimitiveCubePrefab}			from "@awayjs/display/lib/prefabs/PrimitiveCubePrefab";
import {PrimitiveCylinderPrefab}		from "@awayjs/display/lib/prefabs/PrimitiveCylinderPrefab";
import {PrimitivePlanePrefab}			from "@awayjs/display/lib/prefabs/PrimitivePlanePrefab";
import {PrimitiveSpherePrefab}			from "@awayjs/display/lib/prefabs/PrimitiveSpherePrefab";
import {PrimitiveTorusPrefab}			from "@awayjs/display/lib/prefabs/PrimitiveTorusPrefab";
import {SingleCubeTexture}				from "@awayjs/display/lib/textures/SingleCubeTexture";
import {Single2DTexture}				from "@awayjs/display/lib/textures/Single2DTexture";
import {TextureBase}					from "@awayjs/display/lib/textures/TextureBase";

import {AnimationSetBase}				from "@awayjs/renderer/lib/animators/AnimationSetBase";
import {AnimatorBase}					from "@awayjs/renderer/lib/animators/AnimatorBase";
import {VertexAnimationSet}				from "@awayjs/renderer/lib/animators/VertexAnimationSet";
import {VertexAnimator}					from "@awayjs/renderer/lib/animators/VertexAnimator";
import {SkeletonAnimationSet}			from "@awayjs/renderer/lib/animators/SkeletonAnimationSet";
import {SkeletonAnimator}				from "@awayjs/renderer/lib/animators/SkeletonAnimator";
import {JointPose}						from "@awayjs/renderer/lib/animators/data/JointPose";
import {Skeleton}						from "@awayjs/renderer/lib/animators/data/Skeleton";
import {SkeletonPose}					from "@awayjs/renderer/lib/animators/data/SkeletonPose";
import {SkeletonJoint}					from "@awayjs/renderer/lib/animators/data/SkeletonJoint";
import {SkeletonClipNode}				from "@awayjs/renderer/lib/animators/nodes/SkeletonClipNode";
import {VertexClipNode}					from "@awayjs/renderer/lib/animators/nodes/VertexClipNode";
import {AnimationClipNodeBase}			from "@awayjs/renderer/lib/animators/nodes/AnimationClipNodeBase";

import {MethodMaterialMode}				from "@awayjs/materials/lib/MethodMaterialMode";
import {MethodMaterial}					from "@awayjs/materials/lib/MethodMaterial";
import {AmbientEnvMapMethod}			from "@awayjs/materials/lib/methods/AmbientEnvMapMethod";
import {DiffuseDepthMethod}				from "@awayjs/materials/lib/methods/DiffuseDepthMethod";
import {DiffuseCelMethod}				from "@awayjs/materials/lib/methods/DiffuseCelMethod";
import {DiffuseGradientMethod}			from "@awayjs/materials/lib/methods/DiffuseGradientMethod";
import {DiffuseLightMapMethod}			from "@awayjs/materials/lib/methods/DiffuseLightMapMethod";
import {DiffuseWrapMethod}				from "@awayjs/materials/lib/methods/DiffuseWrapMethod";
import {EffectAlphaMaskMethod}			from "@awayjs/materials/lib/methods/EffectAlphaMaskMethod";
import {EffectColorMatrixMethod}		from "@awayjs/materials/lib/methods/EffectColorMatrixMethod";
import {EffectColorTransformMethod}		from "@awayjs/materials/lib/methods/EffectColorTransformMethod";
import {EffectEnvMapMethod}				from "@awayjs/materials/lib/methods/EffectEnvMapMethod";
import {EffectFogMethod}				from "@awayjs/materials/lib/methods/EffectFogMethod";
import {EffectFresnelEnvMapMethod}		from "@awayjs/materials/lib/methods/EffectFresnelEnvMapMethod";
import {EffectLightMapMethod}			from "@awayjs/materials/lib/methods/EffectLightMapMethod";
import {EffectMethodBase}				from "@awayjs/materials/lib/methods/EffectMethodBase";
import {EffectRimLightMethod}			from "@awayjs/materials/lib/methods/EffectRimLightMethod";
import {NormalSimpleWaterMethod}		from "@awayjs/materials/lib/methods/NormalSimpleWaterMethod";
import {ShadowDitheredMethod}			from "@awayjs/materials/lib/methods/ShadowDitheredMethod";
import {ShadowFilteredMethod}			from "@awayjs/materials/lib/methods/ShadowFilteredMethod";
import {ShadowMapMethodBase}			from "@awayjs/materials/lib/methods/ShadowMapMethodBase";
import {ShadowMethodBase}				from "@awayjs/materials/lib/methods/ShadowMethodBase";
import {SpecularFresnelMethod}			from "@awayjs/materials/lib/methods/SpecularFresnelMethod";
import {ShadowHardMethod}				from "@awayjs/materials/lib/methods/ShadowHardMethod";
import {SpecularAnisotropicMethod}		from "@awayjs/materials/lib/methods/SpecularAnisotropicMethod";
import {SpecularCelMethod}				from "@awayjs/materials/lib/methods/SpecularCelMethod";
import {SpecularPhongMethod}			from "@awayjs/materials/lib/methods/SpecularPhongMethod";
import {ShadowNearMethod}				from "@awayjs/materials/lib/methods/ShadowNearMethod";
import {ShadowSoftMethod}				from "@awayjs/materials/lib/methods/ShadowSoftMethod";

import {BasicMaterial}					from "@awayjs/display/lib/materials/BasicMaterial";

import {ITimelineSceneGraphFactory} 	from "@awayjs/display/lib/factories/ITimelineSceneGraphFactory";
import {AS2SceneGraphFactory} 			from "@awayjs/player/lib/factories/AS2SceneGraphFactory";
import {MovieClip} 						from "@awayjs/display/lib/display/MovieClip";
import {Timeline}			 			from "@awayjs/display/lib/base/Timeline";


import {AssetLibrary}					from "@awayjs/core/lib/library/AssetLibrary";

import {Font}							from "@awayjs/display/lib/text/Font";
import {TesselatedFontTable}			from "@awayjs/display/lib/text/TesselatedFontTable";
import {IFontTable}						from "@awayjs/display/lib/text/IFontTable";
import {TextFormat}						from "@awayjs/display/lib/text/TextFormat";
import {TextFieldType}					from "@awayjs/display/lib/text/TextFieldType";

import {AWDBlock}						from "./AWD3ParserUtils/AWDBlock";
import {Rectangle} 						from "@awayjs/core/lib/geom/Rectangle";
import {Style} 							from "@awayjs/display/lib/base/Style";
import {Matrix} 						from "@awayjs/core/lib/geom/Matrix";
import {MappingMode} 					from "@awayjs/display/lib/textures/MappingMode";
import {ElementsType}					from "@awayjs/display/lib/graphics/ElementsType";
import {Graphic}						from "@awayjs/display/lib/graphics/Graphic";
/**
 * AWDParser provides a parser for the AWD data type.
 */
export class AWDEncoder {
	public static mapAssetToBlockType:Object;

	public static getBlockTypeForAsset(assetType:String):number {
		if (!AWDEncoder.mapAssetToBlockType) {
			AWDEncoder.mapAssetToBlockType = {
				"[asset Sprite]": 24,// use 23 for lib and 24 for scenegraph sprite
				"[asset Billboard]": 25,
				"[asset Audio]": 44,
				"[asset MovieClip]": 133,
				"[asset TextField]": 134,
				"[asset TesselatedFont]": 135,
				"[asset TextFormat]": 136,
				"[asset PrimitivePrefab]": 11,
				"[asset Skybox]": 31,
				"[asset Light]": 41,
				"[asset Camera]": 42,
				"[asset TextureProjector]": 43,// ?
				"[asset LightPicker]": 51,
				"[asset Material]": 81,
				"[asset CubeTexture]": 83,
				"[asset SharedMethodBlock]": 91,// ?
				"[asset ShadowMethodBlock]": 92,
				"[asset SpritePoseAnimation]": 111,
				"[asset VertexAnimationSet]": 113,
				"[asset Animator]": 122,
				"[asset Graphics]": 1,
				"[asset Container]": 22,
				"[asset Texture]": 82,
				"[asset Skeleton]": 101,
				"[asset SkeletonPose]": 102,
				"[asset SkeletonAnimation]": 103,
				"[asset UVAnimation]": 121,	// ?
				"[asset NameSpace]": 254,	// ?
				"[asset MetaData]": 255	// ?

			}
		}
		//if (AWDEncoder.mapAssetToBlockType.hasOwnProperty(assetType)) {
			//return AWDEncoder.mapAssetToBlockType.valueOf(assetType);
		//}
		throw ("Could not find a AWDBlock-type for assetType: " + assetType);

	}
	
	public static writeAWDHeader(arrayBytes:ByteArray, flags:number, compression:number, bodyLength:number):void {
		// MagicString
		arrayBytes.writeUTFBytes("AWD");

		// version 3.0
		arrayBytes.writeUnsignedByte(3);
		arrayBytes.writeUnsignedByte(0);

		arrayBytes.writeUnsignedShort(flags);
		arrayBytes.writeUnsignedByte(compression);
		arrayBytes.writeUnsignedInt(bodyLength);
	}
	public static _encodeMetaDataBlock(arrayBytes:ByteArray, flags:number, compression:number, bodyLength:number):void {
		
	}

	public static writeAWDBlock(arrayBytes:ByteArray, flags:number, compression:number, bodyLength:number):void {
		// MagicString
		arrayBytes.writeUTFBytes("AWD");

		// version 3.0
		arrayBytes.writeUnsignedByte(3);
		arrayBytes.writeUnsignedByte(0);

		arrayBytes.writeUnsignedShort(flags);
		arrayBytes.writeUnsignedByte(compression);
		arrayBytes.writeUnsignedInt(bodyLength);
	}
}

