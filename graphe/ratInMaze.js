const rows = 4;
const cols = 4;

function ratMaze(grid, outGrid, r, c){
  if(r === rows-1 && c=== cols-1 && grid[r-1][c-1]===1){
    return outGrid
  }
  
}

function isFeasible(r, c){
  return r<rows && c < cols && r>=0 && c >=0 && grid[r][c]===1
}

const grid = [
  [1,0,0,0]
  [1,1,0,0]
  [0,1,0,1]
  [0,1,1,1]
]