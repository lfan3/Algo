// leetcode 547 这个问题可以被抽象为寻找 无向图中 连通分量的数目。这种问题 可以用union find来解决。也可以使用dfs bfs 来解决。

// dfs
var findCircleNumDfs = function(isConnected) {
    const cities = isConnected.length;
    const visited = new Array(cities).fill(false);
    let count = 0;

    for(let i = 0; i < cities; i++){
        if(visited[i] === false){
            dfs(isConnected, cities, visited, i);
            count++;
        }
    }

    const dfs = (isConnected, cities, visited, i) => {
        for(let j=0; j<cities; j++){
            if(isConnected[i][j] && !visited[j]){
                visited[j] = true;
                dfs(isConnected, cities, visited, j);
            }
        }
    }
    return count
};

const findCircleNumBfs = (isConnected) => {
    const cities = isConnected.length;
    const visited = new Array(cities).fill(false);
    let count = 0;

    for(let i = 0; i < cities; i++){
        const queue = [];
        if(!visited[i]){
            queue.push(i);

            while(queue.length){
                const dq = queue.shift();
                visited[dq] = true;
                for(let j=0; j<cities; j++){
                    if(isConnected[dq][j] && !visited[j]){
                        queue.push(j)
                    }
                }
            }
            count++;
        }
    }
    return count;
}

// unionFind
class UnionFind{
    constructor(n){
        this.ids = new Array(n).fill(0).map((_,i)=>i);
        this.sz = new Array(n).fill(1);
        this.numComp = n;
    }
    find(x){
        let root = x;
        while(root !== this.ids[root]){
            root = this.ids[root];
        }
        while(x != root){
            let next = this.ids[x];
            this.ids[x] = root;
            x = next;
        }
        // 易忘记
        return root;
    }
    union(x, y){
        const rx = this.find(x)
        const ry = this.find(y)
        // 易忘记
        if(rx === ry) return;
        if(this.sz[rx] < this.sz[ry]){
            // 易忘记
            this.ids[rx] = ry;
            this.sz[ry] += this.sz[rx];
        }else{
            this.ids[ry] = rx;
            this.sz[rx] += this.sz[ry];
        }

        this.numComp--;
    }
    getNumComp(){
        return this.numComp
    }
}

const findCircleNumUf = (isConnected)=>{
    const cities = isConnected.length;
    const uf = new UnionFind(cities);
    

    for(let i=0; i<cities; i++){
        for(let j=i+1; j<cities; j++){
            if(isConnected[i][j]){
                uf.union(i, j)
            }
        }
    }
    return uf.getNumComp()
}
const a = [[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]
const b = [[1,1,1],[1,1,1],[1,1,1]]
// findCircleNumBfs(a)
console.log(findCircleNumUf(b))


