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

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");


  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecialChars){
    alert("please select at least one character type.");
    return "";
  }


  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+{}[]|;:,.<>?";

  var allChars = "";
  if (includeLowercase) allChars += lowercaseChars;
  if (includeUppercase) allChars += uppercaseChars;
  if (includeNumeric) allChars += numericChars;
  if (includeSpecialChars) allChars += specialChars;


  var password = "";
  for (var i = 0; i < length; i++){
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;

}