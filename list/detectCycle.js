const {ListNode, geneList} = require('../lib');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 难点是 怎样算环链入口的位置D
 * 假设环链的总长度为 a + b, 从head到环链入口是a，环链是b
 * 第一次相遇:
 * fast 是 slow 速度的两倍 所以 f = 2*s
 * !错误❌ fast 的总步数是 f = a + nb  --- 不是这个关系式。我们要找 f 和 s 的关系式
 * !难点✅ the relation between fast and slow steps are: f = s + nb. 快的比慢的多走很多圈
 * 所以 s = nb 
 * 难点：如果让slow 从表头出发，那么每次走到D的位置时 slow走过的步数 k = a + nb
 * 目前s 在第一次相遇的时候已经走了 nb，只需要再走a 步可以到D
 * 
 * 第二次相遇
 * 让另一个指针 f 在head处出发和 slow一起走a步，两者相遇的地方就是D。 a 就是D所在的位置
 */
var detectCycle = function(head) {
  // 错误点 初始 slow = head
  let slow = head.next;
  let fast = head.next.next;
  let steps = 0;
  // 第一次相遇
  while(slow?.next && fast?.next){
    if(slow !== fast){
      slow = slow.next;
      fast = fast.next.next;
    }else{
      break;
    }
  }
  // 第二次相遇
  fast = head;
  while(slow?.next && fast?.next){
     if(slow !== fast){
       slow = slow.next;
       fast = fast.next;
       steps++;
     }else{
      return fast;
     }
   }
  
  return -1;
};



function main(){
  const a = [1,2,3,4,5,6];
  const list = geneList(a);
  
  const cycle = geneList(a);
  const second = cycle.next;
  let tmp = second;
  while(tmp.next){
    tmp = tmp.next;
  }
  const last = tmp;
  last.next = second;

  // console.log(detectCycle(list))
  console.log(detectCycle(cycle))
  // console.log(list === list)
}

main();