if (IsTranscriptionSectionVisible()) {
    RemoveTranscriptionSection();
    false;
}
else {
    const textArea = document.createElement("p");
    textArea.innerText = "Loading..."
    textArea.style.color = "white";
    AddTranscriptionSection(textArea);
    true;
}