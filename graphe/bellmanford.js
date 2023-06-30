// @n: number of nodes
// @diatances: the shortest distance from fromNode to current node

var bellmanford = (edges, n, src)=>{
  const distances = Array(n).fill(Infinity);
  // const previous = Array(n).fill(-1);
  let updated = true;
  distances[src] = 0;
  for(let i=0; i<n-1; i++){
    updated = false;
    for(let edge of edges){
      const [from, to, dist] = edge;
      const newDist = distances[from] + dist;
      if(newDist < distances[to]){
        distances[to] = newDist;
        // previous[to] = from;
        updated = true;
      }
    }
    if(!updated){
      break;
    }
  }
  // second time to detect negative circle, but can not distinguish the node inside the negative circle or influenced by negative circle
  for(let i=0; i<n-1; i++){
    for(let edge of edges){
      const [from, to, dist] = edge;
      const newDist = distances[from] + dist;
      if(newDist < distances[to]){
        distances[to] = Number.NEGATIVE_INFINITY;
        // previous[to] = from;
      }
    }
  }
  return distances;
}

// [from, to, distance]
const edeges = [
  [0,1,4],
  [0,3,5],
  [3,2,3],
  [2,1, -10],
  [1, 3, 5]
]

console.log(bellmanford(edeges, 4, 0))
