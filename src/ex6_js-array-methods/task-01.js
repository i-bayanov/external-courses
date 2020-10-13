function doSliceAnalog (arr, begining, ending) {
  const newArr = [];
  let begin = begining || 0;
  let end = ending || arr.length;

  if (begin < 0) {
    begin += arr.length;
    begin = (begin < 0) ? 0 : begin;
  }

  if (end < 0) {
    end += arr.length;
    end = (end < 0) ? 0 : end;
  }

  for (let i = 0; i < end - begin; i++) {
    newArr[i] = arr[i + begin];
  }

  return newArr;
}

module.exports = doSliceAnalog;
