#[994. Rotting Oranges](https://leetcode.com/problems/rotting-oranges/description/)

You are given an `m x n` `grid` where each cell can have one of three values:

- `0` representing an empty cell,
- `1` representing a fresh orange, or
- `2` representing a rotten orange.
Every minute, any fresh orange that is **4-directionally adjacent** to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.


```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    
    const m = grid.length;
    const n = grid[0].length;
    
    let queue = [];
    let count = 0;
    let remaining = 0;
    
    // initial to queue rotten oranges and count remaining fresh oranges (and ones with no neighbour)

    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (grid[i][j] === 1) {     // if fresh add to remaining count
                // break clause if fresh not touching any other orange
                if (
                    !((i-1 >= 0 && grid[i-1][j] !== 0) ||     // if NOT touching top
                    (j-1 >= 0 && grid[i][j-1] !== 0) ||     // touching left
                    (i+1 < m && grid[i+1][j] !== 0) ||      // touching bottom
                    (j+1 < n && grid[i][j+1] !== 0))          // or touching right
                   ) { return -1; }                            // break;
                
                remaining += 1;
            }
            if (grid[i][j] === 2) {
                queue.push({r: i, c: j, time: 1});      // if rotten add to processing queue
            }
        }
    }
    
    
    const rot = ({r, c, time}) => {
        grid[r][c] = 2;
        remaining -= 1;
        queue.push({r, c, time: time + 1});
        if (count < time) count = time;
    }
    
    while (remaining) {
        if (queue.length < 1) return -1;
        let o = queue.shift();

        if (o.r - 1 >= 0 && grid[o.r - 1][o.c] === 1) { rot({r: o.r - 1, c: o.c, time: o.time }); }
        if (o.c - 1 >= 0 && grid[o.r][o.c - 1] === 1) { rot({r: o.r, c: o.c - 1, time: o.time }); }
        if (o.r + 1 < m && grid[o.r + 1][o.c] === 1) { rot({r: o.r + 1, c: o.c, time: o.time }); }
        if (o.c + 1 < n && grid[o.r][o.c + 1] === 1) { rot({r: o.r, c: o.c + 1, time: o.time }); }
    }
    
    return count;
    
};
```

### Solution:

- Iterate through the grid, queueing rotten oranges and counting remaining fresh oranges
- bfs through the queue, if queue runs out before remaining oranges, then return -1, 