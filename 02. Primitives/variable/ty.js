/**
 * JavaScript Invalid Variable Name Examples
 * ------------------------------------------
 * A valid variable name in JavaScript must:
 *  1. Not start with a number
 *  2. Not contain spaces
 *  3. Not include special characters (except _ and $)
 */

// ❌ Cannot start with a number
//let 2cool = "nope"; // SyntaxError

// ❌ Cannot contain spaces
//let my var = 5; // SyntaxError

// ❌ Cannot use special characters except _ and $
//let my-name = "no"; // SyntaxError

//Declared variables
let name = "Umer";
console.log(name); // Output: Umer

//Assign a variable
let game = "Call of Duty";
game = "Pubg";
console.log(game); // Output: Pubg

//const variables
const code = "JavaScript";
console.log(code); // Output: JavaScript
// 1. Create variable name (name) & store your name.
// 2. Create variable name (whatDoYouWannaBecomeInYourLife) & store "programmer"
// 3. Create variable name (gender) & store your gender.
// 4. Create variable name (twitterHandle) & store your twitter handle.
// 5. Finally log all variables to the console.

let firstName = "Umer Shaikh";
let WhatDoYouWannaBecomeInYourLife = "Fullstack Developer";
let gender = "Male";
let twitterHandle = "@UmerShaikhDev";
let thisIsFirst = "Value";
let thisIsSecond = "Value2";

console.log(firstName);
console.log(WhatDoYouWannaBecomeInYourLife);
console.log(gender);
console.log(twitterHandle);
console.log("thisIsFirst:", thisIsFirst, "and thisIsSecond:", thisIsSecond); // This will not work as cosole is misspelled
