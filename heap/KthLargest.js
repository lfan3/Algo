/**
 * easy question 
 * @param {number} k
 * @param {number[]} nums
 * 微微有点绕，但是非常聪明！ 保持一个k个大小的PQ
 * 保持一个minHeap，如果minHeap.size > k, 把最小的弹出, 小的都弹出了 就只剩下大的了。minHeap.peek() 就是最大的K个数的第K个最大的。
 */

// todo:尝试可以更加降低内存的方法
// 加入indexheap，map改变
var KthLargest = function(k, nums) {
  this.k = k;
  this.minHeap = new MinHeap();
  
  nums.forEach(n=>{
    this.add(n);
  })
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.minHeap.add(val);
  if(this.minHeap.getSize() > this.k){
    this.minHeap.poll();
  }
  return this.minHeap.peek();
};

class MinHeap {
  constructor(){
    this.heap = [];
  }
  bubbleUpI(index){
    while(index >= 0){
      let parent = Math.floor((index-1)/2);
      if(parent >=0 && this.heap[parent] > this.heap[index])
        this.swap(index, parent);
      index = parent;
    }
  };

  sink(index){
    const size = this.getSize();
    while(index < size){
      let min = index;
      
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      if(left<size && this.heap[left] < this.heap[min]){
        min = left;
      }
      if(right < size && this.heap[right] < this.heap[min]){
        min = right;
      }
      if(min === index){
        break;
      }
      this.swap(min, index);
      index = min;
    }
  }
  swim(index){
    while(index>=0){
      const parent = Math.floor((index-1)/2);
      if(parent<0) break;
      if(this.heap[parent] > this.heap[index]){
        this.swap(parent, index);
        // wrong!
        // index = parent;
      }
      index = parent;
      
    }
  }
  // bubbleDown(index) {
  //   const left = 2*index + 1;
  //   const right = 2*index +2;
  //   let mindest = index;
  
  //   console.log(index, left, right, this.heap, this.heap[mindest], this.heap[left])
  //   console.log('com', this.heap[left]>=0, this.heap[-1] >=0);
    
  //   // 错误点：如果是[1,0], this.heap[1] === 0, 下面的判断将会是错误的。
  //   // if(this.heap[left] && this.heap[mindest] > this.heap[left]){
  //   if(this.heap[left] !== undefined && this.heap[mindest] > this.heap[left]){
  //     mindest = left;
  //   }
  //   if(this.heap[right] !== undefined && this.heap[mindest] > this.heap[right]){
  //     mindest = right;
  //   }
    
  //   // base case
  //   if(mindest === index){
  //     return;
  //   }
  //   this.swap(mindest, index);
  //   this.bubbleDown(mindest);
  // };
  poll(){
    this.swap(this.heap.length-1, 0);
    this.heap.pop();
    this.sink(0);
  }
  peek(){
    return this.heap[0];
  }
  add(val){
    this.heap.push(val);
    this.swim(this.heap.length-1);
  };
  swap(i, j){
    var temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
  getSize(){
    return this.heap.length;
  }
}



const kthLargest = new KthLargest(3, [4,5,8,2]);

// [null,-1,0,0,0,1]
console.log(kthLargest.add(3));   // return 4
console.log(kthLargest.add(5));   // return 5
console.log(kthLargest.add(10));  // return 5
console.log(kthLargest.add(9));   // return 8
console.log(kthLargest.add(4))
// console.log(heap.add(3), heap.heap);








