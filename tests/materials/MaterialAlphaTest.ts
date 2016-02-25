import BitmapImage2D				= require("awayjs-core/lib/image/BitmapImage2D");
import Sampler2D					= require("awayjs-core/lib/image/Sampler2D");
import BlendMode					= require("awayjs-core/lib/image/BlendMode");
import LoaderEvent					= require("awayjs-core/lib/events/LoaderEvent");
import Vector3D						= require("awayjs-core/lib/geom/Vector3D");
import AssetLibrary					= require("awayjs-core/lib/library/AssetLibrary");
import Loader						= require("awayjs-core/lib/library/Loader");
import IAsset						= require("awayjs-core/lib/library/IAsset");
import URLLoader					= require("awayjs-core/lib/net/URLLoader");
import URLLoaderDataFormat			= require("awayjs-core/lib/net/URLLoaderDataFormat");
import URLRequest					= require("awayjs-core/lib/net/URLRequest");
import PerspectiveProjection		= require("awayjs-core/lib/projections/PerspectiveProjection");
import Debug						= require("awayjs-core/lib/utils/Debug");
import RequestAnimationFrame		= require("awayjs-core/lib/utils/RequestAnimationFrame");

import Scene						= require("awayjs-display/lib/display/Scene");
import View							= require("awayjs-display/lib/View");
import DirectionalLight				= require("awayjs-display/lib/display/DirectionalLight");
import Mesh							= require("awayjs-display/lib/display/Mesh");
import StaticLightPicker			= require("awayjs-display/lib/materials/lightpickers/StaticLightPicker");
import PrimitiveTorusPrefab			= require("awayjs-display/lib/prefabs/PrimitiveTorusPrefab");
import PrimitiveCubePrefab			= require("awayjs-display/lib/prefabs/PrimitiveCubePrefab");
import PrimitiveCapsulePrefab		= require("awayjs-display/lib/prefabs/PrimitiveCapsulePrefab");
import Single2DTexture				= require("awayjs-display/lib/textures/Single2DTexture");

import DefaultRenderer				= require("awayjs-renderergl/lib/DefaultRenderer");

import MethodMaterial				= require("awayjs-methodmaterials/lib/MethodMaterial");

import OBJParser					= require("awayjs-parsers/lib/OBJParser");
import ElementsType = require("awayjs-display/lib/graphics/ElementsType");

class MaterialAlphaTest
{
	private view:View;
	private raf:RequestAnimationFrame;
	private meshes  : Array<Mesh> = new Array<Mesh>();
	private loadedMeshMaterial:MethodMaterial;
	private light:DirectionalLight;
	private lightB:DirectionalLight;
	private loadedMesh:Mesh;

	private aValues:Array<number> = Array<number>(0, .1, .5, .8, .9, .99, 1);
	private aValuesP:number = 0;

	private torusTextureMaterial:MethodMaterial;
	private cubeColorMaterial:MethodMaterial;
	private capsuleColorMaterial:MethodMaterial;
	private staticLightPicker:StaticLightPicker;

	constructor()
	{
		Debug.LOG_PI_ERRORS = false;
		Debug.THROW_ERRORS = false;

		this.view = new View(new DefaultRenderer());
		this.raf = new RequestAnimationFrame(this.render, this);
		this.onResize();

		this.light = new DirectionalLight();
		this.light.color = 0xFFFFFF;
		this.light.direction = new Vector3D(1, 1, 0);
		this.light.ambient = 0;
		this.light.ambientColor = 0xFFFFFF;
		this.light.diffuse = 1;
		this.light.specular = 1;

		this.lightB = new DirectionalLight();
		this.lightB.color= 0xFF0000;
		this.lightB.direction = new Vector3D(-1, 0, 1);
		this.lightB.ambient = 0;
		this.lightB.ambientColor = 0xFFFFFF;
		this.lightB.diffuse = 1;
		this.lightB.specular = 1;

		this.view.scene.addChild(this.light);
		this.view.scene.addChild(this.lightB);

		this.view.backgroundColor = 0x222222;

		AssetLibrary.enableParser(OBJParser);

		var session:Loader;

		session = AssetLibrary.getLoader();
		session.addEventListener(LoaderEvent.LOAD_COMPLETE, (event:LoaderEvent) => this.onLoadComplete(event));
		session.load(new URLRequest('assets/platonic.obj'));

		session = AssetLibrary.getLoader();
		session.addEventListener(LoaderEvent.LOAD_COMPLETE, (event:LoaderEvent) => this.onLoadComplete(event));
		session.load(new URLRequest('assets/dots.png'));

		window.onresize = (event:UIEvent) => this.onResize(event);
		document.onmousedown = (event:MouseEvent) => this.onMouseDown(event);
	}

