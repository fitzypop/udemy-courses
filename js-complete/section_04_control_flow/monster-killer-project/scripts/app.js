const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = ATTACK_VALUE * 1.5;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
const DEFAULT_LIFE = 100;
const battleLog = [];

const EVENTS = {
  PLAYER_ATTACK: "PLAYER_ATTACK",
  PLAYER_STRONG_ATTACK: "PLAYER_STRONG_ATTACK",
  MONSTER_ATTACK: "MONSTER_ATTACK",
  PLAYER_HEAL: "PLAYER_HEAL",
  GAME_OVER: "GAME_OVER",
};

let chosenMaxLife;
try {
  chosenMaxLife = getMaxLifeValues();
} catch (error) {
  console.log(error);
  alert(`Invalid Input. Defaulting to ${DEFAULT_LIFE}`);
} finally {
  chosenMaxLife = chosenMaxLife || DEFAULT_LIFE;
  console.log(`Player and Monster Health: ${chosenMaxLife}`);
}
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

// Add Click Handlers to Buttons
attackBtn.onclick = () =>
  attackMonsterHandler(ATTACK_VALUE, EVENTS.PLAYER_ATTACK);
strongAttackBtn.onclick = () =>
  attackMonsterHandler(STRONG_ATTACK_VALUE, EVENTS.PLAYER_STRONG_ATTACK);
healBtn.onclick = () => healPlayerHandler();
logBtn.onclick = () => printLogHandler();

adjustHealthBars(chosenMaxLife);
resetControls();

function getMaxLifeValues() {
  const parsedValue = parseInt(
    prompt("Please enter max life for you and the Monster", "100")
  );
  if (isNaN(parsedValue) || parsedValue <= 0) {
    throw new Error("Invalid user input, not a number");
  }
  return parsedValue;
}

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
  // battleLog.forEach((entry) => console.log(entry));
  for (const elem of battleLog) {
    console.log(elem);
  }
}
