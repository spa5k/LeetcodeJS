const KEYBOARD = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

function letterCombinationsOfPhoneNumber(digits) {
  let res = [];
  dfs(0, [], res, digits);
  return res;
}

function dfs(startIndex, currentPath, res, digits) {
  console.log("startIndex", startIndex);
  console.log("currentPath", currentPath);
  console.log("res", res);
  console.log("digits", digits);
  if (startIndex === digits.length) {
    res.push(currentPath.join(""));
    return;
  }

  let nextNumber = digits[currentPath.length];

  for (const letter of KEYBOARD[nextNumber]) {
    console.log("letter", letter);
    currentPath.push(letter);
    dfs(startIndex + 1, currentPath, res, digits);
    currentPath.pop();
  }
}

letterCombinationsOfPhoneNumber("23");
