function doFilterAnalog (arr, func) {
  const newArr = [];
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) {
      newArr[j++] = arr[i];
    }
  }

  return newArr;
}

module.exports = doFilterAnalog;
