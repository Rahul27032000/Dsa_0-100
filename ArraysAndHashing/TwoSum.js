// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) return [nums[i], nums[j]];
//     }
//   }
// };

// console.log(twoSum([1, 2, 3, 4, 5], 4));

// const twoSum = (nums, target) => {
//   for (let i of nums) {
//     for (let j of nums) {
//       if (nums[i] + nums[j] == target) return [nums[i], nums[j]];
//     }
//   }
// };

// console.log(twoSum([1, 2, 3, 4, 5], 6));

// const twoSum = (nums, target) => {
//   let numsMap = {};
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (numsMap[complement] !== undefined)
//       return [nums[numsMap[complement]], nums[i]];
//     numsMap[nums[i]] = i;
//   }
// };

// console.log(twoSum([1, 2, 3, 4, 5], 4));

const twoSum = (nums, target) => {
  let numsMap = {};
  let i = 0;
  while (i < nums.length) {
    let complement = target - nums[i];
    if (numsMap[complement] !== undefined) {
      return [nums[numsMap[complement]], nums[i]];
    }
    numsMap[nums[i]] = i;
    i++;
  }
};

console.log(twoSum([1, 2, 3, 4, 5], 7));
