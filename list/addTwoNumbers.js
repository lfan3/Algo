var addTwoNumbers = function(l1, l2) {
  const dfs = (node, nums)=>{
    if(!node){
      return;
    }
    
    dfs(node.next, nums);
    nums.push(node.val)
    return nums;
  }
  const fnum = dfs(l1, []).join("");
  const snum = dfs(l2, []).join("");
  const len =str.length;
  const dummy = new ListNode();
  let tmp = dummy;
  for(let i= len-1; i>=0; i--){
    const n = new ListNode(+str[i]);
    tmp.next = n;
    tmp = tmp.next;
  }
  return dummy.next;
};

var addTwoNumbers2 = function(l1, l2) {
  let p = 0;
  const dummy = new ListNode();
  let tmp = dummy;
  while(l1 && l2){
    // 要算的是进位+加法数字
    const n = (l1.val + l2.val + p)
    const val = n%10;
    if(n > 9){
      p = 1
    }else{
      p = 0;
    }

    let node =  new ListNode(val%10);
    tmp.next = node;
    tmp = tmp.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  while(l1){
    const n = l1.val + p;
    const val = n%10;

    if(n> 9){
      p = 1
    }else{
      p = 0;
    }
    let node =  new ListNode(val);
    tmp.next = node;
    tmp = tmp.next;
    l1 = l1.next;
  }
  while(l2){
    const n = l2.val + p;
    const val = n%10;
    if(n> 9){
      p = 1
    }else{
      p = 0;
    }
    let node =  new ListNode(val);
    tmp.next = node;
    tmp = tmp.next;
    l2 = l2.next;
  }
  if(p){
    let node =  new ListNode(1);
    tmp.next = node;
    tmp = tmp.next; 
  }

  return dummy.next;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


//  ”1000000000000000000000000000001“ 用number转 只会转成 1e+30
function main(){
  const n1 = new ListNode(2)
  const n2 = new ListNode(4)
  const n3 = new ListNode(3)
  const n4 = new ListNode(5)
  const n5 = new ListNode(6)
  const n6 = new ListNode(4)
  
  n1.next = n2;
  n2.next = n3;
  
  n4.next = n5;
  // n5.next = n6;
  
  const h = addTwoNumbers2(n1, n4);
  
  const n8 = new ListNode(0)
  const n9 = new ListNode(0)
  // const m = addTwoNumbers(n8, n9)
  console.log('m',h)
  // [3,7] [9,2]
  // [9,9,9,9,9,9,9] [9,9,9,9,9,9,9,9,9]
  // [9,9,9] [9,9,9,9,9,9,9,9,9]
  // [0] [0]
}

main()