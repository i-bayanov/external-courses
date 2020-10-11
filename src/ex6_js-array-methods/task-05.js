function doMapAnalog (arr, func) {
  const newArr = [];
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    newArr[j++] = func(arr[i], i, arr);
  }

  return newArr;
}

module.exports = doMapAnalog;
