var permute = (S)=>{
  const l = S.length;
  const result = [];
  const permutation = [];
  const hash = {};
  
  for(let i=0; i<l; i++){
    const letter = S[i];
    if(!hash[letter]){
      hash[letter] = 1;
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
    for(let i=0; i<l; i++){
      
    }
    
  }
}