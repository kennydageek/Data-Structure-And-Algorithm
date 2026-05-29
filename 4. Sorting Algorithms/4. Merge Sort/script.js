/*
PSEUDO CODE - Merge

*/

function merge(arr1, arr2, comparator) {
  if (typeof comparator !== 'function') {
    comparator = (a, b) => a - b;
  }

  let i = 0;
  let j = 0;
  let result = [];
  while (comparator(i < arr1.length && j < arr2.length) > 0) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  return result;
}

function mergeSort(arr, comparator) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid), comparator);
  let right = mergeSort(arr.slice(mid), comparator);
  return merge(left, right, comparator);
}

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// }
// console.log(mergeSort([1, 10, 50, 2, 14, 99, 100]));
