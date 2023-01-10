/*
示例 1:

输入: "(()"
输出: 2
解释: 最长有效括号子串为 "()"
示例 2:

输入: ")()())"
输出: 4
解释: 最长有效括号子串为 "()()"
*/
// not with stack
const isValid = (s)=>{
  let count = 0;
  for(let i=0; i<s.length; i++){
    if(s[i] === '(')
      count++;
    if(s[i] === ')')
      count--;
    //key step: if there are more right parantese, it is false  
    if(count < 0)
      return false;
  }
  return !count
}
// time:O(n^2);  space:O(1)
const longestValidParentheses = (s)=>{
  let max = 0;
  for(let j=0; j<s.length; j++){
    let count = 0;
    for(let i=j; i<s.length; i++){
      if(s[i] === '(')
        count++;
      if(s[i] === ')')
        count--;
      //key step: if there are more right parantese, it is false  
      if(count === 0)
        max = Math.max(max, i-j+1);
      if(count < 0)
        break;
    }
  }
  return max;
}

// 动态规划
const longestValidParenthesesDp = (s)=>{
  const dp = Array(s.length).fill(0);
  for(let i=0; i<s.length; i++){
    if(s[i] === ')'){
      //()
      if(i-1>= 0 && s[i-1] === '('){
          dp[i] = 2;
          if(i-2>=0){
            dp[i] = dp[i-2] + 2
          }
      }
      // ))
      if(s[i-1] && s[i-1] === ')'){
        const index = i - dp[i-1] -1;
        if(index >=0){
          // (())
          if(s[index] === '(')
            dp[i] =  dp[i-1] + 2;
          else
            dp[i] = dp[i-1];
          //)(()) 
          if(index-1>=0)
            dp[i] = dp[i] + dp[index-1];
        }
      }
    }
  }
  console.log(dp);
  return dp[s.length-1]
}
const a = isValid('()')
const b = isValid(')()())');
const c = longestValidParentheses('()');
const d = longestValidParentheses(')()())');
const f = longestValidParenthesesDp('()');
const k = longestValidParenthesesDp(')()())');
console.log(a, b, c, d, f,k)