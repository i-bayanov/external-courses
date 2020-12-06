class Sweets {
  constructor(type, name, favourite, quantity, weigth) {
    this.type = type;
    this.name = name;
    this.favourite = favourite;
    this.quantity = quantity;
    this.weigth = weigth;
  }

  get favourite() {
    return this._favourite;
  }

  set favourite(num) {
    if (Number.isInteger(num) && num <= 10 && num > 0) {
      this._favourite = num;
    } else {
      console.log('неправильный идентификатор приоритета: 0 < X <= 10')
    }
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(num) {
    if (Number.isInteger(num) && num <= 100 && num >= 0) {
      this._quantity = num;
    } else {
      console.log('неправильное число сладостей')
    }
  }

  get weigth() {
    return this._weight;
  }

  set weigth(num) {
    this._weight = num * this.quantity;
  }
}

const typesOfSweets = {
  chocolateCandy: 'шоколадная конфета',
  caramelCandy: 'карамель',
  toffy: 'ирис'
};

class ChocolateCandy extends Sweets {
  constructor(name, favourite, quantity, weigth) {
    super(typesOfSweets.chocolateCandy, name, favourite, quantity, weigth);
  }
}

class CaramelCandy extends Sweets {
  constructor(name, favourite, quantity, weigth) {
    super(typesOfSweets.caramelCandy, name, favourite, quantity, weigth);
  }
}

class Toffy extends Sweets {
  constructor(name, favourite, quantity, weigth) {
    super(typesOfSweets.toffy, name, favourite, quantity, weigth);
  }
}

const milkShake = new ChocolateCandy('Птичье молоко', 1, 10, 5);
const mask = new ChocolateCandy('Маска', 3, 10, 8);
const gooseFeet = new CaramelCandy('Гусиные лапки', 2, 15, 7);
const kittyKitty = new Toffy('Кис-кис', 7, 20, 6);

class NewYearGift {
  constructor(...sweets) {
    this.content = [...sweets];
    this.weigth = [...sweets];
  }
  
  get weigth() {
    return this._weigth;
  }

  set weigth([...sweets]) {
    this._weigth = [...sweets].reduce((a, b) => {return a + b.weigth}, 0);
  }

  sortSweets(param) {
    this.content.sort(function (a, b) {
      if (a[param] < b[param]) {
        return -1;
      }
      if (a[param] > b[param]) {
        return 1;
      }
      return 0;
    })

    console.log(`Результат сортировки подарка по параметру ${param}:`)
    for (let elem of this.content) {
      console.log(`${elem.name} (${elem.type}):`);
      console.log(`    кол-во ${elem.quantity} шт., общий вес ${elem.weigth} г`);
      console.log(`    в рейтинге любимых на ${elem.favourite} месте`)
    }
  }

  findSweet(str) {
    const re = new RegExp(str, 'i')
    
    for (let elem of this.content) {
      if (elem.name.match(re)) {
        console.log(`${elem.name} (${elem.type}):`);
        console.log(`    кол-во ${elem.quantity} шт., общий вес ${elem.weigth} г`);
        console.log(`    в рейтинге любимых на ${elem.favourite} месте`)
      }
    }
  }
}

const myGift = new NewYearGift(milkShake, mask, gooseFeet, kittyKitty);
