/*
 * @lc app=leetcode id=1143 lang=javascript
 *
 * [1143] Longest Common Subsequence
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const n = text1.length;
    const m = text2.length;

    const dp = new Array(n + 1).fill().map(() => new Array(m + 1).fill(0));

    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= m; c++) {
            const letter1 = text1[r - 1];
            const letter2 = text2[c - 1];

            if (letter1 === letter2) {
                dp[r][c] = dp[r - 1][c - 1] + 1;
            } else {
                dp[r][c] = Math.max(dp[r - 1][c], dp[r][c - 1]);
            }
        }
    }
    return dp[m][n];
};
// @lc code=end
// if (i === 0 || j === 0) {
//     dp[i][j] = 0;
// } else if (text1[i - 1] === text2[j - 1]) {
//     dp[i][j] = dp[i - 1][j - 1] + 1;
// } else {
//     dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
// }
