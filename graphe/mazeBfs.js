// 可以trace路线，dijastra变形。
// 变量：distance: [distancTrace, nodekey] heap:这里用sort来搞 [[nodekey, distancTrace]]
// 先访问一个节点：init distanceMap
const bfsMaze = (grid, rows, cols, sr, sc, er, ec)=>{
  const fakeHeap = [[sr*10+sc, 0]];
  const dr = [0,0, -1, 1];
  const dc = [1,-1, 0, 0];
  let reached = false;
  let trace = {};
  
  const visited = Array(rows).fill(0).map(()=>Array(cols).fill(0));
  // to optimise: distanc
  const distance = Array(rows).fill(0).map(()=>Array(cols).fill(10000));
  
  // 初始化
  visited[0][0] = 1;
  distance[0][0] = 0;
  trace[0] = -1;  
  while(fakeHeap.length && !reached){
    fakeHeap.sort((a,b)=>a[1] - b[1]);
    const nodeKey = fakeHeap.shift()[0];
    const der = Math.floor(nodeKey / 10);
    const dec = nodeKey % 10;
    console.log("ll",der, dec)
    
    // console.log('e',der, dec, nodeKey)
    
    // 到终点。
    if(der === er && dec === ec){
      visited[der][dec] = 1;
      reached = true;
      break;
    }
    // 下一层
    for(let i=0; i<4; i++){
      const rr = der + dr[i];
      const cc = dec + dc[i];
    // console.log("kk",rr, cc)
      
      if(rr < 0 || cc < 0) continue;
      if(rr >= rows || cc >= cols) continue;
      
      if(visited[rr][cc]) continue;
      if(!grid[rr][cc]) continue;
      
      visited[der][dec] =1;
      // dijstra node relaxation
      const newDistance = distance[der][dec] + 1;
      
      // console.log("jj",der, dec,rr,cc)
      if( newDistance < distance[rr][cc]){
        // shortestDistance = newDistance;
        const key = rr*10 + cc
        fakeHeap.push([key,newDistance]);
        
        distance[rr][cc]  = newDistance;
        trace[key] = der*10 + dec; 
      }
    }
  }
  console.log(distance)
  return trace;
}

// resume: bfs normally use queue to track. with dijastrak, we use a priority queue to keep the way. the implementation above use a fake priority queue.
function main(){
  const rows = 5;
  const cols = 4;
  
  const grid = [
    [1,1,1,0],
    [0,0,1,1],
    [0,1,1,0],
    [0,1,0,1],
    [0,1,1,1]
  ]
  
  const m = bfsMaze(grid,rows,cols,0,0,rows-1, cols-1);
  console.log('m',m)
}

main()
