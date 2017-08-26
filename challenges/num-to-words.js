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

const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tensList = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function numToWords(num) {
  let remainder = num;
  let result = '';
  while (remainder) {
    const thousands = Math.floor(remainder / 1000);
    if (thousands >= 1) {
      remainder -= (1000 * thousands);
      result += `${ones[thousands]}thousands`;
    }
    const hundreds = Math.floor(remainder / 100);
    if (hundreds >= 1) {
      remainder -= (100 * hundreds);
      result += `${ones[hundreds]}hundred`;
    }
    const tens = Math.floor(remainder / 10);
    if (tens >= 2) {
      remainder -= tens * 10;
      result += tensList[tens - 1];
    }
    if (tens === 1) {
      const whichTeen = remainder % 10;
      result += teens[whichTeen];
      remainder -= remainder;
    }
    if (remainder) result += ones[remainder];
    remainder -= remainder
  }
  return result;
}

module.exports = numToWords;
