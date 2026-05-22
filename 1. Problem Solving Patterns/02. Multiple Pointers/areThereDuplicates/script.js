/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'b', 'a') // true 
                    i    j
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
*/

function areThereDuplicates(...args) {
  let i = 0;

  while (i < args.length) {
    let j = i + 1;

    while (j < args.length) {
      if (args[i] === args[j]) {
        return true;
      }

      j++;
    }

    i++;
  }

  return false;
}

console.log(areThereDuplicates('a', 'b', 'c', 'a'));
