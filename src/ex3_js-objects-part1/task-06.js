function makeDeepObjectClone (obj) {
  const clone = {};

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      if (Array.isArray(obj[key])) {
        let arr = [];

        for (let element of obj[key]) {
          if (typeof element === 'object') {
            arr.push (makeDeepObjectClone (element));
          }
          else {
            arr.push (element);
          }
        }
        clone[key] = arr;
      } else {
        clone[key] = makeDeepObjectClone (obj[key]);
      }
    } else {
      clone[key] = obj[key];
    }
  }

  return clone;
}
module.exports = makeDeepObjectClone;
