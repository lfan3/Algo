function Heap(){
  this.minSum = [];
}
// wrong !!! es6 not right
// Heap.prototype.add = (u, v, s)=>{
//   console.log(this)
//   this.minSum.push([u, v, s]);
  
//   if(this.minSum.length){
//     this.swim();
//   }
// }

Heap.prototype.add = function(u, v, s){
  this.minSum.push([u, v, s]);
  
  if(this.minSum.length){
    this.swim();
  }
}

Heap.prototype.swim = function(){
  let index = this.minSum.length - 1;
  while(index >= 1){
    const parentIndex = Math.floor((index -1)/2);
    if(this.minSum[parentIndex][2] > this.minSum[index][2]){
      this.swap( parentIndex,index);
      index = parentIndex;
    }else{
      break;
    }
  }
}

Heap.prototype.sink = function(){
  let index = 0;
  let min = 0;
  const size = this.minSum.length;
  while(index <= (size-2)/2){
    const left = 2*index +1;
    const right = 2*index +2;
    if(left <= size-1 && this.minSum[min][2] > this.minSum[left][2]){
      min = left
    }
    if(right <= size -1 && this.minSum[min][2] > this.minSum[right][2]){
      min = right;
    }
    if(min === index) break;
    this.swap(min, index);
    index = min;
  }
}

Heap.prototype.poll = function(){
  const lastIndex = this.minSum.length-1;
  this.swap(lastIndex, 0);
  const min = this.minSum.pop();
  this.sink();
  return [min[0], min[1]];
}

Heap.prototype.swap =function(i, j){
  var temp = this.minSum[i];
  this.minSum[i] = this.minSum[j];
  this.minSum[j] = temp;
}

Heap.prototype.get = function(){
  return this.minSum;
}

var kSmallestPairs = function(nums1, nums2, k) {
  const heap = new Heap([]);
  const res = [];
  
  nums1.forEach(n1=>{
    
    nums2.forEach(n2 =>{
      heap.add(n1, n2, n1+n2)
    })
  })
  const size = heap.get().length;
  for(let i=k,j=0; i>0 && j<size; i--, j++){
    res.push(heap.poll())
  }
  // console.log(heap)
  return res;
};

// todo 怎么优化
console.log('kkkk', kSmallestPairs([1,2], [3], 3));
// const heap = new Heap();
// heap.add(10, 3, 4);
// heap.add(40, 2, 1);
// heap.add(1, 2, 5);
// heap.add(0, 2, 2);
// console.log(heap.poll())
// console.log(heap.poll())



