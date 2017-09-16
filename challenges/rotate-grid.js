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
 */
//WITHOUT THE BONUS!!
// function rotateGrid(grid, n) {
//   let arrays = grid.reverse()
//   let arr = []
//   for(let i = 0; i < arrays.length; i++){
//     let count = 0
//     arr[i] = []
//     for(let j = 0; j < arrays.length; j++){
//       arr[i].push(arrays[count++][i])
//     }
// 	}
// 	return arr
// }

//BONUS: do it in place
function rotateGrid(grid, n) {
  let arrays = grid.reverse()
  let temp = [[],[],[]]
  for(let k = 0; k < arrays.length; k++){
    for(let x = 0; x < arrays.length; x++){
      temp[k].push(arrays[k][x])
    }
  }
  for(let i = 0; i < arrays.length; i++){
    let count = 0
    for(let j = 0; j < arrays.length; j++){
      arrays[i][j] = temp[count++][i]
    }
	}
	return arrays
}

module.exports = rotateGrid;
