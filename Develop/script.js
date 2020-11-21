// Assignment Code

// Defined Variables

// *Password character string
var pwAlphaLower = "abcdefghijklmnopqrstuvwxyz";
var pwAlphaSourceLower = pwAlphaLower.split("");

var pwAlphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pwAlphaSourceUpper = pwAlphaUpper.split("");

var pwNum = "1234567890";
var pwNumSource = pwNum.split("");

var pwSpec = "!@#$%^&*.?";
var pwSpecSource = pwSpec.split("");

var combineArray = [];

// *defines button variable to call later
var generateBtn = document.querySelector("#generate");

// *Variable to print data to the Character element for user clarity
var charEl = document.querySelector("#charEl");

// *Variable to print boolean result for special character selection
var spcCharEl = document.querySelector("#spcCharEl");

// *Variable to print boolean result of lowercase selection
var lCaseEl = document.querySelector("#lcaseEl");

// *Variable to print boolean result of uppercase selection
var uCaseEl = document.querySelector("#uCaseEl");

// *Variable to print boolean Result of numberic character selection
var numCharEl = document.querySelector("#numCharEl");

function generatePassword() {
  //User Prompt: password length (8 - 126 characters)
  var pwLength = prompt(
    "How many characters would you like your password to contain?"
  );
  console.log("AM WORKING.");
  if (pwLength < 8 || pwLength > 126) {
    alert(
      "Password must contain between 8 and 126 characters. Please enter a valid number."
    );
    passwordText.value = ""
    return pwLength;
  } else {
    alert("Selected: " + pwLength + " characters.");
  }
  console.log(pwLength);
  console.log("AM STILL WORKING");
  var specC = confirm(
    "Do you want the password to contain special characters (#$%@!) ?"
  );
  console.log("STILL WORKING");
  var lcChar = confirm(
    "Do you want the password to contain lowercase letters?"
  );
  var ucChar = confirm(
    "Do you want the password to contain uppercase letters?"
  );
  var numChar = confirm("Do you want the password to contain numbers?");
  console.log("WORKING AGAIN");

  if (specC) {
    combineArray.concat(pwAlphaSourceLower, pwSpecSource);
   } else if (lcChar) {
     combineArray.concat(pwAlphaSourceLower)
   } else if (ucChar) {
     combineArray.concat(pwAlphaSourceLower, pwAlphaSourceUpper)
   } else if (numChar)
    
  
  
  // Math.random function to generate a password from the string, with if/else statements to specify the parameters for that string.
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
