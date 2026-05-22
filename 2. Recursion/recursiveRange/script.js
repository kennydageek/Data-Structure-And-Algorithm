/*

recursiveRange
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

recursiveRange(6) // 21
 recursiveRange(10) // 55 
*/

function recursiveRange1(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

function recursiveRange(num) {
  let result = num;

  function add(input) {
    if (input === 1) return 1;
    result = result + recursiveRange(num - 1);
  }
  add(num);

  return result;
}

console.log(recursiveRange(10));
