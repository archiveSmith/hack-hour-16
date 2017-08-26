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

function numToWords(num) {
    if(num === 0){return "Zero"}
    let converter = {
      1: 'One', 2: 'Two',
      3: 'Three', 4: 'Four', 5: 'Five',
      6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine',
      10: 'Ten', 11: 'Eleven', 12: 'Twelve', 13: 'Thirteen',
      14: 'Fourteen', 15: 'Fifteen', 16: 'Sixteen', 17: 'Seventeen',
      18: 'Eighteen', 19: 'Nineteen', 20: 'Twenty', 30: 'Thirty', 40: 'Fourty',
      50: 'Fifty', 60: 'Sixty', 70: 'Seventy', 80: 'Eighty', 90: 'Ninety'
    }
    let nums = num.toString().split("")
    let str = ''
    let string = []
    for(let i = nums.length-2; i >= 0; i--){
      str += converter[nums[i]]
      if(parseInt(nums[i]+nums[i+1]) < 20 && string.length < 2)
          {string.unshift(converter[nums[i]+nums[i+1]])}
      else{
        string.unshift(converter[parseInt(nums[i]+ "0")])
        string.push(converter[parseInt(nums[i+1])])
      }
  //     if(string.length === 1){
  //       string.push(converter[(parseInt(nums[i] + nums)+10)])
  //     }
  //     else{string.push(converter[nums[i]])}
    }
    console.log(str)
    console.log(string)
    return converter[num]
  }
  console.log(numToWords(2483579431))

module.exports = numToWords;
