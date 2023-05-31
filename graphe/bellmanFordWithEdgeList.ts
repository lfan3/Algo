// directed edge
class Edge{
  from:number;
  to:number;
  cost:number
  constructor(from:number, to:number, cost:number){
    this.from = from;
    this.to = to;
    this.cost = cost;
  }
}

/**
 * description
 * @v： vertice number
 * @s: start node id
 */
class BellmanFordEdgeList{
  
  public getDistance(graph:Edge[], v:number, s:number):number[]{
    const distance:number[] = Array(v).fill(Infinity);
    distance[s] = 0;
    // stop the iteration earlier
    let updated = true
    
    // first time:update v-1 times each edge
    for(let i=0; i<v && updated; i++){
        updated = false;
        for(let edge of graph){
          if(distance[edge.from] + edge.cost < distance[edge.to]){
            distance[edge.to] = distance[edge.from] + edge.cost;
          }
        }
    }
    // second time: detect negative circle
    for(let i=0; i<v; i++){
      for(let edge of graph){
        if(distance[edge.from] + edge.cost < distance[edge.to]){
          distance[edge.to] = Number.NEGATIVE_INFINITY;
        }
      }
    }
    
    return distance;
  }
}

function main(){
  const V = 8; const E = 10;const s = 0;
  const edges:Edge[] = Array(V);
  edges[0] = new Edge(0, 1, 1);
  edges[1] = new Edge(1, 2, 1);
  edges[2] = new Edge(2, 4, 1);
  edges[3] = new Edge(4, 3, -3);
  edges[4] = new Edge(3, 2, 1);
  edges[5] = new Edge(1, 5, 4);
  edges[6] = new Edge(1, 6, 4);
  edges[7] = new Edge(5, 6, 5);
  edges[8] = new Edge(6, 7, 4);
  edges[9] = new Edge(5, 7, 3);
  
  const bf = new BellmanFordEdgeList();
  const dis = bf.getDistance(edges, V, s);
  
  for(let i=0; i<V; i++){
    console.log(`The min cost from node ${s} to node ${i} is `, dis[i]);
  }
}
// tsc bellmanFordWithEdgeList.ts --target es6
main();