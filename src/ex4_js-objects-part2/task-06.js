function capitalizeFirstLetters (str) {
  let arr = str.split(' ');

  for (let i = 0; i < arr.length; i++){
    arr[i] = capitalizeFirstSymbol(arr[i]);
  }

  return arr.join(' ');
}

function capitalizeFirstSymbol (str) {
  return (str.slice(0, 1).toUpperCase() + str.slice(1));
}

module.exports = capitalizeFirstLetters;
