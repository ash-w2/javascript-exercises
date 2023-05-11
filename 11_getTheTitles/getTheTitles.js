const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = function (books) {
  //return title.bookName;
  return books.map((item) => item.title);
};

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;

//find item(title) of each element in an array(books)
//return the items into a new array
