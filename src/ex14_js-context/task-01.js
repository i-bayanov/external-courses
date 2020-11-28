const calc = {
  result: 0,

  setState(n = 0) {
    this.result = n;

    return this;
  },

  getResult() {
    return this.result;
  },

  fetchData(cb) {
    setTimeout(() => cb(500), 1000);
    
    return;
  },

  reset() {
    this.result = 0;

    return this;
  },

  add(num = 0) {
    this.result += num;

    return this;
  },

  subtract(num = 0) {
    this.result -= num;

    return this;
  },

  divide(num = 1) {
    this.result /= num;

    return this;
  },

  multiply(num = 1) {
    this.result *= num;

    return this;
  },
}

for (let key in calc) {
  if (typeof calc[key] == 'function') {
    calc[key] = calc[key].bind(calc);
  }
}

module.exports = calc;
