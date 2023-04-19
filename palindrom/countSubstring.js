// leetcode 647
// 中心点拓展。找到所有中心点和序号的关系。
/**
 * i  left  right 
 * 0    0     0
 * 1    0     1
 * 2    1     1
 * 3    1     2
 * 4    2     2
 * 5    2     3
 * 6    3     3
 * let right = Math.floor(i/2) + i%2;
 * let left = Math.floor(i/2);
 */
var countSubstrings = function(s) {
  let i=0;
  let count = 0
  
  while(1){
    let right = Math.floor(i/2) + i%2;
    let left = Math.floor(i/2);
    if(!s[right] ||!s[left]) break;
    while(s[right] && s[left] && s[right] === s[left]){
      right++;
      left--;
      count++;
    }
    i++;
  }
  return count;
};

const r = countSubstrings("abcc");
console.log('r', r);