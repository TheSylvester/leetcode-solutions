# [704. Binary Search](https://leetcode.com/problems/binary-search/?envType=study-plan&id=algorithm-i)

**Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.**


```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let low = 0;		// low and high are the array indices
    let high = nums.length;
    
    while (low <= high) {				// while you haven't narrowed it down
        let mid = Math.floor((low + high) / 2);		// find the new middle
        if (nums[mid] === target)
            return mid;
        if (nums[mid] > target)
            high = mid - 1;
        else
            low = mid + 1;
    }
    return -1;
};
```
