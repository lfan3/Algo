var maxDepth = function(s) {
  const left = "(";
  const right = ")";
  const stack = [];
  let i = 0;
  let max = 0;
  while(i<s.length){
    if(s[i]===left){
      stack.push(left);
    }else if(s[i] === right){
      const depth = stack.length;
      max = Math.max(depth, max);
      stack.pop();
    }
    i++;
  }
  return max;
};

const s = "(1+(2*3)+((8)/4))+1";
const m = maxDepth(s);
console.log("m",m)