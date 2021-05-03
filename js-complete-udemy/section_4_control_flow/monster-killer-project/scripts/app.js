const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = ATTACK_VALUE * 1.5;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
const battleLog = [];

const EVENTS = {
  PLAYER_ATTACK: "PLAYER_ATTACK",
  PLAYER_STRONG_ATTACK: "PLAYER_STRONG_ATTACK",
  MONSTER_ATTACK: "MONSTER_ATTACK",
  PLAYER_HEAL: "PLAYER_HEAL",
  GAME_OVER: "GAME_OVER",
};

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

function resetControls() {
  if (currentPlayerHealth === chosenMaxLife) {
    healBtn.disabled = true;
    healBtn.classList.add("disabled");
  } else {
    healBtn.disabled = false;
    healBtn.classList.remove("disabled");
  }
}

function writeToLog(ev, val) {
  const logEntry = {
    event: ev,
    value: val,
    monsterHealh: currentMonsterHealth,
    playerHealth: currentPlayerHealth,
  };

  if (ev === EVENTS.PLAYER_ATTACK || ev === EVENTS.PLAYER_STRONG_ATTACK) {
    logEntry.target = "MONSTER";
  }

  if (ev === EVENTS.MONSTER_ATTACK || ev === EVENTS.PLAYER_HEAL) {
    logEntry.target = "PLAYER";
  }

  battleLog.push(logEntry);
}

function reset() {
  currentPlayerHealth = chosenMaxLife;
  currentMonsterHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
  resetControls();
}

function endGameMessage(message) {
  setTimeout(() => alert(message), 300);
  writeToLog(EVENTS.GAME_OVER, message);
  reset();
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(EVENTS.MONSTER_ATTACK, playerDamage);

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(currentPlayerHealth);
    alert("You would have been dead, but the bonus life saved you!");
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    endGameMessage("You won!");
    return;
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    endGameMessage("You died!!");
    return;
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    endGameMessage("It's a draw!");
    return;
  }
  resetControls();
}

function attackMonsterHandler(playerAttack, eventType) {
  const monsterDamage = dealMonsterDamage(playerAttack);
  currentMonsterHealth -= dealMonsterDamage(playerAttack);
  writeToLog(eventType, monsterDamage);
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
  writeToLog(EVENTS.PLAYER_HEAL, healValue);
  endRound();
}

function printLogHandler() {
  console.log(battleLog);
}

// Add Click Handlers to Buttons
attackBtn.onclick = () =>
  attackMonsterHandler(ATTACK_VALUE, EVENTS.PLAYER_ATTACK);
strongAttackBtn.onclick = () =>
  attackMonsterHandler(STRONG_ATTACK_VALUE, EVENTS.PLAYER_STRONG_ATTACK);
healBtn.onclick = () => healPlayerHandler();
logBtn.onclick = () => printLogHandler();

// Start Game
const enteredValue = prompt(
  "Please enter max life for you and the Monster",
  "100"
);

chosenMaxLife = parseInt(enteredValue);

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
  alert("Invalid input, defaulting to 100");
}

adjustHealthBars(chosenMaxLife);
resetControls();
