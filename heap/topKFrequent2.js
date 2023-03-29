var topKFrequent = function(nums, k) {
  // const heap = new minHeap();
  const res = [];
  const kiValMap = {};
  const pki = {};
  const kis = Array.from(new Set(nums)); 
  
  kis.forEach((k, i)=>{
    kiValMap[k] = 0;
    pki[k] = i;
  });
  const heapArr = kis.map(k=>({ki:k, val: 0}));
  
  const maxheap = new maxHeap(heapArr, kiValMap, pki);
  nums.forEach(n=>{
    maxheap.increaseUpdate(n);
  })
  console.log('f', maxheap.getHeap());
  
  for(let i=k; i>0; i--){
    res.push(maxheap.poll())
  }
  return res;
};

class maxHeap{
  constructor(arr, kiValMap, pki){
    this.heap = arr;
    this.pki = pki;
    this.kiValMap = kiValMap;
  }
  
  increaseUpdate(ki){
    const pos = this.pki[ki];
    const val = this.kiValMap[ki];
    
    this.heap[pos] = {ki, val:val + 1};
    this.swim(pos);
    this.kiValMap[ki] = val + 1;
  }
  
  poll(){
    if(!this.heap.length) return null;
    const toDelete = this.heap[0]
    const ki = toDelete.ki;
    this.swap(0, this.heap.length-1);
    this.heap.pop();
    // forget to sink
    this.sink(0)
    delete this.pki[ki];
    delete this.kiValMap[ki];
    return ki;
  }
  more(i,j){
    return this.heap[i].val - this.heap[j].val > 0;
  }
  
  swim(index){
    let p = Math.floor((index-1)/2);
    while(p>=0 && this.more(index, p)){
      this.swap(index, p);
      index = p;
      p = Math.floor((index-1)/2);
    }
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
  
  swap(i, j){
    const tmp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = tmp;
    this.pki[this.heap[i].ki] = i;
    this.pki[this.heap[j].ki] = j;
  }
  
  getHeap(){
    return this.heap;
  }
}

const tk = topKFrequent( [1,1,1,2,2,3],2);
console.log('tk', tk);
