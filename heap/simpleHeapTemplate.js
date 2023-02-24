function swap(array, i, j){
  const temp = array[i];

  array[i] = array[j];
  array[j] = temp;
}

// todo：other methods with heapify
class minHeap{
  constructor(arr){
    this.heap = arr;
    this.size = arr.length;
  }
  // equivalent to downward
  heapify(size, index){
    if(size <=1) return;
    let minIndex = index;
    let l = 2*index + 1;
    let r = 2*index + 2;
    if(l<size && this.heap[l] < this.heap[minIndex]){
      minIndex = l;
    }
    if(r<size && this.heap[r] < this.heap[minIndex]){
      minIndex = r;
    }
    if(minIndex !== index ){
      swap(this.heap, minIndex, index);
      this.heapify(size, minIndex)
    }
  }
  // 从数组后面到前面
  //O(n) 
  build(){ 
    const size = this.heap.length
    // k 是要从哪里从新排序的点
    let k = Math.floor(size/2 - 1);
    while(k>=0){
      this.heapify(size, k);
      k--;
    }
  }
  // 返回的值 是从大到小排列
  sort = (size)=>{
    swap(this.heap,size-1,0);
    
    this.heapify(size-1, 0);
    
    if(size>1){
      this.sort(size-1)
    }
  }
  
  getHeap(){
    return this.heap;
  }
}

const n = [0,0,1,2,4,2,2,3,1,4]
const l = [1,4,6,2,10];
const mh = new minHeap(l);
mh.build();
console.log('mh', mh.getHeap())

mh.sort(5);
console.log('mh2', mh.getHeap())