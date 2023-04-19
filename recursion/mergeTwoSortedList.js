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

const l1 = geneList([1,4,6])
const l2 = geneList([2,5,7])

const h = mergeTwoListRecursive(l1, l2);
console.log('h', h, h.next.next)
