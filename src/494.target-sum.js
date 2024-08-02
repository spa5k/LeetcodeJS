/*
 * @lc app=leetcode id=494 lang=javascript
 *
 * [494] Target Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

var findTargetSumWays = function (nums, target) {
    const memo = {};
    function countWays(index, currentSum) {
        const key = `${index}:${currentSum}`;

        if (key in memo) {
            return memo[key];
        }

        if (index === nums.length) {
            return currentSum == target ? 1 : 0;
        }

        const add = countWays(index + 1, currentSum + nums[index]);
        const subtract = countWays(index + 1, currentSum - nums[index]);
        const result = add + subtract;
        memo[key] = result;
        return result;
    }

    return countWays(0, 0);
};
// @lc code=end
