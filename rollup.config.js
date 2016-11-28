var includePaths = require('rollup-plugin-includepaths');

module.exports = {
	entry: './dist/index.js',
	sourceMap: true,
	format: 'umd',
	moduleName: 'AwayjsParsers',
	external: [
		'@awayjs/core',
		'@awayjs/graphics',
		'@awayjs/scene',
		'@awayjs/stage',
		'@awayjs/renderer',
		'@awayjs/materials',
		'@awayjs/player'
	],
	globals: {
		'@awayjs/core': 'AwayjsCore',
		'@awayjs/graphics': 'AwayjsGraphics',
		'@awayjs/scene': 'AwayjsScene',
		'@awayjs/stage': 'AwayjsStage',
		'@awayjs/renderer': 'AwayjsRenderer',
		'@awayjs/materials': 'AwayjsMaterials',
		'@awayjs/player': 'AwayjsPlayer'
	},
	targets: [
		{ dest: './bundle/awayjs-parsers.umd.js'}
	],
	plugins: [
		includePaths({
			include : {
				"tslib": "./node_modules/tslib/tslib.es6.js"
			}
		}) ]
};