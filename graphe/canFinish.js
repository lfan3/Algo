// topological sort to solve the problem with dependency

/**
 * @param {number} numCourses, 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
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
  console.log('a', coursAdjacentList)
 
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


function main(){
  const a = [[0,1],[1,2],[2,3],[1,4]]
  const b = [[0,1],[1,0]]
  const c = [[1,2],[2,3],[3,4],[4,2], [1,5]]
  
  console.time('a');
  const r = canFinishDfs(6,c);
  console.timeEnd('b');
  // console.log(r);
  // const d = [1]
  // console.log(d.includes(1));
}

main()