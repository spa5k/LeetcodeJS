/*
 * @lc app=leetcode id=1048 lang=javascript
 *
 * [1048] Longest String Chain
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
    const dp = new Array(words.length).fill(1);

    words.sort((a, b) => a.length - b.length);

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        for (let j = i; j < words.length; j++) {
            const wj = words[j];

            if (wj.length > word.length + 1) {
                break;
            }

            if (isPredecessor(word, wj)) {
                dp[j] = Math.max(dp[j], dp[i] + 1);
            }
        }
    }

    function isPredecessor(word1, word2) {
        if (word2.length !== word1.length + 1) return false;

        let i = 0,
            j = 0;
        while (i < word1.length && j < word2.length) {
            if (word1[i] === word2[j]) {
                i++;
            }
            j++;
        }
        return i === word1.length;
    }

    return Math.max(...dp);
};
// @lc code=end
