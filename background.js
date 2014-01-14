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
