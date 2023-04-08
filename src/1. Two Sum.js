/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const needed = target - element;

    if (map[needed] !== undefined) {
      return [map[needed], index];
    }
    map[element] = index;
  }
  return [];
};

twoSum([2, 7, 11, 15], 9);
