/*
PSEUDO CODE - Pivot Helper

1. It will help to accept three arguments; an array, a start index, and an end index(these can default to 0 and the array length minus 1 respectively)

2. Grab the pivot from the start of the array;

3. Store the current pivot index in a variable (this will keep track of where the pivot should end up)

4. loop through the array from the start until the end.
4a If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index

5. swap the starting element (i.e the pivot) with the pivot index

6. Return the pivot index

*/

/* 
Quick Sort Pseudocode

1. Call the pivot helper function on the array
2. When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
3. Your base case occurs when you consider a subarray with less than 2 elements

*/

function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let pivot = arr[start];
  let pivotIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }
  swap(arr, start, pivotIndex);
  return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3], 0));

// pivot([4, 8, 2, 1, 5, 7, 6, 3], 0);
