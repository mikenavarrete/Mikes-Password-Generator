// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var length = prompt("How long do you want the password? (between 8 and 128 characters):");

  if(isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a length between 8 and 128.");
    return "";
  } 

  
}