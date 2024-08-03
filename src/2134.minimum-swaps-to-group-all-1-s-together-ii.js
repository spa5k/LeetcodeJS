/*
 * @lc app=leetcode id=2134 lang=javascript
 *
 * [2134] Minimum Swaps to Group All 1's Together II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
    let totalOnes = 0;

    for (let num of nums) {
        if (num === 1) {
            totalOnes += 1;
        }
    }

    let minimumSwaps = Infinity;

    let onesCount = nums[0];
    let end = 0;

    for (let start = 0; start < nums.length; start++) {
        if (start != 0) {
            onesCount -= nums[start - 1];
        }

        while (end - start + 1 < totalOnes) {
            end++;
            onesCount += nums[end % nums.length];
        }

        minimumSwaps = Math.min(minimumSwaps, totalOnes - onesCount);
    }

    return minimumSwaps;
};
// @lc code=end
