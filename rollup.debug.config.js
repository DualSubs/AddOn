import json from '@rollup/plugin-json';
import commonjs from "@rollup/plugin-commonjs";

export default [
	{
		input: 'src/AddOn.Microsoft.Translate.beta.js',
		output: {
			file: 'js/AddOn.Microsoft.Translate.beta.js',
			banner: '/* README: https://github.com/DualSubs */',
			format: 'es'
		},
		plugins: [json(), commonjs()],
		
	},
];
