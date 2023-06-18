// 1615. 最大网络秩
// 这道题比较难以理解。其实就是求所有城市对中，找到一个城市可以构成最大网络秩。网络秩就是所有与这两座城市（任意一座城市） 直接 相连的道路总数
// [[0,1],[0,3],[1,2],[1,3]] 比如与 0 相连的直接道路有两条 1和3，与1直接相连的道路有三条 0 3 2. 所以 0和1 城市的网络秩就是 3 + 2 -1. 减去1 因为0和1 直接相连

var maximalNetworkRank = function(n, roads) {
    const connected = Array(n).fill(0).map(()=>Array(n).fill(0));
    const degree = Array(n).fill(0);
    let maxRank = 0;
    for(let road of roads){
        const [i, j] = road;
        connected[i][j] = 1;
        connected[j][i] = 1;
        degree[i] += 1;
        degree[j] +=1;
    }
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            let totalRank = degree[i] + degree[j];
            if(connected[i][j]){
                totalRank--;
            }
            maxRank = Math.max(maxRank, totalRank)
        }
    }
    return maxRank
};

const n = 4;
const roads = [[0,1],[0,3],[1,2],[1,3]]

console.log(maximalNetworkRank(n, roads))
