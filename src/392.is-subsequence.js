/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s.length > t.length) return false;
    const n = s.length;
    const m = t.length;
    const dp = new Array(n + 1).fill().map(() => new Array(m + 1).fill(false));

    for (let i = 0; i <= m; i++) {
        dp[0][i] = true;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            const lettera = s[i - 1];
            const letterb = t[j - 1];

            if (lettera === letterb) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = dp[i][j - 1];
            }
        }
    }
    return dp[n][m];
};
// @lc code=end
