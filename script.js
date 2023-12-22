// list of characters to b included in pw
var hasSpecialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "}",
  "[",
  "\\",
  ";",
  ":",
  "'",
  "",
  "<",
  ">",
  "?",
  ",",
  ".",
  "/",

]
var hasNumericCharacters = [
"0",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",


]
let hasLowerCasedCharacters = [
 "a", "b", "c", "d",
 "e", "f", "g", "h",
 "i", "j", "k", "l",
 "m", "n", "o", "p",
 "q", "r", "s", "t",
 "u", "v", "w", "x",
 "y", "z",

]
let hasUpperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L", "M", "N", "O", "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",

]
function generatePassword() { 
let options = generatePasswordOptions();
let results = []
let possible = []
let guaranteedCharacters = [];
if(!options) return null; 
if(options.hasSpecialCharacters){
  possibleCharacters = possible.concat(hasSpecialCharacters)
  guaranteedCharacters.push(getRandom(hasSpecialCharacters));
}
if(options.hasNumericCharacters){
  possibleCharacters = possible.concat(hasNumericCharacters)
  guaranteedCharacters.push(getRandom(hasNumericCharacters));
}

if(options.hasUpperCasedCharacters){
  possibleCharacters = possible.concat(hasUpperCasedCharacters)
  guaranteedCharacters.push(getRandom(hasUpperCasedCharacters));
}
if(options.hasLowerCasedCharacters){
  possibleCharacters = possible.concat(hasLowerCasedCharacters)
  guaranteedCharacters.push(getRandom(hasLowerCasedCharacters));
}
for(var index = 0; index <options.length; index++){
  var possibleCharacters = getRandom(possibleCharacters);

  results.push(possibleCharacters);

}

for(let index = 0; index <guaranteedCharacters.length; index++){
  results[index] = guaranteedCharacters[index];
}

return results.join("")
}
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random()* arr.length);
  var randElement = arr[randomIndex];
return randElement;

}

function generatePasswordOptions() {
var length = parseInt(prompt("How many characters would you like your password to contain"));
if (Number.isNaN(length)) {
alert("Password length must be provided as a number")
return null;
}

if(length < 8) {
alert("Password must be at least 8 characters long")
return null;
}
if(length > 128) {
  alert("Password length must be less than 129 characters")
  return null;
}

var hasSpecialCharacters = confirm(
  "Click OK to confirm including special characters"
)
var hasNumericCharacters = confirm(
  "Click OK to confirm including numeric characters"
)
var hasLowerCasedCharacters = confirm(
  "Click OK to confirm including lower cased characters"
)
var hasUpperCasedCharacters = confirm(
  "Click OK to confirm including upper cased characters"
)
if(hasSpecialCharacters === false &&
  hasLowerCasedCharacters === false &&
  hasNumericCharacters === false &&
  hasUpperCasedCharacters === false) {
alert("Must select at lease one character type");
return null;
  }

var passwordOptions = {
  length: length,
  hasLowerCasedCharacters: hasLowerCasedCharacters,
  hasNumericCharacters: hasNumericCharacters,
  hasUpperCasedCharacters: hasUpperCasedCharacters,
  hasSpecialCharacters: hasSpecialCharacters
}
return passwordOptions;
}
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
