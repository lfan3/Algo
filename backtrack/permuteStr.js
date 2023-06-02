// 通过hash来筛选 而不是 S， 优化
var permuteOp = (S)=>{
  const l = S.length;
  const result = [];
  const permutation = [];
  const hash = {};
  const keys = [];
  
  for(let i=0; i<l; i++){
    const letter = S[i];
    if(!hash[letter]){
      hash[letter] = 1;
      keys.push(letter);
    }else{
      hash[letter] = 1 + hash[letter];
    }
  }
  
  const bfs = (permutation, hash)=>{
    if(permutation.length === l){
      const str = permutation.join("");
      result.push(str);
      return;
    }
    
    for(let i=0; i<keys.length; i++){
      const key = keys[i];
      const count = hash[key];
      if(count){
        console.log("ha", hash[key],key)
        
        hash[key]--;
        permutation.push(key)
        bfs(permutation, hash);
        permutation.pop(); 
        hash[key]++;
      }
    }
  }
  
  console.log("h", hash,Object.keys(hash))
  bfs(permutation, hash, keys);
  return result;
}

var permutationStr = function(S) {
  const l = S.length;
  const result = [];
  const str = "";
  const visited = [];
  const bfs = (str, visited)=>{
      if(str.length ===l){
          if(!result.includes(str)){
              result.push(str);
          }
          return;
      }
      for(let i=0; i<l; i++){
          if(!visited.includes(i)){
              visited.push(i);
              str = str.concat(S[i]);
              console.log("str",str)
              bfs(str, visited);
              visited.pop();
              str = str.slice(0,-1);
          }
      }
  }
  bfs(str, visited);
  return result
};

 
console.log(permutationStr("qqe"));
