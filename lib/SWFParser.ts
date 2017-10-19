import {AttributesBuffer,Short2Attributes, Short3Attributes, Float3Attributes, Float2Attributes, WaveAudioParser, Byte4Attributes, WaveAudio, ColorTransform, Matrix3D, Vector3D, URLLoaderDataFormat, URLRequest, AssetLibrary, IAsset, ParserBase, ParserUtils, ResourceDependency, ProjectionBase, PerspectiveProjection, OrthographicProjection, OrthographicOffCenterProjection, ByteArray, Rectangle, Matrix} from "@awayjs/core";

import {Image2DParser, Graphics, ElementsUtils, Style, IMaterial, BitmapImage2D, BitmapImageCube, BlendMode, Sampler2D, TriangleElements, ElementsBase, DefaultMaterialManager, SingleCubeTexture, Single2DTexture, MappingMode, ElementsType, Shape} from "@awayjs/graphics";

import {AnimationSetBase, AnimatorBase} from "@awayjs/stage";

import {DisplayObjectContainer, MorphSprite, IView, DisplayObject, LightBase, DirectionalLight, PointLight, Camera, Sprite, TextField, Billboard,
	Skybox, LightPickerBase, StaticLightPicker, CubeMapShadowMapper, DirectionalShadowMapper, ShadowMapperBase, 
	PrefabBase, PrimitiveCapsulePrefab, PrimitiveConePrefab, PrimitiveCubePrefab, PrimitiveCylinderPrefab, 
	PrimitivePlanePrefab, PrimitiveSpherePrefab, PrimitiveTorusPrefab, ISceneGraphFactory, 
	MovieClip, Timeline, Font, TesselatedFontTable, IFontTable, TextFormat, TextFormatAlign, TextFieldType} from "@awayjs/scene";

import {VertexAnimationSet, VertexAnimator, SkeletonAnimationSet, SkeletonAnimator, JointPose, Skeleton, SkeletonPose, SkeletonJoint, SkeletonClipNode, VertexClipNode, AnimationClipNodeBase} from "@awayjs/renderer";

import {MethodMaterialMode, MethodMaterial, DiffuseCelMethod, DiffuseGradientMethod, DiffuseLightMapMethod, DiffuseWrapMethod, EffectAlphaMaskMethod, EffectColorMatrixMethod, EffectColorTransformMethod, EffectEnvMapMethod, EffectFogMethod, EffectFresnelEnvMapMethod, EffectLightMapMethod, EffectRimLightMethod, NormalSimpleWaterMethod, ShadingMethodBase, ShadowDitheredMethod, ShadowMethodBase, SpecularFresnelMethod, ShadowCompositeMethod, ShadowHardMethod, SpecularAnisotropicMethod, SpecularCelMethod, SpecularPhongMethod, ShadowNearMethod, ShadowSoftMethod} from "@awayjs/materials";

import {DefaultSceneGraphFactory} from "./factories/DefaultSceneGraphFactory";
import {LineScaleMode} from "@awayjs/graphics";

import {
	assert,
	Bounds,
	IDataDecoder,
	ABCBlock,
	ActionBlock,
	InitActionBlock,
	SymbolExport,
	UnparsedTag,
	DictionaryEntry,
	EagerlyParsedDictionaryEntry,
	memCopy} from "./SWFParserUtils/utilities";

import {Stream} from "./SWFParserUtils/stream";
import {Inflate} from "./SWFParserUtils/deflate";
import {LzmaDecoder} from "./SWFParserUtils/lzma";

import {
	parseHeader,
	parseRgb,
	parseSoundStreamHeadTag,
	parseDefineSceneTag,
	tagHandlers} from "./SWFParserUtils/parser/SWFLowLevel";

import {defineSound, SoundStream} from "./SWFParserUtils/parser/sound";
import {defineShape} from "./SWFParserUtils/parser/shape";
import {defineFont} from "./SWFParserUtils/parser/font";
import {defineText} from "./SWFParserUtils/parser/text";
import {defineButton} from "./SWFParserUtils/parser/button";
import {defineBitmap} from "./SWFParserUtils/parser/bitmap";
import {defineImage} from "./SWFParserUtils/parser/image";
import {defineLabel} from "./SWFParserUtils/parser/label";

import {
	SwfTagCode,
	DefinitionTags,
	ImageDefinitionTags,
	FontDefinitionTags,
	ControlTags,
	PlaceObjectTag,
	PlaceObjectFlags,
	getSwfTagCodeName} from "./SWFParserUtils/SWFTags";
import {__extends} from "tslib";

var noTimelineDebug=false;
export const enum CompressionMethod {
	None,
	Deflate,
	LZMA
}


/**
 * SWFParser provides a parser for the SWF data type.
 * Based on Shumway
 */
export class SWFParser extends ParserBase
{


	private compression: CompressionMethod;
	private swfVersion: number;
	private useAVM1: boolean;
	private backgroundColor: number;
	private bounds: Bounds;
	private frameRate: number;
	private frameCount: number;
	private attributes: any; // TODO: type strongly
	private sceneAndFrameLabelData: any; // TODO: type strongly

	private bytesLoaded: number;
	private bytesTotal: number;
	private pendingUpdateDelays: number;
	// Might be lower than frames.length if eagerly parsed assets pending resolution are blocking
	// us from reporting the given frame as loaded.
	private framesLoaded: number;

	private frames: SWFFrame[];
	private abcBlocks: ABCBlock[];
	private dictionary: DictionaryEntry[];
	private fonts: {name: string; style: string; id: number}[];
	private swfData: Uint8Array;
	private env: any;

	private symbolClassesMap: string[];
	private symbolClassesList: {id: number; className: string}[];
	private eagerlyParsedSymbolsMap: EagerlyParsedDictionaryEntry[];
	private eagerlyParsedSymbolsList: EagerlyParsedDictionaryEntry[];

	private _uncompressedLength: number;
	private _uncompressedLoadedLength: number;
	private _dataView: DataView;
	private _dataStream: Stream;
	private _decompressor: IDataDecoder;
	private _jpegTables: any;
	private _endTagEncountered: boolean;
	private _loadStarted: number;
	private _lastScanPosition: number;

	private _currentFrameLabel: string;
	private _currentSoundStreamHead: SoundStream;
	private _currentSoundStreamBlock: Uint8Array;
	private _currentControlTags: UnparsedTag[];
	private _currentActionBlocks: ActionBlock[];
	private _currentInitActionBlocks: InitActionBlock[];
	private _currentExports: SymbolExport[];


	private _factory:ISceneGraphFactory;

	//set to "true" to have some console.logs in the Console
	private _parsed_header:boolean = false;
	private _body:ByteArray;




	private _debug:boolean = false;
	private _startedParsing:boolean = false;

	private start_timeing:number;
	private _time_all:number=0;
	private _time_graphics:number=0;
	private _time_graphics_bytes:number=0;
	private _time_timeline:number=0;
	private _time_fonts:number=0;
	private _time_textfields:number=0;
	private _time_sounds:number=0;
	private _time_textures:number=0;
	private _time_materials:number=0;
	private _time_sprites:number=0;
	private _num_graphics:number=0;
	private _num_timeline:number=0;
	private _num_fonts:number=0;
	private _num_textfields:number=0;
	private _num_sounds:number=0;
	private _num_textures:number=0;
	private _num_materials:number=0;
	private _num_sprites:number=0;


	/**
	 * Creates a new AWD3Parserutils object.
	 * @param uri The url or id of the data or file to be parsed.
	 * @param extra The holder for extra contextual data that the parser might need.
	 */
	constructor(factory:ISceneGraphFactory = null)
	{
		super(URLLoaderDataFormat.ARRAY_BUFFER);


		this._factory = factory || new DefaultSceneGraphFactory();



	}


	/**
	 * Indicates whether or not a given file extension is supported by the parser.
	 * @param extension The file extension of a potential file to be parsed.
	 * @return Whether or not the given file type is supported.
	 */
	public static supportsType(extension:string):boolean
	{
		extension = extension.toLowerCase();
		console.log("SWFParser supportsType extension: ", extension, "result: ", extension == "swf");
		return extension == "swf";
	}

	/**
	 * Tests whether a data block can be parsed by the parser.
	 * @param data The data block to potentially be parsed.
	 * @return Whether or not the given data is supported.
	 */
	public static supportsData(data:any):boolean
	{
		var magic = (data[0] << 16) | (data[1] << 8) | data[2];

		console.log("SWFParser supportsData data: ", data);
		// check if header is 
		if ((magic & 0xffff) === 0x5753) {
			console.log("SWFParser supportsData result: ", true);
			return true;
		}
		console.log("SWFParser supportsData result: ", false);
		return false;
	}

