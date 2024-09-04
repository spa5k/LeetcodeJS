/*
 * @lc app=leetcode id=2268 lang=javascript
 *
 * [2268] Minimum Number of Keypresses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minimumKeypresses = function (s) {
    const counter = new Array(26).fill(0);

    for (let char of s) {
        counter[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    counter.sort((a, b) => b - a);

    let minkey = 0;

    let keystrokes = 1;

    for (let i = 0; i < 26; i++) {
        minkey += keystrokes * counter[i];

        if ((i + 1) % 9 == 0) {
            keystrokes++;
        }
    }

    return minkey;
};
// @lc code=end
