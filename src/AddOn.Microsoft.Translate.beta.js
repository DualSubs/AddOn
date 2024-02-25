import ENVs from "./ENV/ENV.mjs";

import Database from "./database/index.mjs";
import setENV from "./function/setENV.mjs";

const $ = new ENVs("🍿️ DualSubs: ➕ AddOn v1.0.1(2) Microsoft.Translate.beta");

const $request = {
	"url": "https://edge.microsoft.com/translate/auth",
	"headers": {
		"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15",
		"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
	}
};

/***************** Processing *****************/
(async () => {
	// 读取设置
	const { Settings, Caches, Configs } = setENV($, "DualSubs", ["Translate", "API"], Database);
	$.log(`⚠ ${$.name}`, `Settings.Switch: ${Settings?.Switch}`, "");
	switch (Settings.Switch) {
		case true:
		default:
			const $response = await $.fetch($request);
			Settings.Vendor = "Microsoft";
			$.lodash.set(Settings, "Microsoft.Version", "Azure");
			$.lodash.set(Settings, "Microsoft.Mode", "Token");
			$.lodash.set(Settings, "Microsoft.Token", $response?.body);
			$.log(`⚠ ${$.name}`, `Settings: ${JSON.stringify(Settings)}`, "");
			// 写入缓存
			$.setdata(Settings.Vendor, `@DualSubs.Translate.Settings.Vendor`);
			$.setdata(Settings.Microsoft.Version, `@DualSubs.API.Settings.Microsoft.Version`);
			$.setdata(Settings.Microsoft.Mode, `@DualSubs.API.Settings.Microsoft.Mode`);
			$.setdata(Settings.Microsoft.Token, `@DualSubs.API.Settings.Microsoft.Token`);
			break;
		case false:
			break;
	};
})()
	.catch((e) => $.logErr(e))
	.finally(() => $.done())

/***************** Function *****************/
