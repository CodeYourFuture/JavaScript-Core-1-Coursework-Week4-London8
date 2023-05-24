// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiplyBy100(number) {
  return number * 100;
}
let numbersMultipliedByOneHundred=numbers.map(multiplyBy100);; // complete this statement


let numbersMultipliedByOneHundred = numbers.map(function(number) {
  return number * 100;
});

let numbersMultipliedByOneHundred = numbers.map((number) => {
  return number * 100;
});

let numbersMultipliedByOneHundred = numbers.map((number) => number * 100);


console.log(numbersMultipliedByOneHundred);

/* EXPECTED RESULT

  [10, 20, 30, 40, 50]
*/
