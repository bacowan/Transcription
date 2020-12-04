if (IsTranscriptionSectionVisible()) {
    RemoveTranscriptionSection();
    false;
}
else {
    const textArea = document.createElement("textarea");
    textArea.style.resize = "none";
    textArea.style.readOnly = true;
    textArea.innerHtml = "Loading...";

    chrome.runtime.sendMessage(
        {command: "getTranscription"},
        function(response) {
            textArea.innerText = response;
            textArea.style.readOnly = false;
        }
    );

    AddTranscriptionSection(textArea);
    true;
}