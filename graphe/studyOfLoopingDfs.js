const dfs = (graph, root)=>{
    let res = 0;
    const childrenNodes = graph[root] || [];
    console.log('before loop', root, res)
    for(let child of childrenNodes){
        // 1 0, 2 0, 2 0, 1 2, 1 2, 4 0,
        console.log("before res", root, res);
        res = Math.max(res, dfs(graph, child));
        // 2 0, 2 0, 1 2, 1 2, 4 0, 1 4
        console.log("after res", root, res);
    }
    console.log("end loop", root, info[root] + res)
    return info[root] + res;
}

const graph = {
    1:[2,3,4,8],
    2:[5,6],
    4:[7],
    5:[10],
    8:[9],
    
}

const info = [0,1,2,0,4,5,0,0,1,0,0,0,0]

dfs(graph, 1)