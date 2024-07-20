/*
 * @lc app=leetcode id=1605 lang=javascript
 *
 * [1605] Find Valid Matrix Given Row and Column Sums
 */

// @lc code=start
/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
    const m = rowSum.length;
    const n = colSum.length;
    const matrix = Array.from({ length: m }, () => Array(n).fill(0));

    let i = 0,
        j = 0;

    while (i < m && j < n) {
        const minValue = Math.min(rowSum[i], colSum[j]);
        matrix[i][j] = minValue;
        rowSum[i] -= minValue;
        colSum[j] -= minValue;

        if (rowSum[i] === 0) {
            i++;
        }
        if (colSum[j] === 0) {
            j++;
        }
    }

    return matrix;
};
// @lc code=end
