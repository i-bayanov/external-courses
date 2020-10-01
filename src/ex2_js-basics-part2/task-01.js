function checkType (a) {
  if (isNaN(a)) {
    return undefined;
  }

  const TYPE_OF_INPUT = typeof a;

  if ((TYPE_OF_INPUT === 'number') || (TYPE_OF_INPUT === 'string')) {
    return TYPE_OF_INPUT;
  }

  return undefined;
}

module.exports = checkType;
