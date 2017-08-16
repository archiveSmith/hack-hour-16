// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  let arr = str.toLowerCase().split('');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let holder = [];
  let filteredArr = arr.map((char) => {
    if (alphabet.indexOf(char) === -1) char = '!';
    return char;
  });
  filteredArr = filteredArr.join('').split('!').filter((el) => {
    if (el !== '') return el;
  });
  for (let i = 0; i < filteredArr.length; i++) {
    if (filteredArr[i] === holder[holder.length-1]) holder.pop();
    else holder.push(filteredArr[i].split('').reverse().join(''));
  }
  return holder.length === 0;
}

module.exports = matchWord;
