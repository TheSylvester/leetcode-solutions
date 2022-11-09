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

    console.log(s.slice(i+1), answer + s.slice(i, i+1).toUpperCase());
    permutate(s.slice(i+1), answer + s.slice(i, i+1).toUpperCase());

    console.log(s.slice(i+1), answer + s.slice(i, i+1).toLowerCase());
    permutate(s.slice(i+1), answer + s.slice(i, i+1).toLowerCase());
  }

  permutate(s,"");

  return results;

};