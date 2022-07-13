// Extend the Number.prototype with a generic rounding function
Number.prototype.round = function (n) {
  const d = Math.pow(10, n);
  return Math.round((this + Number.EPSILON) * d) / d;
};

// Main function
calculator();

// Loop through the application until the user decides to stop
function calculator() {
  let isCanceled;

  do {
    let numbers = askAndGetNumbers();
    let output = calculateAndGetOutput(numbers);
    alert(output);
    isCanceled = !confirm("Do you want to calculate again?");
  } while (!isCanceled);
}

// Asks for a number until the user cancels
// Returns the numbers in an array
// If there is an error it shows an alert
function askAndGetNumbers() {
  let answer;
  let numbers = [];

  do {
    answer = prompt("Enter a number", "");
    if (isNumeric(answer)) {
      numbers.push(+answer);
    } else {
      showError(answer, numbers.length);
    }
  } while (!isOver(answer, numbers.length));

  return numbers;
}

// Check if the user has canceled and there is at least one item in the array
function isOver(input, arrLength) {
  return input === null && arrLength !== 0 ? true : false;
}

// When the user has not entered a number
// If there is no items in the array, show an alert
// If it wasn't a number, show an alert
// Ignore null because it means the user has canceled
function showError(num, arrLength) {
  if (num === null && arrLength === 0) {
    alert("At least, you must enter one number");
  } else if (num !== null) {
    alert("It's not a number");
  }
}

// If the array contains only one number, calculate its square root
// If has more than one, adds, subtracts, multiplies, and divides them
// Return the results in a string
function calculateAndGetOutput(nums) {
  let output;

  if (nums.length === 1) {
    let squareRootFixed = Math.sqrt(nums[0]).round(3);
    output = `The result square root is ${squareRootFixed}`;
  } else {
    let additionFixed = nums
      .reduce((addition, current) => addition + current)
      .round(3);
    let subtractionFixed = nums
      .reduce((subtraction, current) => subtraction - current)
      .round(3);
    let multiplicationFixed = nums
      .reduce((multiplication, current) => multiplication * current)
      .round(3);
    let divisionFixed = nums
      .reduce((division, current) => division / current)
      .round(3);

    output = `
            The result of addition is ${additionFixed}
            The result of subtraction is ${subtractionFixed}
            The result of multiplication is ${multiplicationFixed}
            The result of division is ${divisionFixed}
        `;
  }
  return output;
}

// Check if it is not a number because isNaN converts empty and null strings to 0
function isNumeric(num) {
  return isNaN(num) || /^\s*$/.test(num) || num === null ? false : true;
}
