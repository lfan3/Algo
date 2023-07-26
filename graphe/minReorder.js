/**
 * description
 * 入度array inDegree
 * 出度array outDegree
 * 计数器 counter
 * 队列queue
 * 已经访问的节点visited
 * 初始化 queue 访问0节点对应的 outDegree开始， 把所有0 节点 outDegree放入 0 节点对应的 inDegree中。并把改变后的inDegree中的节点作为 queue 的初始值。并把 0 节点放入visited中。并更新count
 * dequeu 节点 node。访问node inDegree，将visited节点从 inDegree中去除，访问node outDegree，将visited节点从 outDegree中去除，count += 清除完visited节点的outDegree的元素个数。
 * 重复上述操作 知道queue.length == 0
 * 
 * dequeu 依次重复前一行的操作 直到queue中没有值
 */
var minReorder = function(n, connections) {
  const inDegree = {};
  const outDegree = {};
  const queue = [];
  let counter = 0;
  const visited = [];
  
  for(let i=0; i<n; i++){
    inDegree[i] = []
    outDegree[i] = []
  }
  
  for(let arr of connections){
    const [a, b] = arr;
    outDegree[a].push(b)
  }
  
  for(let arr of connections){
    const [a, b] = arr;
    inDegree[b].push(a)
  }
  
  counter += outDegree[0].length;
  queue.push( ...inDegree[0], ...outDegree[0])
  visited.push(0);
  while(queue.length){
    const node = queue.shift()
    
    const ind = inDegree[node].filter(v => !visited.includes(v));
    const outd = outDegree[node].filter(v => !visited.includes(v));
    visited.push(node)
    inDegree[node] = [...ind, ...outd];
    counter += outd.length;
    queue.push(...inDegree[node]);
  }
  return counter;
};

const c= [[0,1],[1,3],[2,3],[4,0],[4,5]]
const m =  [[1,0],[1,2],[3,2],[3,4]]
const n = [[1,0],[2,0]]
const r = minReorder(3,n)
console.log("r", r)