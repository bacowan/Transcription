if (IsTranscriptionSectionVisible()) {
    RemoveTranscriptionSection();
    false;
}
else {
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style["flex-flow"] = "column";
    const textArea = document.createElement("textarea");
    textArea.style.flex = "0 1 auto";
    textArea.style.width = "100%";
    textArea.style.height = "100%";
    const submitButton = document.createElement("button");
    submitButton.innerHTML = "Submit";
    const cancelButton = document.createElement("button");
    cancelButton.innerHTML = "Cancel";
    const saveButton = document.createElement("button");
    saveButton.innerHTML = "Save for later";
    const buttonDiv = document.createElement("div");
    buttonDiv.style.flex = "1 1 auto";
    buttonDiv.appendChild(submitButton);
    buttonDiv.appendChild(cancelButton);
    buttonDiv.appendChild(saveButton);
    div.appendChild(textArea);
    div.appendChild(buttonDiv);
    textArea.style.resize = "none";
    textArea.style.readOnly = false;

    chrome.runtime.sendMessage(
        {command: "getTranscription"},
        function(response) {
            textArea.innerText = response;
        }
    );

    AddTranscriptionSection(div);
    true;
}