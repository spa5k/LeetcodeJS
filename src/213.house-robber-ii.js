/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    function robNormally(nums) {
        if (nums.length === 1) return nums[0];

        const dp = new Array(nums.length).fill(null);
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        for (let i = 2; i < nums.length; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
        }

        return dp[nums.length - 1];
    }

    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];

    const rob1 = robNormally(nums.slice(1));

    const rob2 = robNormally(nums.slice(0, -1));

    return Math.max(rob1, rob2);
};
// @lc code=end
