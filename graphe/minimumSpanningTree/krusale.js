class Uf{
    constructor(n){
        this.ids = Array(n+1).fill().map((_,index)=>index);
        this.size = Array(n+1).fill(1);
        this.components = n;
    }
    find(x){
        let root = x;
        while(this.ids[root] !== root){
            root = this.ids[root];
        }
        // path compression
        while(x !== root){
            const next = this.ids[x];
            this.ids[x] = root;
            x = next;
        }
        return root;
    }

    union(x, y){
        const rx = this.find(x);
        const ry = this.find(y);
        if(this.size[rx] < this.size[ry]){
            this.size[ry] += this.size[rx];
            this.ids[rx] = ry
        }else{
            this.size[rx] += this.size[ry];
            this.ids[ry] = rx
        }
        this.components--;
    }
    getIds(){
        return this.ids;
    }
    getComponent(){
        return this.components;
    }
}

var krusale = (n, connections)=>{
    const uf = new Uf(n);
    connections.sort((a, b)=>a[2] - b[2]);
    const edges = [];
    let minWeight = 0;
    
    for(let connection of connections){
        const [a, b, w] = connection;
        const ra = uf.find(a)
        const rb = uf.find(b)
        if(ra !== rb){
            uf.union(ra, rb);
            edges.push([ra, rb]);
            minWeight += w;
        }
    }

    const comp = uf.getComponent();
    console.log("edges", edges, "winW", minWeight, "comp", comp)
    return comp === 1 ? minWeight : -1;
}

const n= 3;
const conections = [[1,2,5],[1,3,6],[2,3,1]];

const n1 = 4;
const conections1 = [[1,2,3],[3,4,4]]
krusale(n1, conections1);