var generateBtn = document.querySelector("#generate");

// Sets up master array

// defines button variable to call later
var generateBtn = document.querySelector("#generate");

// Variable to print data to the Character element for user clarity
var charEl = document.querySelector("#charEl");

// Variable to print boolean result for special character selection
var spcCharEl = document.querySelector("#spcCharEl");

// Variable to print boolean result of lowercase selection
var lCaseEl = document.querySelector("#lCaseEl");

// Variable to print boolean result of uppercase selection
var uCaseEl = document.querySelector("#uCaseEl");

// Variable to print boolean Result of numberic character selection
var numCharEl = document.querySelector("#numCharEl");

function generatePassword() {
  //User Prompt: password length (8 - 126 characters)
  var pwLength = parseInt(
    prompt(
      "How many characters would you like your password to contain? Input must be between 8 and 128 characters."
    )
  );

  if (pwLength > 8 && pwLength < 128) {
    alert("Selected: " + pwLength + " characters.");
    charEl.textContent = "Password Length: " + pwLength;
    var specC = confirm(
      "Do you want the password to contain special characters (#$%@!) ?"
    );

    spcCharEl.textContent = "Special Characters: " + specC;

    var lcChar = confirm(
      "Do you want the password to contain lowercase letters?"
    );

    lCaseEl.textContent = "Lowercase: " + lcChar;

    var ucChar = confirm(
      "Do you want the password to contain uppercase letters?"
    );
    uCaseEl.textContent = "Uppercase: " + ucChar;

    var numChar = confirm("Do you want the password to contain numbers?");
    numCharEl.textContent = "Numbers: " + numChar;

    var pwSource = "";
    var password = "";

    if (specC) {
      pwSource += "!@#$%^&*.?";
    }
    if (lcChar) {
      pwSource += "abcdefghijklmnopqrstuvwxyz";
    }
    if (ucChar) {
      pwSource += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numChar) {
      pwSource += "1234567890";
    }
    console.log(pwSource);
    for (i = 0, n = pwSource.length; i < length; ++i) {
      password += pwSource.charAt(Math.floor(Math.random() * n));
    }
    return password;
  } else {
    alert(
      "Password must contain between 8 and 128 characters. Please click Generate and enter a valid number."
    );
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
