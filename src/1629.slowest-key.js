/*
 * @lc app=leetcode id=1629 lang=javascript
 *
 * [1629] Slowest Key
 */

// @lc code=start
/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
    let maxDuration = releaseTimes[0];
    let char = keysPressed[0];

    for (let i = 1; i < releaseTimes.length; i++) {
        if (
            releaseTimes[i] - releaseTimes[i - 1] == maxDuration &&
            keysPressed[i] > char
        ) {
            char = keysPressed[i];
        } else if (releaseTimes[i] - releaseTimes[i - 1] > maxDuration) {
            char = keysPressed[i];
            maxDuration = releaseTimes[i] - releaseTimes[i - 1];
        }
    }
    return char;
};
// @lc code=end
const x = slowestKey([1, 2], 'ba');
console.log(x);
