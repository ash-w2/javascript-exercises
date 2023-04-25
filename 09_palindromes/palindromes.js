const palindromes = function (str) {
  str = str.toLowerCase().replace(/[!., ]/g, "");
  const reverseStr = str.split("").reverse("").join("").replace(/[!., ]/g, "");

  if (str == reverseStr) {
    return true;
  } else {
    return false;
  }
};

console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line
module.exports = palindromes;
