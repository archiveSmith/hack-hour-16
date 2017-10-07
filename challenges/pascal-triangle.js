/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  let result = [];

  for (let i = 1; i <= numRows; i++) {
    if (i === 0) return;
    else if (i === 1) result.push([1]);
    else if (i === 2) result.push([1, 1]);
    else if (i === 3) result.push([1, 2, 1]);
    else {
      let newArr = [1];
      let prev = result[i-2];


      for (let j = 0; j < prev.length-1; j++) {
        newArr.push(prev[j] + prev[j+1])
      }

      newArr.push(1)
      result.push(newArr)      
    }
  }

  return result;
}

// console.log(pascalTriangle(1));
// console.log(pascalTriangle(2));
// console.log(pascalTriangle(3));
// console.log(pascalTriangle(4));
// console.log(pascalTriangle(5));
// console.log(pascalTriangle(12));


module.exports = pascalTriangle;
