"use strict";
exports.__esModule = true;
// ki is used to support any key, like a name.
// key is name(mary), ki can be 1, then value(priority): 1
// we can create double direction hashtable of ki and key. it is not included in belowing implementation
// ki is a more general symbole than key
// here we implemented minHeap
// ??? Map of typescript how?
var IPQ = /** @class */ (function () {
    function IPQ() {
        this.minheap = []; //heap.length would not change in my implementation
        this.heapSize = 0;
        this.posKiMap = {};
        this.kiPosMap = {};
    }
    IPQ.prototype.insert = function (ki, value) {
        this.heapSize++;
        var pos = this.heapSize - 1;
        this.minheap.push({ ki: ki, value: value });
        this.posKiMap[pos] = ki;
        this.kiPosMap[ki] = pos;
        this.bubbleUp(pos);
    };
    IPQ.prototype["delete"] = function (ki) {
        this.heapSize--;
        var toDeleteItemPos = this.kiPosMap[ki];
        var toDeleteItem = this.minheap[toDeleteItemPos];
        this.swap(this.heapSize, toDeleteItemPos);
        // update deleted element
        this.posKiMap[this.heapSize] = -1;
        this.kiPosMap[ki] = -1;
        this.bubbleUp(toDeleteItemPos);
        this.bubbleDown(toDeleteItemPos);
        return toDeleteItem;
    };
    IPQ.prototype.valueOf = function () { };
    IPQ.prototype.contains = function (ki) {
        return this.kiPosMap[ki] !== -1;
    };
    IPQ.prototype.peekMinKeyIndex = function () { };
    IPQ.prototype.pollMinKeyIndex = function () { };
    IPQ.prototype.peekMinValue = function () {
        return this.minheap[0].value;
    };
    IPQ.prototype.pollMinValue = function () {
        var topItem = this.minheap[0];
        var ki = topItem.ki;
        return this["delete"](ki);
    };
    IPQ.prototype.update = function (ki, value) {
        var targetPos = this.kiPosMap[ki];
        this.minheap[targetPos].value = value;
        this.bubbleDown(targetPos);
        this.bubbleUp(targetPos);
    };
    IPQ.prototype.decreaseKey = function (ki, value) { };
    IPQ.prototype.increaseKey = function (ki, value) { };
    IPQ.prototype.bubbleUp = function (pos) {
        var p = Math.floor((pos - 1) / 2);
        while (p >= 0) {
            if (this.minheap[p].value > this.minheap[pos].value) {
                this.swap(p, pos);
            }
            pos = p;
            p = Math.floor((pos - 1) / 2);
        }
    };
    IPQ.prototype.bubbleDown = function (pos) {
        while (pos >= 0 && pos < this.heapSize) {
            var l = 2 * pos + 1;
            var r = 2 * pos + 2;
            var min = l;
            // wrong r should compare with min not pos
            if (r < this.heapSize && this.minheap[r].value < this.minheap[min].value) {
                min = r;
            }
            if (l >= this.heapSize || this.minheap[min].value > this.minheap[pos].value)
                break;
            this.swap(min, pos);
            // forget
            pos = min;
        }
    };
    IPQ.prototype.swap = function (i1, i2) {
        var tmp = this.minheap[i1];
        this.minheap[i1] = this.minheap[i2];
        this.minheap[i2] = tmp;
        console.log('swap', i1, i2);
        this.posKiMap[i1] = this.minheap[i1].ki;
        this.posKiMap[i2] = this.minheap[i2].ki;
        this.kiPosMap[this.minheap[i1].ki] = i1;
        this.kiPosMap[this.minheap[i2].ki] = i2;
    };
    IPQ.prototype.getSize = function () {
        return this.heapSize;
    };
    IPQ.prototype.getHeap = function () {
        return this.minheap;
    };
    IPQ.prototype.getPosKiMap = function () {
        return this.posKiMap;
    };
    IPQ.prototype.getKiPosMap = function () {
        return this.kiPosMap;
    };
    return IPQ;
}());
exports["default"] = IPQ;
var KiToName = {
    0: 'Anna',
    1: 'Bella',
    2: 'Carly',
    3: 'Dylan',
    4: 'Emily',
    5: 'Fred',
    6: 'George',
    7: 'Henry',
    8: 'Isaac',
    9: 'James',
    10: 'kelly',
    11: 'Laura'
};
var kiToValue = {
    0: 3,
    1: 15,
    2: 11,
    3: 17,
    4: 7,
    5: 9,
    6: 2,
    7: 1,
    8: 6,
    9: 5,
    10: 16,
    11: 4
};
var letterKiToValue = {
    'A': 0,
    'B': 1,
    'C': 5,
    'D': 6
};
// kiToValue structure vs kiToValArr structure is slightly different when we choose
var kiToValArr = [
    { ki: 0, value: 3 },
    { ki: 1, value: 15 }
];
// there is proble with delete related to heapSize controle
// delete with the ki not the position of the heap
function main() {
    var ipq = new IPQ();
    ipq.insert('A', letterKiToValue['A']);
    ipq.insert('A', 4);
    ipq.insert('B', letterKiToValue['B']);
    ipq.insert('C', letterKiToValue['C']);
    ipq.insert('D', letterKiToValue['D']);
    console.log("m", ipq.getHeap());
    ipq.pollMinValue();
    console.log("m", ipq.getHeap());
    // ipq.pollMinValue();
    // console.log("m1",ipq.getHeap())
}
main();
