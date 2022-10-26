# [167. Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/?envType=study-plan&id=algorithm-i)

Given a **1-indexed** array of integers `numbers` that is already **sorted in non-decreasing order**, find two numbers such that they add up to a specific `target` number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 <= numbers.length`.

Return the indices of the two numbers, `index1` and `index2`, **added by one** as an integer array `[index1, index2]` of length 2.

The tests are generated such that there is **exactly one solution**. You **may not** use the same element twice.

Your solution must use only constant extra space.

```javascript
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    let low = 0;
    let high = numbers.length - 1;
    
    while (true) {
        
        let sum = numbers[low] + numbers[high];
        
        if (sum < target) {
            low++;
        }
        else if (sum > target) {
            high--;
        }
        else if (sum === target) {
            return [low+1, high+1];
        }
    }
};
```

### Solution:

- Keep trying to find the solution by adding the 1st and last elements of the array.
- If the target number is lower than the sum of the extreme elements, shift the last element down one (the smallest decrement because sorted)
- If the target number is higher, shift the first element up one (the smallest increment, 'cuz sorted)
