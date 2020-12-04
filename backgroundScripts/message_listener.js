chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.command === "getTranscription") {
            getTranscription(sender.tab.url).then((value) => sendResponse(value));
        }
        else if (request.command === "getDraft") {
            getDraft(sender.tab.url).then((value) => sendResponse(value));
        }
        else {
            sendResponse(null)
        }
        return true;
    }
);