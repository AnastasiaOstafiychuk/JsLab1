document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const convertButton = document.getElementById('convertButton');
    const outputText = document.getElementById('outputText');

    convertButton.addEventListener('click', function() {
        const userInput = inputText.value;
        const convertedText = convertToUpperCase(userInput);
        displayConvertedText(convertedText);
    });

    function convertToUpperCase(text) {
        return text.toUpperCase();
    }

    function displayConvertedText(text) {
        outputText.textContent = text;
    }
});
