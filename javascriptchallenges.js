function celToFar (celTemp) {
  var farTemp;
  farTemp = celTemp*(9/5)+32;
  return celTemp + " is " + farTemp;
}

function farToCel (farTemp) {
  var celTemp = (farTemp-32) * (5/9);
  return farTemp + ' is ' + celTemp;
}

function subtract(a, b) {
  return a-b;
}

function multiply(a, b) {
  return a*b;
}
function divide(a, b) {
  return a/b;
}
function sayName() {
  var name = prompt("Enter your name:");
  return alert('Hello ' + name + '!');
}


function reverseCharAt (workingString, position) {
     var length = workingString.length;
     return workingString.charAt((length-1) - position);
}

function supply(age, amountDay) {
  var lifeTotal = (amountDay*365*age);
  return console.log("The amount eaten in a lifetime is: " + lifeTotal);
}

function userCheck(userId) {
  var userCrit = !userId.includes("!") && !userId.includes("#") && !userId.includes("$") && userId.length >= 6;
  return userCrit;
}

function checkPass(userPass) {
  var passCrit = (userPass.includes("!") || userPass.includes("#") || userPass.includes("$")) && userPass.length >= 6 && !(userPass === "password") && hasNumber(userPass) && oneLowerUpper(userPass);
  return passCrit;
}

function hasNumber(userPass) {
  var hasDigit;
  var hasDigitAcc = 0;
  for(var i = 0; i <=9; i++)
  {
    hasDigit = userPass.includes(i);
    hasDigitAcc += hasDigit;
  }

  if(hasDigitAcc > 0)
    return true;
  else {
    return false;
  }

}

function oneLowerUpper(userPass) {
  var userPassUpper = userPass.toUpperCase();
  var userPassLower = userPass.toLowerCase();

                                      //jenN  JENN//
  return userPass < userPassLower && userPass > userPassUpper;;
}


function sameCheck(userId, userPass){
  return !(userId === userPass);
}
function userCred() {
  var userId = prompt("Enter a user name: ");
  var userPass = prompt("Enter a user password: ");

  var checkFinal = sameCheck(userId, userPass) && userCheck(userId) && checkPass(userPass);

  if(checkFinal == true)
  {
    alert("Your user name and password pass the criteria!");
  }
  else {
    alert("Your user name and password fail the criteria!");
    userCred();
  }
}
