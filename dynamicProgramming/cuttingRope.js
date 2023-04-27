/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
  const dp = Array(n+1);
  dp[0]=dp[1]=0;
  dp[2] = 1;
  // minuend被减数， subtrahend减数
  for(let minuend=3; minuend<=n; minuend++){
    let max = 0;
    for(let subtrahend=1;subtrahend<minuend; subtrahend++){
      const rest = minuend-subtrahend;
      let mul = subtrahend * rest;
      let dyMul = subtrahend * dp[rest];
      let m = Math.max(mul, dyMul);
      max = Math.max(m, max);
    }
    dp[minuend] = max;
  }
  return dp[n];
};

const m = cuttingRope(2)
const n = cuttingRope(10)

console.log("m n", m,n);