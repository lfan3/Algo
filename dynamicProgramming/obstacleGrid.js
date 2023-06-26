/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

const obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]];

var uniquePathsWithObstacles = function(obstacleGrid) {
    const rows = obstacleGrid.length;
    const cols = obstacleGrid[0].length;
    const result = Array(rows).fill().map(()=>Array(cols).fill(0));

    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(obstacleGrid[i][j]){
                result[i][j] = 0
            }else{
                if(i===0 && j===0){
                    result[i][j] = 1;
                }else if(i===0 ){
                    result[i][j] = result[i][j-1];
                }else if(j===0){
                    result[i][j] = result[i-1][j];
                }else{
                    result[i][j] = result[i-1][j] + result[i][j-1];
                }
            }
        }
    }
    return result[rows-1][cols-1];
};

const grid = [[0,1],[0,0]];
const grid2 = [[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]];
const grid3 = [[1,0]]
const n = uniquePathsWithObstacles(grid3);
console.log("n", n);