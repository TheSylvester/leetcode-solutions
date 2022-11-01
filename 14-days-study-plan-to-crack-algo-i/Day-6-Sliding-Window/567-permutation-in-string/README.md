# [567. Permutation in String](https://leetcode.com/problems/permutation-in-string/?envType=study-plan&id=algorithm-i)

Given two strings `s1` and `s2`, return true if `s2` contains a permutation of `s1`, or `false` otherwise.

In other words, return `true` if one of s1's permutations is the substring of s2.

```javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    
    const loadHash = (str, h) => {
        str.split("").forEach(c=>{
           h[c] = h[c] ? h[c] + 1 : 1;
        });
    }
    
    const compareHash = (str, h) => {
        const buffer = {...h};
        
        for (c of str) {
            
            if (!buffer[c]) {
                return false;
            } else {
                buffer[c] -= 1;
            }
        }
        return true;
    }
    
    const length = s1.length;
    let hash = {};
    loadHash(s1, hash);
    
    for (let i = 0; i < s2.length - s1.length + 1; i++) {
        
        const test = s2.slice(i, i+length);
        if (compareHash(test, hash))
            return true;
        
    }
    return false;
};
```

### Solution:

- Brute Force: sort the letters in s1 and iterate through s2 with a s1.length substring window, sorting and then comparing
- Better Solution: Hashmap the characters in s1, iterate through s2 with a s1.length substring window, on each iteration