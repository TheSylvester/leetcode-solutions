#[46. Permutations](https://leetcode.com/problems/permutations/)

Given an array `nums` of distinct integers, return `all the possible permutations`. You can return the answer in **any order**.

```javascript
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
```

### Solution:

- `Backtracking` algorithm can be used to find all possible leaves in a tree
- algorithm flow consists of a `results` variable in the outside closure, and a recursive function
- *recursive function*:
    - takes an argument for remaining possibilities, and an argument for partial answer in the current branch
    - checks for a base case first and pushes to `results` when base case is met
    - loops through all possible cases for leaves and calls the recursive function for each case

### **Permutations**
- Argument 1 is the remaining array of all numbers (unused and still available)
- Argument 2 is the array of used numbers in this answer branch
- base case is arg1.length === 0; all possible numbers used in answer
- iteratively call permutate for each possibility, every branch you remove a number from arg1 and add it to arg2 ('till base case)