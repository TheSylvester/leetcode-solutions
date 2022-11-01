# [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/?envType=study-plan&id=algorithm-i)

Given a string `s`, find the length of the **longest substring** without repeating characters.

```javascript
/**
* @param {string} s
* @return {number}
  */
  var lengthOfLongestSubstring = function(s) {

    let i = 0;      // fast pointer
    let j = 0;      // slow pointer - start index of "current substring candidate"

    let longest = 0;

    for (i = 0; i < s.length; i++) {

      longest = longest > i - j ? longest : i - j;

      let k = j;          // temporary fast pointer that starts at slow pointer 'j'
      while (k < i) {     // ... but ends before i
        if (s[k] === s[i]) {
          j = k + 1;      // set the slow pointer to +1 character after the repeated char
          break;
        }
        k++;
      }
    }

    return longest > i - j ? longest : i - j;   // !important
  }
```

### Solution:

- Store 2 pointers: `i`, and `j`
- `i` goings through the string char by char
- `j` is the index of the current candidate for longest substring
- On each loop, check if `s[k = j to i]` are the same as `s[i]`
- ... if `s[k] === s[i]`, move `j` to `k + 1`