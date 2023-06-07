// 八的倍数分割字符串
// padEnd() new knowlege
function seperateStr8(str){
  const arr = [];
  let pre = 0;
  for(let i=0; i<str.length; i++){
    if((i+1)%8===0){
      const sub = str.substring(pre, i+1);
      pre = i+1;
      arr.push(sub)
    }
  }
  if(pre<str.length){
    const sub = str.substring(pre);
    arr.push(sub.padEnd(8, '0'))
  }
  return arr.join("\n")
}

const k = seperateStr8("01234567801234567")
console.log(k)