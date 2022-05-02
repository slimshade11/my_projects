// constants
const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('container-popup');
const notification = document.getElementById('container-notification');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

// functions
const displayWord = () => {
  wordEl.innerHTML = `
  ${selectedWord
    .split('')
    .map(
      (letter) => `
    <span class="inline-flex text-3xl align-items-center justify-content-center mx-2 letter">
        ${correctLetters.includes(letter) ? letter : ''}
    </span>
  `
    )
    .join('')}
  `;
};

displayWord();
