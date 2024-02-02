const isValidParentheses = (str) => {
  const stack = [];
  const parenthesesMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];

    if (parenthesesMap[currentChar]) {
      stack.push(parenthesesMap[currentChar]);
    } else {
      const topElement = stack.pop();

      if (currentChar !== topElement) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

const testString = "{[()]}";
console.log(isValidParentheses(testString));
