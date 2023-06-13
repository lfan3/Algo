/**
 * 1129
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 * color: n, r, b
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
    const queue = [[0,0,'n']];
    const visited = ['0n'];

    const redEdgesMap = new Map();
    const blueEdgesMap = new Map();
    const ans = Array(n).fill(-1);

    createColorEdgeHash(redEdges, redEdgesMap);
    createColorEdgeHash(blueEdges, blueEdgesMap);

    while(queue.length){
        const [node, dis, color] = queue.shift();
        // 第一个到的就是最短距离
        if(ans[node] === -1){
            ans[node] = dis;
        }
        if(color !== "r"){
            const redEdgesChildren = redEdgesMap.get(node) || [];
            for(let child of redEdgesChildren){
                // visited 需要带上入度颜色，防止cycle
                if(!visited.includes(child+'r')){
                    // visited 的位置
                    visited.push(node+color);
                    queue.push([child, dis+1, 'r'])
                }
            }
        }
        if(color !== "b"){
            const blueEdgesChildren = blueEdgesMap.get(node) || [];
            for(let child of blueEdgesChildren){
                if(!visited.includes(child+'b')){
                    queue.push([child, dis+1, 'b'])
                    visited.push(node+color);
                }
            }
        }
    }
    return ans;
};

var insertHash = (key, val, map)=>{
    if(!map.has(key)){
        map.set(key, [val])
    }else{
        const arr = map.get(key);
        const newVal = [...arr, val];
        map.set(key, newVal);
    }
}

var createColorEdgeHash = (colorEdges, hash)=>{
    const len = colorEdges.length;
    for(let i=0; i<len; i++){
        const [src, desk] = colorEdges[i];
        insertHash(src, desk, hash);
    }
}


function main(){
    const n = 6;
    const red_edges = [[0,1],[0,2],[1,2],[3,4],[4,5]];
    const blue_edges = [[0,1],[2,3],[4,2]];

    shortestAlternatingPaths(n, red_edges, blue_edges)

}

main();
