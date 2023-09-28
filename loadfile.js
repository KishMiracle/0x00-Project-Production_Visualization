function loadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(event) {
            const contents = event.target.result;
            displayFileContents(contents);
        };

        reader.readAsText(file);
    } else {
        alert('Please select a file.');
    }
}
