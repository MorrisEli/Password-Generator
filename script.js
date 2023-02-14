//1. Prompt the user for the password criteria
  //a.  password length between 8 < 128 characters
  //b.  Lowercase, Upperscase, Numbers, Special Characters.
//2. Validate the input.
//3. Generate password based on criteria
//4. Displpay password to the page.

// Assignment code here
// Get references to the #generate element
var characterlength = 8;
var choiceArr = []

var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// based on prompts
function generatePassword() {
  var password = "";
  for(var i =0; i < characterlength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}


function getPrompts(){
  choiceArr = [];

  characterlength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters)"));

  if(isNaN(characterlength) || characterlength < 8 || characterlength > 128){
    alert("Character length has to be a number, from 8 - 128 digits. Please try again.");
    return false;
  }

  if (confirm("Would you like lower case letters in your password?")) {
  choiceArr = choiceArr.concat(lowerCaseArr); 
  }

  if (confirm("Would you like upper case letters in your password?")) {
  choiceArr = choiceArr.concat(upperCaseArr); 
  }

  if (confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharArr); 
    }

  if (confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr); 
    }

    return true;
}