function checkType (a) {
    if (isNaN(a)) {
      return undefined;
    }
  
    if ((typeof (a)) === "number") {
      return 'number';
    }
  
    if ((typeof (a)) === "string") {
      return 'string';
    }
  
    return undefined;
  }

module.exports = checkType
