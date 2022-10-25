# [189. Rotate Array](https://leetcode.com/problems/rotate-array/?envType=study-plan&id=algorithm-i)

Given an array, rotate the array to the right by k steps, where k is non-negative.

```javascript
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
```

### Solution:

- % operator can "wrap" numbers which go past the maximum array index.
- `remainder = index % max` where remainder