	/**
	 * @inheritDoc
	 */
	public _iResolveDependency(resourceDependency:ResourceDependency):void
	{
		//console.log("_iResolveDependency", resourceDependency);
		// this will be called when Dependency has finished loading.
		// the ressource dependecniy has a id that point to the awd_block waiting for it.
		//console.log("SWFParser resolve dependencies";

		if (resourceDependency.assets.length == 1) {
			var awaitedObject=this.eagerlyParsedSymbolsMap[resourceDependency.id];
			if (awaitedObject) {
				switch(awaitedObject.type) {
					case "image":
						console.log("finished image parsing", resourceDependency);
						var myBitmap:BitmapImage2D=(<BitmapImage2D>resourceDependency.assets[0]);
						//myBitmap.width=awaitedObject.definition.width;
						//myBitmap.height=awaitedObject.definition.height;
						this.awaySymbols[resourceDependency.id]=myBitmap;
						break;
					case "font":
						console.log("finished font parsing", resourceDependency);
						break;
					case "sound":
						console.log("finished sound parsing", resourceDependency);
						var waveAudio:WaveAudio=(<WaveAudio>resourceDependency.assets[0]);
						//myBitmap.width=awaitedObject.definition.width;
						//myBitmap.height=awaitedObject.definition.height;
						this.awaySymbols[resourceDependency.id]=waveAudio;
						break;
					default:
						console.log("finished unknown parsing", resourceDependency);
						break;
				}
			}
			else
				console.log("no eagerlyParsedSymbolsMap for id", resourceDependency.id);

		}
		else{
			throw("SWFParser: error when resolving dependency");
		}

		this.externalDependenciesCount--;
		if(this.externalDependenciesCount==0){
			this.parseSymbolsToAwayJS();
		}

	}

	/**
	 * @inheritDoc
	 */
	public _iResolveDependencyFailure(resourceDependency:ResourceDependency):void
	{
		//not used - if a dependcy fails, the awaiting Texture or CubeTexture will never be finalized, and the default-bitmaps will be used.
		// this means, that if one Bitmap of a CubeTexture fails, the CubeTexture will have the DefaultTexture applied for all six Bitmaps.
		console.log("_iResolveDependencyFailure", resourceDependency);
		this.externalDependenciesCount--;
		if(this.externalDependenciesCount==0){
			this.parseSymbolsToAwayJS();
		}

	}

	/**
	 * Resolve a dependency name
	 *
	 * @param resourceDependency The dependency to be resolved.
	 */
	public _iResolveDependencyName(resourceDependency:ResourceDependency, asset:IAsset):string
	{
		var oldName:string = asset.name;

		var newName:string = asset.name;

		asset.name = oldName;

		return newName;
	}

	private externalDependenciesCount:number=0;
	/**
	 * @inheritDoc
	 */
	public _pProceedParsing():boolean
	{
		//console.log("SWFParser - _pProceedParsing");
		if (!this._startedParsing) {

			this._startedParsing = true;
			// get the bytedata

			var byteData:ByteArray = this._pGetByteData();
			var int8Array:Uint8Array=new Uint8Array(byteData.arraybytes);


			// preparse all data. after this step we can deal with tag-objects rather than bytedata

			this.initSWFLoading(int8Array, int8Array.length);

			// now we have a list of symbols that we want to convert to awayjs-symbols

			this.awaySymbols={};
			this.mapMatsForBitmaps={};

			// this.eagerlyParsedSymbolsList can contain image/font data,
			// that must be resolved externally before we can start creating assets for symbols
			this.externalDependenciesCount=0;
			if(this.eagerlyParsedSymbolsList.length>0){
				//console.log("this.eagerlyParsedSymbolsList", this.eagerlyParsedSymbolsList);
				//console.log("this.eagerlyParsedSymbolsMap", this.eagerlyParsedSymbolsMap);
				for (var i = 0; i < this.eagerlyParsedSymbolsList.length; i++) {
					var eagerlySymbol:any = this.eagerlyParsedSymbolsList[i];
					if (eagerlySymbol) {
						switch(eagerlySymbol.type) {
							case "image":
								console.log("init image parsing", eagerlySymbol);
								this._pAddDependency(eagerlySymbol.id.toString(), null, new Image2DParser(this._factory), new Blob([eagerlySymbol.definition.data],{type: eagerlySymbol.definition.mimeType}), false, true);
								this.externalDependenciesCount++;
								break;
							case "sound":
								console.log("init sound parsing", eagerlySymbol);
								this._pAddDependency(eagerlySymbol.id.toString(), null, new WaveAudioParser(), new Blob([eagerlySymbol.definition.packaged.data],{type: eagerlySymbol.definition.packaged.mimeType}), false, true);
								this.externalDependenciesCount++;
								break;
							case "font":
								console.log("encountered eagerly parsed font: ", eagerlySymbol);
								break;
							default:
								console.log("encountered eagerly parsed unknown type: ", eagerlySymbol);
								break;
						}

					}

				}

			}
			if(this.externalDependenciesCount>0){
				this._pPauseAndRetrieveDependencies();
			}
			else{
				this.parseSymbolsToAwayJS();
			}

		}
		if(this.externalDependenciesCount>0){
			return  ParserBase.MORE_TO_PARSE;

		}
		return  ParserBase.PARSING_DONE;
	}

	public awaySymbols:any;

