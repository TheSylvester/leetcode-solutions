/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {

  let results = [];

  // recursive function with a remaining candidate pool, and array of chosen branches
  const recurse = (start, comb) => {
    // base case to push results when tree height reached (for max height tree, check if variable is empty instead)
    if (comb.length === k) {
      results.push(comb);
      return;
    }
    // for loop to recurse add branches
    for (let i = start; i <= n; i++) {
      recurse(i+1, [...comb, i]);
    }
    return;
  };

  recurse(1, []);

  return results;
};