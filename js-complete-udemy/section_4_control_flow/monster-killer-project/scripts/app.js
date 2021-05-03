const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = ATTACK_VALUE * 1.5;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

function resetControls() {
  if (currentMonsterHealth === chosenMaxLife) {
    healBtn.disabled = true;
    healBtn.classList.add("disabled");
  } else {
    healBtn.disabled = false;
    healBtn.classList.remove("disabled");
  }
}

function reset() {
  currentPlayerHealth = chosenMaxLife;
  currentMonsterHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
  resetControls();
}

function endGameMessage(message) {
  setTimeout(() => alert(message), 300);
  reset();
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  currentPlayerHealth -= dealPlayerDamage(MONSTER_ATTACK_VALUE);

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(currentPlayerHealth);
    alert("You would have been dead, but the bonus life saved you!");
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    endGameMessage("You won!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    endGameMessage("You died!!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    endGameMessage("It's a draw!");
  }
  resetControls();
}

function attackMonsterHandler(playerAttack) {
  currentMonsterHealth -= dealMonsterDamage(playerAttack);
  endRound();
}

function healPlayerHandler() {
  let healValue = HEAL_VALUE;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal more than your max health!");
    healValue = chosenMaxLife - currentPlayerHealth;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();
}

// Add Click Handlers to Buttons
attackBtn.onclick = () => attackMonsterHandler(ATTACK_VALUE);
strongAttackBtn.onclick = () => attackMonsterHandler(STRONG_ATTACK_VALUE);
healBtn.onclick = () => healPlayerHandler();

// Start Game
const enteredValue = prompt(
  "Please enter max life for you and the Monster",
  "100"
);

let chosenMaxLife = parseInt(enteredValue);

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
  alert("Invalid input, defaulting to 100");
}

adjustHealthBars(chosenMaxLife);
resetControls();
