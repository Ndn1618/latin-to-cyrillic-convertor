String.prototype.wordToCyrillic = function () {
  let wordOnRussian = '';

  const words = this.split('');

  for (word of words) {
    for (russianLetter of russianLetters) {
      if (russianLetter.id === String(word).charCodeAt()) {
        wordOnRussian += russianLetter.value;
        break;
      }
    }
  };

  return wordOnRussian;
}