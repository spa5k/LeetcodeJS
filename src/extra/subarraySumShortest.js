function subArraySumShortest(nums, target) {
  let windowSum = 0;
  let left = 0;
  let length = nums.length;

  for (let right = 0; right < nums.length; right++) {
    windowSum += windowSum + nums[right];
    if (windowSum >= target) {
      length = Math.min(length, right - left + 1);
      windowSum = windowSum - nums[left];
      left++;
    }
  }
  return length;
}
