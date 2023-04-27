var verifyPostorder = function(postorder) {
  const dfs = (l, r)=>{
    if(r<=l){
      return true
    }
    let i = l-1;
    let j = r-1;
    let root = postorder[r];
    // 找到第一个比root大的数字。
    while(i<r){
      i++;
      if(postorder[i] > root){
        break;
      }
    }
    //i 可能是 第一个比root大的数字下标 也可能是postorder[i]没有比root大的。
    // 第一种情况是root有左树和右树
    // 第二种情况是root只有左树
    // i到r-1的所有数字是右树 都应该比root大。
    while(j>i){
      if(postorder[j] < root){
        return false;
      }
      j--;
    }
    const left = dfs(l, i-1);
    const right = dfs(i, r-1);
    return left && right;
  }
  return dfs(0, postorder.length-1);
};
// 单调栈 quite difficult to use
var verifyPostorder2 = function(postorder) {
  // 从后往前
  let i = postorder.length -1;
  let pre = postorder[i];
  const stack = [pre];
  let root = Number.MAX_VALUE;
  i--;
  while(i>=0){
    if(postorder[i] > root){
      return false;
    }
    if(postorder[i] > pre){
      stack.push(postorder[i]);
    }else{
      while(stack.length){
        if(stack[stack.length-1] > postorder[i]){
          root = stack.pop();
        }else{
          break;
        }
      }
      stack.push(postorder[i]);
    }
    pre = postorder[i];
    i--;
  }
  return true;
}

const arr = [4, 8, 6, 5, 7, 20, 10];
const arr1 = [5, 2, -17, -11, 25, 76, 62, 98, 92, 61];
const m = verifyPostorder2(arr);
console.log("m", m)