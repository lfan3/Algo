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

const r = ntheQueen(N);
console.log(r);


