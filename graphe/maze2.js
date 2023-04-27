const rows = 4;
const cols = 5;

const findPathDfs = (grid, sr, sc, er, ec) => {
  const visited = Array(rows).fill().map(() => Array(cols).fill(0));
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, 1, -1];
  const result = [];
  
  visited[sr][sc] = 1;
    
  const dfs = (r, c) => {
    if(r===er && ec===c){
      result.push([r,c])
      return;
    }
  
    for (let i = 0; i < 4; i++) {
      const rr = r + dir[i];
      const cc = c + dir[i];
      if (isFeasible(rr, cc)) {
        visited[rr][cc] = 1;
        const r = dfs(rr, cc);
        if (r) {
          break;
        } else {
          grid[rr][cc] = 0;
        }
      }
    }
  };
  
  const isFeasible = (r,c)=>{
    return r>=0 && r<rows && c>=0 && c<cols && grid[r][c] !==1;
  }
};
