// const maxSumOfConsecutiveK = (nums, target) => {
//   let output = 0;
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < target; i++) {
//     output += nums[i];
//   }
//   return output;
// };

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(maxSumOfConsecutiveK(nums, 3));

const maxSumOfConsecutiveK = (nums, target) => {
  let maxSum = 0;
  let windowSum = 0;

  // calculating initial window sum
  for (let i = 0; i < target; i++) {
    windowSum += nums[i];
  }

  // iterating through the rest of the array until we reach the maximum sum
  for (let i = target; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - target];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
};

let nums = [1, 2, 3, 4, 15, 6, 7, 8, 9, 10];
console.log(maxSumOfConsecutiveK(nums, 3));

// time complexity = (0)n
