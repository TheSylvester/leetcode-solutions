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
