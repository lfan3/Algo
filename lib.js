class ListNode{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class NextArrNode{
  constructor(val){
    this.val = val;
    this.next = [];
  }
}

class TreeNode{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
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

function swap(array, i, j){
  const temp = array[i];

  array[i] = array[j];
  array[j] = temp;
}

class BST{
  constructor(){
    this.root = null;
  }
  // 去掉前几个版本的冗余代码
  add(n){
    const node = new TreeNode(n);
    this.root = this.addNode(node, this.root);
  }
  addNode(node, root){
    if(!root){
      root = node;
    }else if(node.val > root.val){
      root.right = this.addNode(node, root.right);
    }else{
      root.left = this.addNode(node, root.left);
    }
    return root;
  }
  // 去掉前几个版本的冗余代码
  remove(n){
    this.root = this.removeNode(n, this.root);
  }
  removeNode(n, root){
    if(!root){
      return null;
    }
    // 四种情况其实 就考虑三种就好。没孩子的，可以并在有一个孩子里面
    if(n === root.val){
     if(!root.left) {
        return root.right;
      }else if(!root.right) {
        return root.left;
      }else{
        //right minimum
        let tmp = root.right;
        while(tmp.left){
          tmp = tmp.left;
        }
        root.val = tmp.val;
        root.right = this.removeNode(tmp.val, root.right);
      }
    }else if (n > root.val){
     root.right = this.removeNode(n,root.right);
    }else{
     root.left = this.removeNode(n,root.left);
    }
    return root;
  }
  getRoot(){
    return this.root;
  }
}

function generateBSTtree(arr){
  const bst = new BST();
  arr.forEach((a)=>{
    bst.add(a);
  })
  return bst;
}

module.exports={
  geneList:geneList,
  TreeNode:TreeNode,
  swap:swap,
  BST:BST,
  generateBSTtree:generateBSTtree,
  ListNode:ListNode,
  NextArrNode:NextArrNode
};