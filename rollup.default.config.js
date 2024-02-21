import json from '@rollup/plugin-json';
import commonjs from "@rollup/plugin-commonjs";
import terser from '@rollup/plugin-terser';

export default [
	{
		input: 'src/AddOn.Microsoft.Translate.js',
		output: {
			file: 'js/AddOn.Microsoft.Translate.js',
			banner: '/* README: https://github.com/DualSubs */',
			format: 'es'
		},
		plugins: [json(), commonjs(), terser()]
	},
];
