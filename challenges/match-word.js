// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  // filter out input to only lower case words

  // loop through all chars in input, if they are a letter, build up the word, if they are not a letter, push the word to the array and build up a new word

    // go through array and check if strings 'closed'
    // using a while loop, go through array to check for matches
    // check at counter, then at counter +1 for match
      // if a match is found, pop them out of the array

  // when counter reaches end of the array, check the length of the array
    // if length === 0, return true
    // if length !== 0, return false

  let wordsArr = [];
  str = str.toLowerCase().split('');
  let letters = /[a-z]/;
  let word = '';
  let counter = 0;
 
  for (let i = 0; i < str.length; i++) {
    if (letters.test(str[i]) === false) {
      if (word.length > 0) wordsArr.push(word);
      word = '';
    }
    else {
      word+= str[i];
      if (i === str.length-1 && word.length > 0) wordsArr.push(word);
    }
  }

  while (counter < wordsArr.length-1) {
    let reversed = wordsArr[counter+1].split('').reverse().join('');
    if (wordsArr[counter] === reversed) {
      wordsArr.splice(counter, 2);
      counter = 0;
    }
    else counter++;
  }

  return (wordsArr.length === 0) ? true : false; 
}

// TESTING
// console.log('true:', matchWord('__END_DNE-----') === true);
// console.log('true:', matchWord('IF()()fi[]') === true);
// console.log('true:', matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw') === true);
// console.log('false:', matchWord('__ENDDNE__') === true);
// console.log('false:', matchWord('for__if__rof__fi') === true);

module.exports = matchWord;