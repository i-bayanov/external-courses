function insertSubString (str, subStr, pos) {
  let arr = str.split(' ');
  arr.splice(pos + 1, 0, subStr);

  return arr.join(' ');
}

module.exports = insertSubString;
