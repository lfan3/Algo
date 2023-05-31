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
