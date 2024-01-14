// const isValidAnagram = (word1, word2) => {
//   const sortedWord1 = [...word1].sort().join("");
//   const sortedWord2 = [...word2].sort().join("");

//   return sortedWord1 === sortedWord2;
// };

// console.log(isValidAnagram("one", "noe"));

const isValidAnagram = (word1, word2) => {
  const sortedWord1 = word1.split("").sort().join("");
  const sortedWord2 = word2.split("").sort().join("");

  return sortedWord1 === sortedWord2;
};

console.log(isValidAnagram("one", "noe"));
