function doSliceAnalog (arr, begining = 0, ending = arr.length) {
  const newArr = [];
  let begin = begining;
  let end = ending;

  if (begin < 0) {
    begin = arr.length + begin;
  }

  if (end < 0) {
    end = arr.length + end;
  }

  for (let i = 0; i < end - begin; i++) {
    newArr[i] = arr[i + begin];
  };

  return newArr;
}

module.exports = doSliceAnalog;
