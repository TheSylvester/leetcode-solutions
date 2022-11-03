#[733. Flood Fill](https://leetcode.com/problems/flood-fill/?envType=study-plan&id=algorithm-i)

An image is represented by an `m x n` integer grid image where `image[i][j]` represents the pixel value of the image.

You are also given three integers `sr`, `sc`, and `color`. You should perform a flood fill on the image starting from the pixel `image[sr][sc]`.

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.

```javascript
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
```

### Solution:
- add starting position to queue
- each iteration, process the first item from the top of queue
- each (fill) process, check NSEW and add it to the list if it doens't exceed bounds
- process until nothing left on the list
