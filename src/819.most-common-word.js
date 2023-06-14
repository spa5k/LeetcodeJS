/*
 * @lc app=leetcode id=819 lang=javascript
 *
 * [819] Most Common Word
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const bannedSet = new Set(banned);
  const words = paragraph.toLowerCase().split(/\W+/);
  const map = {};
  const res = { count: 0, word: "" };

  for (const w of words) {
    if (bannedSet.has(w)) {
      continue;
    }
    if (map[w]) {
      map[w] += 1;
    } else {
      map[w] = 1;
    }
    if (map[w] > res.count) {
      res.count = map[w];
      res.word = w;
    }
  }

  return res.word;
};
// @lc code=end
const res = mostCommonWord(
  "Bob hit a ball, the hit BALL flew far after it was hit.",
  ["hit"]
);
console.log(res);
