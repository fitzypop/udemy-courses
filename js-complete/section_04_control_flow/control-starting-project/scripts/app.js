const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

const Operations = {
  Add: {
    Name: 'ADD',
    Operator: '+',
  },
  Subtract: {
    Name: 'SUBTRACT',
    Operator: '-',
  },
  Multiple: {
    Name: 'MULTIPLY',
    Operator: '*',
  },
  Divide: {
    Name: 'DIVIDE',
    Operator: '/',
  },
};

// Get input/output elements
const userInput = document.getElementById('input-number');
const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

// Generates and writes calculation log
function logAndWriteOutput(operation, initalResult, inputNum) {
  logEntries.push({
    operation: operation.Name,
    prevResult: initalResult,
    number: inputNum,
    result: currentResult,
  });
  console.log(logEntries);

  currentResultOutput.textContent = currentResult;
  currentCalculationOutput.textContent = `${initalResult} ${operation.Operator} ${inputNum}`;
}

// Gets input from input field
function getUserNumberInput() {
  const input = +userInput.value;
  if (Number.isNaN(input)) {
    throw new Error('Invalid Input from "input-number" field.');
  }

  return input;
}

function calculate(operation) {
  const enteredNumber = getUserNumberInput();
  if (!enteredNumber) {
    return;
  }

  const initialResult = currentResult;

  switch (operation) {
    case Operations.Add:
      currentResult += enteredNumber;
      break;
    case Operations.Subtract:
      currentResult -= enteredNumber;
      break;
    case Operations.Multiple:
      currentResult *= enteredNumber;
      break;
    case Operations.Divide:
      currentResult /= enteredNumber;
      break;
    default:
      throw new Error(`Unsupported Opertaion: ${calculationType}`);
  }

  logAndWriteOutput(operation, initialResult, enteredNumber);
}

// Add onclick events to buttons
document.getElementById('btn-add').onclick = () => calculate(Operations.Add);

document.getElementById('btn-subtract').onclick = () => calculate(Operations.Subtract);

document.getElementById('btn-multiply').onclick = () => calculate(Operations.Multiple);

document.getElementById('btn-divide').onclick = () => calculate(Operations.Divide);
