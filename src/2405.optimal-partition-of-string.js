/*
 * @lc app=leetcode id=2405 lang=javascript
 *
 * [2405] Optimal Partition of String
 */

// @lc code=start
/**
 * @param {string} input
 * @return {number}
 */
var partitionString = function (input) {
    const map = new Map();

    let count = 1;

    for (const s of input) {
        if (map.has(s)) {
            count++;
            map.clear();
        }
        map.set(s, true);
    }
    return count;
};
// @lc code=end
