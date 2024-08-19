/*
 * @lc app=leetcode id=312 lang=javascript
 *
 * [312] Burst Balloons
 */

// @lc code=start

/**
 * Calculates the maximum number of coins that can be obtained by bursting balloons.
 *
 * @param {number[]} nums - An array of integers representing the balloons.
 * @returns {number} - The maximum number of coins that can be obtained.
 */
var maxCoins = function (nums) {
    function dp(left, right) {
        if (right - left < 0) {
            return 0;
        }

        if (memo[left][right] > 0) {
            return memo[left][right];
        }

        let result = 0;

        for (let i = left; i <= right; i++) {
            const gain = nums[left - 1] * nums[i] * nums[right + 1];

            const remaining = dp(left, right - 1) + dp(left + 1, right);
            result = Math.max(gain + remaining, result);
        }

        memo[left][right] = result;
    }
    nums = [0, ...nums, 0];

    nums[0] = 1;
    const n = nums.length;
    nums[n - 1] = 1;

    const memo = Array(n).fill(() => Array(n).fill(0));

    return dp(1, n - 2);
};
// @lc code=end
