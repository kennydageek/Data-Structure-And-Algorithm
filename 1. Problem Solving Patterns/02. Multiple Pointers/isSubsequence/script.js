/*
Is Subsequence

Check whether the characters in the first string appear in order inside the second string.

isSubsequence('hello', 'hello world') // true
isSubsequence('sing', 'sting') // true
isSubsequence('abc', 'acb') // false
*/

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  if (str1.length > str2.length) return false;

  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }

    j++;
  }

  return i === str1.length;
}

console.log(isSubsequence('hello', 'hello world'));
