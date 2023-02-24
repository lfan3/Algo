function swap(array, i, j){
  const temp = array[i];

  array[i] = array[j];
  array[j] = temp;
}

/**
 * description
 * base:
 *  heap is represented as array. 
 *  if n is the index of parent node, then left child index: 2n + 1, right child index: 2n + 2
 * first no-leaf node index: size/2 - 1;
 * (I) definition: 
 *  1 satisfait complete binary tree + 2 satifie the heap property
 * (II) usage: 
 *  heap sort, dijkstra algo, priority queue
 * (III) basic operations/methods
 *  insert O(logn)
 *  create O(nlogn)
 *  extract O(logn)
 *  peek O(1)
 *  heapify O(n)
 *  delete: root node O(logn), leaf node O(1), other node (with hashtable to track the index or not)
 * (IV) extra
 *  heapify and creat can both be used to create heap, but the time complexity of heapify is more advantaged
 * (V) need to make a comparison with BST.
 * (VI) peudo code 
 * Heapify(array, size, i)
  set i as largest
  leftChild = 2i + 1
  rightChild = 2i + 2
  
  if leftChild > array[largest]
    set leftChildIndex as largest
  if rightChild > array[largest]
    set rightChildIndex as largest

  swap array[i] and array[largest]
 */

interface Heap{
  peek:()=>void;
  bubbleUpInsert:(n:number)=>void;
  bubbleDownInsert:(n:number)=>void;
  create: ()=>void;
  extract: ()=>void;
  delete: (n:number)=>void;
  heapify:(size:number, currentIndex:number)=>void;
  bubbleUp: (index:number)=>void;
  bubbleDown: (size:number,index:number)=> void;
  getHeap: ()=> number[];
}

//todo: heapify in c
class MaxHeap implements Heap{
  private heapRegister: number[];
  private disorderArr: number[];
  private map = {};
  
  constructor(arr=[], heapArr=[]){
    this.heapRegister= heapArr;
    this.disorderArr = arr;
  }
  // it is equivalent to bubbleUp insert --- normal insert
  bubbleUpInsert(n:number){
    if(!this.heapRegister.length){
      this.heapRegister.push(n)
    }else{
      this.heapRegister.push(n);
      const len = this.heapRegister.length;
      this.bubbleUp(len-1);
    }
  }
  // it is like insert with heapify, heapify is bubble down insert
  bubbleDownInsert(n:number){
    let size = this.heapRegister.length;
    this.heapRegister.push(n);
    size++;
    
    // 前提每次insert都已经处理好了顺序
    while(size>1){
      const lastParentNodeIndex = Math.floor(size/2 -1);
      this.bubbleDown(size, lastParentNodeIndex);
      size = lastParentNodeIndex+1;
      console.log('size', size)
    }
  }
  // heapify is equivalent to bubbleDown
  heapify(size:number, currentIndex:number){
    this.bubbleDown(size, currentIndex);
  }
  bubbleUp(index:number){
    const parentIndex = Math.floor((index-1)/2);
    if(this.heapRegister[parentIndex] < this.heapRegister[index]){
      swap(this.heapRegister, index, parentIndex);
      this.bubbleUp(parentIndex);
    }
  }
  bubbleDown(size:number,index:number){
    let maxVal = this.heapRegister[index];
    let  maxIndex = index;
    const leftChildIndex = 2*index + 1;
    const rightChildIndex = 2*index + 2;
    if(leftChildIndex < size && this.heapRegister[leftChildIndex] > maxVal){
      maxVal = this.heapRegister[leftChildIndex];
      maxIndex = leftChildIndex;
    }
    if(rightChildIndex < size && this.heapRegister[rightChildIndex] > maxVal){
      maxIndex = rightChildIndex;
      maxVal = this.heapRegister[rightChildIndex];
    }
    // !!!这个地方没有做判断 导致死循环
    if(maxIndex !== index){
      swap(this.heapRegister, maxIndex, index);
      this.bubbleDown(size,maxIndex);
    }
  }
  getHeap(){
    return this.heapRegister;
  }
  peek(){
    return this.heapRegister[0];
  }
  extract(){
    let size = this.heapRegister.length;
    swap(this.heapRegister, 0, size-1);
    this.heapRegister.pop();
    size--;
    this.heapify(size-1, 0);
  }
  create(){
    for(let item of this.disorderArr){
      this.bubbleUpInsert(item);
    }
  }
  createWithHeap(){
    for(let item of this.disorderArr){
      this.bubbleDownInsert(item);
    }
  }
  // todo: 这里是一个可以优化的地方， 先简单 后优化
  delete(n:number){
    let size = this.heapRegister.length;
    let i = 0;
    let targetIndex:number = -1;
    // O(n) 线性时间
    while(i<size){
      if(this.heapRegister[i] === n){
        targetIndex = i;
        break;
      };
      i++;
    }
    if(targetIndex >= 0){
      //交换位置
      swap(this.heapRegister, targetIndex, size-1);
      this.heapRegister.pop();
      size--;
      // 判断向下 还是向上
      const parent = Math.floor((targetIndex - 1)/2);
      // 向上
      if(this.heapRegister[parent] < this.heapRegister[targetIndex]){
        this.bubbleUp(targetIndex);
      }else{
      // 向下
        this.bubbleDown(size, targetIndex );
      }
    }
  }
}


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


const mHeap = new MaxHeap();
mHeap.bubbleDownInsert(10);
mHeap.bubbleDownInsert(12);
mHeap.bubbleDownInsert(13);
mHeap.bubbleDownInsert(15);
mHeap.bubbleDownInsert(16);
mHeap.bubbleDownInsert(29);
mHeap.bubbleDownInsert(27);
const m = mHeap.getHeap();
console.log('m', m)
mHeap.delete(10);
const m2 = mHeap.getHeap();
console.log('m2', m)

// mHeap.bubbleDownInsert(16);
// mHeap.bubbleDownInsert(15);