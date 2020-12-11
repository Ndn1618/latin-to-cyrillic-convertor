import { russianLetters } from './data.js'

const BACKSPACE__CODE = 8;

String.prototype.wordToCyrillic = function () {
  let wordOnRussian = '';

  for (let i = 0; i < russianLetters.length; i++) {
    if (russianLetters[i].id === String(this).charCodeAt()) {
      wordOnRussian += russianLetters[i].value;
      break;
    }
  };

  return wordOnRussian;
}

wordInput.addEventListener('input', function (evt) {
  const wordInputValue = evt.data;

  if (!wordInputValue) {
    return;
  }

  wordInCyrillic.textContent += wordInputValue.wordToCyrillic();
});

wordInput.addEventListener('keydown', function (evt) {
  if (evt.keyCode === BACKSPACE__CODE) {
    const letters = String(evt.target.value).split('');
    const lettersLastElIndex = letters.length - 1;
    letters.splice(lettersLastElIndex, 1);

    for (let i = 0; i < letters.length; i++) {
      letters[i] = letters[i].wordToCyrillic();
    }

    wordInCyrillic.textContent = letters.join('');
  }
});
