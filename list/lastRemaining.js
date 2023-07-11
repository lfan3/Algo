class Node{
  constructor(val){
    this.value = val;
    this.next = null;
  }
}

var lastRemaining = function(n, m) {
  let head = new Node(0);
  let tmp = head;
  let size = n;
  let counter = 1;
  let res = undefined
  
  for(let i=1; i<n; i++){
    const next = new Node(i);
    tmp.next = next;
    tmp = tmp.next;
  }
  tmp.next = head;
  tmp = head;
  console.log("b", tmp)
  while(size>1){
    console.log("c", counter, size)
    if(counter%m === m-1){
      const afterNext = tmp.next.next;
      console.log("a",tmp, afterNext)
      if(afterNext.value === tmp.value){
        console.log('eg', afterNext);
        
        res = tmp.next.value
        tmp = null;
        break;
      }else{
        tmp.next = afterNext;
      }
      console.log("a2",tmp)
      
      counter++;
      size--;
    }
    tmp = tmp.next;
    
    counter++;
  }
  console.log(head)
  return res;
};

const m = lastRemaining(5, 3);
console.log("m",m)