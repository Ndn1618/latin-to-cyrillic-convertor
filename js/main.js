wordInput.addEventListener('input', function () {
  const wordInputValue = wordInput.value;

  wordInCyrillic.textContent = wordInputValue.wordToCyrillic();
});
