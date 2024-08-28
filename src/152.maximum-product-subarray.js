/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    if (nums.length === 0) return 0;

    let maxProd = nums[0];
    let minProd = nums[0];
    let maxSoFar = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];
        if (curr < 0) {
            [maxProd, minProd] = [minProd, maxProd];
        }

        maxProd = Math.max(curr, maxProd * curr);
        minProd = Math.min(curr, minProd * curr);

        maxSoFar = Math.max(maxSoFar, maxProd);
    }

    return maxSoFar;
};
// @lc code=end
