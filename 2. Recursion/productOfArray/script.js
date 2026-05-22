/*
productOfArray
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
*/

function productOfArray(arr) {
  let result = 1;
  function helper(input) {
    if (input.length === 0) return;
    result = arr[0] * productOfArray(arr.slice(1));
  }
  helper(arr);

  return result;
}

console.log(productOfArray([1, 2, 3]));
