"use strict";

/* 
  You are given a sentence contains a story.

  Current it says 

  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day."

  Change the story using .replace() so that it says 

  "I like cats. One night I went to the park and I saw 100000 cats. It was a brilliant night."
*/
var story = "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day.";
var result = story.replace(/dogs/g, "cats").replace(10, 100000).replace("great", "brilliant").replace(/day/g, "night");
console.log(result);
/* EXPECTED OUTPUT */

var util = require("util");

function test(test_name, actual, expected) {
  console.log("");
  var status;

  if (actual === expected) {
    status = "PASSED";
  } else {
    status = "FAILED: \nexpected: ".concat(util.inspect(expected), " \nbut your function returned: ").concat(util.inspect(actual));
  }

  console.log("".concat(test_name, ": ").concat(status));
}

test("1. Original story has not been changed", story, "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day.");
test("2. The result of the replace is correct", result, "I like cats. One night I went to the park and I saw 100000 cats. It was a brilliant night.");