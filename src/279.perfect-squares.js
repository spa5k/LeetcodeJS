/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    const squareNums = [];

    for (let i = 0; i * i <= n; i++) {
        squareNums.push(i * i);
    }

    const dp = new Array(n + 1).fill(n + 1);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let num of squareNums) {
            if (i < num) {
                break;
            }

            dp[i] = Math.min(dp[i - num] + 1, dp[i]);
        }
    }

    return dp[n];
};
// @lc code=end
