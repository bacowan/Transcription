if (IsTranscriptionSectionVisible()) {
    RemoveTranscriptionSection();
    false;
}
else {
    const textArea = document.createElement("textarea");
    textArea.style.resize = "none";
    textArea.style.readOnly = true;
    textArea.innerHtml = "Loading...";
    AddTranscriptionSection(textArea);
    true;
}