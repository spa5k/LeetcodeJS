/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function (nums) {
    const memo = Array(nums.length)
        .fill(null)
        .map(() => Array(nums.length).fill(null));
    function maxDiff(l, r) {
        if (l === r) return nums[l];
        if (memo[l][r] !== null) {
            return memo[l][r];
        }
        const left = nums[l] - maxDiff(l + 1, r);
        const right = nums[r] - maxDiff(l, r - 1);
        memo[l][r] = Math.max(left, right);
        return memo[l][r];
    }

    return maxDiff(0, nums.length - 1) >= 0;
};

console.log('Can player 1 win:', predictTheWinner([1, 5, 233, 7]));
