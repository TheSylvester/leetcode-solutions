#[695. Max Area of Island](https://leetcode.com/problems/flood-fill/?envType=study-plan&id=algorithm-i)

You are given an `m x n` binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

```javascript
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
```

### Solution:
- iterate through and flood fill each found 1's island to 0's on the board, storing each island's size

