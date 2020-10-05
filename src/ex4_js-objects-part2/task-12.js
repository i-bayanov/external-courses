function roundSumNumbers (a, b, pos = 3) {  
  return Number((a + b).toFixed(pos));
}

module.exports = roundSumNumbers;
