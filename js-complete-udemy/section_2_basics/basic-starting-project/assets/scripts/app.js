const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");

const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

function getNumberInput() {
  return userInput.value * 1;
}

function createAndWriteOutput(operator, initCalc, inputNum) {
  outputResult(currentResult, `${initCalc} ${operator} ${inputNum}`);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(`Operation: ${logEntry.operation}`);
  console.log(logEntries);
}

function add() {
  const input = getNumberInput();
  const init = currentResult;
  currentResult += input;
  createAndWriteOutput("+", init, input);
  writeToLog("ADD", init, input, currentResult);
}

function subtract() {
  const input = getNumberInput();
  const init = currentResult;
  currentResult -= input;
  createAndWriteOutput("-", init, input);
  writeToLog("SUBTRACT", init, input, currentResult);
}

function multiple() {
  const input = getNumberInput();
  const init = currentResult;
  currentResult *= input;
  createAndWriteOutput("*", init, input);
  writeToLog("MULTIPLE", init, input, currentResult);
}

function divide() {
  const input = getNumberInput();
  const init = currentResult;
  currentResult /= input;
  createAndWriteOutput("/", init, input);
  writeToLog("DIVIDE", init, input, currentResult);
}

addBtn.onclick = add;
subtractBtn.onclick = subtract;
multiplyBtn.onclick = multiple;
divideBtn.onclick = divide;
