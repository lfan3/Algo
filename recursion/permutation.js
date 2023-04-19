function permutation(arr){
  const visited = [];
  const len = arr.length;
  const result = [];
  const dfs = (pos, tmp)=>{
    if(tmp.length ===len){
      result.push(tmp.map(i=>i));
      return;
    }
    for(let item of arr){
      if(!visited.includes(item)){
        visited.push(item);
        tmp.push(item);
        dfs(pos+1, tmp);
        tmp.pop();
        visited.pop();
      }
    }
  }
  dfs(0, []);
  console.log(result)
}

permutation([1,2,3])