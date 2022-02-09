const array = [4, 1, 0, 2, 0, 8, 0, 8, 6, 0, 4, 3, 5, 6, 2, 0];

// Test 1
const everyNumber = array.map(function (everyNumber) {
  return everyNumber * 2;
});

// Test 2
let everyOtherNumber = array.filter((element, index) => {
  return index % 2 === 1;
});
console.log(everyOtherNumber);

// Test 3
let doubledEveryOther = array.map(function (doubledEveryOther) {
  return doubledEveryOther * 2;
});


const cardNumber = 4102080860435620
const strArray = Array.from(String(cardNumber), Number);
const arrayLength = strArray.length;

function creditCardNumber() {
  const mutatedCardNumber = [];
  for (let i = 0; i < arrayLength; i++) {
    const positionInArray = i + 1;
    let currentDigit = strArray[i];

    if ((arrayLength - positionInArray) % 2 === 0) {
      if ((currentDigit * 2) > 9) {
        const currentDigitArray = Array.from(String(currentDigit * 2), Number);
        const newDigit = currentDigitArray[0] + currentDigitArray[1];
        mutatedCardNumber.push(newDigit);
      } else {
        mutatedCardNumber.push(currentDigit * 2);
      }
    } else {
      mutatedCardNumber.push(currentDigit);
    }
  }
  console.log(mutatedCardNumber.join(""))
  return mutatedCardNumber.join("");
}

creditCardNumber();


// step 2



if (creditCardNumber [0] === 3 && [1] === 4||7) { 
  alert("You have American Express");
} else if { (creditCardNumber[0] === 6||5||4) 
  alert("You have a Discover/Mastercard/Visa card");
} 

// else if  
 // (creditCardNumber[0] === 5) {
  //alert("You have Mastercard");
//} else { 
 // (creditCardNumber[0]=== 4)
 // alert("You have Visa Card");
//}





let americanExp = [34,37]
let visa = [4];
let masterCard = [5];
let discoverCard = [6];