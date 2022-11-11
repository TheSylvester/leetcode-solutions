#[120. Triangle](https://leetcode.com/problems/triangle/)

Given a `triangle` array, return the `minimum path sum` from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index `i` on the current row, you may move to either index `i` or index `i + 1` on the next row.

```javascript
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const m = triangle.length;
    let memo = {};

    const minSum = (i, j) => {
        if (i === m - 1) {
            return triangle[i][j];
        }

        if (memo[`${i+1}:${j}`] === undefined) memo[`${i+1}:${j}`] = minSum(i + 1, j);
        if (memo[`${i+1}:${j+1}`] === undefined) memo[`${i+1}:${j+1}`] = minSum(i + 1, j+1);
        let left = memo[`${i+1}:${j}`];
        let right = memo[`${i+1}:${j+1}`];

        return triangle[i][j] + (left < right ? left : right);
    }

    return minSum(0, 0);
};
```

### Solution:

- Recursive function that returns the minimum sum path given row, and column index to start from
- Base case is when you're in the final row, return current the value from the current index only
- For each recursive step, you compare and find the greater of left (column index + 0) or right branch (index + 1)
- javascript workaround to memoize i, j in a hash is to use "i:j" as the key
