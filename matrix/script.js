// Decreasing / Increasing;
/*

Given `matrix`, an `n x n` square matrix of integers, let’s define its `0`-border as the union of its leftmost and rightmost columns, as well as its top and bottom rows.

If we were to remove the matrix’s `0`-border, then the `0`-border of the resulting matrix can be defined as the `1`-border of the original matrix. We can continue this way to define the `2`-border, `3`-border, etc.

(Three diagrams show a 5×5 grid illustrating:)

- 0-border: The outermost ring of 16 cells highlighted

- 1-border: The next inner ring of 8 cells highlighted

- 2-border: Only the single center cell highlighted

For each `k` in `[0, 1, ..., floor((n - 1) / 2)]`, your task is to sort the elements in each `k`-border and place them in clockwise order, starting from the top-left corner.

Note: You are not expected to provide the most optimal solution, but a solution with time complexity not worse than O(n³) will fit within the execution time limit.

*/

function solution(matrix) {
  const n = matrix.length;
  // moving inwards the border

  for (let k = 0; k <= Math.floor((n - 1) / 2); k++) {
    let positions = [];

    // Move clockwise the matrix
    // 1. Top row: left to right
    for (let col = k; col < n - k; col++) {
      positions.push([k, col]);
    }

    // 2. Right column: top to bottom

    for (let row = k + 1; row < n - k; row++) {
      positions.push([row, n - k - 1]);
    }

    // 3. Bottom column: right to left;
    for (let col = n - k - 2; col >= k; col--) {
      positions.push([n - k - 1, col]);
    }

    // 4. Left column: bottom to top;
    for (let row = n - k - 2; row > k; row--) {
      positions.push([row, k]);
    }

    const values = positions.map(([row, col]) => matrix[row][col]);
    values.sort((a, b) => a - b);

    // position the sorted values in the matrix

    for (let i = 0; i < positions.length; i++) {
      let [row, col] = positions[i];
      matrix[row][col] = values[i];
    }
  }
  return matrix;
}

console.log(
  solution([
    [9, 4, 2, 1],
    [12, 10, 15, 6],
    [11, 13, 14, 8],
    [5, 3, 7, 16],
  ]),
);
// 2,3 1,3 , 0,3
