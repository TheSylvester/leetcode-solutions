/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {

  const m = grid.length;
  const n = grid[0].length;

  let thisSize = 0;
  let biggestSize = 0;

  const sizeOfIsland = (y, x) => {

    let size = 0;

    const floodFill = (r, c) => {

      if (grid[r][c]) {
        size++;
        grid[r][c] = 0;

        if (r-1 >= 0) { floodFill(r-1, c); }
        if (r+1 < m) { floodFill(r+1, c); }
        if (c-1 >= 0) { floodFill(r, c-1); }
        if (c+1 < n) { floodFill(r, c+1); }
      }
    };

    floodFill(y,x);
    return size;
  }

  for (let i=0; i<m; i++) {
    for (let j=0; j<n; j++) {

      if (grid[i][j]) {
        thisSize = sizeOfIsland(i,j);

        if (thisSize > biggestSize) {
          biggestSize = thisSize;
        }
      }
    }
  }

  return biggestSize;

};