/*
Write a function that accepts a sorted array of integers.

Find the first pair where the sum is 0.

Return the pair or undefined.

sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
*/

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    }
    if (arr[left] + arr[right] > 0) right--;
    else left++;
  }

  return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
