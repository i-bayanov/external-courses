function addKeyToObject (str, obj) {
  let newObj = obj;
  
  if (!(str in newObj)) {
    newObj[str] = 'new';
  }

  return newObj;
}
module.exports = addKeyToObject;