	public mapMatsForBitmaps:any;
	public parseSymbolsToAwayJS(){
		var parser = new DOMParser();
		var dictionary = this.dictionary;
		for (var i = 0; i < dictionary.length; i++) {
			if ( dictionary[i]) {
				var s = performance.now();
				var symbol = this.getSymbol(dictionary[i].id);
				console.log("symbol: ", dictionary[i].id, symbol.type, symbol);
				switch(symbol.type){
					case "morphshape":
						this._pFinalizeAsset(symbol.shape, symbol.id);
						symbol.shape.setRatio(0);
						this.awaySymbols[dictionary[i].id]=symbol.shape;
						break;
					case "shape":
						//var mySprite:Sprite=new Sprite();
						symbol.shape.endFill();
						//mySprite.graphics.copyFrom(symbol.shape);
						this._pFinalizeAsset(symbol.shape, symbol.id);
						this.awaySymbols[dictionary[i].id]=symbol.shape;
						break;
					case "font":
						this._pFinalizeAsset(symbol.away, symbol.id);
						this.awaySymbols[dictionary[i].id]=symbol.away;
						break;
					case "sprite":
						var awayMc = this.framesToAwayTimeline(symbol.frames);
						this._pFinalizeAsset(awayMc, symbol.id);
						this.awaySymbols[dictionary[i].id] = awayMc;
						break;
					case "text":
						var awayText = this._factory.createTextField();
						awayText.textFormat=new TextFormat();
						var font:Font=this.awaySymbols[symbol.tag.fontId];
						awayText.textFormat.font_table=font.font_styles[0];

						var text="";
						if(symbol.tag.initialText && symbol.tag.initialText!=""){
							text=symbol.tag.initialText;
							var doc = parser.parseFromString("<p>"+symbol.tag.initialText+"</p>", "application/xml");
							if(doc && doc.firstChild){
								text="";
								//console.log(doc.firstChild);
								//todo: multiple formats per textfield
								for(var k=0; k<doc.firstChild.childNodes.length;k++){
									if(doc.firstChild.childNodes[k].firstChild){
										text+=(<any>doc.firstChild.childNodes[k].firstChild).innerHTML+"\\n";
									}
									else{
										text+="\\n";
									}
								}
							}
						}
						awayText.multiline=doc.firstChild.childNodes.length>0;
						awayText.textFormat.size =  (<any>doc.firstChild.firstChild.firstChild.attributes).size.nodeValue;
						awayText.textFormat.color =  (<any>doc.firstChild.firstChild.firstChild.attributes).color.nodeValue;
						awayText.textFormat.letterSpacing=5;
						awayText.width=symbol.fillBounds.xMax/20 - symbol.fillBounds.xMin/20;
						awayText.height=symbol.fillBounds.yMax/20 - symbol.fillBounds.yMin/20;
						awayText.textFormat.align=this.textFormatAlignMap[symbol.tag.align];

						awayText.text=text;
						this._pFinalizeAsset(awayText, symbol.id);
						this.awaySymbols[dictionary[i].id] = awayText;
						break;
					case "sound":
						//(<WaveAudio>this.awaySymbols[dictionary[i].id]).play(0,false);
						break;


				}
			}
		}
		var awayMc:MovieClip=this.framesToAwayTimeline(null);
		console.log("root-timeline: ", awayMc);

		this._pFinalizeAsset(awayMc, "scene");
	}
	public textFormatAlignMap:string[]=[TextFormatAlign.LEFT, TextFormatAlign.RIGHT, TextFormatAlign.CENTER, TextFormatAlign.JUSTIFY]
	public framesToAwayTimeline(frames:SWFFrame[]):MovieClip{
		if(!frames)
			frames=this.frames;

		var awayTimeline:Timeline=new Timeline();

		var awayMc:MovieClip=this._factory.createMovieClip(awayTimeline);

		var keyframe_durations:number[]=[];
		var frame_command_indices:number[]=[];
		var frame_recipe:number[]=[];
		var command_length_stream:number[]=[];
		var command_index_stream:number[]=[];
		var add_child_stream:number[]=[];
		var remove_child_stream:number[]=[];
		var update_child_stream:number[]=[];
		var update_child_props_indices_stream:number[]=[];
		var update_child_props_length_stream:number[]=[];
		var property_type_stream:number[]=[];
		var property_index_stream:number[]=[];
		var properties_stream_int:number[]=[];

		var properties_stream_f32_mtx_scale_rot:number[]=[];
		var properties_stream_f32_mtx_pos:number[]=[];
		var properties_stream_f32_mtx_all:number[]=[];
		var properties_stream_f32_ct:number[]=[];

		//console.log("parsed a timeline: ", frames);

		//noTimelineDebug || console.log("\nconverting frames to awayjs MovieClip\n\n");

		var virutalScenegraph:any={};
		var registeredGraphicsIDs:any={};
		var frameCnt=0;
		for (var i = 0; i < frames.length; i++) {



			//todo: labels

			// todo: framescripts
			//console.log("parse frame: ", frames[i]);

			var cmds_removed:any[]=[];
			var cmds_add:any[]=[];
			var cmds_update:any[]=[];
			var unparsedTags:any[]=[];
			var freePotentialChildCache:any={};
			if(!frames[i].controlTags || frames[i].controlTags.length==0){
				//noTimelineDebug || console.log("extending last frames duration");
				if(keyframe_durations.length>0)
					keyframe_durations[keyframe_durations.length-1]+=1;
				else
					keyframe_durations[keyframe_durations.length]=1;
			}
			else if(frames[i].controlTags && frames[i].controlTags.length>0){

				//console.log("frame ",i);
				frame_command_indices.push(command_index_stream.length);
				keyframe_durations[keyframe_durations.length]=1;
				//noTimelineDebug || console.log("Start parsing frame");
				frameCnt++;
				var len:number=frames[i].controlTags.length;
				for (var ct = 0; ct < len; ct++) {
					var unparsedTag=frames[i].controlTags[ct];
					var tag= unparsedTag.tagCode === undefined ? unparsedTag : <any>this.getParsedTag(unparsedTag);

					//console.log("parsed tag", tag);
					switch (tag.code) {
						case SwfTagCode.CODE_START_SOUND:
							//noTimelineDebug || console.log("startsound", tag.soundId, tag.soundInfo);
							break;
						case SwfTagCode.CODE_REMOVE_OBJECT:
						case SwfTagCode.CODE_REMOVE_OBJECT2:
							//console.log("CODE_REMOVE_OBJECT", tag.depth | 0);
							cmds_removed[cmds_removed.length]=tag.depth|0;
							var id=virutalScenegraph[tag.depth].id;
							var freePotentialChilds:any[]=freePotentialChildCache[id];
							if(!freePotentialChilds){
								freePotentialChilds=[];
								freePotentialChildCache[id]=freePotentialChilds;
							}
							freePotentialChilds.push(virutalScenegraph[tag.depth].sessionID);
							virutalScenegraph[tag.depth]=null;
							delete virutalScenegraph[tag.depth];
							//noTimelineDebug || console.log("	remove", "depth", tag.depth);

							/*var child = this.getTimelineObjectAtDepth(tag.depth | 0);
							if (child) {
								this._removeAnimatedChild(child);
							}*/
							break;
						case SwfTagCode.CODE_PLACE_OBJECT:
						case SwfTagCode.CODE_PLACE_OBJECT2:
						case SwfTagCode.CODE_PLACE_OBJECT3:
							var placeObjectTag = <PlaceObjectTag>tag;
							//console.log("CODE_PLACE_OBJECT", tag.depth | 0, placeObjectTag);
							var child = virutalScenegraph[tag.depth];
							var hasCharacter = placeObjectTag.symbolId > -1;
							// Check for invalid flag constellations.
							if (placeObjectTag.flags & PlaceObjectFlags.Move) {
								// Invalid case 1: Move flag set but no child found at given depth.
								if (!child) {
									//  Ignore the current tag.
									break;
								}
							} /*else if (!hasCharacter || (child && !(backwards && hasCharacter))) {
									// Invalid case 2: Neither Move nor HasCharacter flag set.
									// Invalid case 3: HasCharacter flag set but given depth is already occupied by a
									// another object (only if seeking forward).
									Shumway.Debug.warning("Warning: Failed to place object at depth " + depth + ".");
									break;
								}*/
							var awaySymbol: IAsset = null;
							var sessionID: number = -1;
							var swapGraphicsID: number = -1;
							var ratio: number = -1;

							// possible options:

							// hasCharacter && !child
							//		we need to put a child into the display list. might need to create sprite for graphics !

							// hasCharacter && child
							//		need to update a child with a new graphic

							// !hasCharacter && child
							//		need to update a child

							// !hasCharacter && !child
							//		something is wrong ?

							if(hasCharacter) {
								//console.log("placeTag symbol id",placeObjectTag.symbolId )
								awaySymbol = this.awaySymbols[placeObjectTag.symbolId];
								if(awaySymbol.isAsset(Graphics)){

									swapGraphicsID=placeObjectTag.symbolId;
									awayMc.timeline.graphicsPool[placeObjectTag.symbolId]=awaySymbol;
									//swapGraphicsID=registeredGraphicsIDs[placeObjectTag.symbolId];
									/*if(!swapGraphicsID){
										swapGraphicsID=registeredGraphicsIDs[placeObjectTag.symbolId]=awayMc.timeline.potentialPrototypes.length;
										awayMc.timeline.registerPotentialChild(awaySymbol);
									}*/
									if(child){
										sessionID=child.sessionID;
										// a child (sprite) already exists and the swapGraphicsId will be handled in the update command
									}
									else{
										// register a new instance for this object
										var graphicsSprite:Sprite=new Sprite();
										(<Graphics>awaySymbol).endFill();
										//graphicsSprite.graphics.copyFrom(<Graphics>awaySymbol);
										sessionID = awayMc.timeline.potentialPrototypes.length;
										awayMc.timeline.registerPotentialChild(graphicsSprite);
										//if (freePotentialChildCache["graphicsSprite"] && freePotentialChildCache["graphicsSprite"].length > 0) {
										//	sessionID = freePotentialChildCache["graphicsSprite"].pop();
										//	isReused = true;
										//}
										//if (sessionID < 0) {
										//}
										//noTimelineDebug || console.log("	add shape", "session-id", sessionID, "depth", tag.depth, "reused", isReused, tag, awaySymbol);
										child=virutalScenegraph[tag.depth] = {
											sessionID: sessionID,
											id: placeObjectTag.symbolId,
											masks: []
										}
										cmds_add[cmds_add.length] = {sessionID: sessionID, depth: tag.depth};

									}
								}
								else{
									var isReused = false;
									// a free instance for this object might already be available
									//if (freePotentialChildCache[placeObjectTag.symbolId] && freePotentialChildCache[placeObjectTag.symbolId].length > 0) {
									//	sessionID = freePotentialChildCache[placeObjectTag.symbolId].pop();
									//	isReused = true;
									//}

									//if (sessionID < 0) {
										// register a new instance for this object
										sessionID = awayMc.timeline.potentialPrototypes.length;
										awayMc.timeline.registerPotentialChild(awaySymbol);
								//	}
									//noTimelineDebug || console.log("	add", "session-id", sessionID, "depth", tag.depth, "reused", isReused, tag, awaySymbol);
									child=virutalScenegraph[tag.depth] = {
										sessionID: sessionID,
										id: placeObjectTag.symbolId,
										masks: []
									}
									cmds_add[cmds_add.length] = {sessionID: sessionID, depth: tag.depth};
								}
							}

							if (placeObjectTag.flags & PlaceObjectFlags.HasRatio) {
								if(!awaySymbol)
									awaySymbol = this.awaySymbols[child.id];
								if(awaySymbol.isAsset(MorphSprite))
									ratio=placeObjectTag.ratio;
							}

							if (child) {
								cmds_update[cmds_update.length]={child:child, placeObjectTag:placeObjectTag, swapGraphicsID:swapGraphicsID, ratio:ratio};
								//noTimelineDebug || console.log("	update", "session-id", child.sessionID, "hasCharacter", hasCharacter, "depth", tag.depth, "reused", isReused, "swapGraphicsID", swapGraphicsID, tag,  awaySymbol);

							}
							else{
								throw("error in add command");
							}


							break;
					}

					//console.log("parsed a tag: ", tag);
				}



				// create remove commands:
				var command_recipe_flag=0;
				var start_index = remove_child_stream.length;
				var command_cnt=cmds_removed.length;
				if(command_cnt){
					command_recipe_flag |= 0x02;
					start_index = remove_child_stream.length;
					for (var cmd = 0; cmd < command_cnt; cmd++){
						remove_child_stream.push(cmds_removed[cmd]);
					}
					command_length_stream.push(command_cnt);
					command_index_stream.push(start_index);
					//noTimelineDebug || console.log("removeCommand", cmds_removed);
				}

				// create add commands:
				var command_cnt=cmds_add.length;
				if(command_cnt){
					command_recipe_flag |= 0x04;
					start_index = add_child_stream.length;
					for (var cmd = 0; cmd < command_cnt; cmd++){
						add_child_stream.push(cmds_add[cmd].sessionID);
						add_child_stream.push(cmds_add[cmd].depth);
						//console.log("add", cmds_add[cmd].childID , cmds_add[cmd].depth);
					}
					command_length_stream.push(command_cnt);
					command_index_stream.push(start_index/2);
					//noTimelineDebug || console.log("cmds_add", cmds_add);
				}

				// create update commands:
				var command_cnt=cmds_update.length;
				if(command_cnt){
					// collect masks per objects
					for(var key in virutalScenegraph){
						virutalScenegraph[key].masks=[];
					}

					//prepare mask info:

					for (var cmd = 0; cmd < command_cnt; cmd++) {
						placeObjectTag = cmds_update[cmd].placeObjectTag;
						var child=cmds_update[cmd].child;
						if (placeObjectTag.flags & PlaceObjectFlags.HasClipDepth) {
							var depth:number=placeObjectTag.clipDepth-1;
							while(depth>placeObjectTag.depth){
								virutalScenegraph[depth].masks.push(child.sessionID);
								depth--;
							}
						}
					}

					// process updated props:

					start_index = update_child_stream.length;
					var updateCnt=0;
					var updateCmd;
					for (var cmd = 0; cmd < command_cnt; cmd++) {
						updateCmd=cmds_update[cmd];
						placeObjectTag = updateCmd.placeObjectTag;
						var child = updateCmd.child;
						//if (symbol && !symbol.dynamic) {
						// If the current object is of a simple type (for now Shapes, MorphShapes and
						// StaticText) only its static content is updated instead of replacing it with a
						// new instance. TODO: Handle
						// http://wahlers.com.br/claus/blog/hacking-swf-2-placeobject-and-ratio/.
						//	child._setStaticContentFromSymbol(symbol);
						//}
						// We animate the object only if a user script didn't touch any of the properties
						// this would affect.
						//if (child._hasFlags(DisplayObjectFlags.AnimatedByTimeline)) {

						var childStartIdx:number=property_type_stream.length;
						var num_updated_props=0;
						var reset = false;//!(placeObjectTag.flags & PlaceObjectFlags.Move) && placeObjectTag.flags & PlaceObjectFlags.HasCharacter;

						if(updateCmd.swapGraphicsID>=0){

							num_updated_props++;
							property_type_stream.push(202);
							property_index_stream.push(properties_stream_int.length);
							properties_stream_int.push(updateCmd.swapGraphicsID);
						}
						//var matrixClass = this.sec.flash.geom.Matrix.axClass;
						if (placeObjectTag.flags & PlaceObjectFlags.HasMatrix) {

							//console.log("PlaceObjectFlags.HasMatrix", placeObjectTag.matrix);
							num_updated_props++;

							property_type_stream.push(1);//matrix type: 1=all, 11=no position, 12=no scale
							property_index_stream.push(properties_stream_f32_mtx_all.length / 6);

							// todo: we can save memory by checking if only scale or position was changed,
							// but it means we would need to check against the matrix of the current child, not against identy matrix

							properties_stream_f32_mtx_all[properties_stream_f32_mtx_all.length] = placeObjectTag.matrix.a;
							properties_stream_f32_mtx_all[properties_stream_f32_mtx_all.length] = placeObjectTag.matrix.b;
							properties_stream_f32_mtx_all[properties_stream_f32_mtx_all.length] = placeObjectTag.matrix.c;
							properties_stream_f32_mtx_all[properties_stream_f32_mtx_all.length] = placeObjectTag.matrix.d;
							properties_stream_f32_mtx_all[properties_stream_f32_mtx_all.length] = placeObjectTag.matrix.tx/20;
							properties_stream_f32_mtx_all[properties_stream_f32_mtx_all.length] = placeObjectTag.matrix.ty/20;

						}

						//var colorTransformClass = this.sec.flash.geom.ColorTransform.axClass;
						if (placeObjectTag.flags & PlaceObjectFlags.HasColorTransform) {
							//console.log("PlaceObjectFlags.HasColorTransform", placeObjectTag.cxform);
							property_type_stream.push(2);
							property_index_stream.push(properties_stream_f32_ct.length / 8);
							num_updated_props++;
							properties_stream_f32_ct[properties_stream_f32_ct.length] = placeObjectTag.cxform.redMultiplier/255;
							properties_stream_f32_ct[properties_stream_f32_ct.length] = placeObjectTag.cxform.greenMultiplier/255;
							properties_stream_f32_ct[properties_stream_f32_ct.length] = placeObjectTag.cxform.blueMultiplier/255;
							properties_stream_f32_ct[properties_stream_f32_ct.length] = placeObjectTag.cxform.alphaMultiplier/255;
							properties_stream_f32_ct[properties_stream_f32_ct.length] = placeObjectTag.cxform.redOffset;
							properties_stream_f32_ct[properties_stream_f32_ct.length] = placeObjectTag.cxform.greenOffset;
							properties_stream_f32_ct[properties_stream_f32_ct.length] = placeObjectTag.cxform.blueOffset;
							properties_stream_f32_ct[properties_stream_f32_ct.length] = placeObjectTag.cxform.alphaOffset;
						}

						if (updateCmd.ratio>=0) {
							num_updated_props++;
							property_type_stream.push(203);
							property_index_stream.push(properties_stream_int.length);
							properties_stream_int.push(updateCmd.ratio | 0);
							//console.log("PlaceObjectFlags.HasRatio", placeObjectTag, child);
						}

						if (child.masks.length>0) {

							num_updated_props++;
							property_type_stream.push(3);
							property_index_stream.push(properties_stream_int.length);
							properties_stream_int.push(child.masks.length);
							for(let val of child.masks)
								properties_stream_int.push(val);
						}
						if (placeObjectTag.flags & PlaceObjectFlags.HasClipDepth) {

							//console.log("cmds_update[cmd]",cmds_update[cmd]);


							//console.log("placeObjectTag.clipDepth", placeObjectTag.clipDepth);

							num_updated_props++;
							property_type_stream.push(200);
							property_index_stream.push(0);
							//var clipDepth = placeObjectTag.clipDepth === undefined ? -1 : placeObjectTag.clipDepth;
							//if (clipDepth !== this._clipDepth) {
							//	this._clipDepth = clipDepth;
							//	this._setDirtyFlags(DisplayObjectDirtyFlags.DirtyClipDepth);
							//}
						}

						if (placeObjectTag.flags & PlaceObjectFlags.HasFilterList) {
							/*var filtersPackage = this.sec.flash.filters;
							var filters: filters.BitmapFilter[] = [];
							var swfFilters = placeObjectTag.filters;
							for (var i = 0; i < swfFilters.length; i++) {
								var obj = swfFilters[i];
								var filter: filters.BitmapFilter;
								switch (obj.type) {
									case 0:
										filter = filtersPackage.DropShadowFilter.axClass.FromUntyped(obj);
										break;
									case 1:
										filter = filtersPackage.BlurFilter.axClass.FromUntyped(obj);
										break;
									case 2:
										filter = filtersPackage.GlowFilter.axClass.FromUntyped(obj);
										break;
									case 3:
										filter = filtersPackage.BevelFilter.axClass.FromUntyped(obj);
										break;
									case 4:
										filter = filtersPackage.GradientGlowFilter.axClass.FromUntyped(obj);
										break;
									case 5:
										filter = filtersPackage.ConvolutionFilter.axClass.FromUntyped(obj);
										break;
									case 6:
										filter = filtersPackage.ColorMatrixFilter.axClass.FromUntyped(obj);
										break;
									case 7:
										filter = filtersPackage.GradientBevelFilter.axClass.FromUntyped(obj);
										break;
									default:
										release || assert(filter, "Unknown filter type.");
								}
								filters.push(filter);
							}
							this._filters = filters;
							this._setDirtyFlags(DisplayObjectDirtyFlags.DirtyMiscellaneousProperties);

							//} else if (reset && this._filters) {
							//this._filters = null;
							//this._setDirtyFlags(DisplayObjectDirtyFlags.DirtyMiscellaneousProperties);

						}

						if (placeObjectTag.flags & PlaceObjectFlags.HasBlendMode || reset) {
							var blendMode = flash.display.BlendMode.fromNumber(placeObjectTag.blendMode === undefined ?
								1 : placeObjectTag.blendMode);
							if (blendMode !== this._blendMode) {
								this._blendMode = blendMode;
								this._setDirtyFlags(DisplayObjectDirtyFlags.DirtyMiscellaneousProperties);
							}

						}

						if (placeObjectTag.flags & PlaceObjectFlags.HasCacheAsBitmap || reset) {
							var cacheAsBitmap = placeObjectTag.bmpCache > 0;

							if (cacheAsBitmap !== this._hasFlags(DisplayObjectFlags.CacheAsBitmap)) {
								this._toggleFlags(DisplayObjectFlags.CacheAsBitmap, cacheAsBitmap);
								this._setDirtyFlags(DisplayObjectDirtyFlags.DirtyMiscellaneousProperties);
							}

						}

						if (placeObjectTag.flags & PlaceObjectFlags.HasVisible || reset) {
							var visible = placeObjectTag.visibility === undefined || placeObjectTag.visibility;

							if (visible !== this._hasFlags(DisplayObjectFlags.Visible)) {
								this._toggleFlags(DisplayObjectFlags.Visible, visible);
								this._setDirtyFlags(DisplayObjectDirtyFlags.DirtyMiscellaneousProperties);
							}
						}

						var depth = placeObjectTag.depth;
						var child = this.getTimelineObjectAtDepth(depth);

						// Check for invalid flag constellations.
						if (placeObjectTag.flags & PlaceObjectFlags.Move) {
							// Invalid case 1: Move flag set but no child found at given depth.
							if (!child) {
								//  Ignore the current tag.
								break;
							}
						} else if (!hasCharacter || (child && !(backwards && hasCharacter))) {
							// Invalid case 2: Neither Move nor HasCharacter flag set.
							// Invalid case 3: HasCharacter flag set but given depth is already occupied by a
							// another object (only if seeking forward).
							Shumway.Debug.warning("Warning: Failed to place object at depth " + depth + ".");
							break;
						}

						var symbol: Shumway.Timeline.DisplaySymbol = null;
						if (hasCharacter) {
							symbol = <Shumway.Timeline.DisplaySymbol>loaderInfo.getSymbolById(placeObjectTag.symbolId);
							// The Flash Player ignores references to undefined symbols here. So should we.
							if (!symbol) {
								break;
							}
						}

						if (child) {
							if (symbol && !symbol.dynamic) {
								// If the current object is of a simple type (for now Shapes, MorphShapes and
								// StaticText) only its static content is updated instead of replacing it with a
								// new instance. TODO: Handle
								// http://wahlers.com.br/claus/blog/hacking-swf-2-placeobject-and-ratio/.
								child._setStaticContentFromSymbol(symbol);
							}
							// We animate the object only if a user script didn't touch any of the properties
							// this would affect.
							if (child._hasFlags(DisplayObjectFlags.AnimatedByTimeline)) {
								child._animate(tag);
							}
						} else {
							// Place a new instance of the symbol.
							child = this.createAnimatedDisplayObject(symbol, placeObjectTag, false);
							this.addTimelineObjectAtDepth(child, depth);
							if (symbol.isAVM1Object) {
								child._placeObjectTag = placeObjectTag;
								child._setFlags(DisplayObjectFlags.HasPlaceObjectInitPending);
							}
						}
*/
						}

						if(num_updated_props>0){
							updateCnt++;
							update_child_stream.push(child.sessionID);
							update_child_props_indices_stream.push(childStartIdx);
							update_child_props_length_stream.push(num_updated_props);
						}
					}
					if(updateCnt>0){
						command_recipe_flag |= 0x08;
						command_length_stream.push(command_cnt);
						command_index_stream.push(start_index);
						//noTimelineDebug || console.log("cmds_update", cmds_update);
					}

				}
				if(frame_recipe.length==0){
					command_recipe_flag |= 0x01;

				}
				frame_recipe.push(command_recipe_flag);

			}
			else{
			}

		}


		awayTimeline.keyframe_durations=new Uint32Array(keyframe_durations);
		awayTimeline.numKeyFrames=frameCnt;

		//noTimelineDebug || console.log("frameCnt", frameCnt, "keyframe_durations", keyframe_durations);

		awayTimeline.frame_command_indices=new Uint32Array(frame_command_indices);
		awayTimeline.frame_recipe=new Uint32Array(frame_recipe);
		awayTimeline.command_length_stream=new Uint32Array(command_length_stream);
		awayTimeline.command_index_stream=new Uint32Array(command_index_stream);
		awayTimeline.add_child_stream=new Uint32Array(add_child_stream);
		awayTimeline.remove_child_stream=new Uint32Array(remove_child_stream);
		awayTimeline.update_child_stream=new Uint32Array(update_child_stream);
		awayTimeline.update_child_props_indices_stream=new Uint32Array(update_child_props_indices_stream);
		awayTimeline.update_child_props_length_stream=new Uint32Array(update_child_props_length_stream);
		awayTimeline.property_type_stream=new Uint32Array(property_type_stream);
		awayTimeline.property_index_stream=new Uint32Array(property_index_stream);
		awayTimeline.properties_stream_int=new Uint32Array(properties_stream_int);

		awayTimeline.properties_stream_f32_mtx_scale_rot=new Float32Array(properties_stream_f32_mtx_scale_rot);
		awayTimeline.properties_stream_f32_mtx_pos=new Float32Array(properties_stream_f32_mtx_pos);
		awayTimeline.properties_stream_f32_mtx_all=new Float32Array(properties_stream_f32_mtx_all);
		awayTimeline.properties_stream_f32_ct=new Float32Array(properties_stream_f32_ct);

		awayTimeline.init();
		return awayMc;
	}

