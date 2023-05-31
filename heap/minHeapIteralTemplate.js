"use strict";
/**
 * description
 * pritority queue with indexed minHeap
 * swim 和 sink 易错点 背住
 */
class IndexedHeap {
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
        return this.heap[0];
    }
    poll() {
    }
    add(n) {
        this.heap.push(n);
        this.heapSize++;
        this.positionMap[n] = this.heapSize - 1;
        this.swim(this.heapSize - 1);
    }
    find(target) {
        const pos = this.positionMap[target];
        return pos ? pos : -1;
    }
    remove(target) {
        const index = this.find(target);
        if (index !== -1) {
            // update position
            this.positionMap[this.heap[this.heapSize - 1]] = index;
            delete this.positionMap[target];
            this.swap(index, this.heapSize - 1);
            this.heap.pop();
            this.heapSize--;
            // 是否向上
            const parent = Math.floor((index - 1) / 2);
            if (parent >= 0 && this.heap[parent] > this.heap[index]) {
                this.swim(index);
            }
            // 是否向下
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            let min = left;
            if (this.heap[left] > this.heap[right]) {
                min = right;
            }
            if (this.heap[min] < this.heap[index]) {
                this.sink(index);
            }
        }
    }
    // n1 < n2
    less(n1, n2) {
        return n1 - n2 < 0;
    }
    swim(index) {
        while (index >= 0) {
            const parent = Math.floor((index - 1) / 2);
            if (parent >= 0 && this.less(this.heap[index], this.heap[parent])) {
                // update position
                this.positionMap[this.heap[parent]] = index;
                this.positionMap[this.heap[index]] = parent;
                this.swap(parent, index);
            }
            index = parent;
        }
    }
    sink(index) {
        // 易错点将下面 写在while外面
        // let min = index;
        while (index < this.heapSize) {
            let min = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            if (left < this.heapSize && this.less(this.heap[left], this.heap[min])) {
                min = left;
            }
            if (right < this.heapSize && this.less(this.heap[right], this.heap[min])) {
                min = right;
            }
            if (min === index)
                break;
            // update position
            this.positionMap[this.heap[min]] = index;
            this.positionMap[this.heap[index]] = min;
            this.swap(index, min);
            // 容易 遗忘的点
            index = min;
        }
    }
    swap(i, j) {
        const tmp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = tmp;
    }
    getHeap() {
        return this.heap;
    }
    getPosition() {
        return this.positionMap;
    }
}
