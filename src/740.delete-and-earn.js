/*
 * @lc app=leetcode id=740 lang=javascript
 *
 * [740] Delete and Earn
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    const points = {};
    let max = 0;

    for (let n of nums) {
        points[n] = (points[n] || 0) + n;
        max = Math.max(max, n);
    }

    const memo = {};

    function maxPoints(num) {
        if (memo[num] != null) return memo[num];
        if (num === 0) return 0;
        if (num === 1) return points[1] || 0;

        const res = Math.max(
            maxPoints(num - 1),
            maxPoints(num - 2) + (points[num] || 0)
        );

        memo[num] = res;
        return res;
    }

    return maxPoints(max);
};
// @lc code=end
