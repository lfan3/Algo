const {ListNode, geneList} = require('../lib');

// ascending order
// tip: with the help of dummy node
// mergeTwoList Vs mergeTwoSortedList
// !important is in the division
const mergeTwoList = (h1, h2)=>{
  const dummy = new ListNode(0);
  let tmp = dummy;
  let l1= h1;
  let l2= h2;
  
  while(l1 && l2){
    if(l1.val < l2.val){
      tmp.next = l1;
      l1 = l1.next;
    }else{
      tmp.next = l2;
      l2 = l2.next;
    }
    tmp = tmp.next;
  }
  if(l1){
    tmp.next = l1;
  }
  if(l2){
    tmp.next = l2;
  }
  return dummy.next;
}

const mergeListR = (h1, h2)=>{
  if(!h1) return h2;
  if(!h2) return h1;
  if(h1.val < h2.val){
    h1.next = mergeListR(h1.next, h2);
    return h1;
  }else{
    h2.next = mergeListR(h1, h2.next);
    return h2;
  }
}

// up down time n*logn space: logn
const division = (head, tail)=>{
  
  if(head === null){
    return head;
  }
  if(head.next === tail){
    head.next = null;
    return head;
  }
  
  //tip: 双指针 找中间的node
  let slow = head, fast = head;
  
  while(fast !== tail){
    slow = slow.next;
    fast = fast.next;
    if(fast !== tail){
      fast = fast.next;
    }
  }
  // !! difference with the array merge list: easy to mistake: use mid.next as the head, two node enter in endless loup
  // const p1 = division(head, mid)
  // const p2 = division(mid.next, tail);
  const mid = slow
  const p1 = division(head, mid)
  const p2 = division(mid, tail);
  return mergeTwoList(p1, p2);
}

// down-up: space: 1 time nlog
// variable: dummy + curr + h1 + h2 + next. curr 目的：keep track the new head， h 和 next 暂时变量 交换curr
const sortList = (head)=>{
  if(!head)
    return head;
  let length = 0;
  let tmp = head;
  while(tmp){
    tmp = tmp.next;
    length++;
  }
  let dummy = new ListNode(0);
  dummy.next = head;
  // !easy mistake: the condition in the loop, subLen is always double. sublenth << = 1
  for(let subLen = 1; subLen<length; subLen<<=1){
    // ! easy mistake: curr = dummy.next 而不是head 因为每次需要从头开始重新排序。
    // 如果curr = head，那么经过sublen=1，就不会继续sublen=2，因为curr = null 已经
    // 比如 【4,3,1,2】
    // sublen = 1, dummy = [3,4,1,2]
    // sublen = 2, dummy = [3,4,1,2]

    let prev = dummy, curr = dummy.next;
    // ！use curr to track the head
    console.log('sublen', subLen);
    
    while(curr){
      let h1 = curr;
      // console.log('b', curr)
      // !easy to mistake: the condition in the loop, subLen is always double. sublenth << = 1 
      // ! 保证curr next的属性是存在的，因为h2需要等于 curr.next
      for(let i=1; i<subLen&&curr.next; i++){
        curr = curr.next;
      }
      let h2 = curr.next;
      // 切断第一段list， 重新调整curr指针到新的list的head
      curr.next = null;
      // 将curr重新放到 头部节点
      curr = h2;
      // !easy to mistake: 这个时候curr可能是null， 有可能在循环的过程中触到尾部
      for(let i=1; i<subLen&&curr&&curr.next; i++){
        curr = curr.next;
      }
      // 辅助curr到下个循环
      let next = null;
      // 此时的curr可以是null 或者是第二段list的最后的节点，需要切断第二段list
      if(curr){
        next = curr.next;
        // 切断第二段list
        curr.next = null;
      }
      const merged = mergeTwoList(h1, h2);
      prev.next = merged;
      while(prev.next){
        prev = prev.next;
      }
      curr = next;
    }
  }
  return dummy.next;
}

// down-up: retry
const sortList2 = (head)=>{
  if(!head) return head;
  let len = 1;
  let tmp = head;
  while(tmp.next){
    tmp = tmp.next;
    len++;
  }
  let dummy = new ListNode(0);
  dummy.next = head;
  
  for(let subLen =1; subLen<len; subLen <<=1){
    // curr: to keep track the current node
    // dummy is used to return the value, and prev will conntected every merged list
    let prev = dummy;
    let curr = dummy.next;
    
    while(curr){
      // begin to go through the first list
      const h1 = curr;
      for(let i=1; i<subLen && curr.next; i++){
        curr = curr.next;
      }
      // at this moment current is the last node of the first list, it can't be null
      const h2 = curr.next;
      curr.next = null;
      // at this moment curr could be null
      curr = h2;
      // begin to handle the second list
      for(let i=1; i<subLen && curr && curr.next; i++){
        curr = curr.next;
      }
      // at this moment current is the last node of the second list, it could be null before the loop
      let next = null;
      if(curr){
        next = curr.next;
        curr.next = null;
      }
      curr = next;
      // console.log('k', h1, h2)
      const merged = mergeListR(h1, h2);
      // console.log('m', merged)
      
      prev.next = merged;
      
      while(prev.next){
        prev = prev.next;
      }
    }
  }
  return dummy.next;
  
}



function main(){
  const a = [2];
  const b = [3];
  const d = [4, 3];
  const c = [4,3,2,1];
  const l1 = geneList(a);
  const l2 = geneList(b);
  const l3 = geneList(c);
  const l4 = geneList(d);
  
  // const m1 = division(l3, null);
  const m2 = sortList2(l3)
  console.log('m2', m2);
  
  // const m = mergeTwoList(l1, l1.next.next.next);
}


main()