/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const dp = Array.from({ length: word1.length + 1 }, () =>
        Array(word2.length + 1).fill(-1)
    );

    function dfs(m, n) {
        if (m === 0) return n;
        if (n === 0) return m;
        if (dp[m][n] !== -1) return dp[m][n];

        const cost = word1.charAt(m - 1) === word2.charAt(n - 1) ? 0 : 1;
        dp[m][n] = Math.min(
            dfs(m - 1, n) + 1,
            dfs(m, n - 1) + 1,
            dfs(m - 1, n - 1) + cost
        );

        return dp[m][n];
    }
    return dfs(word1.length, word2.length);
};
// @lc code=end
