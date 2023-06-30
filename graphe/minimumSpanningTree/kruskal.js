// detect cycle with uf
/**
 * 
 * 1 sorted edeges by ascending order
 * 2 if not group, uf, otherwise unify
 * 3 if all node visited finished
 */

function calculateDistance(array){
  const edgesDistance = [] //nodeId1, nodeId2, distance
  const len = array.length;
  for(let i=0; i<len; i++){
    const [xi, yi] = array[i];
    for(let j=i+1; j<len; j++){
      const [xj, yj] = array[j];
      const md = Math.abs(xi-xj) + Math.abs(yi-yj);
      edgesDistance.push([i, j, md])
    }
  }
  return edgesDistance
}

class UnionFind{
  constructor(n){
    this.ids = Array(n).fill((_, i)=>i);
    this.sizes = Array(n).fill(1);
    this.components = n;
  }
  // !wrong
  find(x){
   
    
  }
  
}
const points = [[0,0],[2,2],[3,10],[5,2],[7,0]];
const m = calculateDistance(points);
console.log("m", m)