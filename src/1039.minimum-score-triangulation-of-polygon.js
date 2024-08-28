/*
 * @lc app=leetcode id=1039 lang=javascript
 *
 * [1039] Minimum Score Triangulation of Polygon
 */

// @lc code=start
/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function (values) {
    if (values.length === 3) {
        return values.reduce((a, b) => a * b, 0);
    }

    const n = values.length();
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    for (let l = 2; l <= n; l++) {
        for (let i = 0; i + l < n; i++) {
            const j = i + l;

            dp[i][j] = Number.MAX_SAFE_INTEGER;

            for (let k = i + 1; k < j; k++) {
                dp[i][j] = Math.min(
                    dp[i][j],
                    dp[i][k] + dp[k][j] + values[i] * values[k] * values[j]
                );
            }
        }
    }

    return dp[0][n - 1];
};
// @lc code=end
