/*


reverse
Write a recursive function called reverse which accepts a string and returns a new string in reverse.

kenny ----> ynnek
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

console.log(reverse('kehinde'));
