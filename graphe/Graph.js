/**
 * description
 * 无向 无权重 图 with adjacencyList
 */
var Graph = /** @class */ (function () {
    function Graph() {
        this.adjacencyList = {};
        this.queue = [];
        this.visited = [];
    }
    Graph.prototype.addVertex = function (vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    };
    Graph.prototype.removeVertex = function (vertex) {
        delete this.adjacencyList[vertex];
        var keys = Object.keys(this.adjacencyList);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            // ?how to remove fastly an element from array
            var index = this.adjacencyList[key].indexOf(vertex);
            if (index !== -1) {
                this.adjacencyList[key].splice(index, 1);
            }
        }
    };
    Graph.prototype.addEdge = function (source, destination) {
        if (this.adjacencyList[source].indexOf(destination) === -1) {
            this.adjacencyList[source].push(destination);
        }
        if (this.adjacencyList[destination].indexOf(source) === -1) {
            this.adjacencyList[destination].push(source);
        }
    };
    ;
    Graph.prototype.removeEdge = function (source, destination) {
        var index1 = this.adjacencyList[source].indexOf(destination);
        var index2 = this.adjacencyList[destination].indexOf(source);
        if (index1 !== -1) {
            this.adjacencyList[source].splice(index1, 1);
        }
        if (index2 !== -1) {
            this.adjacencyList[destination].splice(index2, 1);
        }
    };
    ;
    Graph.prototype.bfs = function () {
        var nodes = Object.keys(this.adjacencyList);
        this.queue.push(+nodes[0]);
        this.visited.push(+nodes[0]);
        while (this.queue.length) {
            var node = this.queue.shift();
            for (var _i = 0, _a = this.adjacencyList[node]; _i < _a.length; _i++) {
                var n = _a[_i];
                if (this.visited.indexOf(+n) === -1) {
                    this.queue.push(+n);
                    this.visited.push(+n);
                }
                console.log(this.visited, this.queue);
            }
        }
        return this.visited;
    };
    return Graph;
}());
function main() {
    var graph = new Graph();
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
    var g = graph.bfs();
    console.log('g', g);
}
main();
