// second time to do this
// cycle detection. 
// if all child are safe, itself is safe.
// if one of child is not safe, it is not safe;
// if a node is already visited, a circle detected
// 0 not visit, 1 cycle or in stack or not safe, 2 safe
var eventualSafeNodes = function(graph) {
    const n = graph.length;
    const visited = Array(n).fill(0);
    const res = [];

    const dfs = (graph, root, visited)=>{
        if(!nodes.length) return true;
        if(visited[root] === 2) return true;
        if(visited[root]=== 1) return false;
        const nodes = graph[root];
        visited[root] = 1;
        for(let node of nodes){
            // if(visited[node]) return false; repeat
            if(!dfs(graph, node, visited)){
                visited[node] = 1;
                return false;
            }
        }
        visited[root] = 2;
        return true;
    }

    for(let i=0; i<n; i++){
        if(dfs(graph, i, visited)){
            res.push(i)
        }
    }
    console.log(res)
    return res;
}

const graph = [[1,2],[2,3],[5],[0],[5],[],[]];
eventualSafeNodes(graph)