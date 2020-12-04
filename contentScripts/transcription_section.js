if (typeof transcriptionSectionLoaded === "undefined") {
var transcriptionSectionLoaded;

if (typeof iframe === "undefined") {
    var iframe;
}

function IsTranscriptionSectionVisible() {
    return document.documentElement.contains(iframe);
}

function RemoveTranscriptionSection() {
    iframe.parentNode.removeChild(iframe);
}

function AddTranscriptionSection(textArea) {
    iframe = document.createElement("iframe");
    const div = document.createElement("div");
    const resizeBar = document.createElement("div");
    resizeBar.style.width = "100%";
    resizeBar.style.height = "10px";
    resizeBar.style.cursor = "ns-resize";
    document.documentElement.appendChild(iframe);
    iframe.contentDocument.body.appendChild(resizeBar);
    iframe.contentDocument.body.appendChild(div);
    iframe.contentDocument.body.style.margin = "0px";
    div.appendChild(textArea);
    iframe.style.position = "fixed";
    iframe.style.left = 0;
    iframe.style.bottom = 0;
    iframe.style.width = "100%";
    iframe.style.zIndex = "2147483647";
    iframe.style.background = "black";
    iframe.style.opacity = "75%";
    div.style.width = "100%";
    div.style.height = "calc(100% - 10px)";
    textArea.style.padding = "5px";
    textArea.style.margin = "0px";
    textArea.style.width = "100%";
    textArea.style.height = "100%";
    textArea.style["box-sizing"] = "border-box";

    resizeBar.addEventListener("mousedown", resizeStart);
    document.addEventListener("mouseup", resizeEnd);
    iframe.contentDocument.body.addEventListener("mouseup", resizeEnd);

    function resizeStart(e) {
        e.preventDefault();
        document.addEventListener("mousemove", doResizeDoc);
        iframe.contentDocument.body.addEventListener("mousemove", doResizeIframe);
    }

    function resizeEnd(e) {
        e.preventDefault();
        document.removeEventListener("mousemove", doResizeDoc);
        iframe.contentDocument.body.removeEventListener("mousemove", doResizeIframe);
    }

    function doResizeDoc(e) {
        iframe.height = document.documentElement.clientHeight - e.clientY;
    }

    function doResizeIframe(e) {
        iframe.height = iframe.height - e.clientY;
    }
}
}