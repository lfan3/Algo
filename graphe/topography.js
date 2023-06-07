/**
 * 
 * dfs topological sort algo
 * pick an unvisited node
 * dfs on unvisited nodes
 */
//adjacentList2参考graph1.drawio graph A 依赖关系
const adjacentList2 = [[],[],[1,2], [3,5], [2],[4,5],[9,4],[1], [8]];
const ad = [[2], [3], [4], [2]]

// 对于有circle的不好用
function topsort(graph){
  const N = graph.length;
  const visited = Array(N).fill(false);
  const order = [];
  
  const dfs = (nodeId, visited, order, graph)=>{
    visited[nodeId-1] = true;
    const edges = graph[nodeId-1];
    for(let edge of edges){
      if(!visited[edge-1]){
        dfs(edge, visited,order,graph);
      }
    }
    order.push(nodeId);
  }
  
  for(let nodeId=1; nodeId<=N; nodeId++){
    if(!visited[nodeId-1]){
      dfs(nodeId,visited,order, graph);
    }
  }
  return order;
}

function main(){
  const or = topsort(ad)
  console.log(or);
  
}

main()

