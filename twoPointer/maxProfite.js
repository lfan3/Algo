/**
 * @param {number[]} prices
 * @return {number}
 * leetcode 121
 */
var maxProfit = function(prices) {
  let max = 0;
  let l = 0;
  let r = 1;
  while(r<prices.length){
    if(prices[r]<prices[l]){
      l = r;
    }
    max = Math.max(prices[r]-prices[l], max);
    r++;
  }
  return max;
};

const m = maxProfit([7,1,3,9,19,6,4])
console.log(m)

