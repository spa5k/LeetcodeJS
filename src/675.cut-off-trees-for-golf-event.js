/*
 * @lc app=leetcode id=675 lang=javascript
 *
 * [675] Cut Off Trees for Golf Event
 */

// @lc code=start
/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function (forest) {
  const r = forest.length;
  const c = forest[0].length;

  const sortedTress = sortTree(forest);
};

const sortedTress = (forest) => {
  const trees = [];
  for (let index = 0; index < forest.length; index++) {
    for (let index = 0; index < forest[0].length; index++) {
      if (forest[i][j] > 1) {
        trees.push([i, j, forest[i][j]]);
      }
    }
  }
  trees.sort((x, y) => x[2] - y[2]);
  return trees;
};

// @lc code=end
