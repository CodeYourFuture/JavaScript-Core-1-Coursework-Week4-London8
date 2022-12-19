/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

We have supplied functions which will help you with some of these checks.

Example 1:
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/

// function validatePasswords(passwords) {
// //input = array of passwords
// //let index = passwords.findIndex((x) => x === undefined))

// // let testMap = passwords.map(el => {
// //   let newPasswords = passwords.slice(0, passwords.indexof(el));
// //   return newPasswords.includes(el)
// // })
// // let newPasswords = passwords.slice(0, passwords.indexof(el))

// return (passwords.map(el => {
//  let newPasswords = passwords.slice(0, passwords.indexof(el));
//   return ( newPasswords.includes(el) && el.length >= 5 &&
//     containsLowercaseLetter(el) && containsUppercaseLetter(el) && containsNumber(el) && containsSymbol(el))
// }));
// // To be valid, a password must:
// // - Have at least 5 characters.
// // - Have at least one English uppercase letter (A-Z)
// // - Have at least one English lowercase letter (a-z)
// // - Have at least one number (0-9)
// // - Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
// // - Must not be any previous password in the passwords array.

// //returns an array of booleans
// }

function validatePasswords(passwords) {
  return passwords.map((el, index) => {
    console.log(index);
    let newPasswords = passwords.slice(0, index);
    console.log(newPasswords);
    return (
      !newPasswords.includes(el) &&
      el.length >= 5 &&
      containsLowercaseLetter(el) &&
      containsUppercaseLetter(el) &&
      containsNumber(el) &&
      containsSymbol(el)
    );
  });
}

// Returns true if string contains at least one uppercase letter.
function containsUppercaseLetter(string) {
  return /[A-Z]/.test(string);
}

// Returns true if string contains at least one lowercase letter.
function containsLowercaseLetter(string) {
  return /[a-z]/.test(string);
}

// Returns true if string contains at least one number.
function containsNumber(string) {
  return /[0-9]/.test(string);
}

// Returns true if string contains at least one symbol.
function containsSymbol(string) {
  return /[!#$%.*&]/.test(string);
}

/* ======= TESTS - DO NOT MODIFY ===== */

test("Example 1", () => {
  expect(validatePasswords(["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"])).toEqual([
    false,
    false,
    true,
    false,
    false,
  ]);
});

test("Example 2", () => {
  expect(validatePasswords(["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"])).toEqual([
    true,
    true,
    false,
    false,
    false,
  ]);
});
