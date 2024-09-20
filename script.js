function displayTextWordByWord(element, text, delay = 1) {
    const words = text.split(' '); // Split the text by spaces (word by word)
    let currentWordIndex = 0;
    element.innerHTML = ''; // Clear any existing text

    function showNextWord() {
        if (currentWordIndex < words.length) {
            element.innerHTML += words[currentWordIndex] + ' '; // Add next word
            currentWordIndex++;
            setTimeout(showNextWord, delay); // Call the function again after the delay
        }
    }

    showNextWord(); // Start showing the first word
}

// Apply the effect to the main header on page load
window.addEventListener('DOMContentLoaded', () => {
    const mainHeader = document.querySelector('header h1');
    const thankYouHeader = document.querySelector('#thank-you-section header h1');

    // Apply word-by-word appearance for both headers
    displayTextWordByWord(mainHeader, mainHeader.textContent, 300); // 300ms delay between words
    displayTextWordByWord(thankYouHeader, thankYouHeader.textContent, 300); // Same for thank you message
});

// Handle "YES" button click to show the thank you message
document.getElementById('yes-button').addEventListener('click', function() {
    // Hide main section
    document.getElementById('main-section').style.display = 'none';
    // Show thank you section
    document.getElementById('thank-you-section').style.display = 'block';
    // Hide the buttons
    document.getElementById('buttons-section').classList.add('hidden');
});

// Handle the "NO" button moving
document.getElementById('no-button').addEventListener('click', function() {
    const button = document.getElementById('no-button');
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.transform = `translate(${x}px, ${y}px)`;
});
