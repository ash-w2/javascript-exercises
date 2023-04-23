const add = function (number1, number2) {
  return number1 + number2;
};
const subtract = function (number1, number2) {
  return number1 - number2;
};

const sum = function (sumArray) {
  return sumArray.reduce((a, b) => a + b, 0);
};

const multiply = function (multiplyArray) {
  return multiplyArray.reduce((a, b) => a * b);
};

const power = function (number1, number2) {
  return Math.pow(number1, number2);
};

const factorial = function (number) {
  if (number < 0) return -1;
  else if (number == 0) return 1;
  else {
    return number * factorial(number - 1);
  }
};

//outputs
console.log(add(5, 5));
console.log(subtract(10, 4));
console.log(sum([1, 3, 5, 7, 9]));
console.log(multiply([2, 4]));
console.log(power(4, 3));
console.log(factorial(10));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
