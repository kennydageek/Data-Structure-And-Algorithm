// Decreasing / Increasing;
/*Given an array of non-negative integers "numbers", your task is to check whether the elements on even positions are monotonic (either in a strictly increasing or strictly decreasing order). Return "increasing" if the numbers are increasing, "decreasing" if the numbers are decreasing, or "none" if the numbers are not monotonic. NOTE: You are not  expected to provide the most optimal solution, but a solution with time complexity not worse than o(n squared) will fit within the execution time limit. Examples

Examples
1. For numbers = [12, 65,15,72,19, 72], the output should be solution(numbers) = "increasing".

Explanation:
Elements on even positions are numbers[0], numbers[2', and numbers[4], i.e., 12,15, and 19. Since 12 < 15 < 19, the answer is "increasing".

For numbers = [12, 1, 54, 5, 19, 14], the outpust should be solution(numbers)="none"

For numbers =[666, 17, 66, 5,, 6, 23], the output should be solution (numbers)= "decreasing"

Explanation:
Elements on even postions are numbers[0], numbers[2] and numbers [4], i.e, 666, 66, and 6. Since 666 >66 > 6, the answer is "decreasing" */

function solution(arr) {
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 2; i < arr.length; i += 2) {
    if (arr[i] <= arr[i - 2]) {
      isIncreasing = false;
    }

    if (arr[i] >= arr[i - 2]) {
      isDecreasing = false;
    }
  }

  if (isIncreasing) return 'increasing';
  if (isDecreasing) return 'decreasing';
  return 'none';
}

console.log(solution([666, 17, 66, 5, 6, 23]));
