/**
 * Deletes characters from two strings based on the given costs.
 *
 * @param {number[]} costs - The costs of deleting characters.
 * @param {string} s1 - The first string.
 * @param {string} s2 - The second string.
 * @returns {number} - The minimum cost of deleting characters from both strings.
 */
function deleteString(costs, s1, s2) {
    const n = s1.length;
    const m = s2.length;

    const dp = new Array(n + 1).fill().map(() => new Array(m + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        dp[i][0] = dp[i - 1][0] + costs[s1.charCodeAt(i - 1) - 97];
    }

    for (i = 1; i <= m; i++) {
        dp[0][i] = dp[0][i - 1] + costs[s2.charCodeAt(i - 1) - 97];
    }

    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= m; c++) {
            const letter1 = s1[r - 1];
            const letter2 = s2[c - 1];

            if (letter1 === letter2) {
                dp[r][c] = dp[r - 1][c - 1];
            } else {
                dp[r][c] = Math.min(
                    dp[r][c - 1] + costs[s2.charCodeAt(c - 1) - 97],
                    dp[r - 1][c] + costs[s1.charCodeAt(r - 1) - 97]
                );
            }
        }
    }

    return dp[n][m];
}
