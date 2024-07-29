/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
    let one = 1;
    let two = 1;

    for (let i = 0; i < n - 1; i++) {
        const temp = one;
        one += two;
        two = temp;

        console.log(one, two);
    }
    return one;
};
// @lc code=end
climbStairs(2);
