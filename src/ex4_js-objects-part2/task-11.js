function countSymbolEntrance (str) {
  const letters = {};

  for (let letter of str) {
    if (letter in letters) {
      letters[letter]++;
    } else {
      letters[letter] = 1;
    }
  }

  for (let letter in letters) {
    console.log(`${[letter]}: ${letters[letter]} раз`);
  }

  return;
}

module.exports = countSymbolEntrance;
