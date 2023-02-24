function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
//todo: heapify in c
var MaxHeap = /** @class */ (function () {
    function MaxHeap(arr, heapArr) {
        if (arr === void 0) { arr = []; }
        if (heapArr === void 0) { heapArr = []; }
        this.map = {};
        this.heapRegister = heapArr;
        this.disorderArr = arr;
    }
    // it is equivalent to bubbleUp insert --- normal insert
    MaxHeap.prototype.bubbleUpInsert = function (n) {
        if (!this.heapRegister.length) {
            this.heapRegister.push(n);
        }
        else {
            this.heapRegister.push(n);
            var len = this.heapRegister.length;
            this.bubbleUp(len - 1);
        }
    };
    // it is like insert with heapify, heapify is bubble down insert
    MaxHeap.prototype.bubbleDownInsert = function (n) {
        var size = this.heapRegister.length;
        this.heapRegister.push(n);
        size++;
        while (size > 1) {
            var lastParentNodeIndex = Math.floor(size / 2 - 1);
            this.bubbleDown(size, lastParentNodeIndex);
            size = lastParentNodeIndex + 1;
            console.log('size', size);
        }
    };
    // heapify is equivalent to bubbleDown
    MaxHeap.prototype.heapify = function (size, currentIndex) {
        if (size > 1) {
            this.bubbleDown(size, currentIndex);
        }
    };
    MaxHeap.prototype.bubbleUp = function (index) {
        var parentIndex = Math.floor((index - 1) / 2);
        if (this.heapRegister[parentIndex] < this.heapRegister[index]) {
            swap(this.heapRegister, index, parentIndex);
            this.bubbleUp(parentIndex);
        }
    };
    MaxHeap.prototype.bubbleDown = function (size, index) {
        var maxVal = this.heapRegister[index];
        var maxIndex = index;
        var leftChildIndex = 2 * index + 1;
        var rightChildIndex = 2 * index + 2;
        if (leftChildIndex < size && this.heapRegister[leftChildIndex] > maxVal) {
            maxVal = this.heapRegister[leftChildIndex];
            maxIndex = leftChildIndex;
        }
        if (rightChildIndex < size && this.heapRegister[rightChildIndex] > maxVal) {
            maxIndex = rightChildIndex;
            maxVal = this.heapRegister[rightChildIndex];
        }
        // !!!这个地方没有做判断 导致死循环
        if (maxIndex !== index) {
            swap(this.heapRegister, maxIndex, index);
            this.bubbleDown(size, maxIndex);
        }
    };
    MaxHeap.prototype.getHeap = function () {
        return this.heapRegister;
    };
    MaxHeap.prototype.peek = function () {
        return this.heapRegister[0];
    };
    MaxHeap.prototype.extract = function () {
        var size = this.heapRegister.length;
        swap(this.heapRegister, 0, size - 1);
        this.heapRegister.pop();
        size--;
        this.heapify(size - 1, 0);
    };
    MaxHeap.prototype.create = function () {
        for (var _i = 0, _a = this.disorderArr; _i < _a.length; _i++) {
            var item = _a[_i];
            this.bubbleUpInsert(item);
        }
    };
    MaxHeap.prototype.createWithHeap = function () {
        for (var _i = 0, _a = this.disorderArr; _i < _a.length; _i++) {
            var item = _a[_i];
            this.bubbleDownInsert(item);
        }
    };
    // todo: 这里是一个可以优化的地方， 先简单 后优化
    MaxHeap.prototype["delete"] = function (n) {
        var size = this.heapRegister.length;
        var i = 0;
        var targetIndex = -1;
        // O(n) 线性时间
        while (i < size) {
            if (this.heapRegister[i] === n) {
                targetIndex = i;
                break;
            }
            ;
            i++;
        }
        if (targetIndex >= 0) {
            //交换位置
            swap(this.heapRegister, targetIndex, size - 1);
            this.heapRegister.pop();
            size--;
            // 判断向下 还是向上
            var parent_1 = Math.floor((targetIndex - 1) / 2);
            // 向上
            if (this.heapRegister[parent_1] < this.heapRegister[targetIndex]) {
                this.bubbleUp(targetIndex);
            }
            else {
                // 向下
                this.bubbleDown(size, targetIndex);
            }
        }
    };
    return MaxHeap;
}());
// class MaxHeap{
//   constructor(){
//     this.heap = [];
//     this.size = 0;
//   }
//   insert(value){
//     if(!this.heap.length){
//       this.heap.push(value);
//     }else{
//       this.heap.push(value);
//       this.heapifyUp(this.heap.length-1, this.size);
//     }
//   }
//   insertWithHeapifyDown(value){
//     if(!this.heap.length){
//       this.heap.push(value);
//       this.size++;
//     }else{
//       this.heap.push(value);
//       this.size++;
//       // 从最后一个非leaf node开始一层层上去再下去修改。nlogn？
//       const parentIndex = Math.floor(this.size/2 -1);
//       for(let i=parentIndex; i>=0; i--){
//         this.heapifyDown(i,this.size);
//       }
//     }
//   }
//   // heapifyUp is faster than the heapifyDown when inserting
//   heapifyUp(index){
//     const rootIndex = Math.floor((index-1)/2);
//     if(rootIndex>=0 && this.heap[index] > this.heap[rootIndex]){
//       swap(this.heap, rootIndex, index);
//       this.heapifyUp(rootIndex);
//     }
//   }
//   // heapifyDown can be also used to insert, need to check from the last no leaf node
//   heapifyDown(parentIndex, size){
//     const left = 2 * parentIndex + 1;
//     const right = 2 * parentIndex + 2;
//     let largest = parentIndex;
//     // ! forget wrong left < size or right < size
//     if(left < size && this.heap[left] > this.heap[largest]){
//       largest = left;
//     }
//     if(right <size && this.heap[right] > this.heap[largest]){
//       largest = right;
//     }
//     if(largest !== parentIndex){
//       console.log('ll', largest)
//       swap(this.heap, parentIndex, largest);
//       this.heapifyDown(largest, size);
//     }
//   }
//   remove(toDeleteIndex){
//     const len = this.heap.length;
//     swap(this.heap, len-1, toDeleteIndex);
//     // delete 
//     this.heap.pop();
//     const parentIndex = Math.floor((toDeleteIndex -1)/2);
//     if(parentIndex >= 0 && this.heap[toDeleteIndex] > this.heap[parentIndex]){
//       this.heapifyUp(this.heap[toDeleteIndex]);
//     }else{
//       this.heapifyDown(toDeleteIndex,len-1);
//     }
//   }
//   find(val){
//   }
//   peek(){
//     // without delete the node
//   }
//   extract(){
//     // peek + delete the node
//   }
//   getHeap(){
//     return this.heap;
//   }
// }
var mHeap = new MaxHeap();
mHeap.bubbleDownInsert(10);
mHeap.bubbleDownInsert(12);
mHeap.bubbleDownInsert(13);
mHeap.bubbleDownInsert(15);
mHeap.bubbleDownInsert(16);
mHeap.bubbleDownInsert(29);
mHeap.bubbleDownInsert(27);
var m = mHeap.getHeap();
console.log('m', m);
mHeap["delete"](10);
var m2 = mHeap.getHeap();
console.log('m2', m);
// mHeap.bubbleDownInsert(16);
// mHeap.bubbleDownInsert(15);
