# [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/?envType=study-plan&id=algorithm-i)

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length;
    
    while (low < high) {
        let mid = Math.floor((low+high)/2);
        if (nums[mid] === target)
            return mid;
        if (nums[mid] > target)
            high = mid;
        else
            low = mid + 1;
    }
    return low;
};
```

### Solution:

- `while (low < high)` because if `low === high` then you've found the target value or the place where it should be
