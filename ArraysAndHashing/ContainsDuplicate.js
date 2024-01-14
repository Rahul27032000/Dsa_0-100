// var containsDuplicate = (nums) => {
//   for (let right = 0; right < nums.length; right++) {
//     /* Time O(N) */
//     for (let left = 0; left < right; left++) {
//       /* Time O(N) */
//       const isDuplicate = nums[left] === nums[right];
//       if (isDuplicate) return true;
//     }
//   }

//   return false;
// };

// var containsDuplicate = (nums) => {
//   nums.sort((a, b) => a - b); /* Time O(N * log(N)) | Space O(1 || log(N)) */

//   return hasDuplicate(nums);
// };

// const hasDuplicate = (nums) => {
//   for (let curr = 0; curr < nums.length - 1; curr++) {
//     /* Time O(N) */
//     const next = curr + 1;

//     const isNextDuplicate = nums[curr] === nums[next];
//     if (isNextDuplicate) return true;
//   }

//   return false;
// };

var containsDuplicate = (nums) => {
  const numsSet = new Set(nums); /* Time O(N) | Space O(N) */
  const isEqual = numsSet.size === nums.length;

  return !isEqual;
};

// var containsDuplicate = (nums, numsSet = new Set()) => {
//   for (const num of nums) {
//     /* Time O(N) */
//     if (numsSet.has(num)) return true;

//     numsSet.add(num); /* Space O(N) */
//   }

//   return false;
// };

// Returns false when given an array with no duplicates
it("should return false when given an array with no duplicates", () => {
  const nums = [1, 2, 3, 4, 5];
  const result = containsDuplicate(nums);
  assert.equal(result, false);
});
