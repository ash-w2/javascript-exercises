const leapYears = function (year) {
  let leapYear = Boolean(true);

  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    console.log("Leap Year");
    return leapYear;
  } else if (year % 100 === 0 || (year % 4 != 0 && year % 400 != 0)) {
    console.log("Not a Leap Year");
    return (leapYear = false);
  }
};

leapYears(2000);

// Do not edit below this line
module.exports = leapYears;
