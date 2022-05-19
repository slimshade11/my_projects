import randomWord from 'random-words';

const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('container-popup');
const notification = document.getElementById('container-notification');
const finalMessage = document.getElementById('final-message');
const wins = document.getElementById('wins');
const looses = document.getElementById('looses');

const figureParts = document.querySelectorAll('.figure-part');

let selectedWord = randomWord();

const correctLetters = [];
const wrongLetters = [];

let score = {
  wins: 0,
  looses: 0,
};

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

  const innerWord = wordEl.innerText.replace(/\n/g, '');

  if (innerWord === selectedWord) {
    updateWins();
    showMessage('Congratulations! You won!');
  }
};

const updateWrongLettersEl = () => {
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map((letter) => `<span> ${letter} </span>`)}
  `;

  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if (index < errors) {
      part.style.display = 'block';
    } else {
      part.style.display = 'none';
    }
  });

  if (wrongLetters.length === figureParts.length) {
    updateLooses();
    showMessage('Unfortunatelly You lost.');
  }
};

const showNotification = () => {
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 500);
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

const showMessage = (message) => {
  setTimeout(() => {
    finalMessage.innerText = message;
    popup.style.display = 'flex';
  }, 500);
};

const restartGame = () => {
  correctLetters.length = 0;
  wrongLetters.length = 0;

  selectedWord = randomWord();

  displayWord();
  updateWrongLettersEl();

  popup.style.display = 'none';
};

const updateWins = () => {
  score.wins += 1;
  wins.innerText = score.wins;
};

const updateLooses = () => {
  score.looses += 1;
  looses.innerText = score.looses;
};

playAgainBtn.addEventListener('click', () => restartGame());

displayWord();
