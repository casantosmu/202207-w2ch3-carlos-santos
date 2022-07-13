// Global cardboard settings
const cardboard_rows = 5;
const cardboard_columns = 3;
const balls_number = 90;

// Game data
let isLineCompleted;
let isGameCompleted;
let turnCounter;
const calledNumbers = [];
const gameScores = [
  { username: "Adrian", score: 645 },
  { username: "Marta", score: 523 },
  { username: "Carlos", score: 877 },
  { username: "Marc", score: 143 },
  { username: "Laia", score: 658 },
  { username: "Pere", score: 231 },
  { username: "Josep", score: 860 },
];

const generateRandomIntegerInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const calculateScore = (tries) => {
  const minimumTurnsToFinish = cardboard_rows * cardboard_columns;
  const score = (100 + minimumTurnsToFinish - tries) * 10;
  return score > 0 ? score : 0;
};

const getCardboard = (rows, columns, maxNumber) => {
  const cardboard = [];

  while (cardboard.length < rows) {
    const newRow = [];

    while (newRow.length < columns) {
      const newNumber = generateRandomIntegerInRange(1, maxNumber);
      if (newRow.includes(newNumber)) continue;
      if (cardboard.some((row) => row.includes(newNumber))) continue;
      newRow.push(newNumber);
    }

    cardboard.push(newRow);
  }

  return cardboard;
};

const getDesiredCardboard = () => {
  const cardboard = [];
  let isConfirmed;

  do {
    cardboard.length = 0;
    getCardboard(cardboard_rows, cardboard_columns, balls_number).forEach(
      (row) => cardboard.push(row)
    );
    console.table(cardboard);
    isConfirmed = confirm("Do you want this cardboard?");
  } while (!isConfirmed);

  return cardboard;
};

const getNewCardboardMarked = (cardboard, calledNumber) => {
  return cardboard.map((row) =>
    row.map((number) => (calledNumber === number ? "X" : number))
  );
};

const getCalledNumber = () => {
  let calledNumber;

  do {
    calledNumber = generateRandomIntegerInRange(1, balls_number);
  } while (calledNumbers.includes(calledNumber));

  console.log(`${calledNumber}-ball!`);
  calledNumbers.push(calledNumber);

  return calledNumber;
};

const checkCompletedLine = (cardboard) => {
  cardboard.forEach((row) => {
    if (row.filter((number) => number === "X").length === cardboard_columns) {
      console.log("You covered off a complete horizontal line!");
      isLineCompleted = true;
    }
  });
};

const checkCompletedGame = (cardboard) => {
  if (
    cardboard.filter((row) => {
      return (
        row.filter((number) => number === "X").length === cardboard_columns
      );
    }).length === cardboard_rows
  ) {
    isGameCompleted = true;
  }
};

const askToContinue = () => {
  let isOver = !confirm("Do you want to play again?");
  if (!isOver) gameApp();
};

const showScores = () => {
  const score = calculateScore(turnCounter);
  console.log(
    `Game is over! You scored ${score} points in ${turnCounter} turns`
  );
  gameScores.push({ username, score });
  console.log(`Ranking:`);
  console.table(gameScores.sort((a, b) => b.score - a.score));
};

const turn = (cardboard) => {
  let isAccepted = confirm("Do you want to move to the next turn?");

  if (!isAccepted) {
    askToContinue();
  } else {
    turnCounter++;
    const calledNumber = getCalledNumber();
    const newCardboard = getNewCardboardMarked(cardboard, calledNumber);

    if (!isLineCompleted) {
      checkCompletedLine(newCardboard);
    } else {
      checkCompletedGame(newCardboard);
    }

    if (!isGameCompleted) {
      console.table(newCardboard);
      turn(newCardboard);
    } else {
      console.table(newCardboard);
      showScores();
      askToContinue();
    }
  }
};

const gameApp = () => {
  // Reset game data
  isLineCompleted = false;
  isGameCompleted = false;
  turnCounter = 0;
  calledNumbers.length = 0;

  console.log(`Welcome ${username} to a new game`);
  turn(getDesiredCardboard());
};

const username = prompt("What's your username?") || "user";
gameApp();
