/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const dp = Array(n+1).fill(0);
  dp[1] = 1;
  let k = [];
  // wrong: i from 1 not 0
  for(let i=2; i<n+1; i++){
    let min = Number.MAX_VALUE;
    let j=1;
    // wrong: j*j<=i not j*j<=n
    // j 需要从1开始。12 = 4+4+4； 12=9+1+1+1
    while(j*j <= i){
      k.push(j);
      min = Math.min(min, dp[i-j*j]);
      j++;
    }
    dp[i] = min + 1;
  }
  return dp[n];
};

const m = numSquares(12);