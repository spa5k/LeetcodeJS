/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    const result = [];
    const state = [];
    const memo = {};
    nums.sort((a, b) => a - b);
    function dfs(start) {
        if (memo[state.join(',')]) {
            return;
        }

        result.push([...state]);

        for (let i = start; i < nums.length; i++) {
            state.push(nums[i]);
            dfs(i + 1);
            state.pop();
        }

        memo[state.join(',')] = true;
    }
    dfs(0);
    return result;
};
// @lc code=end
