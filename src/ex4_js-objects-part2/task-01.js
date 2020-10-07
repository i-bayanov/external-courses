function findKeyInPrototype (key, obj) {
  return Object.getPrototypeOf(obj)[key];
}

module.exports = findKeyInPrototype;
