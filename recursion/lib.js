class ListNode{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

function geneList(arr){
  const head = new ListNode(arr[0]);
  const n = arr.length;
  let tmp = head;
  let i = 1;
  while(i<n){
    const l = new ListNode(arr[i]);
    tmp.next = l;
    tmp = tmp.next;
    i++;
  }
  return head;
}

module.exports.geneList = geneList;