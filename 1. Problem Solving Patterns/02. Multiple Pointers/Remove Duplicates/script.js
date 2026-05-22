/*
Remove Duplicates In-Place

Given a sorted array, remove duplicates in-place and return the new length.

removeDuplicates([1,1,2]) // 2
removeDuplicates([0,0,1,1,1,2,2,3,3,4]) // 5
*/

function removeDuplicates(arr) {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}
