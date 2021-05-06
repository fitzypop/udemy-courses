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
  ROCK: "ROCK",
  PAPER: "PAPER",
  SCISSORS: "SCISSORS",
};

const RESULTS = {
  DRAW: "DRAW",
  PLAYER_WINS: "PLAYER_WINS",
  COMPUTER_WINS: "COMPUTER_WINS",
};

const getPlayerChoice = () => {
  let pInput = prompt(
    `${CHOICES.ROCK}, ${CHOICES.PAPER}, or ${CHOICES.SCISSORS}?: `,
    ""
  ).toUpperCase();

  if (!Object.values(CHOICES).includes(pInput)) {
    console.log(
      `Your input is not a valid selection. Defaulting to ${CHOICES.ROCK}`
    );
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

const getWinner = (pChoice, cChoice) =>
  pChoice === cChoice // Draw scenario
    ? RESULTS.DRAW
    : (pChoice === CHOICES.ROCK && cChoice === CHOICES.SCISSORS) ||
      (pChoice === CHOICES.PAPER && cChoice === CHOICES.ROCK) ||
      (pChoice === CHOICES.SCISSORS && cChoice === CHOICES.PAPER)
    ? // Player Wins Scenario
      RESULTS.PLAYER_WINS
    : // Computer Wins Scenario
      RESULTS.COMPUTER_WINS;

document.getElementById("start-game-btn").onclick = () => {
  console.log("\nGame is starting...");
  const playerChoice = getPlayerChoice();
  console.log(`Player Chose: ${playerChoice}`);
  const computerChoice = getComputerChoice();
  console.log(`Computer Chose: ${computerChoice}`);
  const gameResult = getWinner(playerChoice, computerChoice);
  console.log(`Result: ${gameResult}`);
};
