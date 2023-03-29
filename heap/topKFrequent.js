/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 输出frequnce 前k的数值
 */

// todo: 遍历数组方法 看看时间是否有所提高
var topKFrequent = function(nums, k) {
  const heap = new maxHeap();
  const res = [];
  
  const process = ()=>{
    nums.forEach(n => {
      heap.add(n);
    })
    for(let i=k; i>0; i--){
      res.push(heap.poll().number);
    }
  }
  process()
  return res;
};


class maxHeap{
  existedNum = [];
  posMap = {};
  maxHeap = [];
  maxHeapSize = 0;
  // item: {number, frequence}
  add(number){
    if(!this.existedNum.includes(number)){
      // 新元素add to heap
      const item = {number,frequence: 1};
      this.maxSize++;
      this.maxHeap.push(item);
      this.existedNum.push(number);
      this.posMap[number] = this.maxHeapSize -1;
      this.swim(this.maxHeapSize-1);
    }else{
      // 已经有的元素update it
      const numPos = this.posMap[number];
      
      this.update(numPos);
    }
    console.log('fe', this.getHeap());
    
  }
  poll(){
    const head = this.maxHeap[0];
    this.swap(0, this.maxHeapSize-1);
    this.maxHeapSize--;
    this.maxHeap.pop();
    this.sink(0);
    return head;
  }
  less(i, j){
    return  this.maxHeap[j].frequence - this.maxHeap[i].frequence < 0;
  }
  swim(index){
    while(index>=0){
      const p = Math.floor((index-1)/2);
      if(p>=0 && this.less(index, p)){
        this.swap(index, p);
      }
      index = p;
    }
  }
  sink(index){
    while(index < this.maxHeapSize){
      const l = 2 * index + 1;
      const r = 2 * index + 2;
      let min = index;
      if(l<this.maxHeapSize && this.less(l,min)){
        min = l;
      }
      if(r<this.maxHeapSize && this.less(r, min)){
        min = r;
      }
      if(min === index) break;
      this.swap(index, min);
      index = min;
    }
  }
  swap(i,j){
    const tmp = this.maxHeap[i];
    this.maxHeap[i] = this.maxHeap[j];
    this.posMap[this.maxHeap[j].number] = i;
    this.maxHeap[j] = tmp;
    this.posMap[tmp.number] = j;
  }
  update(i){
    this.maxHeap[i].frequence++;
    this.swim(i);
  }
  getSize(){
    return this.maxHeapSize;
  }
  getHeap(){
    return this.maxHeap;
  }
}

const tk = topKFrequent( [1,2,2,5,5,5], 2);
console.log('tk', tk);

