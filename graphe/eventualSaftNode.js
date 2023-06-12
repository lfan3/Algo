// dfs with 3 colors, postDfs
// 循环所有node，
// 判断这个node是否被访问过？
    // 没有的话，标记被访问。并循环他的子节点。
    // 已经被访问过的话，分安全与不安全分别讨论
var eventualSafeNodes = function(graph) {
    const len = graph.length;
    let result = [];
    const hash = Array(len).fill(0);

    const dfs = (i, graph, hash)=>{
        if(hash[i] === 2){
            return true;
        }
        // cycle detected or already found it is not safe node
        if(hash[i] === 1){
            return false;
        }
        const childrenNodes = graph[i];
        // 这里不需要因为下面for loop之后有。
        // if(!childrenNodes.length){
        //     hash[i] = 2;
        //     return true;
        // }
        // in stack, marked as 1 visited
        hash[i] = 1;
        for(let node of childrenNodes){
            // cycle detected, above has already determinate
            // if(hash[node] === 1){
            //     return false;
            // }
            if(!dfs(node, graph, hash)){
                return false;
            }
        }
        // all child node are true, so i is true
        hash[i] = 2;
        return true;
    }

    for(let i=0; i<len; i++){
        if(dfs(i, graph, hash)){
         result.push(i);
        }
     }
     return result
}

// 
const graph = [[1,2],[2,3],[5],[0],[5],[],[]];
const g = [[1,2,3,4],[1,2],[3,4],[0,4],[]]
eventualSafeNodes(g)