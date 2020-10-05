function countSymbolEntrance (str) {
  let arr = str.split('');

  while (arr.length > 0) {
    console.log(`${arr[0]}: ${arr.filter(item => item === arr[0]).length} раз`);
    arr = arr.filter(item => item !== arr[0]);
  }

  return;
}

module.exports = countSymbolEntrance;