	public _pStartParsing(frameLimit:number):void
	{
		//console.log("SWFParser - _pStartParsing");
		//create a content object for Loaders
		this._pContent = this._factory.createDisplayObjectContainer();

		super._pStartParsing(frameLimit);


	}

	private dispose():void
	{
	}


	private updateTimers(type:number):void
	{
		
	}


	//--SWF stuff : ---------------------------------------------------------------------------

	public initSWFLoading(initialBytes: Uint8Array, length: number) {
		// TODO: cleanly abort loading/parsing instead of just asserting here.
		assert(initialBytes[0] === 67 || initialBytes[0] === 70 || initialBytes[0] === 90,
			"Unsupported compression format: " + initialBytes[0]);
		assert(initialBytes[1] === 87);
		assert(initialBytes[2] === 83);
		assert(initialBytes.length >= 30, "At least the header must be complete here.");

		/*if (!release && SWF.traceLevel.value > 0) {
		  console.log('Create SWFFile');
		}*/


		this.compression = CompressionMethod.None;
		this.swfVersion = 0;
		this.useAVM1 = true;
		this.backgroundColor = 0xffffffff;
		this.bounds = null;
		this.frameRate = 0;
		this.frameCount = 0;
		this.attributes = null;
		this.sceneAndFrameLabelData = null;

		this.bytesLoaded = 0;
		this.bytesTotal = length;
		this.pendingUpdateDelays = 0;
		this.framesLoaded = 0;

		this.frames = [];
		this.abcBlocks = [];
		this.dictionary = [];
		this.fonts = [];

		this.symbolClassesMap = [];
		this.symbolClassesList = [];
		this.eagerlyParsedSymbolsMap = [];
		this.eagerlyParsedSymbolsList = [];
		this._jpegTables = null;

		this._currentFrameLabel = null;
		this._currentSoundStreamHead = null;
		this._currentSoundStreamBlock = null;
		this._currentControlTags = null;
		this._currentActionBlocks = null;
		this._currentInitActionBlocks = null;
		this._currentExports = null;
		this._endTagEncountered = false;

		this.readHeaderAndInitialize(initialBytes);
	}

