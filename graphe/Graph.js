"use strict";
/**
 * description
 * 无向 无权重 图 with adjacencyList
 */
class Graph {
    constructor() {
        this.adjacencyList = {};
        this.queue = [];
        this.visited = [];
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    removeVertex(vertex) {
        delete this.adjacencyList[vertex];
        const keys = Object.keys(this.adjacencyList);
        for (let key of keys) {
            // ?how to remove fastly an element from array
            const index = this.adjacencyList[key].indexOf(vertex);
            if (index !== -1) {
                this.adjacencyList[key].splice(index, 1);
            }
        }
    }
    addEdge(source, destination) {
        if (this.adjacencyList[source].indexOf(destination) === -1) {
            this.adjacencyList[source].push(destination);
        }
        if (this.adjacencyList[destination].indexOf(source) === -1) {
            this.adjacencyList[destination].push(source);
        }
    }
    ;
    removeEdge(source, destination) {
        const index1 = this.adjacencyList[source].indexOf(destination);
        const index2 = this.adjacencyList[destination].indexOf(source);
        if (index1 !== -1) {
            this.adjacencyList[source].splice(index1, 1);
        }
        if (index2 !== -1) {
            this.adjacencyList[destination].splice(index2, 1);
        }
    }
    ;
    // recheck
    //easy to mistake: the moment to push this.queue and this.visited
    bfs() {
        const nodes = Object.keys(this.adjacencyList);
        this.queue.push(+nodes[0]);
        this.visited.push(+nodes[0]);
        while (this.queue.length) {
            const node = this.queue.shift();
            for (let n of this.adjacencyList[node]) {
                if (this.visited.indexOf(+n) === -1) {
                    this.queue.push(+n);
                    this.visited.push(+n);
                }
                console.log(this.visited, this.queue);
            }
        }
        return this.visited;
    }
    dfs(node) {
        if (this.visited.indexOf(node) !== -1)
            return;
        if (!this.adjacencyList[node].length)
            return;
        this.visited.push(node);
        const list = this.adjacencyList[node];
        for (let item of list) {
            this.dfs(item);
        }
        return this.visited;
    }
    getAdjl() {
        return this.adjacencyList;
    }
}
function main() {
    const graph = new Graph();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(4);
    graph.addVertex(3);
    graph.addEdge(1, 2);
    graph.addEdge(3, 2);
    graph.addEdge(1, 4);
    graph.addEdge(3, 4);
    // graph.removeEdge(1,2)
    // graph.removeVertex(3)
    // const g = graph.bfs();
    const g = graph.getAdjl();
    const m = graph.dfs(1);
    console.log('g', m);
}
main();
