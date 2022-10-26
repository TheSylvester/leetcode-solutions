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