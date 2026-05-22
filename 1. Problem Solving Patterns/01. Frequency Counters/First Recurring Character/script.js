/*
First Recurring Character

Return the first character that appears more than once.

firstRecurring("abcabcbb") // "a"
firstRecurring("abcdef")   // null
*/

function firstRecurring(str) {
  if (str.length === 0) return null;
  let lookup = {};
  for (let char of str) {
    lookup[char] = (lookup[char] || 0) + 1;
    if (lookup[char] > 1) {
      return char;
    }
  }
  return null;
}

console.log(firstRecurring(''));
