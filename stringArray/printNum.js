/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
  let str = '';
  let arr = [];
  for(let i=0; i<n; i++){
   str =  str.concat('9')
  }
  const max = parseInt(str);
  for(let i=1; i<=max; i++){
    arr.push(i)
  }
  return arr;
};

const a = printNumbers(2);
console.log(a);