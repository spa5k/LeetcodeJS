/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var findLongestChain = function (pairs) {
    const dp = new Array(pairs.length + 1).fill(1);

    pairs.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });

    for (let i = 0; i < pairs.length; i++) {
        const bi = pairs[i][1];

        for (let j = i; j < pairs.length; j++) {
            const aj = pairs[j][0];

            if (bi < aj) {
                dp[j] = Math.max(dp[j], dp[i] + 1);
            }
        }
    }

    return Math.max(...dp);
};

console.log(
    findLongestChain([
        [-10, -8],
        [8, 9],
        [-5, 0],
        [6, 10],
        [-6, -4],
        [1, 7],
        [9, 10],
        [-4, 7],
    ])
);
