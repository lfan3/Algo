
/**
 * 动态方程
 * 分三种情况
 * 长度为1： dp[i][i] = true
 * 长度为2： dp[i][i+1] = (s[i] === s[i+1]) 
 * 长度为3： dp[i][j] = (s[i] === s[j]) ^ dp[i+1][j-1]
 */
function longestPalindromeDynamic( S ) {
  // write code here
  const len = S.length;
  let max = 1;
  const dp = Array(len).fill().map(()=>Array(len).fill(0));
  // l 是length-1
  for(let l=0; l<len; l++){
    for(let j=0; j+l<len; j++){
      // 字符串长度为1或者2
      if(l<3 && (S[j] === S[j+l])){
        dp[j][j+l] = 1;
        max = Math.max(max, l+1);
      }else if((S[j] === S[j+l])){
        if(dp[j+1][j+l-1]){
          dp[j][j+l] = 1;
          max = Math.max(max, l+1);
        }
      }
    }
  }  
  return max;
}

/**
 * description
 * 列举中心，中心可能是一个 也可能是两个
 */
function longestPalindromeExpansion(arr){
  
}

function expansion(arr, center1, center2){
  
}

const m = longestPalindromeDynamic("aabcdcbaa");
console.log(m)
// "abbba" -5
