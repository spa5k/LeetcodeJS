/*
 * @lc app=leetcode id=1342 lang=javascript
 *
 * [1342] Number of Steps to Reduce a Number to Zero
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let res = 0;
  while (num !== 0) {
    if (num % 2 !== 0) {
      num -= 1;
    } else {
      num /= 2;
    }
    res += 1;
  }
  return res;
};
// @lc code=end
