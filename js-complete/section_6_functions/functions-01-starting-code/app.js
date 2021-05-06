// const start = function () {
//   console.log("Gaming is starting...");
// };

// Adding a method to a POJO
// const person = {
//   greet: function () {
//     console.log("Hello there!");
//   },
// };

// console.log(`Typeof function: ${typeof start}`);
// console.dir(start);

const CHOICES = {
  ROCK: 'ROCK',
  PAPER: 'PAPER',
  SCISSORS: 'SCISSORS',
};

const RESULTS = {
  DRAW: 'DRAW',
  PLAYER_WINS: 'PLAYER_WINS',
  COMPUTER_WINS: 'COMPUTER_WINS',
};

const DEFAULT_PLAYER_CHOICE = CHOICES.ROCK;
const DEFAULT_COMPUTER_CHOICE = CHOICES.SCISSORS;

let gameIsRunning = false;

const getPlayerChoice = () => {
  let pInput = prompt(
    `${CHOICES.ROCK}, ${CHOICES.PAPER}, or ${CHOICES.SCISSORS}?: `,
    ''
  ).toUpperCase();

  if (!Object.values(CHOICES).includes(pInput)) {
    console.log(`Your input is not a valid selection. Defaulting to ${DEFAULT_PLAYER_CHOICE}`);
    pInput = CHOICES.ROCK;
  }
  return pInput;
};

const getComputerChoice = () => {
  const random = Math.random();
  if (random < 0.34) {
    return CHOICES.ROCK;
  } else if (random < 0.67) {
    return CHOICES.PAPER;
  } else {
    return CHOICES.SCISSORS;
  }
};

const getWinner = (pChoice = DEFAULT_PLAYER_CHOICE, cChoice = DEFAULT_COMPUTER_CHOICE) =>
  // Draw scenario
  pChoice === cChoice
    ? RESULTS.DRAW
    : // Player Wins Scenario
    (pChoice === CHOICES.ROCK && cChoice === CHOICES.SCISSORS) ||
      (pChoice === CHOICES.PAPER && cChoice === CHOICES.ROCK) ||
      (pChoice === CHOICES.SCISSORS && cChoice === CHOICES.PAPER)
    ? RESULTS.PLAYER_WINS
    : // Computer Wins Scenario
      RESULTS.COMPUTER_WINS;

document.getElementById('start-game-btn').onclick = () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('\nGame is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const gameResult = getWinner(playerChoice, computerChoice);

  console.log(`Player Chose: ${playerChoice}`);
  console.log(`Computer Chose: ${computerChoice}`);
  console.log(`Result: ${gameResult}`);
  gameIsRunning = false;
};

const sumUp = (...numbers) => numbers.reduce((accum, curr) => accum + curr);
const subtractUp = (...numbers) => numbers.reduce((accum, curr) => accum - curr);

console.log(sumUp(1, 2, 3, 4));