	finishLoading() {
		if (this.compression !== CompressionMethod.None) {
			this._decompressor.close();
			this._decompressor = null;
			this.scanLoadedData();
		}
	}

	getSymbol(id: number) {
		//console.log("getSymbol", id);
		if (this.eagerlyParsedSymbolsMap[id]) {
			return this.eagerlyParsedSymbolsMap[id];
		}
		var unparsed = this.dictionary[id];
		if (!unparsed) {
			return null;
		}
		var symbol;
		if (unparsed.tagCode === SwfTagCode.CODE_DEFINE_SPRITE) {
			// TODO: replace this whole silly `type` business with tagCode checking.
			symbol = this.parseSpriteTimeline(unparsed);
		} else {
			symbol = this.getParsedTag(unparsed);
		}
		symbol.className = this.symbolClassesMap[id] || null;
		symbol.env = this.env;
		return symbol;
	}

	getParsedTag(unparsed: UnparsedTag): any {
		////SWF.enterTimeline('Parse tag ' + getSwfTagCodeName(unparsed.tagCode));
		//console.log("getParsedTag", unparsed);
		this._dataStream.align();
		this._dataStream.pos = unparsed.byteOffset;
		var handler = tagHandlers[unparsed.tagCode];
		//  release || Debug.assert(handler, 'handler shall exists here');
		var tagEnd = Math.min(unparsed.byteOffset + unparsed.byteLength, this._dataStream.end);
		var tag = handler(this._dataStream, this.swfVersion, unparsed.tagCode, tagEnd, this._jpegTables);
		var finalPos = this._dataStream.pos;
		if (finalPos !== tagEnd) {
			this.emitTagSlopWarning(unparsed, tagEnd);
		}
		var symbol = defineSymbol(tag, this.dictionary, this);
		//SWF.leaveTimeline();
		return symbol;
	}

	private readHeaderAndInitialize(initialBytes: Uint8Array) {
		////SWF.enterTimeline('Initialize SWFFile');
		var isDeflateCompressed = initialBytes[0] === 67;
		var isLzmaCompressed = initialBytes[0] === 90;
		if (isDeflateCompressed) {
			this.compression = CompressionMethod.Deflate;
		} else if (isLzmaCompressed) {
			this.compression = CompressionMethod.LZMA;
		}
		this.swfVersion = initialBytes[3];
		this._loadStarted = Date.now();
		this._uncompressedLength = readSWFLength(initialBytes);
		this.bytesLoaded = initialBytes.length;
		// In some malformed SWFs, the parsed length in the header doesn't exactly match the actual size of the file. For
		// uncompressed files it seems to be safer to make the buffer large enough from the beginning to fit the entire
		// file than having to resize it later or risking an exception when reading out of bounds.
		this.swfData = new Uint8Array(this.compression === CompressionMethod.None ?
			this.bytesTotal : this._uncompressedLength);
		this._dataStream = new Stream(this.swfData.buffer);
		this._dataStream.pos = 8;
		this._dataView = this._dataStream.view;
		if (isDeflateCompressed) {
			console.log("readHeaderAndInitialize isDeflateCompressed");
			this.swfData.set(initialBytes.subarray(0, 8));
			this._uncompressedLoadedLength = 8;
			this._decompressor = Inflate.create(true);
			// Parts of the header are compressed. Get those out of the way before starting tag parsing.
			this._decompressor.onData = this.processFirstBatchOfDecompressedData.bind(this);
			this._decompressor.onError = function (error) {
				// TODO: Let the loader handle this error.
				throw new Error(error);
			}
			this._decompressor.push(initialBytes.subarray(8));
		} else if (isLzmaCompressed) {
			console.log("readHeaderAndInitialize isLzmaCompressed");
			this.swfData.set(initialBytes.subarray(0, 8));
			this._uncompressedLoadedLength = 8;
			this._decompressor = new LzmaDecoder(true);
			this._decompressor.onData = this.processFirstBatchOfDecompressedData.bind(this);
			this._decompressor.onError = function (error) {
				// TODO: Let the loader handle this error.
				//console.log('Invalid LZMA stream: ' + error);
			};
			this._decompressor.push(initialBytes);
		} else {
			console.log("readHeaderAndInitialize isUncompressed");
			this.swfData.set(initialBytes);
			this._uncompressedLoadedLength = initialBytes.length;
			this._decompressor = null;
			this.parseHeaderContents();
		}
		////SWF.leaveTimeline();
		this._lastScanPosition = this._dataStream.pos;
		this.scanLoadedData();
	}

