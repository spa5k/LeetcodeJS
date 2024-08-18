/*
 * @lc app=leetcode id=673 lang=javascript
 *
 * [673] Number of Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
    if (nums.length === 0) return 0;
    const dp = new Array(nums.length + 1).fill(1);

    for (let i = 1; i <= nums.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    const count = {};

    for (let d of dp) {
        if (!count[d]) {
            count[d] = 1;
        } else {
            count[d] += 1;
        }
    }

    return Math.max(...Object.values(count));
};
// @lc code=end
