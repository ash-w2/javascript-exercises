const sumAll = function (lowNumber, highNumber) {
  if (!Number.isInteger(lowNumber) || !Number.isInteger(highNumber))
    return "ERROR";
  if (lowNumber < 0 || highNumber < 0) return "ERROR";

    if (lowNumber > highNumber) {
      const temp = lowNumber;
      lowNumber = highNumber;
      highNumber = temp;
    }

  //this needs to be declared outside for loop!!
  let finalSum = 0;
  for (let i = 0; i <= highNumber; i++) {
    finalSum += i;
  }
  //issue was returning this inside for loop!!
  return finalSum;
};
sumAll(123, 1);

// Do not edit below this line
module.exports = sumAll;
