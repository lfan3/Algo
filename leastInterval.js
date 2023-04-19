// 越多的task应该越先处理。
// 可以用heap来快速找到仍然剩余很多的task，这里 我想简单的用一个排序。
// 用一个queue来存时间
// 考点点：heap和queue的应用
function leastInterval(tasks, n) {
  const heap = new MaxHeap();
  const queue = [];
  const visitedMap = new Map();
  const result = [];
  let timers = 0;

  tasks.forEach(t => {
    if (!visitedMap.has(t)) {
      visitedMap.set(t, 1);
    } else {
      const times = visitedMap.get(t);
      visitedMap.set(t, times + 1);
    }
  });

  for (let [key, val] of visitedMap.entries()) {
    heap.add([val, key]);
  }

  // 起始
  while (heap.heap.length || queue.length) {

    const f = heap.poll();
    if (f && f.length) {
      const item = [f[0] - 1, f[1]];
      if (item[0] > 0) {
        // queue的 update 和timer之间的关系
        queue.push([item, timers + n]);
      }
    }
    if (f.length) {
      result.push(f[1]);
    } else {
      result.push("待命");
    }
    if (queue.length && timers >= queue[0][1]) {
      const dequeue = queue.shift();
      const node = dequeue[0];
      console.log('n', node);
      heap.add(node);
    }
    timers++;
  }
  return result;
}

var MaxHeap = function(){
  this.heap = [];
}

MaxHeap.prototype.add = function(item){
  // @item:[1, 'A']
    this.heap.push(item);
    if(this.heap.length > 1){
      this.bubbleUp(this.heap.length-1);
    }
}

MaxHeap.prototype.poll = function(){
  if(this.heap.length){
    this.swap(0, this.heap.length-1);
    const root = this.heap.pop();
    this.bubbleDown(0);
    return root;
  }else{
    return [];
  }
  
}

MaxHeap.prototype.bubbleUp = function(i){
  // wrong: (i-1)/2 i have mistaken here
  let parent = Math.floor((i-1)/2);
  while(parent>=0){
    if(this.heap[parent][0] < this.heap[i][0]){
      this.swap(parent, i);
    };
    i = parent;
    parent = Math.floor((i-1)/2);
  }
}

MaxHeap.prototype.bubbleDown = function(i){
  while(i<this.heap.length){
    let left = 2*i+1;
    let right = 2*i+2;
    let max = left;
    if(right<this.heap.length && this.heap[right][0] > this.heap[max][0]){
      max = right;
    }
    if(left>=this.heap.length || this.heap[max][0] < this.heap[i]){
      break;
    }
    this.swap(max, i);
    i = max;
  }
}

MaxHeap.prototype.swap = function(i, j){
  const tmp = this.heap[i];
  this.heap[i] = this.heap[j];
  this.heap[j] = tmp;
}

function main(){
  const tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"];
  // const tasks = ["A","A","A","A","A","A","B","C","D", "E", "F"];
  const n = 2;
  const m = leastInterval(tasks, n);
  console.log('m',m.length)
}



main()