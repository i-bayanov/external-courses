function doMapAnalog (arr, func) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i], i, arr));
  }

  return newArr;
}

module.exports = doMapAnalog;
