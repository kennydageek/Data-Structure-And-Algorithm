/*
Frequency Counter vs Pattern Matching

Check if a pattern matches a string.

patternMatch("abba", "dog cat cat dog") // true
patternMatch("abba", "dog cat cat fish") // false
*/

function patternMatch(pattern, str) {
  const words = str.split(' ');

  // step1: Length must match
  if (pattern.length !== words.length) return false;

  const charToWord = {};
  const wordToChar = {};

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    // Check pattern → word
    if (charToWord[char]) {
      if (charToWord[char] !== word) return false;
    } else {
      charToWord[char] = word;
    }
    // Check word → pattern (VERY IMPORTANT)
    if (wordToChar[word]) {
      if (wordToChar[word] !== char) return false;
    } else {
      wordToChar[word] = char;
    }
  }

  return true;
}

console.log(patternMatch('abba', 'dog cat cat dog'));