	private parseHeaderContents() {
		var obj = parseHeader(this._dataStream);
		this.bounds = obj.bounds;
		this.frameRate = obj.frameRate;
		this.frameCount = obj.frameCount;
		console.log("parseHeaderContents this.bounds", this.bounds);
		console.log("parseHeaderContents this.frameRate", this.frameRate);
		console.log("parseHeaderContents this.frameCount", this.frameCount);
	}

	private processFirstBatchOfDecompressedData(data: Uint8Array) {
		this.processDecompressedData(data);
		this.parseHeaderContents();
		this._decompressor.onData = this.processDecompressedData.bind(this);
	}

	private processDecompressedData(data: Uint8Array) {
		// Make sure we don't cause an exception here when trying to set out-of-bound data by clamping the number of bytes
		// to write to the remaining space in our buffer. If this is the case, we probably got a wrong file length from
		// the SWF header. The Flash Player ignores data that goes over that given length, so should we.
		var length = Math.min(data.length, this._uncompressedLength - this._uncompressedLoadedLength);
		memCopy(this.swfData, data, this._uncompressedLoadedLength, 0, length);
		this._uncompressedLoadedLength += length;
	}

	private scanLoadedData() {
		//SWF.enterTimeline('Scan loaded SWF file tags');
		this._dataStream.pos = this._lastScanPosition;
		this.scanTagsToOffset(this._uncompressedLoadedLength, true);
		this._lastScanPosition = this._dataStream.pos;
		//SWF.leaveTimeline();
	}

	private scanTagsToOffset(endOffset: number, rootTimelineMode: boolean) {
		// `parsePos` is always at the start of a tag at this point, because it only gets updated
		// when a tag has been fully parsed.
		var tempTag = new UnparsedTag(0, 0, 0);
		var pos: number;
		while ((pos = this._dataStream.pos) < endOffset - 1) {
			//console.log("scanTagsToOffset", tempTag);
			if (!this.parseNextTagHeader(tempTag)) {
				break;
			}
			if (tempTag.tagCode === SwfTagCode.CODE_END) {
				if (rootTimelineMode) {
					this._endTagEncountered = true;
				}
				return;
			}
			var tagEnd = tempTag.byteOffset + tempTag.byteLength;
			if (tagEnd > endOffset) {
				this._dataStream.pos = pos;
				return;
			}
			this.scanTag(tempTag, rootTimelineMode);
			if (this._dataStream.pos !== tagEnd) {
				this.emitTagSlopWarning(tempTag, tagEnd);
			}
		}
	}

	/**
	 * Parses tag header information at the current seek offset and stores it in the given object.
	 *
	 * Public so it can be used by tools to parse through entire SWFs.
	 */
	parseNextTagHeader(target: UnparsedTag): boolean {
		var position = this._dataStream.pos;
		var tagCodeAndLength = this._dataView.getUint16(position, true);
		position += 2;
		target.tagCode = tagCodeAndLength >> 6;
		var tagLength = tagCodeAndLength & 0x3f;
		var extendedLength = tagLength === 0x3f;
		if (extendedLength) {
			if (position + 4 > this._uncompressedLoadedLength) {
				return false;
			}
			tagLength = this._dataView.getUint32(position, true);
			position += 4;
		}
		this._dataStream.pos = position;
		target.byteOffset = position;
		target.byteLength = tagLength;
		return true;
	}

	private scanTag(tag: UnparsedTag, rootTimelineMode: boolean): void {
		var stream: Stream = this._dataStream;
		var byteOffset = stream.pos;
		assert(byteOffset === tag.byteOffset);
		var tagCode = tag.tagCode;
		var tagLength = tag.byteLength;
		//console.info("Scanning tag " + getSwfTagCodeName(tagCode) + " (start: " + byteOffset +  ", end: " + (byteOffset + tagLength) + ")");


		if (tagCode === SwfTagCode.CODE_DEFINE_SPRITE) {
			// According to Chapter 13 of the SWF format spec, no nested definition tags are
			// allowed within DefineSprite. However, they're added to the symbol dictionary
			// anyway, and some tools produce them. Notably swfmill.
			// We essentially treat them as though they came before the current sprite. That
			// should be ok because it doesn't make sense for them to rely on their parent being
			// fully defined - so they don't have to come after it -, and any control tags within
			// the parent will just pick them up the moment they're defined, just as always.
			this.addLazySymbol(tagCode, byteOffset, tagLength);
			var spriteTagEnd = byteOffset + tagLength;
			stream.pos += 4; // Jump over symbol ID and frameCount.
			this.scanTagsToOffset(spriteTagEnd, false);
			if (this._dataStream.pos !== spriteTagEnd) {
				this.emitTagSlopWarning(tag, spriteTagEnd);
			}
			return;
		}
		if (ImageDefinitionTags[tagCode]) {
			// Images are decoded asynchronously, so we have to deal with them ahead of time to
			// ensure they're ready when used.
			var unparsed = this.addLazySymbol(tagCode, byteOffset, tagLength);
			this.decodeEmbeddedImage(unparsed);
			return;
		}
		if (tagCode === SwfTagCode.CODE_DEFINE_SOUND) {

			var unparsed = this.addLazySymbol(tagCode, byteOffset, tagLength);
			var definition = this.getParsedTag(unparsed);
			var symbol = new EagerlyParsedDictionaryEntry(definition.id, unparsed, 'sound', definition,
				this.env);
			/*if (!release && traceLevel.value > 0) {
			  var style = flagsToFontStyle(definition.bold, definition.italic);
			  console.info("Decoding embedded font " + definition.id + " with name '" + definition.name +
				  "' and style " + style, definition);
			}*/
			this.eagerlyParsedSymbolsMap[symbol.id] = symbol;
			this.eagerlyParsedSymbolsList.push(symbol);
			return;
		}
		if (FontDefinitionTags[tagCode]) {
			var unparsed = this.addLazySymbol(tagCode, byteOffset, tagLength);
			this.registerEmbeddedFont(unparsed);
			return;
		}
		if (DefinitionTags[tagCode]) {
			this.addLazySymbol(tagCode, byteOffset, tagLength);
			this.jumpToNextTag(tagLength);
			return;
		}

		if (!rootTimelineMode &&
			!(tagCode === SwfTagCode.CODE_SYMBOL_CLASS || tagCode === SwfTagCode.CODE_EXPORT_ASSETS)) {
			this.jumpToNextTag(tagLength);
			return;
		}

		if (ControlTags[tagCode]) {
			this.addControlTag(tagCode, byteOffset, tagLength);
			return;
		}

		switch (tagCode) {
			case SwfTagCode.CODE_FILE_ATTRIBUTES:
				this.setFileAttributes(tagLength);
				break;
			case SwfTagCode.CODE_DEFINE_SCENE_AND_FRAME_LABEL_DATA:
				this.setSceneAndFrameLabelData(tagLength);
				break;
			case SwfTagCode.CODE_SET_BACKGROUND_COLOR:
				this.backgroundColor = parseRgb(this._dataStream);
				break;
			case SwfTagCode.CODE_JPEG_TABLES:
				// Only use the first JpegTables tag, ignore any following.
				// TODO test it, swfdec is using the last one
				if (!this._jpegTables) {
					this._jpegTables = tagLength === 0 ?
						new Uint8Array(0) :
						this.swfData.subarray(stream.pos, stream.pos + tagLength - 2);
				}
				this.jumpToNextTag(tagLength);
				break;
			case SwfTagCode.CODE_DO_ABC:
			case SwfTagCode.CODE_DO_ABC_DEFINE:
				if (!this.useAVM1) {
					var tagEnd = byteOffset + tagLength;
					var abcBlock = new ABCBlock();
					if (tagCode === SwfTagCode.CODE_DO_ABC) {
						abcBlock.flags = stream.readUi32();
						abcBlock.name = stream.readString(-1);
					}
					else {
						abcBlock.flags = 0;
						abcBlock.name = "";
					}
					abcBlock.data = this.swfData.subarray(stream.pos, tagEnd);
					this.abcBlocks.push(abcBlock);
					stream.pos = tagEnd;
				} else {
					this.jumpToNextTag(tagLength);
				}
				break;
			case SwfTagCode.CODE_SYMBOL_CLASS:
				var tagEnd = byteOffset + tagLength;
				var symbolCount = stream.readUi16();
				// TODO: check if symbols can be reassociated after instances have been created.
				while (symbolCount--) {
					var symbolId = stream.readUi16();
					var symbolClassName = stream.readString(-1);
					/* if (!release && traceLevel.value > 0) {
					   console.log('Registering symbol class ' + symbolClassName + ' to symbol ' + symbolId);
					 }*/
					this.symbolClassesMap[symbolId] = symbolClassName;
					this.symbolClassesList.push({id: symbolId, className: symbolClassName});
				}
				// Make sure we move to end of tag even if the content is invalid.
				stream.pos = tagEnd;
				break;
			case SwfTagCode.CODE_DO_INIT_ACTION:
				if (this.useAVM1) {
					var initActionBlocks = this._currentInitActionBlocks ||
						(this._currentInitActionBlocks = []);
					var spriteId = this._dataView.getUint16(stream.pos, true);
					var actionsData = this.swfData.subarray(byteOffset + 2, byteOffset + tagLength);
					initActionBlocks.push({spriteId: spriteId, actionsData: actionsData});
				}
				this.jumpToNextTag(tagLength);
				break;
			case SwfTagCode.CODE_DO_ACTION:
				if (this.useAVM1) {
					var actionBlocks = this._currentActionBlocks || (this._currentActionBlocks = []);
					var actionsData = this.swfData.subarray(stream.pos, stream.pos + tagLength);
					actionBlocks.push({actionsData: actionsData, precedence: stream.pos});
				}
				this.jumpToNextTag(tagLength);
				break;
			case SwfTagCode.CODE_SOUND_STREAM_HEAD:
			case SwfTagCode.CODE_SOUND_STREAM_HEAD2:
				var soundStreamTag = parseSoundStreamHeadTag(this._dataStream, byteOffset + tagLength);
				this._currentSoundStreamHead = SoundStream.FromTag(soundStreamTag);
				break;
			case SwfTagCode.CODE_SOUND_STREAM_BLOCK:
				this._currentSoundStreamBlock = this.swfData.subarray(stream.pos, stream.pos += tagLength);
				break;
			case SwfTagCode.CODE_FRAME_LABEL:
				var tagEnd = stream.pos + tagLength;
				this._currentFrameLabel = stream.readString(-1);
				// TODO: support SWF6+ anchors.
				stream.pos = tagEnd;
				break;
			case SwfTagCode.CODE_SHOW_FRAME:
				this.finishFrame();
				break;
			case SwfTagCode.CODE_END:
				return;
			case SwfTagCode.CODE_EXPORT_ASSETS:
				var tagEnd = stream.pos + tagLength;
				var exportsCount = stream.readUi16();
				var exports = this._currentExports || (this._currentExports = []);
				while (exportsCount--) {
					var symbolId = stream.readUi16();
					var className = stream.readString(-1);
					if (stream.pos > tagEnd) {
						stream.pos = tagEnd;
						break;
					}
					exports.push(new SymbolExport(symbolId, className));
				}
				stream.pos = tagEnd;
				break;
			case SwfTagCode.CODE_DEFINE_BUTTON_CXFORM:
			case SwfTagCode.CODE_DEFINE_BUTTON_SOUND:
			case SwfTagCode.CODE_DEFINE_FONT_INFO:
			case SwfTagCode.CODE_DEFINE_FONT_INFO2:
			case SwfTagCode.CODE_DEFINE_SCALING_GRID:
			case SwfTagCode.CODE_IMPORT_ASSETS:
			case SwfTagCode.CODE_IMPORT_ASSETS2:
				console.log('Unsupported tag encountered ' + tagCode + ': ' + getSwfTagCodeName(tagCode));
				this.jumpToNextTag(tagLength);
				break;
			// These tags should be supported at some point, but for now, we ignore them.
			case SwfTagCode.CODE_CSM_TEXT_SETTINGS:
			case SwfTagCode.CODE_DEFINE_FONT_ALIGN_ZONES:
			case SwfTagCode.CODE_SCRIPT_LIMITS:
			case SwfTagCode.CODE_SET_TAB_INDEX:
			// These tags are used by the player, but not relevant to us.
			case SwfTagCode.CODE_ENABLE_DEBUGGER:
			case SwfTagCode.CODE_ENABLE_DEBUGGER2:
			case SwfTagCode.CODE_DEBUG_ID:
			case SwfTagCode.CODE_DEFINE_FONT_NAME:
			case SwfTagCode.CODE_NAME_CHARACTER:
			case SwfTagCode.CODE_PRODUCT_INFO:
			case SwfTagCode.CODE_METADATA:
			case SwfTagCode.CODE_PROTECT:
			case SwfTagCode.CODE_PATHS_ARE_POSTSCRIPT:
			case SwfTagCode.CODE_TELEMETRY:
			// These are obsolete Generator-related tags.
			case SwfTagCode.CODE_GEN_TAG_OBJECTS:
			case SwfTagCode.CODE_GEN_COMMAND:
				this.jumpToNextTag(tagLength);
				break;
			// These tags aren't used in the player.
			case SwfTagCode.CODE_CHARACTER_SET:
			case SwfTagCode.CODE_DEFINE_BEHAVIOUR:
			case SwfTagCode.CODE_DEFINE_COMMAND_OBJECT:
			case SwfTagCode.CODE_DEFINE_FUNCTION:
			case SwfTagCode.CODE_DEFINE_TEXT_FORMAT:
			case SwfTagCode.CODE_DEFINE_VIDEO:
			case SwfTagCode.CODE_EXTERNAL_FONT:
			case SwfTagCode.CODE_FREE_CHARACTER:
			case SwfTagCode.CODE_FREE_ALL:
			case SwfTagCode.CODE_GENERATE_FRAME:
			case SwfTagCode.CODE_STOP_SOUND:
			case SwfTagCode.CODE_SYNC_FRAME:
				console.info("Ignored tag (these shouldn't occur) " + tagCode + ': ' + getSwfTagCodeName(tagCode));
				this.jumpToNextTag(tagLength);
				break;
			default:
				if (tagCode > 100) {
					console.log("Encountered undefined tag " + tagCode + ", probably used for AVM1 " +
						"obfuscation. See http://ijs.mtasa.com/files/swfdecrypt.cpp.");
				} else {
					console.log('Tag not handled by the parser: ' + tagCode + ': ' + getSwfTagCodeName(tagCode));
				}
				this.jumpToNextTag(tagLength);
		}
	}

