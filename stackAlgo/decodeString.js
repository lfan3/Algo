/**
 * @param {string} s
 * @return {string}
 * if digit, change the digit to number
 * if char continue
 * if [ put on stack
 * if ] pop off the stack
 */
var decodeString = function(s) {
  
  const unfold = (times, str)=>{
    let tmp = str;
    for(let i=1; i<times; i++){
      tmp = tmp.concat(str);
    }
    return tmp;
  }
  // analyse the text, call unfold, recursively called
  const analyser = (str)=>{
    let i = 0;
    let len = str.length;
    let res = "";
    let multi = "";
    // “[” 的时候每次将数字前面的str和数字存在stack里面。
    // “]” 的时候，出栈
    const stack = [];
    
    
    while(i< len){
      // wrong: 有可能是 120 这样的。需要得到完整数字
      if(Number.isInteger(+str[i])){
        multi = multi.concat(str[i]);
      }
      if((/[a-zA-Z]/).test(str[i])){
        res = res.concat(str[i]);
        multi = '';
      }
      if(str[i] === "["){
        stack.push([+multi, res]);
        res = "";
        // wrong： multi 需要在非字母的时候清理干净。同时在【 的时候需要push 到stack 之后再清理
        multi="";
      }
      if(str[i] === ']'){
        const tmp = stack.pop();
        const part = unfold(tmp[0], res);
        res = tmp[1].concat(part);
      }
      i++;
    }
    return res;
  }
  
  return analyser(s);
};

function main(){
  const c = decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef");
  console.log('c',c)
}

main()