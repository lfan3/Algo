
let graph = [[1],[0]]
let tmp = [[2],[1]]

console.log("a",graph, tmp)

const t = graph;
graph = tmp;
tmp = t

console.log(graph, tmp, t)
