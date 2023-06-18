// how sutpid am I. 
// 入度考虑，入度为零的集合就是

var findSmallestSetOfVertices = function(n, edges) {
    const inDegree = Array(n).fill(0);
    for(let i=0; i<edges.length; i++){
        const [_, k2] = edges[i];
        inDegree[k2]++
    }
    return inDegree.reduce((acc, curr, i)=>{
        if(!curr){
            acc.push(i)
        }
        return acc;
    },[]);
};

const n = 6;
const edges = [[0,1],[0,2],[2,5],[3,4],[4,2]];

const r = findSmallestSetOfVertices(n, edges);
console.log("r", r);
