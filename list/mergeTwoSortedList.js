const {geneList} = require('./lib');

function mergeTwoListRecursive(list1, list2){
  if(!list1) return list2;
  if(!list2) return list1;
  
  if(list1.val < list2.val){
    list1.next = mergeTwoListRecursive(list1.next, list2);
    return list1;
  }else{
    list2.next = mergeTwoListRecursive(list1, list2.next);
    return list2;
  }
}

var mergeTwoLists = function(l1, l2) {
  const dummy = new ListNode();
  let tmp = dummy;

  while(l1 && l2){
      if(l1.val <= l2.val){
          const node = new ListNode(l1.val);
          tmp.next = node;
          l1 = l1.next;
      }else{
          const node = new ListNode(l2.val);
          tmp.next = node;
          l2 = l2.next; 
      }
      tmp = tmp.next;
  }
  if(!l1) tmp.next = l2;
  if(!l2) tmp.next = l1;
  return dummy.next;
};

const l1 = geneList([1,4,6])
const l2 = geneList([2,5,7])

// const h = mergeTwoListRecursive(l1, l2);



