/*
 * @lc app=leetcode id=1710 lang=javascript
 *
 * [1710] Maximum Units on a Truck
 */

// @lc code=start
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  let ans = 0;
  let boxesLeft = truckSize;
  boxTypes.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < boxTypes.length; i++) {
    let [box, units] = boxTypes[i];
    box = Math.min(boxesLeft, box);
    ans += box * units;
    boxesLeft -= box;

    if (boxesLeft === 0) {
      break;
    }
  }

  return ans;
};
// @lc code=end
const x = maximumUnits(
  [
    [1, 3],
    [2, 2],
    [3, 1],
    [1, 1],
  ],
  4
);
