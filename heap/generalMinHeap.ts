// T nodeType, K keyType

export interface PriorityQueue<T>{
  getHeap:()=>T[];
  insert:(val:T)=>void;
  poll:()=>T;
  heapifyDown:(parentIndex:number)=>void;
  getSize: ()=>number;
}

export default class MinHeap<T> implements PriorityQueue<T>{
  heap:T[];
  // peekRegister:T[];
  size:number;
  comparable: (n1:T, n2:T)=>boolean;
  
  constructor(comparable: (n1:T, n2:T)=>boolean){
    this.heap = [];
    // this.peekRegister = [];
    this.size = 0;
    this.comparable = comparable;
  }
  getHeap(){
      return this.heap;
  }
  // getPeekRegister(){
  //     return this.peekRegister;
  // }
  insert(val:T){
    this.size++;
    this.heap.push(val);
    this.heapifyUp(this.size-1);
  }
  poll(){
    this.size--;
    const toDelete = this.heap[0];
    this.swap(this.size, 0);
    this.heapifyDown(0);
    return toDelete;
  }
  heapifyUp(index:number){
    let parentIndex = Math.floor((index-1)/2);
    while(parentIndex>=0){
      if(this.comparable(this.heap[index],this.heap[parentIndex])){
        this.swap(index, parentIndex);
      }
      index = parentIndex;
      parentIndex =  Math.floor((index-1)/2);
    }
  }
  heapifyDown(parentIndex:number){
     while(parentIndex<this.size){
       const left = 2 * parentIndex + 1;
       const right = 2 * parentIndex + 2;
       let minIndex = left;
       if(right < this.size && this.comparable(this.heap[right], this.heap[minIndex])){
         minIndex = right;
       }
       if(left >= this.size || this.comparable(this.heap[parentIndex], this.heap[minIndex])) break;
          
       this.swap(minIndex, parentIndex);
       parentIndex = minIndex;
     }
  }

  //healper funciton
  swap(p1:number, p2:number){
    console.log('ss', p1, p2)
      let temp = this.heap[p1];
      this.heap[p1] = this.heap[p2];
      this.heap[p2] = temp;
  }
  getSize(){
    return this.size;
  }
}

interface Item {
  key: string;
  value: number;
}


function less(n1:Item, n2:Item){
  return n1.value - n2.value < 0;
}

const letterKiToValue = {
  'A':0,
  'B':1,
  'C':5,
  'D':6,
}

function main(){
  const heap = new MinHeap(less);

  heap.insert({key:'A', value:0});
  heap.insert({key:'B', value:1});
  heap.insert({key:'C', value:5});
  heap.insert({key:'D', value:6});
  console.log(heap.getHeap());
  heap.poll();
  console.log(heap.getHeap());
  heap.poll();
  console.log(heap.getHeap());
  // heap.poll();
}
// main()

