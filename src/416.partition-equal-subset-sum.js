/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const sum = nums.reduce((a, b) => a + b, 0);
    // If the sum is odd, it's not possible to partition into two equal subsets
    if (sum % 2 !== 0) {
        return false;
    }

    const target = sum / 2;

    const n = nums.length;

    const dp = new Array(target + 1).fill(false);

    dp[0] = true;

    for (let i = 0; i < n; i++) {
        for (let j = target; j >= nums[i]; j--) {
            dp[j] = dp[j] || dp[j - nums[i]];
        }
    }

    return dp[target];
};
// @lc code=end
