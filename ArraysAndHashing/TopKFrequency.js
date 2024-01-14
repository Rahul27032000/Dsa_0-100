// const TopKFrequency = (nums, target) => {
//   let frequency = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (frequency.hasOwnProperty(nums[i])) {
//       frequency[nums[i]] = frequency[nums[i]] + 1;
//     } else {
//       frequency[nums[i]] = 1;
//     }
//   }

//   let arr = Object.keys(frequency);
//   console.log(arr);
//   let sortedArray = arr.map((key) => {
//     return [Number(key), frequency[key]];
//   });
//   console.log(sortedArray);
//   sortedArray = sortedArray.sort((a, b) => {
//     return b[1] - a[1];
//   });
//   console.log(sortedArray);

//   let output = [];
//   for (let i = 0; i < target; i++) {
//     output.push(sortedArray[i][0]);
//   }
//   return output;
// };

// console.log(TopKFrequency([1, 7, 1, 2, 2, 3, 3, 5, 4, 4, 4], 1));
// console.log(TopKFrequency([1, 7, 1, 2, 2, 3, 3, 5, 4, 4, 4], 3));
// console.log(TopKFrequency([7, 9, 5, 5, 1, 1, 1, 1, 2, 6, 6, 6, 6, 6, 6, 1], 3));

//-----------------------------------------------------------------

const TopKFrequency = (nums, target) => {
  let frequency = {};

  //   count the frequency of each number in nums
  for (let i = 0; i < nums.length; i++) {
    frequency[nums[i]] = (frequency[nums[i]] || 0) + 1;
  }

  //   create array of [numbers, frequency] pairs
  let arr = Object.entries(frequency).map(([key, value]) => {
    return [Number(key), frequency[key]];
  });

  //   sort the array based on frequency in descending order
  sortedArray = arr.sort((a, b) => {
    return b[1] - a[1];
  });

  //   extract the first target elements from the sorted array
  return sortedArray.slice(0, target).map(([num]) => {
    return num;
  });
};

console.log(TopKFrequency([1, 7, 1, 2, 2, 3, 3, 5, 4, 4, 4], 1));
console.log(TopKFrequency([1, 7, 1, 2, 2, 3, 3, 5, 4, 4, 4], 3));
console.log(TopKFrequency([7, 9, 5, 5, 1, 1, 1, 1, 2, 6, 6, 6, 6, 6, 6, 1], 3));
