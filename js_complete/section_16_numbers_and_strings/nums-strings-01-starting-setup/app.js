// get binary repersentation
console.log((1/5).toString(2));

// get fixed number of decimal places, but returns a string
console.log(0.2.toFixed(5));

console.log(20.2.toFixed(2));

// get random whole ints
function randomIntBetwee(min=0, max=1) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function productDescription(string, productName, productPrice) {
  console.log(string, productName, productPrice)
  let priceCategory = 'cheap';
  if (productPrice > 20) {
    priceCategory = 'fair';
  }
  return `${string[0]}${productName}${string[1]}${priceCategory}${string[2]}`;
}

const prodName = 'JavaScript Course';
const prodPrice = 29.99;

// tagged template, turns string into array, and passes in dynamic args as parameters to func
const prodOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
console.log(prodOutput);

const email = 'test@test.com';

// Regex in Js
const emailRegex = new RegExp('^\S+@\S+\.\S+$');
const emailRegex2 = /^\S+@\S+\.\S+$/;

// no idea why these give different results
console.log(emailRegex.test(email));
console.log(emailRegex2.test(email));

// case insensitive expression
const regex2 = /(h|H)ello/;
console.log(regex2.test('hi - hello'));
