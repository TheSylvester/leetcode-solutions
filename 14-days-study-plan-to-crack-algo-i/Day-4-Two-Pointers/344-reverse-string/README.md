# [344. Reverse String](https://leetcode.com/problems/reverse-string/?envType=study-plan&id=algorithm-i)

Write a function that reverses a string. The input string is given as an array of characters `s`.

You must do this by modifying the input array in-place with `O(1)` extra memory.

```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

  let low = 0;
  let high = s.length -1;

  while (low < high) {
    let copy = s[low];
    s[low++] = s[high];
    s[high--] = copy;
  }

};
```

### Solution:

- store 2 pointers `low` starting from index 0 and `high` starting from end of string
- iterate towards the middle increasing low and decreasing high by 1 until `low === high`
