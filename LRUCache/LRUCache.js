function Node(key=-1, value=-1){
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
}


// 2022/09/8
class LRUCache{
  constructor(capacity){
    this.dummyHead = new Node();
    this.dummyTail = new Node(); 
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
    this.length = 0;
    this.cache = new Map();
    this.capacity = capacity;
  }
  // new node inserted after dummyHead
  // addToHead可以在moveToHead使用 也可以在addNode使用
  // 如果存在只要改变值 + 然后把这个值移动到头部。
  addNode(key, value){
    if(this.cache.has(key)){
      const node = this.cache.get(key);
      node.value = value;
      this.moveToHead(node);
    }else{
      const node = new Node(key, value);
      this.addToHead(node);
      this.cache.set(key, node);
      this.length++;
      if(this.length > this.capacity){
        const toDeleteNode = this.removeFromTail();
        this.cache.delete(toDeleteNode.key);
      }
      return node;
    }
  }
  
  removeFromTail(){
    const toDeleteNode = this.dummyTail.prev;
    this.removeNode(toDeleteNode);
    // toDeleteNode.prev.next = this.dummyTail;
    // this.dummyTail.prev = toDeleteNode.prev;
    return toDeleteNode;
  }
  
  // addToHead moveToHead removeNode are basic functions which are been called from other functions
  addToHead(node){
    // !important to have a tmp
    const tmp = this.dummyHead.next;
    
    this.dummyHead.next = node;
    node.prev = this.dummyHead;
    node.next = tmp;
    tmp.prev = node;
    
    return node;
  }
  
  // ! 必须先删除要移动的node，然后再把他放在头部。
  moveToHead(node){
    //! need to remove then move 
    this.removeNode(node);
    this.addToHead(node);
    return node;
  }
  removeNode(node){
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  // can be optimized with hashMap 
  get(key){
    let tmp = this.dummyHead;
    while(tmp.next){
      if(tmp.next.key === key){
        // important to return the node back: otherwise it will be -1
        const n = this.moveToHead(tmp.next);
        // tmp.next.key 
        return n.key;
      }
      tmp = tmp.next;
    }
    return -1;
  }
  
  fastGet(key){
    if(this.cache.has(key)){
      const node = this.cache.get(key);
      this.moveToHead(node);
      return node.value;
    }
    return -1;
  }
  
  // 以下是辅助理解的函数
  addBeforeHead(key, value){
    const node = new Node(key, value);
    node.prev = null;
    node.next = this.dummyHead;
    this.dummyHead = node;
    return node;
  }

  getHead(){
    return this.dummyHead;
  }
  
  getTail(){
    return this.dummyTail;
  }
}






const cacheList =new LRUCache(2);
// console.group('addBeforeHead')
// const hh1 = cacheList.addBeforeHead(1,1);
// console.log("hh1", hh1);
// console.log("hh1 prev", hh1.prev);
// console.log("hh1 next", hh1.next);
// console.groupEnd();

console.group('addNode')
const h1 = cacheList.addNode(1,1);

console.log('header1',cacheList.getHead());
const h2 = cacheList.addNode(2,2);

console.log('header2',cacheList.getHead());
const h3 = cacheList.fastGet(1);
console.log('header3',cacheList.getHead());
cacheList.addNode(3,3);

const h4 = cacheList.fastGet(2);
console.log('header4',cacheList.getHead());

const h5 = cacheList.addNode(4,4);
const h6 = cacheList.fastGet(1);
const h7 = cacheList.fastGet(3);
console.log('h7', h7);
console.log('header 7',cacheList.getHead());
const h8 = cacheList.fastGet(4);
console.log('h8', h8);
console.log('header 8',cacheList.getHead());

console.groupEnd();




