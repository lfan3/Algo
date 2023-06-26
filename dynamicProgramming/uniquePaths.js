/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const dp = Array(m +1).fill().map(()=>Array(n+1).fill(0));
  dp[1][1] = 1;
  for(let i=1; i<=m; i++){
    for(let j=1; j<=n; j++){
      if(i===1 && j === 1) continue
      dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }
  console.log("dp",dp)
  return dp[m][n];
};

var uniquePathsDfs = function(m, n) {
  const dfs = (r, c)=>{
    if(r<1 || c<1){
      return 0;
    }
    if(r===1 && c===1){
      return 1
    }
    return  dfs(r-1, c) + dfs(r, c-1);
  }
  return dfs(m,n)
  
};



// 使用dfs
const p = uniquePathsDfs(9,11)
const p1 = uniquePaths(9,11)
console.log('p', p, p1)