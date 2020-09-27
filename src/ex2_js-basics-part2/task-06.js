function checkPrimeNumber (a) {
  if (a === 0) {
    return (`${a} - это ноль`);
  }

  if (a === 1) {
    return (`${a} - это один, не простое и не составное число`);
  }

  if (a > 1000) {
    return ('Данные неверны');
  }

  for (let i = 2; i <= (a/3); i++) {
    if (a % i === 0) {
      return (`Число ${a} - составное число`);
    }
  }

  return (`Число ${a} - простое число`);
}

module.exports = checkPrimeNumber;
