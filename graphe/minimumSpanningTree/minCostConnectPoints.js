/**
 * @param {number[][]} points
 * @return {number}
 */

class UF{
    constructor(size){
        this.ids = Array(size+1).fill().map((_, index)=>index);
        this.size = Array(size+1).fill(1);
        this.components = size;
    }
    find(x){
        let root = x;
        while(root !== this.ids[root]){
            root = this.ids[root];
        }
        // path compression
        while(root !==x){
            const next = this.ids[x];
            this.ids[x] = root;
            x = next;
        }
        return root;
    }
    union(x, y){
        const rx = this.find(x);
        const ry = this.find(y);
        
        if(rx !== ry){
            if(this.size[rx] < this.size[ry]){
                this.ids[rx] = ry;
                this.size[ry] += this.size[rx];
            }else{
                this.ids[ry] = rx;
                this.size[rx] += this.size[ry];
            }
        }
        this.components--;
    }

    getComponent(){
        return this.components;
    }
}

var minCostConnectPoints = function(points) {
    const size = points.length;
    const wedges = [];
    let ans = 0;

    const getWeightedEdges = (points)=>{
        for(let i=0; i<size; i++){
            const [x1, y1] = points[i];
            for(let j=i+1; j<size; j++){
                const [x2, y2] = points[j];
                const w = Math.abs(x1-x2) + Math.abs(y1-y2);
                wedges.push([i, j, w]);
            }
        }
    }
    getWeightedEdges(points);
    wedges.sort((e1, e2)=>e1[2] - e2[2]);

    const uf = new UF(wedges.length);
    wedges.forEach((edge)=>{
        const [a, b, w] = edge;
        const ra = uf.find(a);
        const rb = uf.find(b);
        if(ra !== rb){
            ans += w;
            uf.union(a, b);
        }
    })
    return ans;
};

const points = [[0,0],[2,2],[3,10],[5,2],[7,0]];
const points1 = [[3,12],[-2,5],[-4,1]]
const points2 = [[0,0]]

const m = minCostConnectPoints(points);
const m1 = minCostConnectPoints(points1);
const m2 = minCostConnectPoints(points2);
console.log("m", m2)