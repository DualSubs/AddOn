import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
	{
		input: "src/AddOn.Microsoft.Translate.beta.js",
		output: {
			file: "js/AddOn.Microsoft.Translate.beta.js",
			banner: `/* README: https://github.com/DualSubs */\nconsole.log('🍿️ DualSubs: ➕ AddOn Microsoft Translate β Response')\nconsole.log('${new Date().toLocaleString('zh-CN', {timeZone: 'PRC'})}')`,
			format: "es"
		},
		plugins: [json(), commonjs(), nodeResolve()],
		
	},
];
