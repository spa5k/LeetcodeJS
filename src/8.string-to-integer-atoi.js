/*
 * @lc app=leetcode id=8 lang=js
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let sign = 1;
  let res = 0;
  let index = 0;
  let n = s.length;
  while (index < n && s[index] === " ") {
    index++;
  }

  if (index < n && s[index] === "-") {
    sign = -1;
    index++;
  } else if (index < n && s[index] === "+") {
    index++;
  }

  let INT_MAX = Math.pow(2, 31) - 1;
  let INT_MIN = -Math.pow(2, 31);

  while (index < n && !isNaN(parseInt(s[index]))) {
    let digit = s[index] - "0";

    if (
      res > Math.floor(INT_MAX / 10) ||
      (res == Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)
    ) {
      return sign == 1 ? INT_MAX : INT_MIN;
    }
    res = 10 * res + digit;
    index++;
  }
  return res * sign;
};
// @lc code=end

console.log(myAtoi("42"));
