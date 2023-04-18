const removeFromArray = function (array, ...args) {
  const newArray = [];

  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

//removeFromArray([1, 2, 3, 4], 7, "tacos");
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));

// Do not edit below this line
module.exports = removeFromArray;
