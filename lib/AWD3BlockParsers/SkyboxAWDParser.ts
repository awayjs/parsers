
import EventDispatcher			= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray				= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError		= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AWDBlockParserBase		= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");
import AWD3Utils				= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");

import DefaultMaterialManager			= require("awayjs-display/lib/managers/DefaultMaterialManager");
import Skybox							= require("awayjs-display/lib/entities/Skybox");
import TextureBase						= require("awayjs-core/lib/textures/TextureBase");
import ImageCubeTexture					= require("awayjs-core/lib/textures/ImageCubeTexture");

class SkyboxAWDParser extends AWDBlockParserBase
{

	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{
		var name:string = this.awd_file_data.parseVarStr();
		var cubeTexAddr:number = this.awd_file_data.newBlockBytes.readUnsignedInt();

		var cube_tex:ImageCubeTexture = undefined;
		if(cubeTexAddr>0) {
			cube_tex = <ImageCubeTexture> this.awd_file_data.getAssetByID(cubeTexAddr);
		}
		if(cube_tex==undefined){
			cube_tex=<ImageCubeTexture>this.awd_file_data.getDefaultCubeTexture();
		}
		//if ((!returnedArrayCubeTex[0]) && (cubeTexAddr != 0))
			//this.awd_file_data._blocks[blockID].addError("Could not find the Cubetexture (ID = " + cubeTexAddr + " ) for this.awd_file_data Skybox");
		var new_skybox:Skybox = new Skybox(<ImageCubeTexture> cube_tex);

		this.awd_file_data.parseProperties(null)
		new_skybox.extra = this.awd_file_data.parseUserAttributes();
		new_skybox.name = name;
		if (this.awd_file_data.debug)
			console.log("Parsed a Skybox: Name = '" + new_skybox.name + "' | CubeTexture-Name = " + cube_tex.name);
	}


}

export = SkyboxAWDParser;