declare var require: any
import IPQ,{PriorityQueue} from "./generalMinHeap";



class Dijkstra{
  graph: Graph;
  table: Tracker;
  pq:PriorityQueue<nodeItem>; //store the {ki:nodeName, value:distance}
  visited:NodeName[];
  constructor(graph:Graph, table:Tracker, pq:PriorityQueue<nodeItem>){
    this.graph = graph;
    this.table = table;
    this.pq = pq;
    this.visited = [];
  }
  relaxation(from: NodeName, to: NodeName){
    const dis = this.table[from].dist + this.graph[from][to];
    if(dis < this.table[to].dist){
      this.table[to].dist = dis;
      this.pq.insert({node:to, dist:dis});
      this.table[to].node = from;
    }
  }

  traverse(source: NodeName, destination:NodeName){
    // init pq and table
    this.pq.insert({node:source, dist:0});
    const edgesOfSource = this.graph[source];
    const neighbors = Object.keys(edgesOfSource);
    for(let n of neighbors){
      this.pq.insert({node:n,dist:edgesOfSource[n]});
      this.table[n] = {dist:edgesOfSource[n], node:source}
    }
    this.visited.push(source);
    
    
    // console.log('hhhw', this.getHeap(), this.pq.getSize())
    // all contected nodes 
    while(this.pq.getSize()){
      // console.log('hhhw', this.getHeap(), this.pq.getSize())
      const next = this.pq.poll();
    // console.log('hhhw2', this.getHeap(), this.pq.getSize())
      console.log('next',next);
      const src = next['node'];
      if(this.isVisited(src)) continue;
      console.log('src',src);
      
      const edgesOfSource = this.graph[src];
      const neighbors = Object.keys(edgesOfSource);
      for(let n of neighbors){
        if(this.isVisited(n)) continue;
        this.relaxation(src, n);
        // const distance = this.graph[src][n] + this.table[src].dist;
        // if(distance < this.table[n].dist){
        //   this.table[n].dist = distance;
        //   this.table[n].node = src;
        // }
      }
    }
    return table;
  }
  
  isVisited(key: NodeName){
    return this.visited.indexOf(key) !== -1;
  }

  getHeap(){
    return this.pq.getHeap();
  }
  
  getTable(){
    return this.table;
  }
  
}

// we have several different ways to prensent the graph. We will discuss these different ways perhaps make a fronted project or test the performance
// I) first DS to present grah.
//    i would like to use nested object to present graph, so i could write graph[A][B] 
//    to present the distance from nodeA to NodeB in the directed graph.
// II) Second DS table to present distance relation between Source to different Node.
// III) Third DS the minHeap, the node in the minHeap is like {ki, value}, 
//      ki represent the node's name and value reprensent the shortest dist({S:ki})

type NodeName = string | number;
type Dist = number
type EdgeDest = Record<NodeName, Dist>;
type Graph = Record<NodeName, EdgeDest>;

const graph:Graph = {
  'A':{
    'B':1,
    'C':5,
    'D':6
  },
  'B':{
    'D': 2,
    'E': 9,
    'C':1,
  },
  'C':{
    'D':3,
  },
  'D':{
    'E':4
  },
  'E':{}
}

type nodeItem = {node:NodeName,dist: Dist};
type Tracker = Record<NodeName, nodeItem>;

const table:Tracker = {
  'A':{
    dist:0,
    node:'A',
  },
  'B':{
    dist:Number.MAX_VALUE,
    node:'',
  },
  'C':{
    dist:Number.MAX_VALUE,
    node:'',
  },
  'D':{
    dist:Number.MAX_VALUE,
    node:'',
  },
  'E':{
    dist:Number.MAX_VALUE,
    node:'',
  },
}

// for lazy dijkstra il faut pas utiliser the indexedHeap.
function less(n1:nodeItem, n2:nodeItem){
  return n1.dist - n2.dist < 0;
}
const ipq = new IPQ(less);
const dij = new Dijkstra(graph, table, ipq);
const tab = dij.traverse('A', 'E');
const tb = dij.getTable();
console.log('tab', tab);