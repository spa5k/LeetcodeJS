/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const neededNumber = target - num;
    if (map[neededNumber] !== undefined) {
      return [map[neededNumber], i];
    }
    map[num] = i;
  }
  return [];
};
// @lc code=end
console.log(twoSum([2, 7, 11, 15], 9));

// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end
