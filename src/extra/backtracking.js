function dfs(n, res, startIndex, path) {
  console.log("n", n);
  console.log("res", res);
  console.log("startIndex", startIndex);
  console.log("path", path);

  if (startIndex == n) {
    const pathCopy = path.join("");
    console.log(pathCopy);
    res.push(path.join(""));
    return;
  }
  ["a", "b"].forEach((letter) => {
    console.log("letter", letter);
    path.push(letter);
    dfs(n, res, startIndex + 1, path);
    path.pop();
  });
}

function letterCombination(n) {
  var res = [];
  dfs(n, res, 0, []);
  return res;
}

letterCombination(3);
