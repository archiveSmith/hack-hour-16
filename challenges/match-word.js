// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {

    if (str.length === 0) {
        return true
    }

    strAry = str.toLowerCase().split('');

    alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


    justLetters = [];
    var stacks = [];

    for (var i = 0; i < strAry.length; i++) {
        if (alpha.indexOf(strAry[i]) !== -1) {
            justLetters.push(strAry[i])
        } else {
            justLetters.push(' ')
        }
    }


    multispaces = justLetters.join('').trim()

    words = multispaces.split(/\s*\b\s*/)

    console.log(words)


    stacks.push(words[0])

    for (var k = 1; k < words.length; k++) {
        console.log(words[k], stacks[stacks.length - 1])
        if (words[k] === stacks[stacks.length - 1].split('').reverse().join('')) {
            stacks.pop()
        } else {
            stacks.push(words[k])
        }

    }




    if (stacks.length === 0) {
        return true
    } else {
        return false
    }


}

module.exports = matchWord;
