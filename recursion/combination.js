
function combination(array){
  const result = [];
  const dfs = (itemPosition, arr)=>{
    if(itemPosition === array.length){
      result.push(arr.map(item=>item));
      return result;
    }
    // do not take the item
    dfs(itemPosition+1, arr);
    // take the item
    dfs(itemPosition+1, arr.concat(array[itemPosition]));
    arr.pop();
  }
  dfs(0, []);
  return result;
}

const n = combination(["a","b","c"]);
console.log('n', n)