	private onMouseDown(event:MouseEvent)
	{
		this.cubeColorMaterial.alpha = this.torusTextureMaterial.alpha = this.loadedMeshMaterial.alpha = this.aValues[this.aValuesP];

		alert( 'Alpha: ' + this.aValues[this.aValuesP]);

		this.aValuesP++;

		if (this.aValuesP > this.aValues.length -1)
			this.aValuesP  = 0;
	}

	private render(dt:number)
	{
		if (this.meshes)
			for (var c:number = 0; c < this.meshes.length; c++)
				this.meshes[c].rotationY += .35;

		this.view.render();
	}

	public onLoadComplete(event:LoaderEvent)
	{
		var loader:Loader = event.target;
		var l:number = loader.baseDependency.assets.length

		for (var c:number = 0; c < l; c ++) {

			var d:IAsset = loader.baseDependency.assets[c];

			console.log( d.name);

			switch (d.assetType) {
				case Mesh.assetType:
					var mesh:Mesh = <Mesh> d;

					this.loadedMesh = mesh;

					if (d.name == 'Mesh_g0') {
						this.loadedMesh = mesh;
						mesh.y = -400;
						mesh.transform.scaleTo(5, 5, 5);
					} else {
						mesh.transform.scaleTo(3.5, 3.5, 3.5);
					}

					if (this.loadedMeshMaterial)
						mesh.material = this.loadedMeshMaterial;

					this.view.scene.addChild(mesh);
					this.meshes.push(mesh);

					this.raf.start();
					break;
				case BitmapImage2D.assetType:
					// Light Picker
					this.staticLightPicker = new StaticLightPicker( [this.light , this.lightB ] );

					// Material for loaded mesh
					this.loadedMeshMaterial = new MethodMaterial(<BitmapImage2D> d);
					this.loadedMeshMaterial.style.sampler = new Sampler2D(true, true, false);
					this.loadedMeshMaterial.lightPicker = this.staticLightPicker;
					this.loadedMeshMaterial.alpha = 1;
					this.loadedMeshMaterial.bothSides = true;

					if (this.loadedMesh)
						this.loadedMesh.material = this.loadedMeshMaterial;

					// Torus Texture Material
					this.torusTextureMaterial = new MethodMaterial(<BitmapImage2D> d);
					this.torusTextureMaterial.style.sampler = new Sampler2D(true, true, false);
					this.torusTextureMaterial.lightPicker = this.staticLightPicker ;
					this.torusTextureMaterial.bothSides = true;
					this.torusTextureMaterial.alpha = .8;

					// Torus
					var torus:PrimitiveTorusPrefab = new PrimitiveTorusPrefab(this.torusTextureMaterial, ElementsType.TRIANGLE, 150 , 50 , 64 , 64);

					// Torus Mesh ( left )
					var torusMesh:Mesh = <Mesh> torus.getNewObject();
					torusMesh.rotationX = 90;
					torusMesh.x = 600;
					this.meshes.push(torusMesh);
					this.view.scene.addChild(torusMesh);

					// Torus Color Material
					this.cubeColorMaterial = new MethodMaterial(0x0090ff);
					this.cubeColorMaterial.lightPicker = this.staticLightPicker ;
					this.cubeColorMaterial.alpha = .8;
					this.cubeColorMaterial.bothSides = true;

					var cube:PrimitiveCubePrefab = new PrimitiveCubePrefab(this.cubeColorMaterial, ElementsType.TRIANGLE, 300, 300, 300, 20, 20, 20);

					// Torus Mesh ( right )
					var cubeMesh:Mesh = <Mesh> cube.getNewObject();
					cubeMesh.rotationX = 90;
					cubeMesh.x = -600;
					this.meshes.push(cubeMesh);
					this.view.scene.addChild(cubeMesh);

					this.capsuleColorMaterial = new MethodMaterial(0x00ffff);
					this.capsuleColorMaterial.lightPicker = this.staticLightPicker;

					var capsule:PrimitiveCapsulePrefab = new PrimitiveCapsulePrefab(this.capsuleColorMaterial, ElementsType.TRIANGLE, 100, 200);

					// Torus Mesh ( right )
					var capsuleMesh:Mesh = <Mesh> capsule.getNewObject();
					this.meshes.push(capsuleMesh);
					this.view.scene.addChild(capsuleMesh);

					this.cubeColorMaterial.alpha = this.torusTextureMaterial.alpha = this.loadedMeshMaterial.alpha = 1;

					break;
			}
		}
	}

	public onResize(event:UIEvent = null)
	{
		this.view.y = 0;
		this.view.x = 0;

		this.view.width = window.innerWidth;
		this.view.height = window.innerHeight;
	}
}