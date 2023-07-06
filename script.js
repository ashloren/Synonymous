// Array of sample words (you can replace this with a larger dictionary)
const words = ["apple", "banana", "cherry", "orange", "grape"];

let currentWord; // Stores the current word for the round
let score = 0; // Stores the player's score
let wrongGuesses = 0; // Stores the number of incorrect guesses

// Get a random word from the words array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Display the current word to the player
function displayWord() {
  const wordDisplay = document.getElementById("word-display");
  wordDisplay.textContent = currentWord;
}

// Check if the entered word is a synonym for the displayed word
function checkSynonym() {
  const input = document.getElementById("synonym-input");
  const synonym = input.value.toLowerCase().trim();

  if (currentWord === synonym) {
    alert("You cannot enter the word itself!");
    return;
  }

  const synonymsList = document.getElementById("synonyms-list");
  const listItem = document.createElement("li");

  if (words.includes(synonym)) {
    listItem.textContent = synonym;
    synonymsList.appendChild(listItem);
    input.value = "";
    score += 5;
  } else {
    wrongGuesses++;
    input.value = "";

    if (wrongGuesses === 5) {
      endRound();
    }
  }
}

// End the current round and start a new round
function endRound() {
  alert(`Round ended! Your score: ${score}`);
  currentWord = getRandomWord();
  score = 0;
  wrongGuesses = 0;
  displayWord();
  clearSynonymsList();
}

// Clear the list of synonyms
function clearSynonymsList() {
  const synonymsList = document.getElementById("synonyms-list");
  synonymsList.innerHTML = "";
}

// Start a new round
function startGame() {
  currentWord = getRandomWord();
  displayWord();

  constsubmitBtn = document.getElementById("submit-btn");
  submitBtn.addEventListener("click", checkSynonym);

  clearSynonymsList();
}

// Call the startGame function to begin the game
startGame();