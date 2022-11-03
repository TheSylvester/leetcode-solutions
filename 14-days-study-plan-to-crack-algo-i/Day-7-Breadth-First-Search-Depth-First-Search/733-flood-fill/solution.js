/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {

  // guard clause
  const replaceColor = image[sr][sc];
  if (replaceColor === color) {
    return image;
  }

  const m = image.length;
  const n = image[0].length;
  const list = new Array();
  list.push({r: sr, c: sc});

  const fill = (r, c) => {
    // console.log(r, c);
    if (image[r][c] !== replaceColor) {
      // already same color, do not change
      return;
    } else {
      image[r][c] = color;    // set color
                              // add neighbours to list

      if (r-1 >= 0) list.push({r: r-1, c});   // north
      if (r+1 < m) list.push({r: r+1, c});   // south
      if (c-1 >= 0) list.push({r, c: c-1});   // east
      if (c+1 < n) list.push({r, c: c+1});   // west
    }
  }

  while (list.length > 0) {
    const p = list.shift();
    // console.log(p);
    fill(p.r, p.c);
  }

  return image;
};
