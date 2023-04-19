const {generateBSTtree} = require('../lib')

function printAllLeafNode(root){
  if(!root) return
  if(!root.left && !root.right){
    console.log(root.val)
  }
  printAllLeafNode(root.left)
  printAllLeafNode(root.right)
}

const bst = generateBSTtree([16,18,9,10,44,8,17]);
printAllLeafNode(bst.root);
// console.log('t', tree)


