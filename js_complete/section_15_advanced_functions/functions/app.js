
// pure function, no side effects
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));

// impure, not deterministic
function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

// impure, changes global state
function addMoreNumbers(num1, num2) {
  const sum = add(num1, num2);
  previousResult = sum;
  return sum;
}

const hobbies = ['Sports', 'Cooking'];

// side effect, changes parameter state
function printHobbies(h) {
  h.push('NEW HOBBY');
  console.log(h);
}

printHobbies(hobbies);

console.log(hobbies);


// factory function
function calculateTax(amount, tax) {
  return amount * tax;
}

function createTaxCalculator(tax) {
  function calculator(amount) {
    console.log(`Tax percentage: ${tax}`)
    return amount * tax;
  }

  return calculator;
}

const stateTaxCalculator = createTaxCalculator(0.19);
const incomeTaxCalculator = createTaxCalculator(0.25);

const vatAmount = stateTaxCalculator(100);
const incomeTax = incomeTaxCalculator(200);

let userName = 'Max';

(function() {
  console.log(`Hi ${userName}`);
})();

function powerOf(x, n) {
  if (n === 1) {
    return x;
  }

  return x * powerOf(x, n-1);
}

console.log(powerOf(4, 3));

const myself = {
  name: 'Max',
  friends: [
    {
      name: 'Manuel',
      friends: [
        {
          name: 'Chris',
          friends: [
            {
              name: 'Harry'
            }
          ]
        }
      ]
    },
    {
      name: "Julia",
      friends: [
        {
          name: 'Amilia'
        }
      ]
    }
  ]
}

function getFriendNames(person) {
  if (!person.friends) {
    return [];
  }

  const names = [];

  for (const friend of person.friends) {
    names.push(friend.name);
    names.push(...getFriendNames(friend));
  }

  return names;
}

console.log(getFriendNames(myself));
