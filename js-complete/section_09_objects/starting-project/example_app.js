// object literal notation
const movieList = document.getElementById('movie-list');

// movieList.style.backgroundColor = 'red';
movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

const userChosenKeyName = 'level';

const person = {
  'first name': 'Max', // object 'keys' can be strings
  // name: 'Max',
  age: 30,
  [userChosenKeyName]: 1,
  hobbies: ['Sports', 'Cooking'],
  greet: function () {
    alert('Hi there!');
  },
  1.5: 'hello',
};
// properties can be added as needed
person.isAdmin = true;
// accessing a property that doesn't exist will return 'undefined'
console.log('person.status:', person.status);

// remove a property, will return undefined if accessed later
// delete person.age;
// it's a bad practice to set things as undefined (that is for the js engine).
// use 'null' for initializing a 'blank' property.
person.age = null;
console.log('person:', person);

// bracket access notation
console.log("person['first name']", person['first name']);
console.log(person[1.5]);

// dynamically access properties
const keyName = 'first name';
console.log('person[keyName]', person[keyName]);
console.log(person[userChosenKeyName]);
