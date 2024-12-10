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
		{
			key: "LogLevel",
			name: "[调试] 日志等级",
			type: "string",
			defaultValue: "WARN",
			description: "选择脚本日志的输出等级，低于所选等级的日志将全部输出。",
			options: [
				{ key: "OFF", label: "关闭" },
				{ key: "ERROR", label: "❌ 错误" },
				{ key: "WARN", label: "⚠️ 警告" },
				{ key: "INFO", label: "ℹ️ 信息" },
				{ key: "DEBUG", label: "🅱️ 调试" },
				{ key: "ALL", label: "全部" },
			],
		},
	],
});
