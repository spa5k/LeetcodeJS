/*
 * @lc app=leetcode id=354 lang=javascript
 *
 * [354] Russian Doll Envelopes
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
    let dp = [];

    envelopes.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        } else {
            return a[0] - b[0];
        }
    });

    for (let [_, h] of envelopes) {
        let left = 0;
        let right = dp.length;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (dp[mid] < h) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        if (left == dp.length) {
            dp.push(h);
        } else {
            dp[left] = h;
        }
    }

    return dp.length;
};
// @lc code=end
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopesLinear = function (envelopes) {
    let dp = new Array(envelopes.length).fill(null);

    envelopes.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        } else {
            return a[0] - b[0];
        }
    });

    for (let [_, h] of envelopes) {
        let i = 0;
        let n = envelopes.length;

        while (i < n) {
            if (h <= dp[i]) {
                break;
            }
            i += 1;
        }

        if (i === n) {
            dp.push(h);
        } else {
            dp[i] = h;
        }
    }

    let count = 0;
    for (let d of dp) {
        if (d) {
            count++;
        }
    }
    return count;
};
