import { defineConfig } from "@rspack/cli";
import rspack from "@rspack/core";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import pkg from "./package.json" with { type: "json" };

export default defineConfig({
	entry: {
		"Microsoft.Translate": "./src/Microsoft.Translate.dev.js",
	},
	output: {
		filename: "[name].bundle.js",
	},
	plugins: [
		new NodePolyfillPlugin({
			//additionalAliases: ['console'],
		}),
		new rspack.BannerPlugin({
			banner: `console.log('Date: ${new Date().toLocaleString('zh-CN', {timeZone: 'PRC'})}');`,
			raw: true,
		}),
		new rspack.BannerPlugin({
			banner: `console.log('Version: ${pkg.version}');`,
			raw: true,
		}),
		new rspack.BannerPlugin({
			banner: "console.log('[file]');",
			raw: true,
		}),
		new rspack.BannerPlugin({
			banner: `console.log('${pkg.displayName} β');`,
			raw: true,
		}),
		new rspack.BannerPlugin({
			banner: pkg.homepage,
		}),
	],
	performance: false,
});