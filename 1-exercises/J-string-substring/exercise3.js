/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";
let result3 = statement.substring(0, 4);
let result2 = statement.substring(8, 25);
let result =  result3 +result2

console.log(result);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
