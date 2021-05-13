const rand_array_factory = (amount = 5) => {
  return Array.from(
    new Set(
      Array.from(Array(amount)).map(() => {
        return parseInt(Math.floor(Math.random() * 10) + 1);
      })
    )
  );
};

// 1. filter FOR numbers greater than 5,
// map every number to an object which holds the num in a property
// and reduce the array to a single number with multiplication
const arr1 = rand_array_factory();
console.log('Starting Array:', arr1);

const filteredArray = arr1.filter((item) => item > 5);
console.log('Numbers greater than 5:', filteredArray);

const mappedArray = arr1.map((item) => ({ number: item }));
console.log('Mapped array:', mappedArray);

const reducedArray = arr1.reduce((prev, curr) => prev * curr, 1);
console.log('Reduced Array:', reducedArray);

// 2. write a function that finds the largest number in a list of arguments.
// Pass the array from task 1 split up
const findMax = (...items) => Math.max(...items);

console.log('Largets Number in Array:', findMax(...arr1));

// 3. Tweak findMax so that it finds the max and min and return it in an array
// Then use destructuring to get the 2 results in different constants
const findMinMax = (...items) => [Math.min(...items), Math.max(...items)];
const [min, max] = findMinMax(...arr1);
console.log('Min and Max of Array:', min, max);
