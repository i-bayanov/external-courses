function doReduceAnalog (arr, func, init) {
  let i = 0;
  let prev;
  
  if (init === undefined) {
    prev = arr[i];
    i++;
  } else {
    prev = init;
  }

  for (i; i < arr.length; i++) {
    prev = func(prev, arr[i], i, arr);
  }

  return prev;
}

module.exports = doReduceAnalog;
