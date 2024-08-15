/*
 * @lc app=leetcode id=368 lang=javascript
 *
 * [368] Largest Divisible Subset
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
    const dp = new Array(nums.length).fill(0).map(() => []);

    for (let i = 1; i <= nums.length; i++) {
        for (j = i; j > 0; j--) {
            if (nums[j] % nums[i] == 0 || nums[i] % nums[j] == 0) {
                dp[j] = [...dp[j], nums[i]];
            }
        }
    }

    console.log(dp);
};
// @lc code=end
