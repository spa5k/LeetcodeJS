/*
 * @lc app=leetcode id=1492 lang=javascript
 *
 * [1492] The kth Factor of n
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
    let count = 0;

    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            count++;
            if (count === k) return i;
        }
    }
    return -1;
};
// @lc code=end
