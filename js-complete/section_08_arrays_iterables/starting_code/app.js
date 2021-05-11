// console.log('simple array: ', [1, 2, 3, 4, 5]);
// console.log('new Array(...): ', new Array('Hi!', 'Welcome!'));
// console.log('new Array(1, 2, 3, 4): ', new Array(1, 2, 3, 4));
// console.log('new Array(5): ', new Array(5));

const numbers = [1, 2, 3];
console.log('simple array:', numbers);

const moreNums = Array.from('Hello World!');
console.log('Array.from()', moreNums);

const liList = document.getElementsByTagName('li');
console.log(liList);
