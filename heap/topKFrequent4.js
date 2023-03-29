// 建立heapArr数组之后（同toPKfrequent3）， add 形成一个小堆
var topKFrequent = function(nums, k) {
  const kvMap = new Map();
  const heapArr = [];
  // O(n)
  nums.forEach(n=>{
    const f = kvMap.get(n);
    if(f){
      kvMap.set(n, f+1);
    }else{
      kvMap.set(n, 1);
    }
  })
  for(let [key, val] of kvMap.entries() ){
    const a = {ki: key, val};
    heapArr.push(a)
  }
  
  
  const minheap = new MinHeap();
  // O(klogn), k < n
  for(let i=0; i<heapArr.length; i++){
    minheap.add(heapArr[i]);
    if(minheap.getSize() > k){
      minheap.poll();
    }
  }
  
  const res = minheap.getHeap().map(h=>h.ki)
  
  return res;
};

class MinHeap{
  constructor(){
    this.heap = [];
  }
  
  add(item){
    this.heap.push(item);
    const sz = this.getSize();
    this.swim(sz -1);
  }
  poll(){
    const sz = this.getSize();
    if(!sz) return null;
    this.swap(0, sz-1);
    const r = this.heap.pop();
    this.sink(0);
    return r.ki;
  }
  swim(index){
    let p = Math.floor((index-1)/2);
    while(p>=0 && this.less(index, p)){
      this.swap(index, p);
      index = p;
      p = Math.floor((index-1)/2);
    }
  }
  sink(index){
    const sz = this.getSize()
    while(index< sz){
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let min = left;
      
      if(right < sz && this.less(right, min)){
        min = right;
      }
      if(left >= sz || this.less(index, min)) break;
      this.swap(min, index);
      index = min;
    }
  }
  less(i, j){
    return this.heap[i].val - this.heap[j].val < 0;
  }
  getSize(){
    return this.heap.length;
  }
  swap(i, j){
    var temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
  getHeap(){
    return this.heap;
  }
  
}

const tk = topKFrequent( [1,2,2,3,3,3],2);
console.log('tk', tk);