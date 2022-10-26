# [977. Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/?envType=study-plan&id=algorithm-i)

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {

    let sortedArray = [];
    let start = 0;
    let end = nums.length - 1;
    let last = end;
    
    let i = end;
    
    while (i > -1) {
        
        const a = nums[start] ** 2;
        const b = nums[end] ** 2;
        
        if (a > b) {
            sortedArray[i] = a;
            start += 1;
        } else {
            sortedArray[i] = b;
            end -= 1;
        }
    
        i--;
    }
    
    return sortedArray;
};
```

### Solution:

- Numbers in array can be negative, where their absolute value (and thus their squared value) will be greater than their consecutive numbers
- The next largest squared numbers will always come from either the squared of the front most or back most number in the set, depending on absolute values
- 
