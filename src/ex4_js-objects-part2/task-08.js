function capitalizeOnlyFirstSymbol (str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

function capitalizeFirstLetters (str) {
  const arr = str.split(' ');
  const newArr = [arr[0].toLowerCase(), ...arr.slice(1).map(capitalizeOnlyFirstSymbol)];

  return newArr.join('');
}

module.exports = capitalizeFirstLetters;
