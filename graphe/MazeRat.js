const rows = 5;
const cols = 2;

// move forward and downward
function ratMaze(grid, outGrid, r, c){
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

// move in two directions right down
// big space complexity 3 * n^2
function isFeasible(r, c,grid){
  return r<rows && c < cols && grid[r][c]===1
}
// -------------
function ratMazeFour(grid, outGrid, r, c){
  if(r === rows-1 && c=== cols-1 && grid[r][c]===1){
    outGrid[r][c] = 1;
    return true;
  }
  console.log(r, c)
  
  if(isFeasibleFour(r,c,grid)){
    // 顺流直下
    visited[r][c] = 1;
    outGrid[r][c] = 1;
    // 四个方向
    if(ratMazeFour(grid, outGrid, r,c+1)){
      return true;
    }
    if(ratMazeFour(grid, outGrid, r+1, c)){
      return true;
    }
    if(ratMazeFour(grid, outGrid, r-1,c)){
      return true;
    }
    if(ratMazeFour(grid, outGrid, r, c-1)){
      return true;
    }
    // 开始逆流而上，回溯
    visited[r][c] = 0;
    outGrid[r][c] = 0;
  }
  return false;
}

function isFeasibleFour(r, c,grid){
  return r<rows && c < cols && r>=0 && c >=0 && grid[r][c]===1 && !visited[r][c]
}


// resume dfs pattern
/* dfs(a,b){
  action before branch
  dfs(a+1, b);
  dfs(a, b+1);
  action after branch
}
backtracking 就是加上一个possiblitiy check然后 在逆流而上的时候恢复
*/

function resumeExample(arr, i, n){
  if(i >= arr.length){
    // 在这里打印arr不是正确的result，因为 这里 arr没有改变。arr是在return之后改变的。但是 如果是arr[i]在preorder的位置。这里就可以打印出来了。因为先改变值然后 回逆
    return;
  }
  resumeExample(arr, i+1, n+1);
  arr[i] = n;
}
// const arr = [0,0,0,0];
// resumeExample(arr, 0, 0);


const grid = [
  [1,1,1,0],
  [0,0,1,1],
  // [0,1,1,0],
  // [0,1,0,1],
  // [0,1,1,1]
]

const outgrid = [
  [0,0,0,0],
  [0,0,0,0],
  // [0,0,0,0],
  // [0,0,0,0],
  // [0,0,0,0]
]

const visited = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]
]



// ratMaze(grid, outgrid, 0,0);
ratMazeFour(grid, outgrid, 0,0);
console.log(outgrid)