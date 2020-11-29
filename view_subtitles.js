if (typeof iframe === "undefined") {
    var iframe;
}

if (document.documentElement.contains(iframe)) {
    (function() {
        if (typeof iframe !== "undefined") {
            iframe.parentNode.removeChild(iframe);
        }
    })();
    false;
}
else {
    (function() {
        iframe = document.createElement("iframe");
        const div = document.createElement("div");
        const text = document.createElement("p");
        text.style.margin = "5px";
        text.innerText = "Loading..."
        const resizeBar = document.createElement("div");
        resizeBar.style.width = "100%";
        resizeBar.style.height = "10px";
        resizeBar.style.cursor = "ns-resize";
        document.documentElement.appendChild(iframe);
        iframe.contentDocument.body.appendChild(resizeBar);
        iframe.contentDocument.body.appendChild(div);
        iframe.contentDocument.body.style.margin = "0px";
        div.appendChild(text);
        iframe.style.position = "fixed";
        iframe.style.left = 0;
        iframe.style.bottom = 0;
        iframe.style.width = "100%";
        iframe.style.zIndex = "2147483647";
        iframe.style.background = "black";
        iframe.style.opacity = "75%";
        div.style.width = "100%";
        div.style.height = "calc(100%-10px)";
        text.style.color = "white";

        resizeBar.addEventListener("mousedown", resizeStart);
        document.addEventListener("mouseup", resizeEnd);
        iframe.contentDocument.body.addEventListener("mouseup", resizeEnd);

        chrome.runtime.sendMessage(
            {command: "getTranscription"},
            function(response) {
                text.innerText = response;
            }
        );

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

    })();
    true;
}