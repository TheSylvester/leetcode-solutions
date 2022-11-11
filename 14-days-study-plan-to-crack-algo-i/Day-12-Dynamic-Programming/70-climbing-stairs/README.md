#[70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let memo = {};

    // returns how many ways there are to climb `steps` steps
    const climb = (steps) => {

        // there's only 1 way to climb 1 step, and 2 ways to climb 2 steps
        if (steps === 1 || steps === 2) {
            return steps;
        }
        
        // >= 3 steps, find # of ways to get to "1 step to me" or "2 steps to me" and memo it
        if (!memo[steps]) {
            memo[steps] = climb(steps - 1) + climb(steps - 2);
        }
        return memo[steps];
    }

    return climb(n);

};
```

### Solution:

- DP is Backtracking with memoization
- Each time the recursive function is called, return a value from the `memo` hashmap
- if the corresponding value in `memo` is missing (`!memo[steps]` or `undefined`), calculate the value and store in `memo`