/*
Valid Palindrome

Determine if a string is a palindrome using multiple pointers.

Ignore:

spaces
punctuation
capitalization
validPalindrome("racecar") // true
validPalindrome("A man, a plan, a canal: Panama") // true
validPalindrome("hello") // false
*/

function validPalindrome(str) {
  const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let i = 0;
  let j = cleanedStr.length - 1;
  while (i < j) {
    if (cleanedStr[i] !== cleanedStr[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}
