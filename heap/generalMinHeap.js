"use strict";
// T nodeType, K keyType
exports.__esModule = true;
var MinHeap = /** @class */ (function () {
    function MinHeap(comparable) {
        this.heap = [];
        // this.peekRegister = [];
        this.size = 0;
        this.comparable = comparable;
    }
    MinHeap.prototype.getHeap = function () {
        return this.heap;
    };
    // getPeekRegister(){
    //     return this.peekRegister;
    // }
    MinHeap.prototype.insert = function (val) {
        this.size++;
        this.heap.push(val);
        this.heapifyUp(this.size - 1);
    };
    MinHeap.prototype.poll = function () {
        this.size--;
        var toDelete = this.heap[0];
        this.swap(this.size, 0);
        this.heapifyDown(0);
        return toDelete;
    };
    MinHeap.prototype.heapifyUp = function (index) {
        var parentIndex = Math.floor((index - 1) / 2);
        while (parentIndex >= 0) {
            if (this.comparable(this.heap[index], this.heap[parentIndex])) {
                this.swap(index, parentIndex);
            }
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    };
    MinHeap.prototype.heapifyDown = function (parentIndex) {
        while (parentIndex < this.size) {
            var left = 2 * parentIndex + 1;
            var right = 2 * parentIndex + 2;
            var minIndex = left;
            if (right < this.size && this.comparable(this.heap[right], this.heap[minIndex])) {
                minIndex = right;
            }
            if (left >= this.size || this.comparable(this.heap[parentIndex], this.heap[minIndex]))
                break;
            this.swap(minIndex, parentIndex);
            parentIndex = minIndex;
        }
    };
    //healper funciton
    MinHeap.prototype.swap = function (p1, p2) {
        console.log('ss', p1, p2);
        var temp = this.heap[p1];
        this.heap[p1] = this.heap[p2];
        this.heap[p2] = temp;
    };
    MinHeap.prototype.getSize = function () {
        return this.size;
    };
    return MinHeap;
}());
exports["default"] = MinHeap;
function less(n1, n2) {
    return n1.value - n2.value < 0;
}
var letterKiToValue = {
    'A': 0,
    'B': 1,
    'C': 5,
    'D': 6
};
function main() {
    var heap = new MinHeap(less);
    heap.insert({ key: 'A', value: 0 });
    heap.insert({ key: 'B', value: 1 });
    heap.insert({ key: 'C', value: 5 });
    heap.insert({ key: 'D', value: 6 });
    console.log(heap.getHeap());
    heap.poll();
    console.log(heap.getHeap());
    heap.poll();
    console.log(heap.getHeap());
    // heap.poll();
}
// main()
