/*
Same Frequency (Numbers)

Write a function that checks whether two numbers have the same frequency of digits.

sameFrequency(182, 281) // true
sameFrequency(34, 14)   // false
sameFrequency(3589578, 5879385) // true

*/

function sameFrequency(num1, num2) {
  num1 = String(num1);
  num2 = String(num2);

  if (num1.length !== num2.length) {
    return false;
  }

  let lookup = {};

  for (let char of num1) {
    lookup[char] = (lookup[char] || 0) + 1;
  }
  for (let char of num2) {
    if (!lookup[char]) {
      return false;
    } else lookup[char]--;
  }

  return true;
}

console.log(sameFrequency(3589578, 5879385));
