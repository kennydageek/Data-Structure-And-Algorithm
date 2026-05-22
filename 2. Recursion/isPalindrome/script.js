/*
isPalindrome
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
*/

function reverse(str) {
  let result = '';
  function helper(input) {
    if (input.length === 0) return;
    result += input[input.length - 1] + reverse(str.slice(0, -1));
  }
  helper(str);

  return result;
}

function isPalindrome(str) {
  str = str.toLowerCase();
  if (str === reverse(str)) return true;
  return false;
}

console.log(isPalindrome('Hannah'));
