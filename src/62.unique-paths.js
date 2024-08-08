/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePathsRecursion = function (m, n, memo = {}) {
    const key = m + ',' + n;
    if (memo[key]) return memo[key];
    if (m === 0 || n === 0) return 0;

    if (m === 1 && n === 1) return m * n;

    const res = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
    memo[key] = res;
    return res;
};
var uniquePathDP = function (m, n) {
    const dp = [];
    for (let i = 0; i < n; i++) {
        const mArray = new Array(m).fill(1);
        dp.push([...mArray]);
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[n - 1][m - 1];
};
// @lc code=start

/**
 * Calculates the number of unique paths from the top-left corner to the bottom-right corner of a grid.
 * @param {number} m - The number of rows in the grid.
 * @param {number} n - The number of columns in the grid.
 * @param {Object} memo - An optional memoization object to store previously calculated results.
 * @returns {number} The number of unique paths.
 */
var uniquePaths = function (m, n) {
    const dp = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0));

    console.log(dp);
};
