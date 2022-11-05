/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {

  const m = mat.length;
  const n = mat[0].length;

  let result = [];
  let queue = [];

  let remaining = 0;

  // initial copy of mat to result, transfer 0's and set 1 to -1
  // queue up 0's to expand fill
  for (let i = 0; i < m; i++) {
    result[i] = new Array();
    for (let j = 0; j < n; j++) {

      let cell = mat[i][j];

      if (!cell) {
        result[i].push(0);
        queue.push({r: i, c: j, d: 1}); // row, column, distance
      }
      else {
        result[i].push(-1);
        remaining += 1;
      }
    }
  }

  while (remaining > 0) {
    let cell = queue.shift();
    if (cell.r - 1 >= 0 && result[cell.r - 1][cell.c] === -1) {
      result[cell.r - 1][cell.c] = cell.d;
      queue.push({r: cell.r -1, c: cell.c, d: cell.d + 1});
      remaining -= 1;
    }
    if (cell.c - 1 >= 0 && result[cell.r][cell.c - 1] === -1) {
      result[cell.r][cell.c - 1] = cell.d;
      queue.push({r: cell.r, c: cell.c - 1, d: cell.d + 1});
      remaining -= 1;
    }
    if (cell.r + 1 < m && result[cell.r + 1][cell.c] === -1) {
      result[cell.r + 1][cell.c] = cell.d;
      queue.push({r: cell.r +1, c: cell.c, d: cell.d + 1});
      remaining -= 1;
    }
    if (cell.c + 1 < n && result[cell.r][cell.c + 1] === -1) {
      result[cell.r][cell.c + 1] = cell.d;
      queue.push({r: cell.r, c: cell.c + 1, d: cell.d + 1});
      remaining -= 1;
    }
  }


  return result;
};

