// leetcode 841
// 这个也可以用广度搜索，下次试一下
// visited [], if visited.length === rooms.length , we can visite all
// dfs
var canVisitAllRooms = function(rooms) {
  const visited = new Set()
  const size = rooms.length;
  
  const dfs = (i, rooms)=>{
    visited.add(i);
    
    if(visited.size === size) return true;
    
    const keys = rooms[i];
    const len = keys.length;
   
    for(let k=0; k<len; k++){
      const key = keys[k];
      if(!visited.has(key)){
        if(dfs(key, rooms)){
          return true;
        }
      }
    }
    return false;
  }
  
  return dfs(0, rooms);
};

const rooms = [[1],[2],[3],[]];
const rooms2 = [[1,3],[3,0,1],[2],[0]]
const r = canVisitAllRooms([[]]);
console.log("r",r);