/*
 * @lc app=leetcode id=486 lang=javascript
 *
 * [486] Predict the Winner
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function (nums) {
    function maxScore(l, r) {
        if (l === r) return nums[l];

        const pickLeft = nums[l] - maxScore(l + 1, r);
        const pickRight = nums[r] - maxScore(l, r - 1);

        return Math.max(pickLeft, pickRight);
    }

    return maxScore(0, nums.length - 1) >= 0;
};
// @lc code=end
