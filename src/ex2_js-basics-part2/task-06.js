function checkPrimeNumber (a) {
    if (a === 0) {
      return (`${a} - это ноль`);
    }
  
    if (a === 1) {
      return (`${a} - это один, не простое и не составное число`);
    }
  
    if (a === 2) {
      return (`${a} - простое число`);
    }
  
    if (a > 1000) {
      return ('Данные неверны');
    }
  
    let i = 2;
    do {
      if (a % i === 0) {
        return (`Число ${a} - составное число`);
      }
      i++;
    } while (i <= (a/3));
  
    return (`Число ${a} - простое число`);
  }

module.exports = checkPrimeNumber;
