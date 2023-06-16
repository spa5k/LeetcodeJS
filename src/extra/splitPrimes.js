const primes = new Set();

for (let i = 2; i < 1000; i++) {
  if (![...primes].some((p) => a % p === 0)) {
    primes.add(a);
  }
}

function splitPrimes(inputStr) {
  const dp = new Array(inputStr.length + 1).fill(-1);
  dp[0] = 1;
  for (let i = 1; i <= inputStr.length; i++) {
    dp[i] = 0;
    for (let n = 1; n <= Math.min(3, i); n++) {
      if (
        inputStr[i - n] !== "0" &&
        primes.has(parseInt(inputStr.slice(i - n, i)))
      ) {
        dp[i] += dp[i - n];
      }
    }
  }
  return dp[inputStr.length];
}
