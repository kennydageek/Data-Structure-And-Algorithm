/*

For an array nums and an integer t (0<=t<nums.length), let's define a cyclic t-shift operation as carrying t elements from the end of the array to the beginning

For example, applying cyclic t-shift to array nums having [nums[0], nums[1], nums[2], ........ nums[n-1]], where n is the length of the nums

For t=0, the cyclic 0-shift will be [nums[0], nums[1], nums[2], ......, nums[n-1]],

For t=1, the cyclic 1-shift will be [nums[n-1], nums[0], nums[1], nums[2], ... nums[n-2]],

For t=2, the cyclic 2-shift will be [nums[n-2],  nums[n-2], nums[0],nums[1], nums[2], ...., nums[n-3]],

For t=n-1, the cyclic (n-1) shift will be [nums[1], nums[2], ..., nums[n-1], nums[0],

Given an array of integers nums, find such t (0 <=t<=nums.length) that cyclic t-shift operation turns nums into a reverse sorted array [n, n-1, ..... 1]. If there is no such t, return -1.


NOTE: You are not expected to provide the most optimal solution, but a solution with time complexity not wors than O(n squared) will fit within the execution time limit

Example
* For nums =[1,4,2,3], the output should be solution(nums) = -1

Let's consider the possible cyclic t-shifts:
cyclic 0-shift: moving 0 elements from the end to the beginning we get [1,4,2,3]

cyclic 1-shift: moving 1 element from the end to the beginning we get [3,1,4,2]

cyclic 2-shift: moving 2 elements from the end to the beginning we get [2, 3, 1,4]

cyclic 3-shift: moving 3 elements from the end to the beginning, we get [4,2,3,1]

None of the resulting arrays equals [4, 3, 2, 1], so the answer is -1

* For nums = [3, 2,1,5,4], the output should be solution(nums)=2
If we move the last 2 elements of the given array from the end to the beginning, we get [5, 4,3,2,1], so the answer is 2

Return such t(0<=t< nums.length) that cyclic t-shift operation turns nums into a reverse sorted array [n, n-1, ...., 1]. If it s not possible to turn nums into reverse sorted array by performing a cyclic t-shift, return -1


Solve in Javascript

*/

function solution(nums) {
  let n = nums.length;
  let target = [];

  for (let i = n; i >= 1; i--) {
    target.push(i);
  }

  for (let t = 0; t < n; t++) {
    let lastTPart = nums.slice(n - t);
    let firstPart = nums.slice(0, n - t);

    const shifted = [...lastTPart, ...firstPart];

    let matches = true;
    for (let i = 0; i < n; i++) {
      if (target[i] !== shifted[i]) {
        matches = false;
        break;
      }
    }

    if (matches) return t;
  }

  return -1;
}

console.log(solution([3, 2, 1, 5, 4]));
