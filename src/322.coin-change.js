/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
    const n = coins.length;

    if (n === 0) return 0;

    const dp = new Array(amount + 1).fill(amount + 1);

    dp[0] = 0;

    for (let i = 0; i < n; i++) {
        const coin = coins[i];
        for (let j = coin; j <= amount; j++) {
            const val = dp[j - coin] + 1;

            if (val < dp[j]) {
                dp[j] = val;
            }
        }
    }

    return dp[amount] > amount ? -1 : dp[amount];
}

// @lc code=end
