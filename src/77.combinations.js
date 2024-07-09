/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const result = [];
    const state = [];

    function dfs(start) {
        if (state.length === k - 1) {
            result.push([...state]);
            return;
        }

        for (let i = start; i < n; i++) {
            state.push(i);
            dfs(start + i);
            state.pop();
        }
    }
    dfs(0);
    return result;
};
// @lc code=end
