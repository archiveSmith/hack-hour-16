/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

function mergeRanges(array) {
    let newSchedule = [];
    for(let i = 0; i < array.length - 1; i += 1){
        let newEvents = [];
        for(let x = 0; x < array[i].length - 1; x++){
            if(array[i][x] > array[i + 1][x]){
              newEvents.push(array[i+1][x]);
            } else newEvents.push(array[i][x]);
            if (array[i][x + 1] > array[i + 1][x]){
              newEvents.push(array[i + 1][x + 1])
            } else newEvents.push(array[i][x+1])
            
          newSchedule.push(newEvents);
        }
        newEvents = [];
    }
    return newSchedule;
}


const mergRanges = array => {
  for(let i = 0; i < array.length; i += 1){
    const curr = array[i]
    const prev = array[i - 1];
    const next = array[i + 1];

    if(next && next[0] >= prev[0] && next[next.length - 1] <= curr[curr.length - 1]){
      array.splice(i + 1, 1);
    }

    if(curr[0] <= prev[prev.length - 1]){
      const merged = prev.concat(curr);
      merged.sort((a, b) => a - b).splice(1, merged.length - 2);

      array.splice(i - 1, 2,merged)

      i -= 1
    }
  }
  return array;
}

module.exports = mergeRanges;
