function makeObjectClone (obj) {
  const clone = Object.assign ({}, obj);

  return clone;
}
module.exports = makeObjectClone;
