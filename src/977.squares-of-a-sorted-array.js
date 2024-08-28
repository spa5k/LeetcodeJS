/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        nums[i] = element * element;
    }
    return nums.sort((a, b) => a - b);
};
// @lc code=end
