// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lowercaseLetters ="abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers ="0123456789";
var specialCharacters ="!@#$%^&*(){}:<>?~`=+[]-_,./|";


// Function used to determin the length of the password
function howLongPasswordLength(){
  passLength = prompt("Please choose how long you want your password to be bewtween 8 and 128 characters: ");
  if (passLength<8){
    alert("Very sorry but the password length needs to be between 8 and 128 characters");
    howLongPasswordLength();
  } else if (passLength>128){
    alert("Very sorry but the password length needs to be between 8 and 128 characters");
    howLongPasswordLength();
  } else if (isNaN(passLength)){
    alert("Very sorry but the password length needs to be between 8 and 128 characters");
    howLongPasswordLength();
  }else {
    alert("Great thats Fantastic!!! In the coming screens we will decide which type of characters that you want to include");
  }
  return passLength;
}
// Function used to see if the user wants to include big letters
function includeUppercase(){
  upCaseCheck= prompt("Do you want to include uppercase letters? \n (Yes or No)");
  upCaseCheck= upCaseCheck.toLowerCase();
  if (upCaseCheck === null || upCaseCheck ===""){
    alert("Please answer Yes or No");
    includeUppercase();
  }else if (upCaseCheck=== "yes" || upCaseCheck === "y"){
    upCaseCheck=true;
    return upCaseCheck;
  }else if (upCaseCheck=== "no" || upCaseCheck === "n"){
    upCaseCheck=false;
  }else{
    alert("Please answer Yes or No");
    includeUppercase();
  }
  return upCaseCheck;
}
// Function used to see if the user wants to include numbers
function includeNumber(){
  numCheck = prompt("Do you want to include numbers in you password? \n(Yes or No)");
  numCheck = numCheck.toLowerCase();
  if (numCheck === null || numCheck=== ""){
    alert("Please answer Yes or No");
    includeNumber();
  }else if (numCheck=== "yes" || numCheck === "y"){
    numCheck = true;
    return numCheck;
  }else if (numCheck=== "no" || numCheck === "n"){
    numCheck = false;
    return numCheck;
  }else{
    alert("Please answer Yes or No");
    includeNumber();
  }
  return numCheck;
}
// Function to seee if the user wants to use special characters
function includeSpecialCharacters (){
  spCharCheck = prompt(" Do you want to  include special characters in to your password? \n(Yes or No)");
  spCharCheck = spCharCheck.toLowerCase();
  if (spCharCheck === null || spCharCheck ===""){
    alert("Please answer Yes or No");
    includeSpecialCharacters();
  }else if (spCharCheck=== "yes" || spCharCheck === "y"){
    spCharCheck=true;
    return spCharCheck;
  }else if (spCharCheck=== "no" || spCharCheck === "n"){
    spCharCheck=false;
  }else{
    alert("Please answer Yes or No");
    includeSpecialCharacters();
  }
  return spCharCheck;
}
// Function to put it all togther
// Generate the password
function generatePassword() {
  howLongPasswordLength();
  console.log(passLength);
  includeUppercase();
  console.log(upCaseCheck);
  includeNumber();
  console.log(numCheck);
  includeSpecialCharacters();
  console.log(spCharCheck);
  
  var lowcase = lowercaseLetters;
  

  var pass = '';
  if (upCaseCheck && numCheck && spCharCheck){
    lowcase+= uppercaseLetters + numbers + specialCharacters;
  }else if (upCaseCheck && numCheck){
    lowcase+= uppercaseLetters + numbers;
  }else if (numCheck && spCharCheck){
    lowcase+= numbers + specialCharacters;
  }else if (upCaseCheck && spCharCheck){
    lowcase+= uppercaseLetters + specialCharacters;
  }else if (upCaseCheck){
    lowcase+= uppercaseLetters;
  }else if (numCheck){
    lowcase+= numbers;
  }else if (spCharCheck){
    lowcase+= specialCharacters;
  }else{
    lowcase === lowercaseLetters;
  }
for (var i = 0; i < passLength; i++){
  pass += lowcase.charAt(Math.floor(Math.random()* lowcase.length));
}
return pass;
}
// Write password to the #password input
function writePassword() {
  var pass1 = "";
  var pass1 = generatePassword();
  


  passwordText.textContent = pass1;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);