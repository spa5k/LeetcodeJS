/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
  const arr = new Array(nums.length + 1).fill(-1);

  for (const element of nums) {
    arr[element] = element;
  }

  let indexes = [];
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] === -1) {
      indexes.push(index);
    }
  }

  return indexes;
};
// @lc code=end
