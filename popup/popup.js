chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        { file: "contentScripts/transcription_section.js" }
    );
});

const subtitlesExist = document.getElementById("subtitles-exist");
subtitlesExist.style.display = "none";

const viewSubtitlesButton = document.getElementById("view-subtitles-button");
viewSubtitlesButton.onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { file: "contentScripts/view_subtitles.js" },
            function(ret) { setSubtitlesShowing(ret[0]); }
        );
    });
}

function setSubtitlesShowing(show) {
    viewSubtitlesButton.innerText = show ? "Hide" : "View";
}

const editSubtitlesButton = document.getElementById("edit-subtitles-button");
editSubtitlesButton.onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { file: "contentScripts/edit_subtitles.js" }
        );
    });
}

const createSubtitlesButton = document.getElementById("create-subtitles-button");
createSubtitlesButton.onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { file: "contentScripts/create_subtitles.js" }
        );
    });
}