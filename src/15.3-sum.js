/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    if (i > 0 && a == nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let ts = a + nums[l] + nums[r];
      if (ts > 0) {
        r -= 1;
      } else if (ts < 0) {
        l += 1;
      } else {
        res.push([i, l, r]);
        l++;
        r--;
        while (nums[l] == nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }
  return res;
};

// @lc code=end

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
