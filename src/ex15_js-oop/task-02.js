function Device(name, power, important) {
  this.name = name;
  this.power = power;
  this.important = important;
}

Device.prototype.switchOff = function() {
  this.isTurnedOn = false;
}
Device.prototype.switchOn = function() {
  this.isTurnedOn = true;
}

const fridge = new Device('Холодильник', 2000, 1);
const microwaveOven = new Device('Микроволновка', 1500, 3);
const bedroomLamp1 = new Device('Лампа в комнате #1', 24, 2);
const bedroomLamp2 = new Device('Лампа в комнате #2', 45, 2);
const kitchenLamp = new Device('Лампа на кухне', 75, 2);
const tv = new Device('Телевизор', 500, 9);
const iron = new Device('Утюг', 1500, 5);
const laptop = new Device('Ноутбук', 65, 4);

fridge.switchOn();
microwaveOven.switchOff();
bedroomLamp1.switchOn();
bedroomLamp2.switchOff();
kitchenLamp.switchOn();
tv.switchOff();
iron.switchOff();
laptop.switchOn();

const flat = {
  kitchen: [fridge, microwaveOven, kitchenLamp],
  bedroom: [bedroomLamp1, bedroomLamp2, tv, iron, laptop],
  totalPower() {
    let sum = 0;

    for (let room in this) {
      if (Array.isArray(this[room])) {
        sum = this[room].reduce((a, b) => {return b.isTurnedOn ? a + b.power : a}, sum);
      }
    }

    return sum;
  }
};

const findDevice = (str) => {
  const re = new RegExp(str, 'i');

  for (let room in flat) {
    if (Array.isArray(flat[room])) {
      for (let device of flat[room]) {
        if (device.name.match(re)) {
          console.log(`${device.name} находится в ${room}`);
        }
      }
    }
  }
};
