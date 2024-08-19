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
 */
var change = function (amount, coins) {
    if (coins.length === 0) return 0;

    const dp = new Array(amount + 1).fill(0);

    dp[0] = 1;
    console.log(`Initial dp: ${dp}`);

    for (let coin of coins) {
        console.log(`Using coin: ${coin}`);
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
            console.log(`dp[${i}] updated to ${dp[i]} using dp[${i - coin}]`);
        }
        console.log(`dp after processing coin ${coin}: ${dp} \n`);
    }
    return dp[amount];
};

// @lc code=end

console.log(change(5, [1, 2, 5]));
