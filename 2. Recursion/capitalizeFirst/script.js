/*


capitalizeFirst
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
*/

let result = [];
function capitalizeFirst(arr) {
  function pushCapital(input) {
    if (input.length === 0) return;
    // Capitalize the first character of the first element in the array, then push
    let first = input[0][0].toUpperCase() + input[0].slice(1);
    result.push(first);
    capitalizeFirst(arr.slice(1));
  }

  pushCapital(arr);

  return result;
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
