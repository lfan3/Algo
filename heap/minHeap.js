class MinHeap{
    size = 0;

    //to implement poll insert peek remove
    heap = [];
    peekRegister = [];

    getHeap(){
        return this.heap;
    }
    getPeekRegister(){
        return this.peekRegister;
    }
    insert(val){
        this.heap.push(val);
        this.swap(this.size, 0);
        this.size++;
        this.heapifyDown(0);
    }
    heapifyDown(parentIndex){
        const left = 2 * parentIndex + 1;
        const right = 2 * parentIndex + 2;
        const minIndex = parentIndex;

        if(left < this.size && this.heap[left] < this.heap[minIndex]){
            minIndex = left;
        }if(right < this.size && this.heap[right] < this.heap[minIndex]){
            minIndex = right;
        }
        if(minIndex !== parentIndex){
            this.swap(minIndex, parentIndex);
            this.heapifyDown(minIndex);
        }
    }
    peek(){
        const item = this.heap[0];
        this.swap(this.heap.length - 1, 0);
        this.heap.pop();
        this.heapifyDown(0);
        this.peekRegister.push(item);
    }
    //healper funciton
    swap(p1, p2){
        let temp = this.heap[p1];
        this.heap[p1] = this.heap[p2];
        this.heap[p2] = temp;
    }

}

const heap = new MinHeap();
heap.insert(10);
heap.insert(8);
heap.insert(7);
const h1 = heap.getHeap();
heap.peek();
heap.peek();
heap.peek();
console.log(heap.peekRegister);
console.log(heap.getHeap());

class MaxHeap {
    heap = [];
    peekRegister = [];
    valPositionMap = new Map();

    getMaxHeap(){
        return this.heap;
    }
    getPositionMap(){
        return this.valPositionMap;
    }
    add(val){
        const len = this.heap.length;
        this.heap.push(val);
        if(len > 0){
            this.heapifyUp(val, len);
        } else {
            this.valPositionMap.set(val, 0);
        }
    }
    poll(){

    }
    remove(val){
        const len = this.heap.length;
        const valIndex = this.valPositionMap.get(val);
        //if not the root element itself
        const rootIndex = Math.floor((valIndex-1)/2);
        const leftChildIndex = 2*valIndex + 1;
        const rightChildIndex = 2*valIndex + 2;
        this.swap(valIndex, len-1);
        this.heap.pop();
        const newElementVal = this.heap[valIndex];
        if(this.heap[rootIndex] < newElementVal){
            this.heapifyUp(newElementVal, valIndex);
        } else if((leftChildIndex < len && this.heap[leftChildIndex] > newElementVal) || (rightChildIndex < len && this.heap[rightChildIndex] > newElementVal)){
            this.heapifyDown(newElementVal, leftChildIndex, rightChildIndex);
        }
    }
    heapifyDown(val, leftChIndex, rightChIndex){

    }
    heapifyUp(val, index){
        const rootIndex = Math.floor((index-1)/2);

        if(rootIndex>=0 && val > this.heap[rootIndex]){
            this.swap(rootIndex, index);
            this.heapifyUp(val, rootIndex);
        }
    }
    swap(index1, index2){
        const oldIndex1Val = this.heap[index1];
        const oldIndex2Val = this.heap[index2]; 
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = oldIndex1Val;
        this.valPositionMap.set(oldIndex1Val, index2);
        this.valPositionMap.set(oldIndex2Val, index1);
    }
}

// const maxHeap = new MaxHeap();
// maxHeap.add(10);
// maxHeap.add(13);
// maxHeap.add(20);
// maxHeap.add(15);
// maxHeap.add(4);
// maxHeap.add(12);
// const mh = maxHeap.getMaxHeap();
// const pm = maxHeap.getPositionMap();
// console.log(mh);
// console.log(pm);