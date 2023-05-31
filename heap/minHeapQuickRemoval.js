"use strict";
/**
 * description
 * pritority queue with indexed minHeap
 * swim 和 sink 易错点 背住
 */
class IndexedMinHeap {
    constructor() {
        this.heapSize = 0;
        this.heap = [];
        this.positionMap = {};
    }
    pqueue(arr) {
        this.heapSize = arr.length;
        arr.forEach((item, i) => {
            this.heap[i] = item;
            this.positionMap[item] = i;
        });
        for (let i = Math.floor((this.heapSize - 2) / 2); i >= 0; i--) {
            this.sink(i);
        }
    }
    peek() {
        // 易忽略点 如果 是空的
        if (this.isEmpty())
            return null;
        return this.get(0);
    }
    poll() {
        this.removeAt(0);
    }
    add(n) {
        this.heap.push(n);
        // trip: i increase the heapSize at the end, so here the ole heapSize is the index of newly added element
        this.positionMap[n] = this.heapSize;
        this.swim(this.heapSize - 1);
        this.heapSize++;
    }
    removeAt(index) {
        // update position
        this.heapSize--;
        const removed_data = this.heap[index];
        this.swap(index, this.heapSize);
        this.heap.pop();
        delete this.positionMap[removed_data];
        if (index === this.heapSize)
            return removed_data;
        const ele = this.get(index);
        this.sink(index);
        // if sink does not work
        if (this.get(index) === ele) {
            this.swim(index);
        }
        return removed_data;
    }
    removeAtLazy(index) {
        this.heapSize--;
        this.swap(index, this.heapSize);
        const removed_data = this.heap.pop();
        this.sink(index);
        this.swim(index);
        return removed_data;
    }
    remove(target) {
        if (!this.heapSize)
            return null;
        const pos = this.find(target);
        if (pos !== -1) {
            this.removeAt(pos);
        }
    }
    // i, j  is the index of heap
    less(i, j) {
        return this.get(i) - this.get(j) < 0;
    }
    swim(index) {
        let parent = Math.floor((index - 1) / 2);
        while (parent >= 0 && this.less(index, parent)) {
            this.swap(parent, index);
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }
    // 提升空间：没有必要循环到root。只要parent element < index 就不需要再循环下去了。 
    // todo：do the comparison with swim
    swimSlow(index) {
        while (index >= 0) {
            const parent = Math.floor((index - 1) / 2);
            if (parent >= 0 && this.less(index, parent)) {
                this.swap(parent, index);
            }
            index = parent;
        }
    }
    sink(index) {
        while (index < this.heapSize) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            let min = left;
            if (right < this.heapSize && this.less(right, min)) {
                min = right;
            }
            if (left >= this.heapSize || this.less(index, min)) {
                break;
            }
            this.swap(index, min);
            // 容易 遗忘的点
            index = min;
        }
    }
    // tip: we can assign directly the min to left child. see sink above
    sinkSlow(index) {
        // 易错点将下面 写在while外面
        // let min = index;
        while (index < this.heapSize) {
            let min = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            if (left < this.heapSize && this.less(left, min)) {
                min = left;
            }
            if (right < this.heapSize && this.less(right, min)) {
                min = right;
            }
            if (min === index)
                break;
            this.swap(index, min);
            // 容易 遗忘的点
            index = min;
        }
    }
    getHeap() {
        return this.heap;
    }
    isMinHeap(k) {
        if (k >= this.heapSize)
            return true;
        const l = 2 * k + 1;
        const r = 2 * k + 2;
        if (l < this.heapSize && !this.less(k, l))
            return false;
        if (r < this.heapSize && !this.less(k, r))
            return false;
        return this.isMinHeap(l) && this.isMinHeap(r);
    }
    // i j is the heap index
    swap(i, j) {
        const tmp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = tmp;
        this.positionMap[this.heap[i]] = i;
        this.positionMap[this.heap[j]] = j;
    }
    isEmpty() {
        return this.heapSize === 0;
    }
    // get the value of corresponding heap
    get(index) {
        return this.heap[index];
    }
    contain(ele) {
        const pos = this.positionMap[ele];
        return pos ? true : false;
    }
    // clear the heap
    clear() {
        this.heap = [];
        this.positionMap = {};
        this.heapSize = 0;
    }
    find(target) {
        const pos = this.positionMap[target];
        return pos ? pos : -1;
    }
}
const a = [4, 8, 1, 78, 12, 3];
const h = new IndexedMinHeap();
h.pqueue(a);
console.log('a', h.getHeap());
const r = h.isMinHeap(0);
console.log('b', r);
// todo : remove at
