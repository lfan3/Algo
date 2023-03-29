const {geneList} = require('./lib');

function reverseListNode(head){
  if(!head.next || !head){
    return head;
  };
  const node = reverseListNode(head.next);
  // !difficult part + important. i wrote like head.next = head, causes a cycle
  head.next.next = head;
  head.next = null;
  // ! to understand: we will always return the reversed list head node.
  return node;
}

// 1->2->3->4->5
// 1->2->3->4<->5
// 1->2->3->4<-5
// 1->2->3<->4<-5
// 1->2->3<-4<-5


const h = geneList([1,2,3,4,5]);
const m = reverseListNode(h)
console.log(m)