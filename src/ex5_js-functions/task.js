function Calculator() {
  this.result = 0;

  this.getResult = () => {
    return this.result;
  };

  this.reset = () => {
    this.result = 0;

    return this.result;
  };

  this.add = (num = 0) => {
    this.result += num;

    return this.add;
  };

  this.subtract = (num = 0) => {
    this.result -= num;

    return this.subtract;
  };

  this.divide = (num = 1) => {
    this.result /= num;

    return this.divide;
  };

  this.multiply = (num = 1) => {
    this.result *= num;

    return this.multiply;
  };
}

const calc = new Calculator();

module.exports = calc;
