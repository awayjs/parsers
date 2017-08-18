import {MaterialBase, Image2D} from "@awayjs/graphics";

import {Timeline, Billboard, TextField, MovieClip, Sprite, DisplayObjectContainer, ISceneGraphFactory} from "@awayjs/scene";

import {MethodMaterial} from "@awayjs/materials";

export class DefaultSceneGraphFactory implements ISceneGraphFactory
{
	constructor()
	{
	}

	createMovieClip(timeline:Timeline = null):MovieClip
	{
		return new MovieClip(timeline);
	}

	createSprite():Sprite
	{
		return new Sprite();
	}

	createDisplayObjectContainer():DisplayObjectContainer
	{
		return new DisplayObjectContainer();
	}

	createTextField():TextField
	{
		return new TextField();
	}

	createBillboard(material:MaterialBase):Billboard
	{
		return new Billboard(material);
	}

	createMaterial(image?:Image2D, alpha?:number):MethodMaterial;
	createMaterial(color?:number, alpha?:number):MethodMaterial;
	createMaterial(imageColor?:any, alpha?:number):MethodMaterial
	{
		return new MethodMaterial(imageColor, alpha);
	}
}