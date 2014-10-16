function showPageAction( tabId, changeInfo, tab ) {
	if (tab.url.indexOf('http://www.liquiddota.com/calendar/') >-1) {
	    chrome.pageAction.show(tabId);
	}
};

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	if (request.method == "getLocalStorage")
		if (!localStorage["team"]) {
			sendResponse({data:''});
		} else {
			sendResponse({data: localStorage["team"]});
		}
	else
		sendResponse({data:''});
});

chrome.tabs.onUpdated.addListener(showPageAction);