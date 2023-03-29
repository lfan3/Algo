/**
 * description
 * 无向 无权重 图 with adjacencyList
 */

type NodeId = number | string;

interface GraphInterface{
  addVertex:(vertex:NodeId)=>void;
  removeVertex:(vertex:NodeId)=>void;
  addEdge:(source:NodeId, destination:NodeId)=>void;
  removeEdge:(source:NodeId, destination:NodeId)=>void;
}

type Adjl = Record<NodeId, NodeId[]>;

class Graph {
  adjacencyList:Adjl;
  queue: NodeId[];
  visited: NodeId[];
  
  constructor(){
    this.adjacencyList = {};
    this.queue = [];
    this.visited = [];
  }
  addVertex(vertex:NodeId){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = [];
    }
  }
  removeVertex(vertex:NodeId){
    delete this.adjacencyList[vertex];
    const keys = Object.keys(this.adjacencyList)
    for(let key of keys){
      // ?how to remove fastly an element from array
      const index =this.adjacencyList[key].indexOf(vertex);
      if(index !== -1){
        this.adjacencyList[key].splice(index, 1);
      }
    }
  }
  addEdge(source:NodeId, destination:NodeId){
    if(this.adjacencyList[source].indexOf(destination) === -1){
      this.adjacencyList[source].push(destination);
    }
    if(this.adjacencyList[destination].indexOf(source) === -1){
      this.adjacencyList[destination].push(source);
    }
  };
  removeEdge(source:NodeId, destination:NodeId){
    const index1 = this.adjacencyList[source].indexOf(destination);
    const index2 = this.adjacencyList[destination].indexOf(source);
    if(index1!== -1){
      this.adjacencyList[source].splice(index1, 1);
    }
    if(index2 !== -1){
      this.adjacencyList[destination].splice(index2,1);
    }
  };
  // recheck
  //easy to mistake: the moment to push this.queue and this.visited
  bfs(){
    const nodes = Object.keys(this.adjacencyList);
    this.queue.push(+nodes[0]);
    this.visited.push(+nodes[0]);
    while(this.queue.length){
      const node = this.queue.shift() as NodeId;
      for(let n of this.adjacencyList[node]){
        if(this.visited.indexOf(+n) === -1){
          this.queue.push(+n);
          this.visited.push(+n);
        }
        console.log(this.visited, this.queue)
      }
    }
    return this.visited;
  }
}

function main(){
  const graph = new Graph();
  graph.addVertex(1);
  graph.addVertex(2);
  graph.addVertex(4);
  graph.addVertex(3);
  
  graph.addEdge(1,2);
  graph.addEdge(3,2);
  graph.addEdge(1,4);
  graph.addEdge(3,4);
  
  // graph.removeEdge(1,2)
  // graph.removeVertex(3)
  const g = graph.bfs();
  console.log('g', g)
}

main();