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