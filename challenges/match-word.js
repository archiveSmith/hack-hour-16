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
  const letters = /[a-z]/;
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



///// APPROACH
  // check for empty string
  // make an array of words
  // convert to lower case
  // split it at non [a-z] chars
  // init stack as empty arr
  // check if word arr length is uneven -> something doesnt have a pair, return false
  // check if last item in stack is === to reversed of current value,
    // if yes, pop it off the stack,
    // else add to stack

  if (str === '' ) return true;
  const wordArr = str.toLowerCase().split(/[^a-z]+/);   // this will split the array at all non a-z characters, only a-z's will be in the array (^ === not operator in regex
  if (wordArr.length % 2 === 1) return false;
  const stack = [];
  for (let i = 0; i < wordArr.length; i++) {
    const reversed = wordArr[i].split('').reverse().join('');

    if (stack[stack.length-1] === reversed) stack.pop();
    else stack.push(wordArr[i]);
  }

  return !stack.length;   // if there's something in the stack, it will evaluate to false, otherwise if nothing in stack, it will evaluate to true
