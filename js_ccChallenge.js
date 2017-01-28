function getCC() {
  var ccNumber = prompt("Enter a 16 digit credit card number: ");

  if (ccNumber.length < 16) {
    ccNumber = prompt("Enter a 16 digit credit card number: ");
  }
  console.log(ccNumber);
  return dropSave(ccNumber);
}

function dropSave(ccNumber) {
  var ccLastNum = parseInt(ccNumber.charAt(ccNumber.length-1));
  var ccCut = ccNumber.slice(0,15);
  var ccArray = [ccCut, ccLastNum];
  console.log(ccArray);
  console.log(ccLastNum);
  return reverseMath(ccArray);
}

function reverseMath(ccArray) {
    var ccFinalString = ccArray[0];
    var ccFinalNum = ccFinalString.split("").map(Number);
    var ccFinalAcc = 0;
    var ccLastNum = ccArray[1];
    console.log(ccFinalNum)

    for(var i = 0; i <= 14; i += 2)
    {

      ccFinalNum[14-i] = (ccFinalNum[14 - i])*2


      if(ccFinalNum[14-i] > 9)
      {
        console.log(ccFinalNum);
        ccFinalNum[14-i] = ccFinalNum[14-i] - 9;

      }

    }
    console.log(ccFinalNum);

    for(var k = 0; k <=14; k++)
    {
        ccFinalAcc += ccFinalNum[k]
    }
    console.log(ccFinalAcc);
    console.log(ccFinalAcc%10);
    return ccFinalAcc%10 == ccLastNum;
}

function ccChecker() {

  console.log("The credit card number is: " + getCC());

}
