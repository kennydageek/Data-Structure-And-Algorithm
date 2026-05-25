// Decreasing / Increasing;
/* 
Given an infinite number line, you would like to build few blocks and obstacles on it. Specifically, you have to implement code which supports two types of operations: - [1, x] - builds an obstacle at coordinate x along the number line. It is guaranteed that coordinate x does not contain any obstacles when the operation is performed. - [2, x, size] - checks whether it’s possible to build a block of size size beginning at position x. For example, for size = 2 and x = 0, it will check 0 and 1 on the number line. The block can only be built if there are no obstacles on the number line at coordinates x, x+1, ..., x+size-1. Return "1" if possible, "0" otherwise. Given an array of operations containing both types of operations above, your task is to return a binary string representing the outputs for all [2, x, size] operations. Example
operations = [[1, 2],
              [1, 5],
              [2, 3, 2],
              [2, 3, 3],
              [2, 1, 1],
              [2, 1, 2]]
the output should be solution(operations) = "1010". Explanation: Let’s consider all operations: - [1, 2] - builds an obstacle at coordinate 2. - [1, 5] - builds an obstacle at coordinate 5. - [2, 3, 2] - checks and returns "1" as it is possible to build a block occupying coordinates 3 and 4 (no obstacles there). - [2, 3, 3] - checks and returns "0" as it is not possible to build a block occupying coordinates 3, 4, and 5, because there is an obstacle at coordinate 5. - [2, 1, 1] - checks and returns "1" as it is possible to build a block occupying coordinate 1. - [2, 1, 2] - checks and returns "0" as it is not possible to build a block occupying coordinates 1 and 2 because there is an obstacle at coordinate 2. So the output is "1010". Input/Output - [execution time limit] 4 seconds (js) - [memory limit] 1 GB - [input] array.array.integer operations ▫ An array of integer arrays representing one of the two types of operations described above. All coordinates within operations are within the following interval [-10⁹, 10⁹]. The size from the second type of operations are positive integers which would not exceed 10⁹. ▫ Guaranteed constraints: 1 ≤ operations.length ≤ 10⁵. - [output] string ▫ A binary string representing the outputs for all 2, x, size] operations. Solve this with appropriate explanations

*/

function solution(operations) {
  // 1. Collect all possible obstacle positions
  const coords = [];

  for (const op of operations) {
    if (op[0] === 1) {
      coords.push(op[1]);
    }
  }

  // 2. Sort unique obstacle coordinates
  coords.sort((a, b) => a - b);

  const unique = [];
  for (const x of coords) {
    if (unique.length === 0 || unique[unique.length - 1] !== x) {
      unique.push(x);
    }
  }

  // Fenwick Tree / Binary Indexed Tree
  const bit = new Array(unique.length + 1).fill(0);

  function update(index, value) {
    while (index < bit.length) {
      bit[index] += value;
      index += index & -index;
    }
  }

  function query(index) {
    let sum = 0;

    while (index > 0) {
      sum += bit[index];
      index -= index & -index;
    }

    return sum;
  }

  function lowerBound(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] < target) left = mid + 1;
      else right = mid;
    }

    return left;
  }

  function upperBound(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] <= target) left = mid + 1;
      else right = mid;
    }

    return left;
  }

  let result = '';

  for (const op of operations) {
    if (op[0] === 1) {
      const x = op[1];

      // compressed index is 1-based for Fenwick tree
      const index = lowerBound(unique, x) + 1;
      update(index, 1);
    } else {
      const x = op[1];
      const size = op[2];

      const start = x;
      const end = x + size - 1;

      const leftIndex = lowerBound(unique, start);
      const rightIndex = upperBound(unique, end);
      a;
      const obstacleCount = query(rightIndex) - query(leftIndex);

      result += obstacleCount === 0 ? '1' : '0';
    }
  }

  return result;
}
