/*
PSEUDO CODE
1. Store the first element as the smallest value you've seen so far
2. Compare this item to the next item in the array until you find a smaller number
3. If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
4. If the "minimum" is not the value(index) you initially began with, swap the two values
5. Repeat this with the next element until the array is sorted
*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimum = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minimum] > arr[j]) {
        minimum = j;
      }
    }
    if (i !== minimum) {
      let temp = arr[i];
      arr[i] = arr[minimum];
      arr[minimum] = temp;
    }
  }

  return arr;
}

// [5,3,2,6,2,7]

console.log(selectionSort([5, 3, 2, 6, 2, 7]));
