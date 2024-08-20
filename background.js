// Opens the bookmarks page
// API proxy required by google chrome extension v3 
let localStorage = chrome.storage.local
function OpenBookmarks() {

	localStorage.get("url").then(function (v){
		if (v.url !== undefined){
			chrome.tabs.create({ url:"chrome://bookmarks/#" + v.url });		
		} else {
			chrome.tabs.create({url:"chrome://bookmarks"});
		}
	})
}

// Adds the listener for the toolbar button
chrome.action.onClicked.addListener(OpenBookmarks);

// Run this on first run to setup default bookmarks and explain how to set up keyboard shortcuts
localStorage.get("firstRun").then(function (v){
	if (v.firstRun == null){
		chrome.tabs.create({url:"options.html"});
		localStorage.set({ firstRun: true })
	} else {
		console.log("Open Bookmarks Manager is run second time ;)")
	}
})
