// methods
// addNodeToTail
// removeNode
// updateNode: removeNode + addNodeToTail
// O(1) + O(n)

class Node{
  constructor(n=0){
    this.val = n;
    this.next = null;
    this.prev = null;
  }
}

class DoubleList{
  constructor(){
    this.dummyHead = new Node();
    this.dummyTail = new Node();
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }
  addNodeToTail(node){
    const lastNode = this.dummyTail.prev;
    lastNode.next = node;
    node.prev = lastNode;
    node.next = this.dummyTail;
    this.dummyTail.prev = node;
  }
  removeNode(node){
    const nodePrev = node.prev;
    const nodeAfter = node.next;
    node.next = null;
    node.prev = null;
    nodePrev.next =nodeAfter;
    nodeAfter.prev = nodePrev;
  }
  update(node){
    this.removeNode(node);
    this.addNodeToTail(node);
  }
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)

const db = new DoubleList();
db.addNodeToTail(node1);
db.addNodeToTail(node2);
db.addNodeToTail(node3);
console.log('db1', db.dummyHead.next.next);
db.removeNode(node2);
console.log('db2', db.dummyHead.next.next);
