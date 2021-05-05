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
  let selection = prompt(
    `${CHOICES.ROCK}, ${CHOICES.PAPER}, or ${CHOICES.SCISSORS}?: `,
    ""
  ).toUpperCase();

  if (!Object.values(CHOICES).includes(selection)) {
    alert(`Your input is not a valid selection. Defaulting to ${CHOICES.ROCK}`);
    selection = CHOICES.ROCK;
  }
  return selection;
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

const getWinner = (pChoice, cChoice) => {
  // draw scenario
  if (pChoice === cChoice) {
    return RESULTS.DRAW;
  } else if (
    // Player wins Scenario
    (pChoice === CHOICES.ROCK && cChoice === CHOICES.SCISSORS) ||
    (pChoice === CHOICES.PAPER && cChoice === CHOICES.ROCK) ||
    (pChoice === CHOICES.SCISSORS && cChoice === CHOICES.PAPER)
  ) {
    return RESULTS.PLAYER_WINS;
  } else {
    return RESULTS.COMPUTER_WINS;
  }
};

document.getElementById("start-game-btn").onclick = () => {
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();
  const computerChoice = getComputerChoice();
};
