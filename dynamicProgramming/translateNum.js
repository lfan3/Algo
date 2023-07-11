/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
  // tostirng(radix), radix par default is 10
  const nums = num.toString();
  const len = nums.length;
  const dp = Array(len).fill(0);
  dp[0] = 1;
  dp[-1] = 1;
  for(let i=1; i<len; i++){
    dp[i] = dp[i-1];
    const n = nums[i-1] * 10 + nums[i]*1;
    if(n > 9 && n<26){
      dp[i] = dp[i]+dp[i-2] 
    }
  }
  return dp[len-1];
};

// space O(1) 优化

var translateNum2 = function(num) {
  // tostirng(radix), radix par default is 10
  const nums = num.toString();
  const len = nums.length;
  let pre = 1;
  let beforPre = 1;
  let r;
  for(let i=1; i<len; i++){
    r = pre;
    const n = nums[i-1] * 10 + nums[i]*1;
    if(n > 9 && n<26){
      r = pre + beforPre
    }
    beforPre = pre;
    pre = r;
  }
  return r;
};

console.log("a",translateNum2(123))
