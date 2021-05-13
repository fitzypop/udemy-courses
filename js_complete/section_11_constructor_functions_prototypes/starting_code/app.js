// class Person {
//   name = 'Max';

//   constructor() {
//     this.age = 29;
//   }

//   greet() {
//     console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
//   }
// }

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(this);
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
  };
}

const max = new Person('max', 30);
max.greet();
