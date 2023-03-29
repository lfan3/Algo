var Heap = /** @class */ (function () {
    function Heap() {
        this.heapSize = 0;
        this.heap = [];
        this.positionMap = {};
    }
    Heap.prototype.pqueue = function (arr) {
        var _this = this;
        arr.forEach(function (item, i) {
            _this.heap[i] = item;
            _this.positionMap[item] = i;
        });
    };
    return Heap;
}());
var k = [];
k[5] = 5;
console.log(k);
