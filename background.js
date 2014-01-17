// Copyright (c) 2014 Daniel Paul Searles
//
// See the file LICENSE.md for copying permission.
//
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(
        {
            file: 'TCDR-Safari-Extension-/TCDR.safariextension/tcdr.js',
            allFrames: true
        },
        function (){
            chrome.tabs.executeScript({
                code: 'tcdr();'
            });
        }
    );
});
