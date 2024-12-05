import { Console, done, fetch, Lodash as _, Storage } from "@nsnanocat/util";
import database from "./function/database.mjs";
import setENV from "./function/setENV.mjs";
const $request = {
	url: "https://edge.microsoft.com/translate/auth",
	headers: {
		"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15",
		Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
	},
};
/***************** Processing *****************/
(async () => {
	/**
	 * 设置
	 * @type {{Settings: import('./types').Settings}}
	 */
	const { Settings, Caches, Configs } = setENV("DualSubs", ["Translate", "API"], database);
	const $response = await fetch($request);
	_.set(Settings, "Vendor", "Microsoft");
	_.set(Settings, "Microsoft.Version", "Azure");
	_.set(Settings, "Microsoft.Mode", "Token");
	_.set(Settings, "Microsoft.Token", $response?.body);
	Console.debug(`Settings.Microsoft.Token: ${JSON.stringify(Settings.Microsoft.Token)}`);
	// 写入缓存
	Storage.setItem("@DualSubs.Translate.Settings.Vendor", Settings.Vendor);
	Storage.setItem("@DualSubs.API.Settings.Microsoft.Version", Settings.Microsoft.Version);
	Storage.setItem("@DualSubs.API.Settings.Microsoft.Mode", Settings.Microsoft.Mode);
	Storage.setItem("@DualSubs.API.Settings.Microsoft.Token", Settings.Microsoft.Token);
})()
	.catch(e => Console.error(e))
	.finally(() => done());
