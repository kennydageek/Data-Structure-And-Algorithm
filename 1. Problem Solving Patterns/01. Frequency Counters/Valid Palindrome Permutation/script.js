/*
Valid Palindrome Permutation

Check if a string can be rearranged into a palindrome.

canFormPalindrome("carrace") // true ("racecar")
canFormPalindrome("hello")   // false
*/

function canFormPalindrome(str) {
  let lookup = {};

  // Count characters
  for (let char of str) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  let oddCount = 0;

  // Count odd frequencies
  for (let key in lookup) {
    if (lookup[key] % 2 !== 0) {
      oddCount++;
    }
  }

  return oddCount <= 1;
}
