function makeDeepObjectClone (obj) {
  const clone = {};

  for (let key in obj) {
    const currentKey = obj[key];

    if (typeof currentKey === 'object') {
      if (Array.isArray(currentKey)) {
        clone[key] = makeDeepArrayClone(currentKey);
      } else {
        clone[key] = makeDeepObjectClone (currentKey);
      }
    } else {
      clone[key] = currentKey;
    }
  }

  return clone;
}

function makeDeepArrayClone (arr) {
  let cloneArray = [];

  for (let element of arr) {
    if (typeof element === 'object') {
      cloneArray.push(makeDeepObjectClone (element));
    } else {
      cloneArray.push(element);
    }
  }

  return cloneArray;
}

module.exports = makeDeepObjectClone;
