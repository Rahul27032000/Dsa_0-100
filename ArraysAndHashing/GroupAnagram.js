// const groupAnagram = (nums) => {
//   const anagramMap = {};

//   nums.forEach((word) => {
//     const sortedWord = [...word].sort().join("");
//     if (anagramMap[sortedWord]) {
//       anagramMap[sortedWord].push(word);
//     } else {
//       anagramMap[sortedWord] = [word];
//     }
//   });

//   return Object.values(anagramMap);
// };

// const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const groupedAnagrams = groupAnagram(words);
// console.log(groupedAnagrams); // Output will group anagrams: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]

// const groupAnagram = (nums) => {
//   const anagramMap = nums.reduce((acc, curr) => {
//     const sortedWord = [...curr].sort().join("");
//     if (!acc[sortedWord]) {
//       acc[sortedWord] = [curr];
//     } else {
//       acc[sortedWord].push(curr);
//     }

//     return acc;
//   }, {});

//   return Object.values(anagramMap);
// };

// const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const groupedAnagrams = groupAnagram(words);
// console.log(groupedAnagrams); // Output will group anagrams: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]

// clean code
const groupAnagram = (words) => {
  const anagramMap = words.reduce((acc, curr) => {
    // Sort characters in the current word to create a key for anagrams
    const sortedWord = [...curr].sort().join("");

    // Check if the sortedWord exists as a key in the accumulator object
    if (!acc[sortedWord]) {
      // If it doesn't exist, create a new array with the current word as the value
      acc[sortedWord] = [curr];
    } else {
      // If the key already exists, push the current word to the existing array
      acc[sortedWord].push(curr);
    }

    return acc;
  }, {});

  // Return an array of arrays containing grouped anagrams
  return Object.values(anagramMap);
};
