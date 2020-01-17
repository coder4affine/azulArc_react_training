import * as types from './src/main';

console.log(types.default);

class Animal {
  constructor(type = 'animal') {
    this.type = type;
  }

  sound() {
    setTimeout(() => {
      console.log(this.type);
    }, 0);
  }
}

const a = new Animal();
console.log(a.sound());
