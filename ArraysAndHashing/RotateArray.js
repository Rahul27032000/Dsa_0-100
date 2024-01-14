// const rotateArrayByKRight = (arr, k) => {
//   let start = 0;
//   let temp;
//   console.log(arr);
//   while (k > start) {
//     temp = arr.shift();
//     arr.push(temp);
//     k--;
//   }
//   return arr;
// };

// console.log(rotateArrayByKRight([1, 2, 3, 4, 5], 4));

const rotateArrayByKRight = (arr, k) => {
  let temp;
  for (let i = 0; i < k; i++) {
    temp = arr.shift();
    arr.push(temp);
  }
  return arr;
};
console.log(rotateArrayByKRight([1, 2, 3, 4, 5], 4));

// ----------------------------------------------------------------------------------

// const rotateArrayByKLeft = (arr, k) => {
//   let start = 0;
//   let temp;
//   while (k > start) {
//     temp = arr.pop();
//     arr.unshift(temp);
//     start++;
//   }
//   return arr;
// };
// console.log(rotateArrayByKLeft([1, 2, 3, 4, 5], 4));

const rotateArrayByKLeft = (arr, k) => {
  let temp;
  for (let i = 0; i < k; i++) {
    let temp = arr.pop();
    arr.unshift(temp);
  }
  return arr;
};
console.log(rotateArrayByKLeft([1, 2, 3, 4, 5], 4));
