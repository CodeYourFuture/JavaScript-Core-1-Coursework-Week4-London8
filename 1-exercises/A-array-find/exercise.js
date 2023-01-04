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

let longNameThatStartsWithA = findLongNameThatStartsWithA(names);

function findLongNameThatStartsWithA(names) {
  let longName = names.find((name) => name.length > 7 && name.startsWith("A"));
  return longName;
}

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
