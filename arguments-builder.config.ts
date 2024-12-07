import { defineConfig } from "@iringo/arguments-builder";

export default defineConfig({
	output: {
		surge: {
			path: "./dist/DualSubs.AddOn.MicrosoftTranslate.sgmodule",
			transformEgern: {
				enable: true,
				path: "./dist/DualSubs.AddOn.MicrosoftTranslate.yaml",
			},
		},
		loon: {
			path: "./dist/DualSubs.AddOn.MicrosoftTranslate.plugin",
		},
		customItems: [
			{
				path: "./dist/DualSubs.AddOn.MicrosoftTranslate.stoverride",
				template: "./template/stash.handlebars",
			},
			{
				path: "./dist/DualSubs.AddOn.MicrosoftTranslate.srmodule",
				template: "./template/shadowrocket.handlebars",
			},
		],
		dts: {
			isExported: true,
			path: "./src/types.d.ts",
		},
		boxjsSettings: {
			path: "./template/boxjs.settings.json",
			scope: "@DualSubs.AddOn.Settings",
		},
	},
	args: [
	],
});
