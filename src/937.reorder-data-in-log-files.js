/*
 * @lc app=leetcode id=937 lang=javascript
 *
 * [937] Reorder Data in Log Files
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {string[]}
 */

var reorderLogFiles = function (logs) {
  const digitLogs = [];
  const letterLogs = [];

  for (const log of logs) {
    if (isDigitLog(log)) {
      digitLogs.push(log);
    } else {
      letterLogs.push(log);
    }
  }

  letterLogs.sort((a, b) => {
    const aStr = a.slice(a.indexOf(' ') + 1);
    const bStr = b.slice(b.indexOf(' ') + 1);

    if (aStr === bStr) {
      return a.localeCompare(b);
    }

    if (aStr > bStr) {
      return true;
    }
    return false;
  });
  return [...letterLogs, ...digitLogs];
};

const isDigitLog = (log) => {
  // remove first word and check if its string
  const logBody = log.slice(log.indexOf(' ') + 1);
  // check if log body is digit
  if (logBody[0] >= 0 && logBody[0] <= 9) {
    return true;
  }
  return !/[a-zA-Z]/.test(logBody);
};

const isLetterLog = (log) => {
  if (log.startsWith('let')) {
    return true;
  }
};
// @lc code=end

console.log(reorderLogFiles(['1 n u', 'r 527', 'j 893', '6 14', '6 82']));
