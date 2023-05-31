var findKthLargest = function(nums, k) {
// the kth largest 就是k个大元素 里面的最小的元素。
// 因此可以通过keep 一个 数量为K的minHeap。循环nums的时候 如果某个数字n 大于 mindest，就poll minheap 然后插入n
/**pseudo code
 * minHeap没有到k个的时候无需poll,也无需判断n是否大于mindest
 */
  const minHeap = new Minheap(k);
  nums.forEach((n)=>{
    const min = minHeap.getMin();
    const size = minHeap.getSize();
    if(!min || k > size){
      minHeap.add(n);
    }else if(n > min){
      minHeap.add(n);
    }
  });
  return minHeap.getMin();
};

class Minheap{
  constructor(k){
    this.heap = [];
    this.size = 0;
    this.limite = k;
  }
  getHeap = ()=>{
    return this.heap
  }
  getSize = ()=>{
    return this.size;
  }
  getMin = ()=>{
    return this.heap[0];
  }
  add = (n)=>{
    
    if(this.size>= this.limite){
      this.poll();
    }
    
    this.insert(n)
  console.log(this.getHeap());
    
  }
  poll = ()=>{
    this.swap(this.size-1, 0);
    this.heap.pop();
    this.size--;
    this.bubbleDown(0);
  }
  insert = (n)=>{
    this.heap.push(n);
    this.bubbleUp(this.size);
    this.size++;
  }
  bubbleUp = (index)=>{
    let parent = Math.floor((index-1)/2);
    while(parent >=0){
      if(this.heap[parent] > this.heap[index]){
        this.swap(parent, index);
      }
      index = parent;
      parent = Math.floor((index-1)/2);
    }
  }
  //从0位置下去
  bubbleDown = (parent)=>{
    while(parent < this.size){
      let left = 2 * parent+1;
      let right = 2 *parent +2;
      let minIndex = left;
      // !!!error: easy to mistake
      if(right < this.size && this.heap[right] < this.heap[minIndex]){
        minIndex = right;
      }
      // !!! need to review, 这个条件 总是想做 对比的是parent 和 minIndex
      if(left >= this.size || this.heap[minIndex] >= this.heap[parent]){
        break;
      }
      this.swap(minIndex, parent);
      parent = minIndex;
    }
  }
  
  swap = (i, j)=>{
    const tmp = this.heap[i];
    this.heap[i] = this.heap[j]
    this.heap[j] = tmp;
  }
  
}

function main(){
  // const nums = [1,4,6,8,9,10,28,24];
  // const nums = [2,1];
  const nums = [3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6];
  // 是否需要考虑 k 奇怪的值的时候
  const k = 20;
  const r = findKthLargest(nums, k);
  console.log('r',r);
}

main()