function checkType (a) {
  if (isNaN(a)) {
    return undefined;
  }

  const TYPE_OF_INPUT = typeof a;

  if (TYPE_OF_INPUT === 'number') {
    return 'number';
  }

  if (TYPE_OF_INPUT === 'string') {
    return 'string';
  }

  return undefined;
}

module.exports = checkType;
