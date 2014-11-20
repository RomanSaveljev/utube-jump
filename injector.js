var shortcut = document.createElement('script');
shortcut.src = chrome.extension.getURL('shortcut.js');
(document.head||document.documentElement).appendChild(shortcut);

var s = document.createElement('script');
s.src = chrome.extension.getURL('injection.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
	s.parentNode.removeChild(s);
};
