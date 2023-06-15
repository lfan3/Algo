var shortestBridge = function (grid) {
    // find the two island
    const rows = grid.length;
    const cols = grid[0].length;
    const dr = [0, 0, 1, -1];
    const dc = [1, -1, 0, 0];
    const queue = [];
    const island = [];
    let result = Number.MAX_VALUE;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                if (island.length === 0) {
                    island.push([i, j]);
                    queue.push([i, j]);
                    break;
                }
            }
        }
    }

    const getIslandCollection = (grid, queue) => {
        while (queue.length) {
            const [r, c] = queue.shift();
            grid[r][c] = -1;

            for (let i = 0; i < 4; i++) {
                const nr = r + dr[i];
                const nc = c + dc[i];
                if (
                    nr < rows &&
                    nr >= 0 &&
                    nc < cols &&
                    nc >= 0 &&
                    grid[nr][nc] === 1
                ) {
                    grid[nr][nc] = -1;
                    island.push([nr, nc]);
                    queue.push([nr, nc]);
                }
            }
        }
    };

    const shortDistance = (grid, queue) => {
        let count = 0;
        const visited = new Map();

        while (queue.length) {
            const qlen = queue.length;
            for (let i = 0; i < qlen; i++) {
                const [r, c] = queue.shift();

                for (let i = 0; i < 4; i++) {
                    const nr = r + dr[i];
                    const nc = c + dc[i];

                    if (nr < rows && nr >= 0 && nc < cols && nc >= 0) {
                        // ! mistake, forget to check if it is the other island, not the original entry island
                        // console.log("aaa",visited.get(nr + "," + nc) );

                        if (grid[nr][nc] === 1) {
                            return count;
                        }
                        else if (grid[nr][nc] === 0 && (visited.get(nr + "," + nc) !== 1) ) {
                            queue.push([nr, nc]);
                            visited.set(nr + "," + nc, 1);
                        }
                    }
                }
            }
            count++;
        }
    };

    getIslandCollection(grid, queue);

    for(let q of island){
        // the group of first islands are all in queue. so we search from this group together to extenal
        queue.push(q)
    }
     
    result = shortDistance(grid, queue);

    return result;
};

const grid = [
    [0, 1],
    [1, 0],
];
const grid2 = [
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 1],
];
const grid3 = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
];

const grid4 = [[0,1,0,0,0],[0,1,0,1,1],[0,0,0,0,1],[0,0,0,0,0],[0,0,0,0,0]]
const grid5 = [[1,1,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]

console.time("1")
const r = shortestBridge(grid2);
console.log("r", r);

console.timeEnd("1")



