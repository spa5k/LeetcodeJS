/*
 * @lc app=leetcode id=2870 lang=javascript
 *
 * [2870] Minimum Number of Operations to Make Array Empty
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let counter = new Map();
    let res = 0;

    for (let num of nums) {
        counter.set(num, (counter.get(num) || 0) + 1);
    }

    for (let c of countMap.values()) {
        if (c === 1) {
            return -1;
        }
        res += Math.floor(c / 3) + (c % 3 === 0 ? 0 : 1);
    }
    return res;
};
// @lc code=end
