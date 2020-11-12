const noSubtitles = document.getElementById("no-subtitles");
noSubtitles.style.display = "none";

const viewSubtitlesButton = document.getElementById("view-subtitles-button");
viewSubtitlesButton.onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){ 
        chrome.tabs.executeScript(
            tabs[0].id,
            {file: "view_subtitles.js"}
        );
    });
}