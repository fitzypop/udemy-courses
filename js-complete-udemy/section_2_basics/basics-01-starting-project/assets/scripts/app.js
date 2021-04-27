function add(num1, num2) {
  return num1 + num2;
}

const defaultResult = 0;
let currentResult = defaultResult;

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calcDescription = `(${defaultResult} + 10) * 3 / 2 -1`;
outputResult(currentResult, calcDescription);
