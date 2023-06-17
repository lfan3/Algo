// 210 课程表二
// 分别建立入度表和出度表。再建立一个队列来跟踪学习的顺序。bfs法
// graph is referenced to findOrder.drawio
// todo need to do in another way like dfs
var findOrderBfs = function(numCourses, prerequisites) {
    const indegree = new Map()
    const outdegree = new Map()
    const visited = [];
    const queue = [];

    const insertMap = (key, val, map)=>{
        map.set(key, [...map.get(key), val])
    }

    for(let i=0; i<numCourses; i++){
        indegree.set(i, []);
        outdegree.set(i, []);
    }

    for(let pre of prerequisites){
        const [a, b] = pre;
        insertMap(a, b, indegree);
        insertMap(b, a, outdegree);
    }

    // init queue
    for(let [key, vals] of indegree){
        if(vals.length === 0){
            queue.push(key);
        }
    }
    // bfs
    while(queue.length){
        const outdegreeKey = queue.shift();
        visited.push(outdegreeKey);

        const inDegreeKeys = outdegree.get(outdegreeKey);

        for(let key of inDegreeKeys){
            const na = indegree.get(key).filter(v=>v!=outdegreeKey);
            indegree.set(key, na);
            if(na.length === 0 && !visited[outdegree]){
                queue.push(key);
            }
        }
    }
    console.log("vv",visited)
    return visited.length === n ? visited : [];
};

const numCourses = 4;
// if want to learn 1 first need to learn 0
const prerequisites = [[1,0],[2,0],[3,1],[3,2]]
const numCourses2 = 5;
const prerequisites2 = [[0,1],[1,4],[3,2],[2,1]]

const [[1,0],[1,2],[0,1]]


findOrderBfs(numCourses2, prerequisites2)
