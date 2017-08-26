// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */


const values =[
  90, 'Ninety',
  80, 'Eighty',
  70, 'Seventy',
  60, 'Sixty',
  50, 'Fifty',
  40, 'Forty',
  30, 'Thirty',
  20, 'Twenty',
  19, 'Nineteen',
  18, 'Eighteen',
  17, 'Seventry',
  16, 'Sixteen',
  15, 'Fifteen',
  14, 'Fourteen',
  13, 'Thirteen',
  12, 'Twelve',
  11, 'Eleven',
  10, 'Ten',
  9, 'Nine',
  8, 'Eight',
  7, 'Seven',
  6, 'Six',
  5, 'Five',
  4, 'Four',
  3, 'Three',
  2, 'Two',
  1, 'One',
  0, 'Zero',   
]

const placeValue = [
  1000000000000000, 'Quadrillion',
  1000000000000, 'Trillion',
  1000000000, 'Billion',
  1000000, 'Million',
  1000, 'Thousand',
  100, 'Hundred',
]

// divide by billions, get number from remainder, then repeat with remainder for next smallest place value
function numToWords(num) {

  let value = num;
  let numString = '';

  // get number
  for (let i = 0; i < values.length; i += 2) {
    getNumber(values[i], values[i+1]);
  }

  // get place value
  for (let i = 0; i < placeValue.length; i += 2) {
    getPlaceValue(placeValue[i], placeValue[i+1]);
  }

  return numString;

  function getPlaceValue(placeValueNum, placeValueString) {
    if (value / placeValueNum >= 1) {
      numString += placeValueString;
      value = value % placeValueNum;
    }
  }

  function getNumber(valueNum, valueString) {
    if (value >= valueNum && value > 0) {
      let stringToAdd = Math.floor(value / valueNum);
      numString += valueString;
      value = value % valueNum;
    }
  }
}

console.log(numToWords(92120000000000000));
// 92,120,000,000,000,000
// numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
module.exports = numToWords;


  // let numString = '';
  // let numToAdd; 
  // let val = num;
  
  // if (val / placeValue[0] > 1) {
  //   numString += placeValue[1];  
  // }

  // numToAdd = Math.floor(val / placeValue[0]);
  // numString += numToAdd;

  // console.log(numString);
  // return val;



  ///////// Approach ////////////
  // split into chunks of three, translate into placeValue and number
    // make array of three chunked nums, for leading numbers, may have to add 1 or 2 zeroes to front
  // parse arrays of threes into strings of numbers, WITHOUT place values
    // go through array of single digits and double digits
      // ALL TRIPLE digits will be used for place value