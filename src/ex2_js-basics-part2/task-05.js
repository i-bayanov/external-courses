function getMaxValue (arr) {
  let maxValue = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  return maxValue;
}

module.exports = getMaxValue;
