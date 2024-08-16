/*
 * @lc app=leetcode id=646 lang=javascript
 *
 * [646] Maximum Length of Pair Chain
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
    const dp = new Array(pairs.length + 1).fill(1);

    dp.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });

    for (let i = 0; i < pairs.length; i++) {
        const [ai, bi] = pairs[i];
        for (let j = i; j < pairs.length; j++) {
            const [aj, bj] = pairs[j];

            if (bi < aj) {
                dp[j] += 1;
            }
        }
    }

    return Math.max(...dp);
};
// @lc code=end
