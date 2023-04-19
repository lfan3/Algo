function canPartition(array){
  // 如果和是单数不可以
  // 如果小于2个长度 不可以
  // knapsack 0/1 和为 sum/2
  
  const len = array.length;
  const sum = eval(array.join("+"));
  const halb = sum / 2;
  if(len<2) return false;
  if(sum%2) return false;
  
  const dp = Array(len+1).fill().map(()=>Array(halb+1).fill(false));
  
  // i is the index of array
  for(let i=1; i<len+1; i++){
    // !wrong, current's index =i-1
    const currentVal = array[i-1];
    // j is the subsum until to halb of sum
    for(let j=1; j<halb+1; j++){
      const notChooseCurrent = dp[i-1][j];
      // j < currentVal 直接用不选择当前数字的值
      // j == currentVal 取当前的数字，肯定可以得到sum=j
      // j > currentVal 看排除当前数字， 有没有sum可以是j
      dp[i][j] = notChooseCurrent;
      if(j===currentVal){
        dp[i][j] = true;
      }else if(j>currentVal){
        const withCurrent = dp[i-1][j-currentVal];
        if(withCurrent){
          dp[i][j] = true;
        }
      }
    }
  }
  // 最后这里是sum=j是否可以
  return dp[len][halb]  
}

const r = canPartition([1,2,3]);
console.log()