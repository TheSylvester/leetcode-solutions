# [278. First Bad Version](https://leetcode.com/problems/first-bad-version/?envType=study-plan&id=algorithm-i)

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

```javascript
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let low = 1;
        let high = n;
        
        while (low < high) {
            let mid = Math.floor((low + high) / 2);
            if (isBadVersion(mid))
                high = mid;
            else
                low = mid + 1;
        
        }
        return low;
    };
};
```

### Solution Explanation:

- low starts at 1
- isBadVersion(x) is the test function, if it fails, everything after is "bad", so `high = mid`
