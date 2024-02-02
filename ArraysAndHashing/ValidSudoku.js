const isValidSudoku = (board) => {
  // Check each row
  for (let row = 0; row < 9; row++) {
    if (!isValidSet(board[row])) {
      return false;
    }
  }

  // Check each column
  for (let col = 0; col < 9; col++) {
    const column = [];
    for (let row = 0; row < 9; row++) {
      column.push(board[row][col]);
    }
    if (!isValidSet(column)) {
      return false;
    }
  }

  // Check each 3x3 sub-box
  for (let startRow = 0; startRow < 9; startRow += 3) {
    for (let startCol = 0; startCol < 9; startCol += 3) {
      const subBox = [];
      for (let row = startRow; row < startRow + 3; row++) {
        for (let col = startCol; col < startCol + 3; col++) {
          subBox.push(board[row][col]);
        }
      }
      if (!isValidSet(subBox)) {
        return false;
      }
    }
  }

  return true;
};

const isValidSet = (set) => {
  const seen = new Set();
  for (const digit of set) {
    if (digit !== "." && seen.has(digit)) {
      return false; // Duplicate found
    }
    seen.add(digit);
  }
  return true; // Set is valid
};

// Example usage:
const sudokuBoard = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(sudokuBoard)); // Output: true
