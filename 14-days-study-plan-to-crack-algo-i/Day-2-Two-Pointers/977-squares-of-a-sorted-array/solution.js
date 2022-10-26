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
