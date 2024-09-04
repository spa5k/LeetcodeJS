/*
 * @lc app=leetcode id=2055 lang=javascript
 *
 * [2055] Plates Between Candles
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function (s, queries) {
    const n = s.length;

    const prefixSum = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + (s[i] === '*' ? 1 : 0);
    }

    const nearestLeftCandle = new Array(n);
    const nearestRightCandle = new Array(n);

    let lastCandleIndex = -1;

    for (let i = 0; i < n; i++) {
        if (s[i] === '|') lastCandleIndex = i;
        nearestLeftCandle[i] = lastCandleIndex;
    }

    let nextCandleIndex = -1;

    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === '|') nextCandleIndex = i;
        nearestRightCandle[i] = nextCandleIndex;
    }

    const res = new Array(queries.length);

    for (let i = 0; i < queries.length; i++) {
        const query = queries[i];

        const start = nearestRightCandle[query[0]];
        const end = nearestLeftCandle[query[1]];
        if (start !== -1 && end !== -1 && start < end) {
            res[i] = prefixSum[end] - prefixSum[start + 1];
        } else {
            res[i] = 0;
        }
    }

    return res;
};
// @lc code=end
