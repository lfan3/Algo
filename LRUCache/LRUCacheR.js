// 2022/09/13 redo
function Node(key=-1, value=-1){
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
}

class LRUCacheRe{
  constructor(capacity){
    this.dummyHead = new Node();
    this.dummyTail = new Node();
    this.cache = new Map();
    this.size = 0;
    this.capacity = capacity;
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }
  // if node exists change the node value and move it to the head
  // if node does not exist, create it and put it on the head. but if the size > capcacity, we need to delete the oldest one.
  put(key,value){
    if(this.cache.has(key)){
      const node = this.cache.get(key);
      node.value = value;
      this.moveNodeToHead(node);
    }else{
      const newNode = new Node(key,value);
      this.addNodeToHead(newNode);
      this.cache.set(key, newNode);
      this.size++;
      if(this.size > this.capacity){
        const deletedNode = this.removeFromTail();
        this.cache.delete(deletedNode.key);
      }
    }
  }
  
  get(key){
    if(this.cache.has(key)){
      const node = this.cache.get(key);
      this.moveNodeToHead(node);
      return this.dummyHead.next;
    }
    return -1;
  }
  
  addNodeToHead(node){
    const tmp = this.dummyHead.next;
    this.dummyHead.next = node;
    node.prev = this.dummyHead;
    node.next = tmp;
    tmp.prev = node;
    return node;
  }
  
  removeFromTail(){
    const toDeleteNode = this.dummyTail.prev;
    toDeleteNode.prev.next = this.dummyTail;
    this.dummyTail.prev = toDeleteNode.prev;
    return toDeleteNode;
  }
  
  moveNodeToHead(node){
    this.removeNode(node);
    // check
    this.addNodeToHead(node);
  }
  
  removeNode(node){
    node.prev.next = node.next;
    node.next.prev = node.prev;
    return node;
  }
  
  getHead(){
    return this.dummyHead;
  }
  
  getTail(){
    return this.dummyTail;
  }
}

const cache = new LRUCacheRe(2);
cache.put(1,1);
cache.put(2,2);
console.log('head1', cache.getHead());
cache.get(1,1);
console.log('head2', cache.getHead());
cache.put(3,3);
console.log('head3', cache.getHead());
const node2 = cache.get(2);
console.log('head4', cache.getHead());
console.log('node2', node2);
cache.put(4,4);
console.log('head5', cache.getHead());
const node1 = cache.get(1);
const node3 = cache.get(3);
console.log('node3', node3);
console.log('head6', cache.getHead());

