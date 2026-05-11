/*
. Average Pair

Given a sorted array and a target average, determine if there exists a pair whose average equals the target.

averagePair([1,2,3], 2.5) // true
averagePair([1,3,3,5,6,7,10,12,19], 8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
*/

function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if ((arr[left] + arr[right]) / 2 === target) {
      return true;
    } else if ((arr[left] + arr[right]) / 2 > target) {
      right--;
    } else left++;
  }

  return false;
}

console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
