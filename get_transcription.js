chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.command === "getTranscription") {
            getTranscription(sender.tab.url).then((value) => sendResponse(value));
        }
        else {
            sendResponse(null)
        }
        return true;
    }
);

async function getTranscription(url) {
    const transcriptionUrl = new URL('test', 'https://virtserver.swaggerhub.com/DoomInAJar/Transcription/1.0.0/transcriptions/');
    const response = await fetch(transcriptionUrl);
    const val = await response.json();
    console.log(val);
    return val.transcription;
}