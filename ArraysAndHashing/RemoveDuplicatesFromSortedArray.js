const removeDuplicates = (nums) => {
  if (nums.length === 0) {
    return 0;
  }

  let slowPointer = 0;

  for (let fastPointer = 1; fastPointer < nums.length; fastPointer++) {
    if (nums[fastPointer] !== nums[slowPointer]) {
      slowPointer++;
      nums[slowPointer] = nums[fastPointer];
    }
  }

  return slowPointer + 1;
};

let nums1 = [1, 1, 2];
let k1 = removeDuplicates(nums1);
console.log(k1); // Expected output: 2
console.log(nums1.slice(0, k1)); // Expected output: [1, 2]

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2 = removeDuplicates(nums2);
console.log(k2); // Expected output: 5
console.log(nums2.slice(0, k2)); // Expected output: [0, 1, 2, 3, 4]
