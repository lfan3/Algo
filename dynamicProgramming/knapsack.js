// dynamic programming is solved by a sequence of decision
// 1/0 knapsack 一个物品要么取 要么不取。不重复
// a sack can take au maximum 8kg, what is the maximum profite
function knapSack(kg){
  const price = [1,2,5,6];
  const weight = [2,3,4,5];
  const m = price.length;
  const n = kg;
  
  const dp = new Array(m).fill().map(()=>new Array(n+1).fill(0));
  for(let i=0; i<m; i++){
    
    for(let j=0; j<n+1; j++){
      if(j===0){
        dp[i][j] = 0;
      }
      const w = weight[i];
      if(i===0){
        if(j === w){
          dp[i][j] = price[i];
        }else{
          dp[i][j] = 0;
        }
      }else{
        if(j<w){
          dp[i][j] = dp[i-1][j];
        }else{
          dp[i][j] = dp[i-1][j-w] + price[i];
        }
      }
    }
  }
  
  return dp[m-1][n];
}

knapSack(8)