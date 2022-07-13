do {
  firstNum = prompt("Enter your first number", "");
} while (!checkAnswer(firstNum));

do {
  secondNum = prompt("Enter your second number", "");
} while (!checkAnswer(secondNum));

let result = showResult(calculate(firstNum, secondNum));

function showResult(result) {
  if (Array.isArray(result)) {
    let output = `
        The sum of ${firstNum}+${secondNum} is: ${result[0]}
        The subtraction of ${firstNum}-${secondNum} is: ${result[1]}
        The multiplication of ${firstNum}*${secondNum} is: ${result[2]}
        The division of ${firstNum}/${secondNum} is: ${result[3]}
        `;
    alert(output);
  } else {
    let fixedResult = result.toFixed(3);
    let answeredNum = firstNum || secondNum;
    alert(`Square root of ${answeredNum}: ${fixedResult}`);
  }
}

function calculate(num1, num2) {
  if (isSingleValue(num1, num2)) {
    return Math.sqrt(num1) || Math.sqrt(num2);
  }

  let sum = +num1 + +num2;
  let subtraction = num1 - num2;
  let multiplication = num1 * num2;
  let division = num1 / num2;

  return [sum, subtraction, multiplication, division];
}

function checkAnswer(answer) {
  return !isNum(answer) || !checkNullAnswers() ? false : true;
}

function isNum(num) {
  return isNaN(num) || /^\s*$/.test(num) ? false : true;
}

function checkNullAnswers() {
  return firstNum === null && secondNum === null ? false : true;
}

function isSingleValue(num1, num2) {
  return num1 === null || num2 === null ? true : false;
}
