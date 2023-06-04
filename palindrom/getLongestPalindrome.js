
/**
 * 动态方程
 * 分三种情况
 * 长度为1： dp[i][i] = true
 * 长度为2： dp[i][i+1] = (s[i] === s[i+1]) 
 * 长度为3： dp[i][j] = (s[i] === s[j]) ^ dp[i+1][j-1]
 * 没有考虑S=“”的情况
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
  let max = 1;
  for(let i=0; i<arr.length; i++){
    // 中心是一个
    const len1 = expansion(arr, i, i);
    // 中心是两个
    const len2 = expansion(arr, i, i+1);
    const len = Math.max(len1, len2);
    if(len > max){
      max = len;
    }
  }
  return max;
}

function expansion(arr, center1, center2){
  let left = center1;
  let right = center2;

  while(left>=0 && right<arr.length-1 && arr[left] === arr[right]){
    left--;
    right++;
  }
  return right-left+1;
}

console.time("dynamic")
const m = longestPalindromeDynamic("");
console.timeEnd("dynamic");
console.time("expansion");
const n = longestPalindromeExpansion("");
console.timeEnd("expansion");
console.log(m,n)
// "abbba" -5
