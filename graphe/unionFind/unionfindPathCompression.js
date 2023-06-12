class UnionFind{
    constructor(n){
        this.idArray = Array(n).fill(0).map((_, i)=>i);
        // track the size of each component
        this.sz = Array(n).fill(1);
        // track the number of component
        this.numComp = n;
    }
    union(x, y){
        const rootx = this.find(x);
        const rooty = this.find(y);
        if(rootx === rooty) return;

        if(this.sz[rootx] < this.sz[rooty]){
            this.idArray[rootx] = rooty;
            this.sz[rooty] += this.sz[rootx];
        }else{
            this.idArray[rooty] = rootx;
            this.sz[rootx] += this.sz[rooty];
        }
        this.numComp--;
    }
    // path compression
    find(x){
        let root = x;
        while(this.idArray[root] !== root){
            root = this.idArray[root];
        }
        while(x!==root){

            const next = this.idArray[x];
            this.idArray[x] = root;
            x = next;
        }

        return root;
    }

    connected(x, y){
        return this.find(x) === this.find(y);
    }

    getComponentNum(){
        return this.numComp;
    }

    getParent(){
        return this.idArray;
    }
}

function main(){
    const uf = new UnionFind(10);
    uf.union(1, 2);
    uf.union(3, 4);
    uf.union(5, 6);
    uf.union(2, 4);
    uf.union(2, 6);
    console.log(uf.getComponentNum());
    console.log(uf.getParent());
}

// main()
module.exports = UnionFind;