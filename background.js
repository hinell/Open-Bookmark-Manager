
// Opens the bookmarks page

function OpenBookmarks() {
 
	if (localStorage["url"] !== undefined){
		chrome.tabs.create({url:"chrome://bookmarks/#" + localStorage["url"]});		
	} else {
		chrome.tabs.create({url:"chrome://bookmarks"});
	}
}




// Adds the listener for the toolbar button

chrome.browserAction.onClicked.addListener(OpenBookmarks);




// Run this on first run to setup default bookmarks and explain how to set up keyboard shortcuts

if (localStorage["firstRun"] === undefined){
	chrome.tabs.create({url:"options.html"});
	localStorage["firstRun"] = false;
}
