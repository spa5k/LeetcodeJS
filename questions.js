/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const sum = nums.reduce((a, b) => a + b, 0);

    if (sum % 2 !== 0) {
        return false;
    }

    const target = sum / 2;

    // Initialize a DP array of size target + 1
    const dp = new Array(target + 1).fill(false);
    dp[0] = true; // Base case: A sum of 0 is always possible with an empty subset

    // Iterate over each number in the nums array
    for (let num of nums) {
        // Iterate backward over the DP array to avoid premature updates
        for (let i = target; i >= num; i--) {
            if (dp[i - num] === true && dp[i] !== true) {
                dp[i] = dp[i] || dp[i - num];
            }
        }
    }

    return dp[target];
};

console.log('Can partition:', canPartition([1, 5, 11, 5]));
