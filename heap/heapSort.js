class HeapSort{
  constructor(arr){
    this.heap = arr;
    // can be optimized to O(1) space complexity
    this.result = []; 
    this.size = arr.length;
  }
  // 因为总是从root 去掉node，所以heapsort只能用heapifydown
  heapify(){
    const size = this.heap.length;
    if(size>1){
      for(let i=Math.floor(size/2 -1); i>=0; i--){
        HeapifyDown(this.heap, i, size)
      }
    }
  }

  sort(){
    while(this.heap.length){
      this.heapify();
      swap(this.heap, 0, this.heap.length-1);
      this.result.push(this.heap.pop());
    }
    return this.result;
  }
  sortWithContantSpace(){
    
    for(let i=this.size-1; i>=0; i--){
      let tmp = this.heap[i];
      this.heap[i] = this.heap[0];
      this.heap[0] = tmp;
      this.heapify2(i);
    }
  }
}

const hps = new HeapSort(arr);
const r = hps.sort();
console.log("r",r);