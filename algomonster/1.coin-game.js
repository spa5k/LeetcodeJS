/**
 * Calculates the maximum score that can be obtained in a coin game.
 *
 * @param {number[]} coins - An array of integers representing the values of the coins.
 * @returns {number} The maximum score that can be obtained.
 */
function coinGame(coins) {
    function maxScore(l, r) {
        // Base case: If only one coin is present, return its value
        if (l === r) {
            return coins[r];
        }

        // Calculate the sum of the coins in the range [l, r]
        var sum = 0;
        for (let i = l; i <= r; i++) {
            sum += coins[i];
        }

        // Calculate the score when choosing the leftmost or rightmost coin
        var leftPick = maxScore(l + 1, r);
        var rightPick = maxScore(l, r - 1);

        // Return the best score after choosing the optimal coin
        return sum - Math.min(leftPick, rightPick);
    }

    return maxScore(0, coins.length - 1);
}
