/*
PSEUDO CODE
1. Start by picking the second element in the array
2. Now compare tehe second element with the one before it and swap if necessary
3. Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
4. Repeat until the array is sorted
*/

function insertionSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    comparator = (a, b) => a - b;
  }
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && comparator(arr[j], currentVal) > 0; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

// [5,3,2,6,2,7]

console.log(selectionSort([5, 3, 2, 6, 2, 7]));
