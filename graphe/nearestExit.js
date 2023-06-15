var nearestExit = function(maze, entrance) {
    const rows = maze.length;
    const cols = maze[0].length;
    const rq = [entrance[0]];
    const cq = [entrance[1]];
    const dr = [0,0,1,-1];
    const dc = [1,-1, 0,0];
    let count = 1;
    // let visited = Array(rows).fill(0).map(()=>Array(cols).fill(0))

    while(rq.length){
        const qlen = rq.length;
        for(let i=0; i<qlen; i++){
            const rr = rq.shift();
            const rc = cq.shift();
            // visited[rr][rc] = 1

            for(let i=0; i<4; i++){
                const nr = rr + dr[i];
                const nc = rc + dc[i];
              
                if(nr < rows && nr >= 0 && nc < cols && nc >= 0 && maze[nr][nc]!== "+"){
                    if((nr === rows-1 || nr === 0 || nc === cols-1 || nc === 0) && (nr !== entrance[0] || nc !== entrance[1])){
                        return count;
                    }
                    maze[nr][nc] = '+';
                    rq.push(nr);
                    cq.push(nc);
                }
            }
        }
        count++;
    }
    return -1;
};

const maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]];
const entrance = [2,2]
const r = nearestExit(maze, entrance)
console.log("r", r)
