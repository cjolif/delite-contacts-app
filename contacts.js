define(["dojo/json", "requirejs-dplugins/maybe!dcordova/features",
	"dojo/text!contactsApp/contacts.json", "dapp/main"], function (json, has, config, Application) {
	// populate has flag on whether html5 history is correctly supported or not
	has.add("html5history", !has("ie") || has("ie") > 9);
	// TODO we need a central place to store tablet/phone/desktop breakpoints
	// has.add("phone", ((window.innerWidth || document.documentElement.clientWidth) <= common.tabletSize));
	Application(json.parse(config));
});