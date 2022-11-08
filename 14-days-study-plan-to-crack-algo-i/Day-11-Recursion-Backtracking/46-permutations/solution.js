/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

  let results = [];

  const permutate = (arr, used) => {
    if (arr.length === 0) {
      results.push(used);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      permutate(arr.filter(( x, ind) => ind !== i), [...used, arr[i]]);
    }
  };

  permutate([...nums], []);

  return results;
};