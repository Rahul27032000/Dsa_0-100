const romanToInt = (s) => {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const currentSymbol = s[i];
    const currentValue = romanNumerals[currentSymbol];
    const nextValue = romanNumerals[s[i + 1]];

    if (nextValue > currentValue) {
      result += nextValue - currentValue;
      i++; // Skip the next symbol since it's already considered
    } else {
      result += currentValue;
    }
  }

  return result;
};

// Example usage:
const romanNumeral = "XV";
const integerValue = romanToInt(romanNumeral);
console.log(`The integer equivalent of ${romanNumeral} is: ${integerValue}`);
