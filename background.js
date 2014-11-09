function jumpYouTube() {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
		var tab = tabs[0];
		var uri = URI(tab.url);
		if (uri.authority() == "www.youtube.com") {
			uri.fragment("t=15s");
			chrome.tabs.update(tab.id, {url: uri.toString()});
		}
	});
}

chrome.browserAction.onClicked.addListener(jumpYouTube);
