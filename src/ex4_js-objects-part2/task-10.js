function reverseString (str) {
  let arr = str.split('').reduceRight(function(item1, item2) {
    return item1.concat(item2);
  }, []);

  return arr.join('');
}

module.exports = reverseString;
