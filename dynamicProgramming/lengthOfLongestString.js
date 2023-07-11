/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  const len = s.length;
  let maxLen = 0;
  let cache = "";
  let index = 0;
  
  while(index < len){
    const i = cache.indexOf(s[index]);
    if(i === -1){
      cache = cache.concat(s[index]);
      if(cache.length > maxLen){
        maxLen = cache.length;
      }
    }else{
      cache = cache.substring(i+1).concat(s[index])
    }
    index++
  }
  return maxLen;
};

// wrong 不是这样的
var lengthOfLongestSubstringWrong = function(s) {
  const len = s.length;
  let maxLen = 0;
  let cache = "";
  let index = 0;
  
  while(index < len){
    // search 有特殊字符的问题
    if(cache.search(s[index]) === -1){
      cache = cache.concat(s[index]);
      if(cache.length > maxLen){
        maxLen = cache.length;
      }
    }else{
      cache = s[index]
    }
    index++
  }
  return maxLen;
};

