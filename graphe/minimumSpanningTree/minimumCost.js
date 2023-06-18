/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCostWithPrims = function(n, connections) {
  const matrix = Array(n+1).fill(0).map(()=>Array(n+1).fill(-1));
  let min = Number.MAX_VALUE;
  let selectedEdges = [];
  const visited = [];
  for(let connection of connections){
    const [a, b, w] = connection;
    if(a<b){
      matrix[a][b] = w
    }else{
      matrix[b][a] = w
    }
    min = Math.min(min, w);
    if(min === w){
      selectedEdges.push([a, b]);
      visited.push(a)
      visited.push(b)
    }
  }
  
  if(selectedEdges.length === 0){
    return 0;
  }
  if(selectedEdges.length ===1){
    const one = selectedEdges[0][0];
    const other = selectedEdges[selectedEdges.length-1][1];
    const oneArray = matrix[one].filter((v, i)=> !visited.includes(i));
    
    
  }
  
  
};


const n = 4;
const conections = [[1,2,5],[4,3,6]];
console.log(minimumCostWithPrims(n,conections))