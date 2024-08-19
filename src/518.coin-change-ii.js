/*
 * @lc app=leetcode id=518 lang=javascript
 *
 * [518] Coin Change II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */ 54;
var change = function (amount, coins) {
    if (coins.length === 0) return 0;

    const dp = new Array(amount + 1).fill(0);

    dp[0] = 1;

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }
    return dp[amount];
};
// @lc code=end
