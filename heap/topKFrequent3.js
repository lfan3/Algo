var topKFrequent = function(nums, k) {
  const res = [];
  const kvMap = {};

  // O(n)
  nums.forEach(n=>{
    const f = kvMap[n];
    if(f){
      kvMap[n] = f + 1;
    }else{
      kvMap[n] = 1;
    }
  })
  // O(n)
  const heapArr = Object.keys(kvMap).map(k=>({ki:k, val:kvMap[k]}));
  const maxheap = new maxHeap(heapArr);
  // O(n)
  maxheap.heapify();
  
  // O(klog(n))
  for(let i=k; i>0; i--){
    res.push(maxheap.poll())
  }
  return res;
};

class maxHeap{
  constructor(heap){
    this.heap = heap;
    this.size = this.heap.length;
  }
  heapify(){
    for(let i=Math.floor((this.size-2)/2); i>=0; i--){
      this.sink(i);
    }
  }
  more(i,j){
    return this.heap[i].val - this.heap[j].val > 0;
  }
  poll(){
    if(!this.heap.length) return null;
    const toDelete = this.heap[0]
    this.swap(0, this.heap.length-1);
    this.heap.pop();
    // forget to sink
    this.sink(0)
    return toDelete.ki;
  }
  sink(index){
    const sz = this.heap.length;
    while(index< sz){
      const l = 2 * index + 1;
      const r = 2 * index + 2;
      let max = l;
      
      if(r<sz && this.more(r, max)){
        max = r;
      }
      if(l>=sz || this.more(index, max) ) break;
      this.swap(index, max);
      index = max;
    }
  }
  getHeap(){
    return this.heap;
  }
  swap(i, j){
    const tmp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = tmp;
  }
}

const tk = topKFrequent( [1,5,5,5,1,2,2,3],2);
console.log('tk', tk);
