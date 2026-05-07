/*
Find All Duplicates in Array

Return all elements that appear more than once.

findDuplicates([1,2,3,1,2,4,5,5]) // [1,2]
*/

function findDuplicates(arr) {
  let result = [];
  let lookup = {};

  for (let char of arr) {
    lookup[char] = (lookup[char] || 0) + 1;
    if (lookup[char] === 2) {
      result.push(char);
    }
  }

  return result;
}

console.log(findDuplicates([1, 2, 3, 1, 2, 4, 5, 5]));
