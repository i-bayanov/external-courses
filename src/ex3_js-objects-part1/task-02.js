function showKeysAndValues (obj) {
  for (let key in obj) {
    console.log (`${key} : ${obj[key]}`);
  }

  return;
}
module.exports = showKeysAndValues;
