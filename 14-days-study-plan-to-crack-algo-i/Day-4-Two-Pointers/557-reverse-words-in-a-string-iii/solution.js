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
    return result.join('');
  }

  const r = s.split(" ").map((x) => flip(x)).join(' ');
  return r;

};