"use strict";
exports.__esModule = true;
var generalMinHeap_1 = require("./generalMinHeap");
var Dijkstra = /** @class */ (function () {
    function Dijkstra(graph, table, pq) {
        this.graph = graph;
        this.table = table;
        this.pq = pq;
        this.visited = [];
    }
    Dijkstra.prototype.relaxation = function (from, to) {
        var dis = this.table[from].dist + this.graph[from][to];
        if (dis < this.table[to].dist) {
            this.table[to].dist = dis;
            this.pq.insert({ node: to, dist: dis });
            this.table[to].node = from;
        }
    };
    Dijkstra.prototype.traverse = function (source, destination) {
        // init pq and table
        this.pq.insert({ node: source, dist: 0 });
        var edgesOfSource = this.graph[source];
        var neighbors = Object.keys(edgesOfSource);
        for (var _i = 0, neighbors_1 = neighbors; _i < neighbors_1.length; _i++) {
            var n = neighbors_1[_i];
            this.pq.insert({ node: n, dist: edgesOfSource[n] });
            this.table[n] = { dist: edgesOfSource[n], node: source };
        }
        this.visited.push(source);
        // console.log('hhhw', this.getHeap(), this.pq.getSize())
        // all contected nodes 
        while (this.pq.getSize()) {
            // console.log('hhhw', this.getHeap(), this.pq.getSize())
            var next = this.pq.poll();
            // console.log('hhhw2', this.getHeap(), this.pq.getSize())
            console.log('next', next);
            var src = next['node'];
            if (this.isVisited(src))
                continue;
            console.log('src', src);
            var edgesOfSource_1 = this.graph[src];
            var neighbors_3 = Object.keys(edgesOfSource_1);
            for (var _a = 0, neighbors_2 = neighbors_3; _a < neighbors_2.length; _a++) {
                var n = neighbors_2[_a];
                if (this.isVisited(n))
                    continue;
                this.relaxation(src, n);
                // const distance = this.graph[src][n] + this.table[src].dist;
                // if(distance < this.table[n].dist){
                //   this.table[n].dist = distance;
                //   this.table[n].node = src;
                // }
            }
        }
        return table;
    };
    Dijkstra.prototype.isVisited = function (key) {
        return this.visited.indexOf(key) !== -1;
    };
    Dijkstra.prototype.getHeap = function () {
        return this.pq.getHeap();
    };
    Dijkstra.prototype.getTable = function () {
        return this.table;
    };
    return Dijkstra;
}());
var graph = {
    'A': {
        'B': 1,
        'C': 5,
        'D': 6
    },
    'B': {
        'D': 2,
        'E': 9,
        'C': 1
    },
    'C': {
        'D': 3
    },
    'D': {
        'E': 4
    },
    'E': {}
};
var table = {
    'A': {
        dist: 0,
        node: 'A'
    },
    'B': {
        dist: Number.MAX_VALUE,
        node: ''
    },
    'C': {
        dist: Number.MAX_VALUE,
        node: ''
    },
    'D': {
        dist: Number.MAX_VALUE,
        node: ''
    },
    'E': {
        dist: Number.MAX_VALUE,
        node: ''
    }
};
// for lazy dijkstra il faut pas utiliser the indexedHeap.
function less(n1, n2) {
    return n1.dist - n2.dist < 0;
}
var ipq = new generalMinHeap_1["default"](less);
var dij = new Dijkstra(graph, table, ipq);
var tab = dij.traverse('A', 'E');
var tb = dij.getTable();
console.log('tab', tab);
