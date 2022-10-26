/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let j = 0;
  for (let i=0; i<nums.length; i++) {
    while(j<nums.length && nums[j] === 0) {
      j++;
    }
    nums[i] = j < nums.length ? nums[j++] : 0;
  }
};
