/*
 * @lc app=leetcode id=2340 lang=javascript
 *
 * [2340] Minimum Adjacent Swaps to Make a Valid Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSwaps = function (nums) {
    let minIndex = 0;
    let maxIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (
            nums[i] < nums[minIndex] ||
            (nums[i] === nums[minIndex] && i < minIndex)
        ) {
            minIndex = i;
        }

        if (
            nums[i] > nums[maxIndex] ||
            (nums[i] === nums[maxIndex] && i > maxIndex)
        ) {
            maxIndex = i;
        }
    }

    if (minIndex === maxIndex) {
        return 0;
    }

    if (minIndex < maxIndex) {
        return minIndex + (nums.length - 1 - maxIndex);
    } else {
        return minIndex + (nums.length - 1 - maxIndex) - 1;
    }
};
// @lc code=end