	parseSpriteTimeline(spriteTag: DictionaryEntry) {
		//SWF.enterTimeline("parseSpriteTimeline");
		//console.log("parseSpriteTimeline", spriteTag);
		var data = this.swfData;
		var stream = this._dataStream;
		var dataView = this._dataView;
		var timeline: any = {
			id: spriteTag.id,
			type: 'sprite',
			frames: []
		};
		var spriteTagEnd = spriteTag.byteOffset + spriteTag.byteLength;
		var frames = timeline.frames;
		var label: string = null;
		var controlTags: UnparsedTag[] = [];
		var soundStreamHead: SoundStream = null;
		var soundStreamBlock: Uint8Array = null;
		var actionBlocks: {actionsData: Uint8Array; precedence: number}[] = null;
		var initActionBlocks: {spriteId: number; actionsData: Uint8Array}[] = null;
		// Skip ID.
		stream.pos = spriteTag.byteOffset + 2;
		// TODO: check if numFrames or the real number of ShowFrame tags wins. (Probably the former.)
		timeline.frameCount = dataView.getUint16(stream.pos, true);
		stream.pos += 2;
		var spriteContentTag = new UnparsedTag(0, 0, 0);
		while (stream.pos < spriteTagEnd) {
			this.parseNextTagHeader(spriteContentTag);
			var tagLength = spriteContentTag.byteLength;
			var tagCode = spriteContentTag.tagCode;
			if (stream.pos + tagLength > spriteTagEnd) {
				console.log("DefineSprite child tags exceed DefineSprite tag length and are dropped");
				break;
			}

			if (ControlTags[tagCode]) {
				controlTags.push(new UnparsedTag(tagCode, stream.pos, tagLength));
				stream.pos += tagLength;
				continue;
			}

			switch (tagCode) {
				case SwfTagCode.CODE_DO_ACTION:
					if (this.useAVM1) {
						if (!actionBlocks) {
							actionBlocks = [];
						}
						var actionsData = data.subarray(stream.pos, stream.pos + tagLength);
						actionBlocks.push({actionsData: actionsData, precedence: stream.pos});
					}
					break;
				case SwfTagCode.CODE_DO_INIT_ACTION:
					if (this.useAVM1) {
						if (!initActionBlocks) {
							initActionBlocks = [];
						}
						var spriteId = dataView.getUint16(stream.pos, true);
						stream.pos += 2;
						var actionsData = data.subarray(stream.pos, stream.pos + tagLength);
						initActionBlocks.push({spriteId: spriteId, actionsData: actionsData});
					}
					break;
				case SwfTagCode.CODE_FRAME_LABEL:
					var tagEnd = stream.pos + tagLength;
					label = stream.readString(-1);
					// TODO: support SWF6+ anchors.
					stream.pos = tagEnd;
					tagLength = 0;
					break;
				case SwfTagCode.CODE_SHOW_FRAME:
					frames.push(new SWFFrame(controlTags, label, soundStreamHead, soundStreamBlock,
						actionBlocks, initActionBlocks, null));
					label = null;
					controlTags = [];
					soundStreamHead = null;
					soundStreamBlock = null;
					actionBlocks = null;
					initActionBlocks = null;
					break;
				case SwfTagCode.CODE_END:
					stream.pos = spriteTagEnd;
					tagLength = 0;
					break;
				default:
				// Ignore other tags.
			}
			stream.pos += tagLength;
			assert(stream.pos <= spriteTagEnd);
		}
		//awayMC.timeline.
		
		//SWF.leaveTimeline();
		return timeline;
	}

	private jumpToNextTag(currentTagLength: number) {
		this._dataStream.pos += currentTagLength;
	}

	private emitTagSlopWarning(tag: UnparsedTag, tagEnd: number) {
		var consumedBytes = this._dataStream.pos - tag.byteOffset;
		//console.log('Scanning ' + getSwfTagCodeName(tag.tagCode) + ' at offset ' + tag.byteOffset +' consumed ' + consumedBytes + ' of ' + tag.byteLength + ' bytes. (' +(tag.byteLength - consumedBytes) + ' left)');
		this._dataStream.pos = tagEnd;
	}

