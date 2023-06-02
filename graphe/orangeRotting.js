/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let totalOrange = 0;
  // queue 这个地方 可以分开 row 和 col 分别建立两个[]
  let rottingOrange = [];
  let level = 0;

  const r = grid.length;
  const c = grid[0].length;
  
  // O(m*n)
  grid.forEach((row, r)=>{
    row.forEach((cell, c)=>{
      if(cell){
        totalOrange++;
        if(cell === 2){
          rottingOrange.push([r, c])
        }
      }
    })
  })
  // forget! [[0]]
  if(!totalOrange) return 0;
  // bfs
  while(rottingOrange.length && totalOrange){
    const len = rottingOrange.length;
    for(let i=0; i<len; i++){
      
      const ro = rottingOrange.shift();
      const [row, col] = ro;
      
      visiteNeighbour(row, col, grid, r, c, rottingOrange);
      totalOrange--;
    }
    level++;
  }
  return totalOrange ? -1 : level-1;
};

var visiteNeighbour = (row, col, grid, r, c, rottingOrange)=>{
  const dr = [0,0, 1, -1];
  const dc = [1,-1, 0, 0];
  for(let i=0; i<4; i++){
    const nr = row + dr[i];
    const nc = col + dc[i];
    if(isValid(grid, nr, nc, r, c)){
      grid[nr][nc] = 2;
      rottingOrange.push([nr, nc])
    }
  }
}
var isValid = (grid, row, col, rows, cols)=>{
  if(row >= rows || col >= cols){
    return false;
  }
  if(row<0 || col < 0){
    return false;
  }
  if(grid[row][col] === 0 || grid[row][col] === 2){
    return false;
  }
  return true;
}

const grid  = [[0,2]]
const steps = orangesRotting(grid)
console.log(steps);