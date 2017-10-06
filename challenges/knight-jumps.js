// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  const arr = str.split('');
  const x = Number(arr[0]);
  const y = Number(arr[2]);

  let counter = 0;

  // check bounds
  // one [up, left]
  if (x - 1 >= 1 && x - 1 <= 8 && y + 2 >= 1 && y + 2 <= 8) {
    counter++;
  }
  // two [up, right]
  if (x + 1 >= 1 && x + 1 <= 8 && y + 2 >= 1 && y + 2 <= 8) {
    counter++;
  }

  // three [down, left]
  if (x - 1 >= 1 && x - 1 <= 8 && y - 2 >= 1 && y - 2 <= 8) {
    counter++;
  }

  // four [down, right]
  if (x + 1 >= 1 && x + 1 <= 8 && y - 2 >= 1 && y - 2 <= 8) {
    counter++;
  }

  // five [left, up]
  if (x - 2 >= 1 && x - 2 <= 8 && y + 1 >= 1 && y + 1 <= 8) {
    counter++;
  }

  // six [left, down]
  if (x - 2 >= 1 && x - 2 <= 8 && y - 1 >= 1 && y - 1 <= 8) {
    counter++;
  }
  // seven [right, up]
  if (x + 2 >= 1 && x + 2 <= 8 && y + 1 >= 1 && y + 1 <= 8) {
    counter++;
  }

  // eight [right, down]
  if (x + 2 >= 1 && x + 2 <= 8 && y - 1 >= 1 && y - 1 <= 8) {
    counter++;
  }
  return counter;
}

// console.log(knightjumps('5 5'));

module.exports = knightjumps;


// can move 8 spaces if in (3->6, 3->6)

// if on a corner, can only move two places

// get (x, y pair)
  // check if 8 positions are in board
  // incriment counter