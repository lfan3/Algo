const {NextArrNode} = require('../lib');
// detect cycle in a list
//detect a cycle with backtrack
var canFinish = function(numCourses, prerequisites) {
  const coursSchedule = {};
  const len = prerequisites.length;
  const nodesWithNoDependency = [];
  for(let i=0; i<prerequisites.length; i++){
    const [course, pre] = prerequisites[i];
    if(!coursSchedule[course]){
      coursSchedule[course] = [pre];
    }else{
      coursSchedule[course].push(pre);
    }
    if(!coursSchedule[pre]){
      coursSchedule[pre] = [];
    }
  }
  const keys = Object.keys(coursSchedule);
  // find out the no dependency nodes:
  for(let key of keys){
    if(coursSchedule[key].length === 0){
      nodesWithNoDependency.push(key);
    }
  }
  if(nodesWithNoDependency.length === 0){
    return false
  }
  console.log('no', nodesWithNoDependency)
  const visited = [];
  
  for(let key of nodesWithNoDependency){
    const r = dfs(coursSchedule, key, 1, visited, numCourses);
    if(!r)
      return false;
  }
  return true;
};

const dfs = (coursSchedule, key, nums, visited, targetNum)=>{
  console.log('key',key)
  if(coursSchedule[key].length === 0)
    return true;
  if(visited.indexOf(key)!==-1){
    return false;
  }
  if(nums>targetNum)
    return false;
  for(let val of coursSchedule[key]){
    visited.push(key);
    const m = dfs(coursSchedule, val, nums+1, visited, targetNum);
    visited.pop();
    if(!m)
      return false;
  }
  return true;
}

var hasCircle= (graph, visited)=>{
  if(graph.next.length === 0){
    return;
  }
  const index = visited.indexOf(graph)
  // console.log('v',visited)
  // console.log('g',graph, index)
  if(index !== -1){
    return true;
  }
  visited.push(graph);
  
  for(let i=0; i<graph.next.length; i++){
    const result = hasCircle(graph.next[i], visited);
    if(result){
      return true;
    }
    const j = visited.indexOf(graph.next[i]);
    visited.splice(j, 1);
  }
  return false;
}

function main(){
  
// 4->1->3
// 4->2->1
  const a = [[1,4],[2,4],[3,1],[3,2]]
  const b = [[0,1],[1,0]]
   
  const n0 = new NextArrNode(0);
  const n1 = new NextArrNode(1);
  const n2 = new NextArrNode(2);
  const n3 = new NextArrNode(3);
  const n4 = new NextArrNode(4);
  const n5 = new NextArrNode(5);
  const n6 = new NextArrNode(6);
  const n7 = new NextArrNode(7);
  
  n4.next.push(n1);
  n4.next.push(n2);
  n1.next.push(n3);
  n2.next.push(n3);
  // console.log('n4', n4, n4.next[0], n4.next[0].next[0])
 
  // console.log('afe', hasCircle(n4,[]));
  
  const obj = {1:[3], 2:[1], 3:[1,2], 4:[]};
  // const m = dfs(obj, 3, 0, [], 10)
  const c = canFinish(2, b);
  console.log('c',c)
 
}





main();