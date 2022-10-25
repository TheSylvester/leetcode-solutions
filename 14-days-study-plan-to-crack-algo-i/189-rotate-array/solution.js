/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let length = nums.length;
  let copyArray = nums.slice(0);
  for (let i = 0; i < nums.length; i++) {
    nums[i] = copyArray[ (((i-k) % length) + length ) % length ];
  } 
};
