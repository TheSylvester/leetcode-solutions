#[198. House Robber](https://leetcode.com/problems/house-robber/)

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and **it will automatically contact the police if two adjacent houses were broken into on the same night**.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight **without alerting the police**.


```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    let memo = {};

    const revenue = (house) => {
        if (house >= nums.length) {
            return 0;
        }
        if (house === nums.length - 1 || house === nums.length - 2) {
            return nums[house];
        }

        // memoization if not saved already
        if (memo[house + 2] === undefined) memo[house + 2] = revenue(house + 2);
        if (memo[house + 3] === undefined) memo[house + 3] = revenue(house + 3);

        let left = memo[house + 2];
        let right = memo[house + 3];

        return (house >= 0 ? nums[house] : 0) + (left > right ? left : right);

    }

    return revenue(-2);     // rigged start case of -2 to force a check on either index 0 or index 2 branch
};
```

### Solution:

- Recursive function that returns the maximum revenue you can get by starting at a specific house index
- Base case is if the house number is out of bounds, return 0, or if the index is the last or second last, return only that revenue
- For each recursive step, you compare and find the greater of the revenue of either 2, or 3 indices down the array to avoid adjacent steps