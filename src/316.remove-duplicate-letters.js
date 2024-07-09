/*
 * @lc app=leetcode id=316 lang=javascript
 *
 * [316] Remove Duplicate Letters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    let l = 0;

    let longest = 0;
    let counter = new Map();

    for (let right = 0; right < s.length; right++) {
        const cur = s[right];
        if (counter.has(cur)) {
            counter.set(cur, counter.get(cur) + 1);
        }
        while (counter.get(cur) > 1) {
            counter.set(s[l], counter.get(s[l] - 1));
        }
        longest = Math.max(longest, right - l + 1);
    }
    return longest;
};
// @lc code=end
