
// leetcode 309
// 0-持有股票，1-不持有股票因为当天卖了股票， 2-不持有股票因为前些天卖了股票。
var maxProfit = (prices)=>{
  const days = prices.length;
  const dp = new Array(3).fill().map(()=>Array(days).fill(0));
  //dp[0][i] 表示第i天持有某只股票的最大利润
  //dp[1][i] 表示当天卖了某只股票的最大利润 
  //dp[2][i] 表示不持有股票昨天或者更早卖掉了股票
  dp[0][0] = -prices[0]
  for(let i=1; i<days; i++){
    dp[0][i] = Math.max(dp[0][i-1], dp[2][i-1]-prices[i]);
    dp[1][i] = dp[0][i-1] + prices[i];
    dp[2][i] = Math.max(dp[2][i-1],dp[1][i-1]);
  }
  return Math.max(dp[1][days-1], dp[2][days-1])
}  

const r = maxProfit([1,2,3,0,2]);