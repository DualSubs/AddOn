import { defineConfig } from "@iringo/arguments-builder";

export default defineConfig({
	output: {
		surge: {
			path: "./dist/DualSubs.AddOn.MicrosoftTranslate.sgmodule",
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
				path: "./dist/DualSubs.AddOn.MicrosoftTranslate.yaml",
				template: "./template/egern.handlebars",
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
		{
			key: "Switch",
			name: "总功能开关",
			defaultValue: true,
			type: "boolean",
			description: "是否启用此APP修改",
			exclude: ["surge", "loon"],
		},
	],
});
