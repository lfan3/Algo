

/**
 *
注意 链表的dummy模式 双向列表的练习
swap 双向列表
 */

// new value will be added to the tail and old one at the head. so if surpasse the capacity, removed from the head->that means
  // remove node from the head -- we can treat it in more general way -- remove node
  // add to the node to the tail
// to all the O(1), we need a dictionary or map
class Node{
  constructor(key,value){
    this.val = value;
    this.key = key;
    this.next = null;
    this.previous = null;
  }
}
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.cache = new Map();
  this.dummyHead = new Node();
  this.dummyTail = new Node();
  this.dummyHead.next = this.dummyTail;
  this.dummyTail.previous = this.dummyHead;
  // we can also write it in prototype, here is just for convieniance
  this.removeNode = (node)=>{
    // 4 connections between to node
    node.next.previous = node.previous;
    node.previous.next = node.next;
    node.next = null;
    node.previous = null;
  }

  this.addToTail = (node)=>{
    const tmp = this.dummyTail.previous;
    // 4 connections between to node
    tmp.next = node;
    node.previous = tmp;
    this.dummyTail.previous = node;
    node.next = this.dummyTail;
  }
  
  this.upDateNode = (node)=>{
    this.removeNode(node);
    this.addToTail(node);
  }
};


/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const existed = this.cache.has(key);
  //!wrong: forget to update l-68
  if(existed){
    const existedNode = this.cache.get(key);
    this.upDateNode(existedNode);
    return tmp.val;
  }
  return  -1;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  const existed = this.cache.has(key);
  if(existed){
    const existedNode = this.cache.get(key);
    // ! forget to wrong not update the val l-86
    existedNode.val = value;
    this.upDateNode(existedNode);
  }else{
    this.size++;
    const newNode = new Node(key,value);
    if(this.size > this.capacity){
      const tmp = this.dummyHead.next;
      this.removeNode(tmp);
      this.cache.delete(tmp.key);
    }
    this.addToTail(newNode);
    this.cache.set(key, newNode);
  }
};



