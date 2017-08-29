/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 * 
 */

function rotateGrid(grid, n) {
  let rotated = [];
  let counter = n-1;

  for (let row = 0; row < n; row++) {
    let col = [];
    let counter = n-1;
    
    for (let i = 0; i < n; i++) {
      col.push(grid[counter][row]);
      counter--;
    }

    rotated.push(col);
  }

  return rotated;
}

// var sampleGrid = [  [1, 2, 3],
//                     [4, 5, 6],
//                     [7, 8, 9] ];

// var sampleGrid2 = [ [1, 2, 3, 4],
//                     [5, 6, 7, 8],
//                     [9, 10, 11, 12],
//                     [13, 14, 15, 16] ]

// console.log(rotateGrid(sampleGrid, 3));
// console.log(rotateGrid(sampleGrid2, 4));

module.exports = rotateGrid;


// for non nested arrays...
    // for (let i = 0; i < n; i++) {
    //   console.log(n * counter + row);
    //   col.push(grid[n * counter + row]) // push 12
    //   counter--;
    // }
