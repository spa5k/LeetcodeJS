/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
    let dp = [];

    envelopes.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        } else {
            return a[0] - b[0];
        }
    });

    for (let [_, h] of envelopes) {
        let i = 0;
        let n = envelopes.length;

        while (i < n) {
            if (h <= dp[i]) {
                break;
            }
            i += 1;
        }

        if (i === n) {
            dp.push(h);
        } else {
            dp[i] = h;
        }
    }

    console.log(dp);

    return dp.length;
};

console.log(
    maxEnvelopes([
        [2, 100],
        [3, 200],
        [4, 300],
        [5, 500],
        [5, 400],
        [5, 250],
        [6, 370],
        [6, 360],
        [7, 380],
    ])
);
