const {TreeNode} = require('./lib')

function insert(head, data){
  if(!head){
    const node = new TreeNode(data);
    return node;
  }
  
  if(head.val < data){
    head.right = insert(head.right, data);
  }else{
    head.left = insert(head.left, data);
  }
  return head;
}

const h = new TreeNode(100)
const n1 = new TreeNode(50)
const n2 = new TreeNode(170)
const n3 = new TreeNode(30)
h.left = n1;
h.right = n2;
n1.left = n3;

const m = insert(h, 60);
console.log(m)