// console.log('simple array: ', [1, 2, 3, 4, 5]);
// console.log('new Array(...): ', new Array('Hi!', 'Welcome!'));
// console.log('new Array(1, 2, 3, 4): ', new Array(1, 2, 3, 4));
// console.log('new Array(5): ', new Array(5));

// const numbers = [1, 2, 3];
// console.log('simple array:', numbers);

// const moreNums = Array.from('Hello World!');
// console.log('Array.from()', moreNums);

// const liList = document.getElementsByTagName('li');
// console.log(liList);

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading'); // adds item to back of array
// hobbies.unshift('Coding'); // adds item to front of array
// const poppedValue = hobbies.pop(); // remove item from back of array
// hobbies.shift(); // removes item from front of array
// console.log(hobbies);

// hobbies[1] = 'Coding';
// console.log(hobbies, hobbies[4]);

// // start at (first number), delete items (second number), replace with these items (third arg )
// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const testResults = [1, 5, 3, 1.5, 10.99, -5, 10];
// const storedResults = testResults.slice(); // get a copy of the array (new reference)
// testResults.push(92);
// console.log(storedResults, testResults);
// const otherResults = testResults.slice(2); // supports negative index(starts from back of array)

// // add to arrays together
// const moreResults = otherResults.concat(storedResults);

// // get index of item
// console.log(testResults.indexOf(1.5));
// // get index starting from end
// console.log(testResults.lastIndexOf(1.5));

// // doesn't work the same for reference types
// const personData = [{ name: 'Max' }, { name: 'Manuel' }];
// console.log(personData.indexOf({ name: 'Manuel' })); // -1 means not found

// // find can have 3 args (the current element, the index, the full array)
// // will return a refernce, not a copy
// const manuel = personData.find((item) => item.name == 'Manuel');
// console.log(manuel);

// console.log('testResults.includes(10.99)', testResults.includes(10.99)); // returns true or false
// // only works for references, if it's the same reference
// console.log('personData.includes(manuel)', personData.includes(manuel));
// console.log(
//   'personData.includes({name: "Manuel"})',
//   personData.includes({ name: 'Manuel' })
// );

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// // args: current item, index, array
// // const taxAdjustedPrices = [];
// // prices.forEach((price, idx) => {
// //   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
// //   taxAdjustedPrices.push(priceObj);
// // });
// // we can do better though

// // args: current item, index, array
// const taxAdjustedPrices = prices.map((item, idx) => ({
//   index: idx,
//   taxAdjPrice: item * (1 + tax),
// }));
// console.log(taxAdjustedPrices);

// const sortedPrices = prices.sort((a, b) => (a > b ? 1 : a === b ? 0 : -1));
// console.log(sortedPrices);

// // creates a new array with elements that pass the predicate condition (i.e. the function passed inr)
// const filteredArray = prices.filter((price) => price > 6);
// console.log(filteredArray);

// const sumPrices = prices.reduce((cuml, curr) => cuml + curr);
// console.log(sumPrices);

// // split a string on the semicolon (also good for csv parsing*)
// const data = 'new york;10.99;2000';
// const transformedData = data.split(';');
// console.log(transformedData);

// const nameFragments = ['Max', 'Schwarz'];
// const name = nameFragments.join(' ');
// console.log(name);

// const copiedNameFragments = [...nameFragments];
// copiedNameFragments.unshift('Mr');
// console.log(copiedNameFragments);

// console.log('min value in array:', Math.min(...prices));

// const persons = [
//   { name: 'Max', age: 30 },
//   { name: 'Manuel', age: 29 },
// ];

// const copiedPeoeple = persons.map((person) => ({ ...person }));

// persons.push({ name: 'Anna', age: 26 });
// persons[0].age = 32;

// console.log(persons, copiedPeoeple);

// const nameData = ['Max', 'Schwarz'];
// const [firstName, lastName] = nameData;
