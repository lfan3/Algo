// topological sort to solve the problem with dependency
// 题解：https://leetcode.cn/problems/course-schedule/solutions/359392/ke-cheng-biao-by-leetcode-solution/

/**
 * @param {number} numCourses, 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
 * @param {number[][]} prerequisites
 * @return {boolean}
 * [[c1, c0], [c2,c1]] 则 c0->c1->c2 先学c0 再学c1 再学 c2
 */
var canFinishBfs = function(numCourses, prerequisites) {
  const coursAdjacentList = [];
  const coursDependencyNum = [];
  const queue = [];
  const visitedSet = new Set();
  const len = prerequisites.length;
  for(let i=0; i<len; i++){
    const [course, pre] = prerequisites[i];
    if(!coursAdjacentList[course]){
      coursAdjacentList[course] = [pre];
      coursDependencyNum[course] = 1;
    }else{
      coursAdjacentList[course].push(pre);
      coursDependencyNum[course] += 1;
      const index = queue.indexOf(+course)
      if(index !== -1){
        queue.splice(index, 1);
      }
    }
    if(!coursAdjacentList[pre]){
      coursAdjacentList[pre] = [];
      coursDependencyNum[pre] = 0;
      queue.push(+pre);
    }
  }
  console.log('a', coursAdjacentList, "q",queue)
 
  if(!queue.length && prerequisites.length){
    return false;
  }
  while(queue.length){
    const dequeue = queue.shift();
    visitedSet.add(dequeue);
   
    for(let [key, val] of Object.entries(coursAdjacentList)){
      if(val.includes(dequeue)){
        coursDependencyNum[key] -= 1;
        if(!coursDependencyNum[key]){
          queue.push(+key);
        }
      }
    }
  }
  if(visitedSet.size === Object.keys(coursAdjacentList).length){
    return true;
  }else{
    return false;
  }
};

// 改变上面 coursAdjacentList依赖方向
// tip: memo the graphe
var canFinishDfs = function(numCourses, prerequisites) {
  const coursAdjacentList = Array(numCourses).fill().map(()=>new Array());
  const visitedSet = new Set();
  // optimization
  const memo = [];
  // wrong way, the [] in each Array will be the same one
  // const coursAdjacentList = Array(numCourses).fill([])
  const len = prerequisites.length;
  
  const generateAdjList = (prerequisites)=>{
    for(let i=0; i<len; i++){
      // console.log('aaa', prerequisites, prerequisites[i])
      const [c, d] = prerequisites[i];
      coursAdjacentList[c].push(d);
    }
  }
  const dfs = (coursId)=>{
    if(visitedSet.has(coursId)) return false;
    if(!coursAdjacentList[coursId].length) return true;
    
    const list = coursAdjacentList[coursId];
    visitedSet.add(coursId);
    for(let cours of list){
      if(memo[cours]) continue;
      if(!dfs(cours)){
        console.log(cours,'w')
        return false;
      }else{
        memo[cours] = true;
      }
      // in considering of disconnted node, we need to check every node in the tree again. 
      // so we have many iterations and we need to have the clean the visitSet
      visitedSet.delete(coursId);
    }
    return true;
  }
  
  const check = ()=>{
    generateAdjList(prerequisites);
    for(let i=0; i<numCourses; i++){
      if(!dfs(i)){
        return false;
      }
    }
    return true;
  }
  
  return check();
  
}



//adjacentList1参考图 classSchedule.png: adjacentlist1 下标 index， index+1对应了C1里面的数字。比如 index=0时，对应C1, 下面adjacentList1 ["C8","C3"]， 代表学了C1之后可以学习C8和C3
const adjacentList1 = [[8,3],[3,5],[4], [6,7], [4, 6], [], [], [9], [7]];
//adjacentList2参考graph1.drawio graph A 依赖关系
const adjacentList2 = [[],[],[1,2], [3,5], [2],[4,5],[9,4],[1], [8]];
// hashmap + queue O(m+n)广度搜索时间复杂度 O(m+n)空间复杂度，M字典 N queue长度， n课程数，m先修课程的要求数

//！！！ 重点是动态 缩减依赖。每完成一个先修课程 就减少依赖这个先修课的课程的先修课数量。所以adjacentList 要从先修课程指向课程， 这样去掉一个先修课程 就可以快速找到依赖这门先修课程的其他课程。

function topologicalOrderBfs1(graph, hash){
  const queue = [];
  for(let [key, val] of hash.entries()){
    if(val === 0){
      queue.push(key);
    }
  }
  while(queue.length){
    const deq = queue.shift();
    const items = graph[deq-1];   
    const itemsLen = items.length;
    for(let i=0; i<itemsLen; i++){
      const key = items[i];
      const val = hash.get(key);
      hash.set(key, val-1);
      if(val-1 === 0){
        queue.push(key);
      }
    }
  }
  // 检查hash 都为0 并且queue也是空, 如果不是无法完成课程
  console.log("1", hash,queue)
}
function getHash(graph){
  const hash = new Map();
  const size = graph.length;
  for(let i=0; i<size; i++){
    const len = graph[i].length;
    hash.set(i+1, len);
  }
  console.log("hash", hash)
  return hash;
}


function main(){
  const a = [[0,1],[1,2],[2,3],[1,4]]
  const b = [[0,1],[1,0]]
  const c = [[1,2],[2,3],[3,4],[4,2], [1,5]]
  
  console.time('a');
  const r = canFinishBfs(4,a);
  console.timeEnd('a');
  // console.log(r);
  // const d = [1]
  // console.log(d.includes(1));
  
  
  const hash= getHash(adjacentList2)
  topologicalOrderBfs1(adjacentList1, hash)
}

main()