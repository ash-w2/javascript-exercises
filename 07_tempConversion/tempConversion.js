const convertToCelsius = function (fahrenheit) {
  fahrenheit = (celsius = ((fahrenheit - 32) * 5) / 9);
  return Math.round(fahrenheit * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  celsius = (fahrenheit = (celsius * 9) / 5 + 32);
  return Math.round(celsius * 10) / 10;
};

console.log(convertToCelsius(68)); // fahrenheit to celsius, should return 0

console.log(convertToFahrenheit(73.2)); // celsius to fahrenheit, should return 32

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
