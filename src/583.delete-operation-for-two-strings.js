/*
 * @lc app=leetcode id=583 lang=javascript
 *
 * [583] Delete Operation for Two Strings
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const n = word1.length;
    const m = word2.length;
    const dp = new Array(n + 1).fill().map(() => new Array(m + 1).fill(0));
    // Initialize the first row and first column

    for (let i = 0; i <= n; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= m; j++) {
        dp[0][j] = j;
    }

    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= m; c++) {
            const letter1 = word1[r - 1];
            const letter2 = word2[c - 1];

            if (letter1 === letter2) {
                dp[r][c] = dp[r - 1][c - 1];
            } else {
                dp[r][c] = Math.min(dp[r - 1][c], dp[r][c - 1]) + 1;
            }
        }
    }
    return dp[n][m];
};
// @lc code=end
