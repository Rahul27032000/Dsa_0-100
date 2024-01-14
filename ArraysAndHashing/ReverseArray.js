// const ReverseArray = (arr) => {
//   let start = 0;
//   let end = arr.length - 1;
//   let temp;

//   while (start < end) {
//     // logic to reverse array
//     temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;

//     // logic to progress the while loop
//     start++;
//     end--;
//   }
//   return arr;
// };

// console.log(ReverseArray([2, 6, 9, 5, 4, 1]));

// const ReverseArray = (arr) => {
//   let newArr = [];
//   let start = 0;
//   let end = arr.length - 1;
//   while (start < end) {
//     newArr.push(arr[end]);
//     console.log(end, arr[end]);

//     end--;
//   }
//   return newArr;
// };

// console.log(ReverseArray([2, 6, 9, 5, 4, 1]));

// const ReverseArray = (arr) => {
//   let newArr = [];
//   let start = 0;
//   let end = arr.length;
//   while (start < end) {
//     newArr.unshift(arr[start]);
//     console.log(start, arr[start]);

//     start++;
//   }
//   return newArr;
// };

// console.log(ReverseArray([2, 6, 9, 5, 4, 1]));

const ReverseArray = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  let temp;
  if (start < end) {
    temp = start;
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
};

console.log(ReverseArray([2, 6, 9, 5, 4]));
