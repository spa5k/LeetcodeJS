/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let left = 0;
  let res = 0;
  let right = 0;
  while (right < s.length) {
    if (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    } else {
      set.add(s[right]);
      res = Math.max(res, right - left + 1);
      right++;
    }
  }
  return res;
};
// @lc code=end
