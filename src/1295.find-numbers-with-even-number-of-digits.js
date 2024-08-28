/*
 * @lc app=leetcode id=1295 lang=javascript
 *
 * [1295] Find Numbers with Even Number of Digits
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let count = 0;

    for (let num of nums) {
        if (num.toString().length % 2 === 0) {
            count++;
        }
    }
    return count;
};
// @lc code=end
