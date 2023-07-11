const str1 = "  + f";
const str2 = "  12";
const str3 = "+ 1 2";
const str4 = "34 5ab";
const str5 = "2147483648";
const str6 = "word 124";

const min = -2147483648;
const max = 2147483647;

/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
  const ss = str.trim();
  const len = str.length;
  for(let i=0; i<len; i++){
    if(i===0){
      if(str[i] )
    }
  }
  
};

var isValid = (ch)=>{
  return (ch <= '9' && ch >= '0') || ch === '+' || ch === '-';
}

console.log(str1.trim(), str1)