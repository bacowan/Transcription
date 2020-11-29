if (typeof iframe === "undefined") {
    var iframe;
}

if (document.documentElement.contains(iframe)) {
    (function() {
        if (typeof iframe !== "undefined") {
            iframe.parentNode.removeChild(iframe);
        }
    })();
}

(function() {
    iframe = document.createElement("iframe");
    const div = document.createElement("div");
    const text = document.createElement("textarea");
    text.style.resize = "none";
    text.style.width = "100%";
    text.style.height = "100%";
    text.style.readOnly = true;
    text.innerHtml = "Loading...";
    document.documentElement.appendChild(iframe);
    iframe.contentDocument.body.appendChild(div);
    div.appendChild(text);
    iframe.style.position = "fixed";
    iframe.style.left = 0;
    iframe.style.bottom = 0;
    iframe.style.width = "100%";
    iframe.style.zIndex = "2147483647";
    iframe.style.background = "black";
    iframe.style.opacity = "75%";
    iframe.style.resize = "vertical";
    div.style.width = "100%";
    div.style.height = "100%";
    chrome.runtime.sendMessage(
        {command: "getTranscription"},
        function(response) {
            text.innerText = response;
            text.style.readOnly = false;
        }
    );
    // TODO: https://stackoverflow.com/questions/46931103/making-a-dragbar-to-resize-divs-inside-css-grids
})();