function isPalindrome(str){
  const len = str.length
  if(len<=1){
    return true
  }
  if(str.charAt(0) === str.charAt(len-1)){
    return isPalindrome(str.substring(1, len-1))
  }
  return false;
}

const a = 'sdms';
const m = isPalindrome(a);
console.log(m)




