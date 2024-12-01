// Rasti mygtuką ir kūną
const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

// Funkcija, kuri perjungia režimą
function toggleTheme() {
    body.classList.toggle('dark-mode'); // Pridedame arba pašaliname dark-mode klasę
}

// Pridėti įvykio klausytoją mygtukui
toggleButton.addEventListener('click', toggleTheme);