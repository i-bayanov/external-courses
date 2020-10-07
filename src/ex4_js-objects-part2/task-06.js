function capitalizeFirstSymbol (str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function capitalizeFirstLetters (str) {
  let arr = str.split(' ').map(capitalizeFirstSymbol);

  return arr.join(' ');
}

module.exports = capitalizeFirstLetters;
