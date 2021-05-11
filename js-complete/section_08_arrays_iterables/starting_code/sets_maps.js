// const ids = new Set([1, 2, 3, 4, 5]);
// console.log(ids.has(1)); // returns true or false
// ids.add(2); // should already exist in set
// console.log(ids.has(2));
// console.log(ids); // should still only have 5 items

// ids.forEach((item) => console.log(item));
// console.log(ids.entries());

// const person1 = { name: 'Max' };
// const person2 = { name: 'Manuel' };

// const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);
// personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);

// console.log(personData);
// console.log(personData.get(person1));

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }

// for (const value of personData.values()) {
//   console.log(value);
// }

// console.log(personData.size);

// WeakMaps and WeakSets hold 'weak' references to keys/data
// i.e. don't count towards to reference counter (I think?)
// If something is garbage collected, WeakMaps with reflect that
let person = { name: 'Max' };
const persons = new WeakSet();
persons.add(person);

console.log(persons);

// ... some operations
//person = null;
console.log(persons);

const personData = new WeakMap();
personData.set(person, 'Extra info');
