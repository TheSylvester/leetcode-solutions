# [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/?envType=study-plan&id=algorithm-i)

Given an integer array `nums`, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

**Note** that you must do this in-place without making a copy of the array.

```javascript
/**

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
      while (j < nums.length && nums[j] === 0) {
        j++;
      }
      nums[i] = j < nums.length ? nums[j++] : 0;
    }
  };
```

### Solution:

- Iterate through `nums` while storing the position of the last non-zero number in a slow pointer `j`
- Each loop, nums[i] = nums[j] after you check nums[j] and iterate until it's no longer zero
