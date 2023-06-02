// 通过hash来筛选 而不是 S
var permute = (S)=>{
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

console.log(permute("qqe"));
