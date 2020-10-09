function Calculator() {
  this.result = 0;

  this.getResult = function() {
    return this.result;
  };

  this.reset = function() {
    this.result = 0;

    return this.result;
  };

  this.add = function(num = 0) {
    this.result = this.result + num;

    return this.add;
  };

  this.subtract = function(num = 0) {
    this.result = this.result - num;

    return this.subtract;
  };

  this.divide = function(num = 1) {
    this.result = this.result / num;

    return this.divide;
  };

  this.multiply = function(num = 1) {
    this.result = this.result * num;

    return this.multiply;
  };
  
}

const calc = new Calculator();

for (let key in calc) {
  if (typeof calc[key] === 'function') {
    calc[key] = calc[key].bind(calc);
  }
}

module.exports = calc;
