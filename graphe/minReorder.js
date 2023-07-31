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

// bfs way
/**
 * description
 * queue to know the visited order,
 * visited to prevent visited the visited node
 * neights
 * put the 0 in the queue
 * deque node, loop its neighbours --r
 *  if neig is already visited continue
 *  see if [neigh, node] exisited in connection, if not existed, counter++
 *  puch the neight to queue
 *  add node to visited
 * repeating the dequeu process until the queue is empty.
 * 
 */

const minReorderBfs = (n, connections)=>{
  const queue = [0];
  const visited = new Set();
  const neighbours = {};
  // need it, otherwise time out
  const inDegree = {};
  let counter = 0;
  
  for(let i=0; i<n; i++){
    neighbours[i] = [];
    inDegree[i] = []
  }
  
  for(let arr of connections){
    const [a, b] = arr;
    inDegree[b].push(a);
    neighbours[a].push(b);
    neighbours[b].push(a);
  }
  while(queue.length){
    const node = queue.shift();
    visited.add(node);
    for(let neigh of neighbours[node]){
      if(visited.has(neigh)) continue;
      if(!inDegree[node].includes(neigh)) {
        counter++;
      }
      // lineral time, timeout
      // if(!connections.find(([a,b])=>a===neigh && b===node)){
      //   counter++;
      // }
      
      queue.push(neigh);
    }
  }
  return counter;
}

const c= [[0,1],[1,3],[2,3],[4,0],[4,5]]
const m =  [[1,0],[1,2],[3,2],[3,4]]
const n = [[1,0],[2,0]]
const r = minReorderBfs(6,c)
const r1 = minReorderBfs(3,n)
const r2 = minReorderBfs(5,m)
console.log("r", r, r1, r2)

/**
 * resume:
 * keyword: 结合给出的边只有n-1个，也就是说没有多余的边，两个顶点之间要么是顺着连接，要么是逆着连接，
 */