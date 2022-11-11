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
