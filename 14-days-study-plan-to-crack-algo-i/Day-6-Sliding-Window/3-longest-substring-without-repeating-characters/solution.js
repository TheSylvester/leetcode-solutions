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
      }
      k++;
    }
  }

  return longest > i - j ? longest : i - j;   // !important
}

