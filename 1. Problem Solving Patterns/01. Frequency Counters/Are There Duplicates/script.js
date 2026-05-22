/*
Are There Duplicates?

Accept a variable number of arguments and check if there are duplicates.

areThereDuplicates(1,2,3) // false
areThereDuplicates(1,2,2) // true
areThereDuplicates('a','b','c','a') // true

https://api.dev.iam.penilabs.com/auth/login

https://api.dev.iam.penilabs.com/auth/login
*/

function areThereDuplicates(...arr) {
  let freq = {};
  for (let char of arr) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let key in freq) {
    if (freq[key] > 1) {
      return true;
    }
  }

  return false;
}

console.log(areThereDuplicates('a', 'b', 'c', 'a'));
