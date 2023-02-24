class Node{
  constructor(value){
    this.val = value;
    this.next = null;
    this.previous = null;
  }
}

// double list remove 的时候需要把 中间的Node 的连接去掉。比如 node2.previous = null; node2.next = null. node1.next = node3; node3.previous = node1
class DoubleList{
  constructor(){
    this.dummyHead = new Node();
    this.dummyTail = new Node();
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.previous = this.dummyHead;
  }
  // ??if addNodeToTail or add from a value
  addNodeToTail(node){
    const lastNode = this.dummyTail.previous;
    lastNode.next = node;
    node.previous = lastNode;
    node.next = this.dummyTail;
    this.dummyTail.previous = node;
  }
  //move node then put it to the tail
  moveExistedNodeToTail(node){
    //！关键点
    this.deleteNode(node);
    this.addNodeToTail(node);
  }
  deleteNode(node){
    //!关键点难点。 建立A C之间的链接。去掉B的前后连接。如果是C需要free
    node.next.previous = node.previous;
    node.previous.next = node.next;
    node.next = null;
    node.previous = null;
  }
  addNodeToHead(node){
    const tmp = this.dummyHead.next;
    node.next = tmp;
    node.previous = this.dummyHead;
    this.dummyHead.next = node;
    tmp.previous = node;
  }
}

// node1.next = node3;
// node3.previous = node1;
// node3.next = node2;
// node2.next = null;
// node2.previous = node3;
const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)

const db = new DoubleList();
db.addNodeToTail(node1);
db.addNodeToTail(node2);
db.addNodeToTail(node3);
db.moveExistedNodeToTail(node2);

console.log(db.dummyHead.next.val, db.dummyHead.next.next.val, db.dummyHead.next.next.next.val)
console.log(db.dummyTail.previous.val,db.dummyTail.previous.previous.val,db.dummyTail.previous.previous.previous.val, );

// console.log(node2.next?.val, node2.previous.val)
// console.log(node1.next.val, node1.previous?.val)
// console.log('node', node2)