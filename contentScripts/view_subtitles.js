if (IsTranscriptionSectionVisible()) {
    RemoveTranscriptionSection();
    false;
}
else {
    const textArea = document.createElement("p");
    textArea.innerText = "Loading..."
    textArea.style.color = "white";

    chrome.runtime.sendMessage(
        {command: "getTranscription"},
        function(response) {
            textArea.innerText = response;
        }
    );
    
    AddTranscriptionSection(textArea);
    true;
}