	private finishFrame() {
		if (this.pendingUpdateDelays === 0) {
			this.framesLoaded++;
		}
		this.frames.push(new SWFFrame(this._currentControlTags,
			this._currentFrameLabel,
			this._currentSoundStreamHead,
			this._currentSoundStreamBlock,
			this._currentActionBlocks,
			this._currentInitActionBlocks,
			this._currentExports));
		this._currentFrameLabel = null;
		this._currentControlTags = null;
		this._currentSoundStreamHead = null;
		this._currentSoundStreamBlock = null;
		this._currentActionBlocks = null;
		this._currentInitActionBlocks = null;
		this._currentExports = null;
	}

	private setFileAttributes(tagLength: number) {
		// TODO: check what happens to attributes tags that aren't the first tag.
		if (this.attributes) {
			this.jumpToNextTag(tagLength);
		}
		var bits = this.swfData[this._dataStream.pos];
		this._dataStream.pos += 4;
		this.attributes = {
			network: bits & 0x1,
			relativeUrls: bits & 0x2,
			noCrossDomainCaching: bits & 0x4,
			doAbc: bits & 0x8,
			hasMetadata: bits & 0x10,
			useGpu: bits & 0x20,
			useDirectBlit : bits & 0x40
		};
		this.useAVM1 = !this.attributes.doAbc;
		console.log("use AVM1: ", this.useAVM1)
	}

	private setSceneAndFrameLabelData(tagLength: number) {
		if (this.sceneAndFrameLabelData) {
			this.jumpToNextTag(tagLength);
			return;
		}
		this.sceneAndFrameLabelData = parseDefineSceneTag(
			this._dataStream, SwfTagCode.CODE_DEFINE_SCENE_AND_FRAME_LABEL_DATA);
	}

	private addControlTag(tagCode: number, byteOffset: number, tagLength: number) {
		var controlTags = this._currentControlTags || (this._currentControlTags = []);
		controlTags.push(new UnparsedTag(tagCode, byteOffset, tagLength));
		this.jumpToNextTag(tagLength);

	}
	private addLazySymbol(tagCode: number, byteOffset: number, tagLength: number) {
		var id = this._dataView.getUint16(this._dataStream.pos, true);
		var symbol = new DictionaryEntry(id, tagCode, byteOffset, tagLength);
		this.dictionary[id] = symbol;
		/*if (!release && traceLevel.value > 0) {
		  console.info("Registering symbol " + id + " of type " + getSwfTagCodeName(tagCode));
		}*/
		return symbol;
	}

	private decodeEmbeddedFont(unparsed: UnparsedTag) {
		var definition = this.getParsedTag(unparsed);
		var symbol = new EagerlyParsedDictionaryEntry(definition.id, unparsed, 'font', definition,
			this.env);
		/*if (!release && traceLevel.value > 0) {
		  var style = flagsToFontStyle(definition.bold, definition.italic);
		  console.info("Decoding embedded font " + definition.id + " with name '" + definition.name +
			  "' and style " + style, definition);
		}*/
		this.eagerlyParsedSymbolsMap[symbol.id] = symbol;
		this.eagerlyParsedSymbolsList.push(symbol);

		var style = flagsToFontStyle(definition.bold, definition.italic);
		this.fonts.push({name: definition.name, id: definition.id, style: style});
	}

	private registerEmbeddedFont(unparsed: UnparsedTag) {
		/*  if (!inFirefox) {
			this.decodeEmbeddedFont(unparsed);
			return;
		  }*/
		var stream = this._dataStream;
		var id = this._dataView.getUint16(stream.pos, true);
		var style: string;
		var name: string;
		// DefineFont only specifies a symbol ID, no font name or style.
		if (unparsed.tagCode === SwfTagCode.CODE_DEFINE_FONT) {
			// Assigning some unique name to simplify font registration and look ups.
			name = '__autofont__' + unparsed.byteOffset;
			style = 'regular';
		} else {
			var flags = this.swfData[stream.pos + 2];
			style = flagsToFontStyle(!!(flags & 0x1), !!(flags & 0x2));
			var nameLength = this.swfData[stream.pos + 4];
			// Skip language code.
			stream.pos += 5;
			name = stream.readString(nameLength);
		}
		this.fonts.push({name: name, id: id, style: style});
		/*  if (!release && traceLevel.value > 0) {
			console.info("Registering embedded font " + id + " with name '" + name + "' and style " +
				style);
		  }*/
		stream.pos = unparsed.byteOffset + unparsed.byteLength;
	}

	private decodeEmbeddedImage(unparsed: UnparsedTag) {
		var definition = this.getParsedTag(unparsed);
		var symbol = new EagerlyParsedDictionaryEntry(definition.id, unparsed, 'image', definition,
			this.env);
		/*if (!release && traceLevel.value > 0) {
		   console.info("Decoding embedded image " + definition.id + " of type " +
			   getSwfTagCodeName(unparsed.tagCode) + " (start: " + unparsed.byteOffset +
			   ", end: " + (unparsed.byteOffset + unparsed.byteLength) + ")");
		 }*/
		this.eagerlyParsedSymbolsMap[symbol.id] = symbol;
		this.eagerlyParsedSymbolsList.push(symbol);
	}

}

function flagsToFontStyle(bold: boolean, italic: boolean) {
	if (bold && italic) {
		return 'boldItalic';
	}
	if (bold) {
		return 'bold';
	}
	if (italic) {
		return 'italic';
	}
	return 'regular';
}

export class SWFFrame {
	controlTags: UnparsedTag[];
	labelName: string;
	soundStreamHead: SoundStream;
	soundStreamBlock: Uint8Array;
	actionBlocks: ActionBlock[];
	initActionBlocks: InitActionBlock[];
	exports: SymbolExport[];
	constructor(controlTags?: UnparsedTag[], labelName?: string,
				soundStreamHead?: SoundStream,
				soundStreamBlock?: Uint8Array,
				actionBlocks?: ActionBlock[],
				initActionBlocks?: InitActionBlock[],
				exports?: SymbolExport[]) {
		controlTags && Object.freeze(controlTags);
		this.controlTags = controlTags;
		this.labelName = labelName;
		actionBlocks && Object.freeze(actionBlocks);
		this.soundStreamHead = soundStreamHead;
		this.soundStreamBlock = soundStreamBlock;
		this.actionBlocks = actionBlocks;
		initActionBlocks && Object.freeze(initActionBlocks);
		this.initActionBlocks = initActionBlocks;
		exports && Object.freeze(exports);
		this.exports = exports;
	}
}


function readSWFLength(bytes: Uint8Array) {
	// We read the length manually because creating a DataView just for that is silly.
	return (bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24) >>> 0;
}

function defineSymbol(swfTag, symbols, parser) {
	switch (swfTag.code) {
		case SwfTagCode.CODE_DEFINE_BITS:
		case SwfTagCode.CODE_DEFINE_BITS_JPEG2:
		case SwfTagCode.CODE_DEFINE_BITS_JPEG3:
		case SwfTagCode.CODE_DEFINE_BITS_JPEG4:
			return defineImage(swfTag);
		case SwfTagCode.CODE_DEFINE_BITS_LOSSLESS:
		case SwfTagCode.CODE_DEFINE_BITS_LOSSLESS2:
			return defineBitmap(swfTag);
		case SwfTagCode.CODE_DEFINE_BUTTON:
		case SwfTagCode.CODE_DEFINE_BUTTON2:
			return defineButton(swfTag, symbols);
		case SwfTagCode.CODE_DEFINE_EDIT_TEXT:
			return defineText(swfTag);
		case SwfTagCode.CODE_DEFINE_FONT:
		case SwfTagCode.CODE_DEFINE_FONT2:
		case SwfTagCode.CODE_DEFINE_FONT3:
		case SwfTagCode.CODE_DEFINE_FONT4:
			return defineFont(swfTag);
		case SwfTagCode.CODE_DEFINE_MORPH_SHAPE:
		case SwfTagCode.CODE_DEFINE_MORPH_SHAPE2:
		case SwfTagCode.CODE_DEFINE_SHAPE:
		case SwfTagCode.CODE_DEFINE_SHAPE2:
		case SwfTagCode.CODE_DEFINE_SHAPE3:
		case SwfTagCode.CODE_DEFINE_SHAPE4:
			return defineShape(swfTag, parser);
		case SwfTagCode.CODE_DEFINE_SOUND:
			return defineSound(swfTag);
		case SwfTagCode.CODE_DEFINE_VIDEO_STREAM:
			return {
				type: 'video',
				id: swfTag.id,
				width: swfTag.width,
				height: swfTag.height,
				deblocking: swfTag.deblocking,
				smoothing: swfTag.smoothing,
				codec: swfTag.codecId
			};
		case SwfTagCode.CODE_DEFINE_SPRITE:
			// Sprites are fully defined at this point.
			return swfTag;
		case SwfTagCode.CODE_DEFINE_BINARY_DATA:
			return {
				type: 'binary',
				id: swfTag.id,
				data: swfTag.data
			};
		case SwfTagCode.CODE_DEFINE_TEXT:
		case SwfTagCode.CODE_DEFINE_TEXT2:
			return defineLabel(swfTag);
		default:
			return swfTag;
	}
}

