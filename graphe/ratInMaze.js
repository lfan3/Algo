const rows = 4;
const cols = 4;
function ratMaze(grid, outGrid, r, c){
  if(r>= rows && c>= cols && grid[r][c]===1){
    return outGrid
  }
  
}

function isFeasible(r, c){
  return r<rows && c < cols
}