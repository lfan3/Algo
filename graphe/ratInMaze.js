const rows = 4;
const cols = 4;

// move forward and downward
function ratMaze(grid, outGrid, r, c){
  console.log(r, c, grid[r][c])
  if(r === rows-1 && c=== cols-1 && grid[r][c]===1){
    outGrid[r][c] = 1;
    return true;
  }
  if(isFeasible(r,c,grid)){
 
    outGrid[r][c] = 1;
    if(ratMaze(grid, outGrid, r,c+1)){
      return true;
    }
    if(ratMaze(grid, outGrid, r+1, c)){
      return true;
    }
    outGrid[r][c] = 0;
  }
  return false;
}

function isFeasible(r, c,grid){
  return r<rows && c < cols && r>=0 && c >=0 && grid[r][c]===1
}

const grid = [
  [1,0,0,0],
  [1,1,0,0],
  [0,1,0,1],
  [0,1,1,1]
]

const outgrid = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]
]

ratMaze(grid, outgrid, 0,0);
console.log(outgrid)