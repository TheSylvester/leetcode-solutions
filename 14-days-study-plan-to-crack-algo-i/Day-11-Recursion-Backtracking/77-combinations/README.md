#[77. Combinations](https://leetcode.com/problems/combinations/)

Given two integers `n` and `k`, return all possible combinations of `k` numbers chosen from the range `[1, n]`.

You may return the answer in **any order**.

```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {

    let results = [];

    // recursive function with a remaining candidate pool, and array of chosen branches
    const recurse = (start, comb) => {
        // base case to push results when tree height reached (for max height tree, check if variable is empty instead)
        if (comb.length === k) {
            results.push(comb);
            return;
        }
        // for loop to recurse add branches
        for (let i = start; i <= n; i++) {
            recurse(i+1, [...comb, i]);
        }
        return;
    };

    recurse(1, []);

    return results;
};
```

### Solutions:

- `Backtracking` algorithm can be used to find all possible leaves in a tree
- algorithm flow consists of a `results` variable in the outside closure, and a recursive function
- *recursive function*:
  - takes an argument for remaining possibilities, and an argument for partial answer in the current branch
  - checks for a base case first and pushes to `results` when base case is met
  - loops through all possible cases for leaves and calls the recursive function for each case

### **Combinations**
- Argument 1 (remaining numbers) is a single number noting the lowest number remaining
- Argument 2 is the array of previously picked numbers in this answer branch
- base case is arg1.length === 0; all possible numbers used in answer
- iteratively call recurse for each possibility, the pool of numbers to call start with numbers higher than the lowest index