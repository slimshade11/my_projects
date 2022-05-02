// constants
const randomWord = require('random-words');
const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('container-popup');
const notification = document.getElementById('container-notification');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

let selectedWord = randomWord();

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

  console.log(selectedWord);

  const innerWord = wordEl.innerText.replace(/\n/g, '');

  if (innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulations! You won!';
    popup.style.display = 'flex';
  }
};

const updateWrongLettersEl = () => {
  console.log('update wrong');
};

const showNotification = () => {
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
};

// Keydown letter press
window.addEventListener('keypress', (e) => {
  const letter = e.key;

  if (selectedWord.includes(letter)) {
    if (!correctLetters.includes(letter)) {
      correctLetters.push(letter);

      displayWord();
    } else {
      showNotification();
    }
  } else {
    if (!wrongLetters.includes(letter)) {
      wrongLetters.push(letter);

      updateWrongLettersEl();
    } else {
      showNotification();
    }
  }
});

displayWord();
