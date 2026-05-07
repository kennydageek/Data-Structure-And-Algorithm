/*
Count Unique Values

Given a sorted array, count the number of unique values.

countUniqueValues([1,1,1,2]) // 2
countUniqueValues([-2,-1,-1,0,1]) // 4
*/

function countUniqueValues(arr) {
  const freq = {};
  for (let char of arr) {
    freq[char] = (freq[char] || 0) + 1;
  }

  const length = Object.keys(freq).length;

  return length;
}

console.log(countUniqueValues([-2, -1, -1, 0, 1]));
