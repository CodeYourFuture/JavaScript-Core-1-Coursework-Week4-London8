/*
  Array methods - .includes()
  ---------------------------
  Complete the function below to check if a country is in the UK
*/

let ukNations = ["Scotland", "Wales", "England", "Northern Ireland"];

function isInUK(country) {
  if (ukNations.includes(country)) return true;
  else return false;
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(isInUK("France"));
console.log(isInUK("Republic of Ireland"));
console.log(isInUK("England"));

/* 
  EXPECTED RESULT
  ---------------
  false
  false
  true
*/
