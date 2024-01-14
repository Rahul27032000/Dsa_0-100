function productExceptSelf(nums) {
  const n = nums.length;

  // Initialize left and right product arrays
  const leftProducts = new Array(n).fill(1);
  const rightProducts = new Array(n).fill(1);

  // Calculate left products
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    leftProducts[i] = leftProduct;
    leftProduct *= nums[i];
  }

  // Calculate right products
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    rightProducts[i] = rightProduct;
    rightProduct *= nums[i];
  }

  // Calculate the final result
  const result = [];
  for (let i = 0; i < n; i++) {
    result[i] = leftProducts[i] * rightProducts[i];
  }

  return result;
}

// Example usage:
const nums = [1, 2, 3, 4];
const answer = productExceptSelf(nums);
console.log(answer);
