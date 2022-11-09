
#[784. Letter Case Permutation](https://leetcode.com/problems/letter-case-permutation/)

Given a string `s`, you can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. Return the output in **any order**.

```javascript
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    
    let results = [];

    const permutate = (s,answer) => {

        if (s.length === 0) {
            results.push(answer);
            return;
        }

        let i = 0;
        while (i < s.length && (s[i].toLowerCase() === s[i].toUpperCase())) {
            answer += s[i];
            i++;
        }

        if (i >= s.length) {
            results.push(answer);
            return;
        }
        
        permutate(s.slice(i+1), answer + s.slice(i, i+1).toUpperCase());
        permutate(s.slice(i+1), answer + s.slice(i, i+1).toLowerCase());
    }

    permutate(s,"");

    return results;

};
```

### Solution: 

- Backtracking with:
  - original string as argument 1, empty string as argument 2
  - Base Case is when string is emptied
  - Each processing stage you must first add non-characters to the answer (answer += s[i++] while s[i].toLower === s[i].toUpper)
  - Two branching cases is upper case and lower case

