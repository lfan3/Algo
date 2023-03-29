const N = 4;

const ntheQueen = (n) =>{
    const result = [];
    const grid = Array(n).fill().map(()=>Array(n).fill("."))
    const bt = (grid, col) => {
        if(col === N){
            const clonGrid = grid.map(r => r.map(c => c));
            result.push(clonGrid);
            return;
        } else {
            for(let row=0; row<N; row++){
                if(isValid(grid, row, col)){
                    grid[row][col] = "Q";
                    bt(grid, col+1);
                    grid[row][col] = "."
                }
            }
        }
    }
    const isValid = (grid, row, col)=>{
        // left part row
        for(let c=0; c<col; c++){
            if(grid[row][c] === 'Q')
                return false;
        }
        //left upper diago
        for(let r=row, c=col; r>=0 && c>=0; r--, c--){
            if(grid[r][c] === 'Q')
                return false;
        }
        // left downer diago
        for(let r=row, c=col; r<n && c>=0; r++, c--){
            if(grid[r][c] === 'Q')
                return false;
        }
        return true
    }
    bt(grid, 0)
    return result
}

// const r = ntheQueen(N);
// console.log(r);
// 3/18/2023

function nQ(n){
  const result = [];
  const grid = Array(n).fill().map(() => Array(n).fill('.'));
  const bk = (colum, grid)=>{
    if(colum>= n){
      const clonGrid = grid.map(r=>r.map(c=>c));
      result.push(clonGrid);
      return;
    }
    for(let r=0; r<n; r++){
      if(isValid(r, colum)){
        grid[r][colum] = 'Q';
        // !! 错误点一 用 bk(colum++, grid) 这样写是错误的。
        bk(colum+1, grid);
        grid[r][colum] = '.'
      }
    }
  }
  // !! 易错点二: 我们知道colum 肯定不同，所以只需要判断 left part 和上下角的diago
  const isValid = (r, c)=>{
    // left part row check
    for(let i=0; i<c; i++){
      if(grid[r][i] === 'Q'){
        return false;
      }
    }
    // left upper diago
    for(let i=r, j=c; i>=0 && j>=0; i--, j--){
      if(grid[i][j] === 'Q'){
        return false;
      }
    }
  
    // left down diago
    for(let i=r, j=c; i<n && j>=0; i++, j--){
      if(grid[i][j] === 'Q'){
        return false;
      }
    }
    return true;
  }
  bk(0, grid);
  return result;
}


const nq = nQ(4)
console.log(nq)


/**
 * wrong way colum++ explaination
 * function c(t){
  console.log('t',t)
  if(t >=3){
    return;
  }
  for(let i=0;i<2; i++){
    c(++t)
  }
}
              c(1)
          c(2)      c(3)
       c(3) c(4)    

function m(t){
  console.log('tm',t);
  if(t >=3){
    return;
  }
  for(let i=0;i<2; i++){
    m(t+1)
  }
}
             m(1)
        m(2)     m(2)
    m(3)  m(3)  m(3)  m(3)
c(1): 1 2 3 4 3
m(1): 1 2 3 3 2 3 3
 */
