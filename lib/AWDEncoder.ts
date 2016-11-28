import {ByteArray} from "@awayjs/core";

/**
 * AWDParser provides a parser for the AWD data type.
 */
export class AWDEncoder {
	public static mapAssetToBlockType:Object;

	public static getBlockTypeForAsset(assetType:string):number {
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

