import AssetEvent					= require("awayjs-core/lib/events/AssetEvent");
import LoaderEvent					= require("awayjs-core/lib/events/LoaderEvent");
import Vector3D						= require("awayjs-core/lib/geom/Vector3D");
import AssetLibrary					= require("awayjs-core/lib/library/AssetLibrary");
import Loader						= require("awayjs-core/lib/library/Loader");
import IAsset						= require("awayjs-core/lib/library/IAsset");
import URLRequest					= require("awayjs-core/lib/net/URLRequest");
import Debug						= require("awayjs-core/lib/utils/Debug");
import RequestAnimationFrame		= require("awayjs-core/lib/utils/RequestAnimationFrame");

import Geometry						= require("awayjs-display/lib/base/Geometry");
import View							= require("awayjs-display/lib/containers/View");
import Mesh							= require("awayjs-display/lib/entities/Mesh");

import DefaultRenderer				= require("awayjs-renderergl/lib/DefaultRenderer");

import MethodMaterial				= require("awayjs-methodmaterials/lib/MethodMaterial");

import AWDParser					= require("awayjs-parsers/lib/AWDParser");

class AWDParserTest
{

	private _view:View;
	private _timer:RequestAnimationFrame;
	private _suzanne:Mesh;

	constructor()
	{
		Debug.LOG_PI_ERRORS = true;
		Debug.THROW_ERRORS = false;

		AssetLibrary.enableParser(AWDParser);

		var session:Loader = AssetLibrary.getLoader();
		session.addEventListener(LoaderEvent.LOAD_COMPLETE, (event:LoaderEvent) => this.onLoadComplete(event));
		session.addEventListener(AssetEvent.ASSET_COMPLETE, (event:AssetEvent) => this.onAssetComplete(event));
		session.load(new URLRequest('assets/suzanne.awd'));

		this._view = new View(new DefaultRenderer());
		this._timer = new RequestAnimationFrame(this.render, this);

		window.onresize = (event:UIEvent) => this.resize(event);

		this._timer.start();
		this.resize();
	}

	private resize(event:UIEvent = null)
	{
		this._view.y = 0;
		this._view.x = 0;
		this._view.width = window.innerWidth;
		this._view.height = window.innerHeight;
	}

	private render(dt:number) //animate based on dt for firefox
	{
		if (this._suzanne)
			this._suzanne.rotationY += 1;

		this._view.render();
		this._view.camera.z = -2000;
	}

	public onAssetComplete(event:AssetEvent)
	{
		//console.log('------------------------------------------------------------------------------');
		//console.log('events.AssetEvent.ASSET_COMPLETE', AssetLibrary.getAsset(event.asset.name));
		//console.log('------------------------------------------------------------------------------');
	}

	public onLoadComplete(event:LoaderEvent)
	{
		console.log('------------------------------------------------------------------------------');
		console.log('events.LoaderEvent.RESOURCE_COMPLETE' , event);
		console.log('------------------------------------------------------------------------------');

		var loader:Loader = event.target;
		var numAssets:number = loader.baseDependency.assets.length;

		for(var i:number = 0; i < numAssets; ++i) {
			var asset:IAsset = loader.baseDependency.assets[i];

			switch (asset.assetType) {
				case Mesh.assetType:

					this._suzanne = <Mesh> asset;
					this._suzanne.transform.scale = new Vector3D(600, 600, 600);

					this._view.scene.addChild(this._suzanne);

					break;

				case Geometry.assetType:
					break;

				case MethodMaterial.assetType:
					break;
			}
		}
	}
}