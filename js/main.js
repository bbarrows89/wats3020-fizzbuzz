/* Code for FizzBuzz  */

let isInteger,
    maxNumber,
    fbResults,
    fbText;

isInteger = false;

while (!isInteger) {
  maxNumber = prompt("Please enter a maximum number for FizzBuzz! (use whole numbers)");
  maxNumber = parseInt(maxNumber);
  if (Number.isSafeInteger(maxNumber) && maxNumber > 0) {
    isInteger = true;
  }
}

// initialize empty array to store fizzbuzz results
fbResults = [];

// use a `for` loop to execute the `maxNumber` of times.
for (let i=1; i <= maxNumber; i++) {

  if (i % 15 == 0) {
    fbResults.push('FizzBuzz');
  } else if (i % 3 == 0) {
    fbResults.push('Fizz');
  } else if (i % 5 == 0) {
    fbResults.push('Buzz');
  } else {
    fbResults.push(i);
  }
}

fbText = '';

for (let result of fbResults){
  fbText = fbText + result + "\n";
}

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;
