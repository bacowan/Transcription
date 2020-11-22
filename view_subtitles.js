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
        text.innerText = "HI THERE"
        document.documentElement.appendChild(iframe);
        iframe.contentDocument.body.appendChild(div);
        div.appendChild(text);
        iframe.style.position = "fixed";
        iframe.style.left = 0;
        iframe.style.bottom = 0;
        iframe.style.width = "100%";
        iframe.style.zIndex = "2147483647";
        div.style.background = "black";
        div.style.opacity = "75%";
        div.style.width = "100%";
        div.style.height = "100%";
        text.style.color = "white";
    })();
    true;
}