const map = {
  1: [2,3,4],
  2: [5],
  4:[6,7]
}

const info = [0,1,2,3,4,5,6,7]
const maxBranchSum = (graph, root)=>{
  let res = 0;
  const children = graph[root] || [];
  if(!children.length){
    return root;
  }
  
  for(let child of children){
    res = root +maxBranchSum(graph, child);
  }
  return res;
}


const maxBranch = (graph, root)=>{
  const children = graph[root] || [];
  // before loop的顺序 1,2,5，3,4,6,7
  console.log("before loop",root)
  for(let child of children){
    // before 顺序：1,2,1,1,4，4
    console.log("before",root)
    maxBranch(graph, child);
    // after 顺序 2,1,1,4,4,1
    console.log("after",root)
  }
  // end 的顺序 5,2,3,6,7,4,1
  console.log("end", root)
}
// maxBranchSum(map, 1)
maxBranch(map,1)