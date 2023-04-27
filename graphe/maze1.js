const rows = 4;
const cols = 5;
function findShortestPathBFS(grid, entry, dest){
  // from top left bottom right
  const dr = [-1, 1, 0, 0];
  const dc = [0,0,1,-1]
  const sr = entry[0];
  const sc = entry[1];
  const rq = [];
  const cq = [];
  
  let move_count = 0;
  let nodes_left_in_layer = 1;
  let nodes_in_next_layer = 0;
  
  let reached_end = false;
  const visited = Array(rows).fill().map(()=>Array(cols));
  
  const solve = ()=>{
    rq.push(sr);
    cq.push(sc);
    visited[sr][sc]=true;
    while(rq.length){
      r = rq.dequeue();
      c = cq.dequeue();
      if(grid[r][c] === "E"){
        reached_end = true;
        break;
      }
      explore_neighbours(r,c);
      nodes_left_in_layer--;
      if(nodes_left_in_layer === 0){
        nodes_left_in_layer = nodes_in_next_layer;
        nodes_in_next_layer = 0;
        move_count++;
      }
    }
    if(reached_end){
      return move_count;
    }
    return -1;
  }
  
  const explore_neighbours = (r,c)=>{
    for(i=0; i<4; i++){
      rr = r+dr[i];
      cc = c+dc[i];
      if(rr<0 || cc<0) continue;
      if(rr>=rows || cc>=cols) continue;
      if(visited[rr][cc]) continue;
      if(grid[rr][cc] === "#") continue;
      rq.push(rr);
      cq.push(cc);
      visited[rr][cc] = true;
      nodes_in_next_layer++;
    }
  
  }
  
}