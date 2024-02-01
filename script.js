const specialLetters = "!@#$%^&*()_-+={}[]\\;:'<>,./?";
const numericCode = "0123456789";
const lowerCasedLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCasedLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");

generateBtn.addEventListener("click", generatePassword);


function generatePassword() {
  const options = getPassword();
  // console.log(options);
  if (!options) return;

  const { length, hasSpecialLetters, hasNumericCode, hasUpperCasedLetters, hasLowerCasedLetters } = options;

  const possibleLetters = getSelected(hasSpecialLetters, hasNumericCode, hasUpperCasedLetters, hasLowerCasedLetters);
  console.log(possibleLetters);

  if (possibleLetters.length === 0) {
    alert("Select at least one character");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += getRandom(possibleLetters);
  } 
  console.log(password);
  passwordText.value = password;
}

  function getPassword() {
  const length = parseInt(prompt("Set your password length must between 8 and 128"));

  if (Number.isNaN(length)) {
    alert("Password length must be provided as a number");
    return null;
  }

  if (length < 8 || length > 128) {
    alert("Password must have at least 8 to 128 characters");
    return null;
  }

  const hasSpecialLetters = confirm("Click OK to confirm including special characters");
  const hasNumericCode = confirm("Click OK to confirm including numeric characters");
  const hasLowerCasedLetters = confirm("Click OK to confirm including lower cased characters");
  const hasUpperCasedLetters = confirm("Click OK to confirm including upper cased characters");

  if (!hasSpecialLetters && !hasNumericCode && !hasLowerCasedLetters && !hasUpperCasedLetters) {
    alert("Must select at least one character type");
    return null;
  }

  return {
    length,
    hasSpecialLetters,
    hasNumericCode,
    hasLowerCasedLetters,
    hasUpperCasedLetters
  };
}

function getSelected(hasSpecial, hasNumeric, hasUpper, hasLower) {

  let selectedLetters = "";
  if (hasSpecial) selectedLetters += specialLetters;

  if (hasNumeric) selectedLetters += numericCode;

  if (hasUpper) selectedLetters += upperCasedLetters;

  if (hasLower) selectedLetters += lowerCasedLetters;

  return selectedLetters;
}

function getRandom(Letters) {
  const randomIndex = Math.floor(Math.random() * Letters.length);
  return Letters.charAt(randomIndex);
}