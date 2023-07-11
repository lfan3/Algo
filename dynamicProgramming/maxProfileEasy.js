// brutforce
var maxProfit = function(prices) {
  const len = prices.length;
  let max = 0;
  
  for(let i=0; i<len; i++){
    const buy = prices[i];
    for(let j=i+1;j<len; j++){
      const profile = prices[j] - buy;
      if(profile > 0){
        max = Math.max(max, profile);
      }
    }
  }
  return max;
};

//optimize: O(n) one time loop. keep track the minPrice
var maxProfit2 = function(prices) {
  const len = prices.length;
  let minPrice = Number.MAX_VALUE;
  let max = 0;
  
  for(let i=0; i<len; i++){
    if( prices[i] < minPrice){
      minPrice = prices[i];
    }else{
      max = Math.max(max, prices[i]- minPrice);
    }
  }
  return max;
};
console.log(maxProfit2([7,1,5,3,6,4]))