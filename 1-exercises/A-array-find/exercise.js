/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

let names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

function findLongNameThatStartsWithA(array) {
  const findedWords = array.find((word) => word.length > 7 && word[0] === "A");
  return findedWords;
}

console.log(findLongNameThatStartsWithA(names));

/* EXPECTED OUTPUT */
// "Alexandra"
