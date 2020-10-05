function insertSubString (str, subStr, pos) {
  const arr = str.split(' ');
  const newArr = arr.slice(0, pos+1).concat(subStr, ...arr.slice(pos+1));

  return newArr.join(' ');
}

module.exports = insertSubString;
