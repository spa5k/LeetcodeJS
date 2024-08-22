/*
 * @lc app=leetcode id=983 lang=javascript
 *
 * [983] Minimum Cost For Tickets
 */

// @lc code=start
/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
    const lastDay = days[days.length - 1];

    const dp = new Array(lastDay + 1).fill(0);

    let i = 0;
    for (let day = 1; day <= lastDay; day++) {
        if (day < days[i]) {
            dp[day] = dp[day - 1];
            continue;
        }

        i++;

        const oneDay = costs[0] + dp[day - 1];
        const sevenDay = costs[1] + (day >= 7 ? dp[day - 7] : 0);
        const thirtyDay = costs[2] + (day >= 30 ? dp[day - 30] : 0);

        dp[day] = Math.min(oneDay, sevenDay, thirtyDay);
    }

    return dp[lastDay];
};
// @lc code=end
