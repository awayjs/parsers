import EventDispatcher					= require("awayjs-core/lib/events/EventDispatcher");
import ByteArray						= require("awayjs-core/lib/utils/ByteArray");
import AbstractMethodError				= require("awayjs-core/lib/errors/AbstractMethodError");
import IAsset							= require("awayjs-core/lib/library/IAsset");

import DefaultMaterialManager			= require("awayjs-display/lib/managers/DefaultMaterialManager");
import Skybox							= require("awayjs-display/lib/entities/Skybox");
import SingleCubeTexture				= require("awayjs-display/lib/textures/SingleCubeTexture");

import AWDBlockParserBase				= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
import AWDProperties					= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");
import AWD3Utils						= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");

class SkyboxAWDParser extends AWDBlockParserBase
{

	constructor()
	{
		super();
	}


	public parseFromBytes():void
	{
		this.awd_file_data.cur_block.name = this.awd_file_data.parseVarStr();
		var cubeTexAddr:number = this.awd_file_data.newBlockBytes.readUnsignedInt();

		var cube_tex:SingleCubeTexture = undefined;
		if(cubeTexAddr>0) {
			cube_tex = <SingleCubeTexture> this.awd_file_data.getAssetByID(cubeTexAddr);
		}
		if(cube_tex==undefined){
			cube_tex=<SingleCubeTexture>this.awd_file_data.getDefaultCubeTexture();
		}
		//if ((!returnedArrayCubeTex[0]) && (cubeTexAddr != 0))
			//this.awd_file_data._blocks[blockID].addError("Could not find the Cubetexture (ID = " + cubeTexAddr + " ) for this.awd_file_data Skybox");
		var new_skybox:Skybox = new Skybox();
		new_skybox.texture = cube_tex;
		this.awd_file_data.parseProperties(null)
		new_skybox.extra = this.awd_file_data.parseUserAttributes();
		this.awd_file_data.cur_block.data = new_skybox;
		if (this.awd_file_data.debug)
			console.log("Parsed a Skybox: Name = '" + this.awd_file_data.cur_block.name + "' | CubeTexture-Name = " + cube_tex.name);
	}


}

export = SkyboxAWDParser;