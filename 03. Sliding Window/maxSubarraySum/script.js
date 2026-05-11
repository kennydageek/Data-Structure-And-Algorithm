/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
*/

function maxSubarraySum(arr, n) {
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  // console.log(maxSum);
  tempSum = maxSum;

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - n];

    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([4, 2, 1, 6], 1));
