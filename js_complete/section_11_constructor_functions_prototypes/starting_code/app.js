// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   name = 'Max';

//   constructor() {
//     super();
//     this.age = 29;
//   }

//   // This will be created as a property on the current object, not the prototype
//   // This will be a different reference for each instance.
//   greetA = () => {
//     console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
//   };

//   // constructor function will turn this into Person.prototype.greetM = function()
//   // this will be the same reference for each instance.
//   // downside, calling this outside of an instance of this class will change 'this' to whatever called it (i.e. eventhandlers / componenet)
//   greetM() {
//     console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
//   }
// }

// const p = new Person();
// console.log(p);
// p.greetM();
// const p2 = new Person();

// const btn = document.getElementById('btn');
// btn.onclick = p.greetM.bind(p);
// console.log(p.__proto__ === p2.__proto__);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
//   };
// }

// // obj.prototype will set objects and properties to any objects
// // that are made with the corresponding constructor function
// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// // obj.__proto__ is the actual fallback object.
// // Object.prototype is the chaining bedrock
// // Person.__proto__

// // This will set a new Object to __proto__ with a printAge method.
// // Person.prototype = {
// //   printAge() {
// //     console.log(this.age);
// //   },
// // };

// const max = new Person('max', 30);
// max.greet();
// max.printAge();
// console.log(max);
// console.log(max.__proto__);

// // const p2 = new max.__proto__.constructor();
// // console.log(p2);
// console.log(Object);
// console.dir(Object.prototype);

const course = {
  title: 'JavScript',
  rating: 5,
};

// Second way to set prototypes
Object.setPrototypeOf(course, {
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

course.printRating();

// can create an object with a null prototype (?why?)
const student = Object.create();

Object.defineProperties(student, 'progress', {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false,
});
