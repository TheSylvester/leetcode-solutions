# [557. Reverse Words in a String III](https://leetcode.com/problems/reverse-words-in-a-string-iii/?envType=study-plan&id=algorithm-i)

Given a string `s`, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    let flip = (st) => {
        let low = 0, high = st.length-1;
        let result = new Array(st.length);
        while (low <= high) {
            result[low] = st[high];
            result[high--] = st[low++];
        }
        // console.log(result.join(''));
        return result.join('');
    }
    
    const r = s.split(" ").map((x) => flip(x)).join(' ');
    return r;
    
};
```

### Solution:

- write the function `flip(st)`
- `split` the sentence into words and `flip(word)` each word (with map), then `join(' ')` it back together

