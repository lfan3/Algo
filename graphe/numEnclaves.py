def numEnclaves(grid):
  total = 0
  queue = []
  dr = [1,-1,0,0]
  dc = [0,0,1,-1]
  rows = len(grid)
  cols = len(grid[0])
  
  print(cols, rows)
  
grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
numEnclaves(grid) 
# var numEnclaves = function(grid) {
#   let total = 0;
#   // at first track the border cell
#   const queue = [];
#   const rows = grid.length;
#   const cols = grid[0].length;
#   const dr = [1,-1,0,0]
#   const dc = [0,0,1,-1]
  
#   for(let i=0; i<rows; i++){
#     for(let j=0; j<cols; j++){
#       if(grid[i][j]){
#         total++;
#         if(i===0 || j===0 || i===rows-1 || j ===cols-1){
#           queue.push([i, j])
#           grid[i][j] = 0;
#         }
#       }
#     }
#   }
  
#   if(queue.length === 0){
#     return total;
#   }
#   if(queue.length === total){
#     return 0;
#   }
  
#   total -= queue.length;
#   // 对bordercell同时进行bfs or dfs 检测到1就变成0 并,减少total数量.
  
#   while(queue.length){
#     const [r, c] = queue.shift();
#     for(let i=0; i<4; i++){
#       const rr = r + dr[i];
#       const cc = c + dc[i];
#       if(isValid(rr,cc, rows, cols, grid)){
#         queue.push([rr,cc]);
#         grid[rr][cc] = 0;
#         total -= 1;
#       }
#     }
  
#   }
#   console.log('t',total);
  
#   return total
# };

# function isValid(r, c, rows, cols, grid){
#   return r>=0 && c>=0 && c<cols && r < rows && grid[r][c] === 1;
# }
# const grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
# const grid2 = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
# const grid3 = [[1,1,1,1],[0,0,0,0],[0,0,1,0],[1,1,0,1]]
# numEnclaves(grid3)