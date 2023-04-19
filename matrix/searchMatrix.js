/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * tips: 我刚开始想了斜对角的方法。但是我是从左上角到右下角。这两个角度 都是 x最小 有最小 或者 x最大y最大位置。--这个位置没法方便的判断移动方向。
 * 应该使用 右上角 或者左下角，因为这样 这两个角分别是 x/y的最大/最小,可以移动。
 * 三种方法：逐个查询 O(m*n), 逐行二分查询O(n*logm), z形状查询O(m+n)
 */

var searchMatrix2 = function(matrix, target){
  function bs(arr,target){
    let l = 0;
    let h = arr.length-1;
    // !wrong we need equale signe
    while(l<=h){
      const m = Math.floor((l+h)/2);
      if(arr[m] === target){
        return true;
      }else if(arr[m] > target){
        // ! wrong: move next one, otherwise infinit loop
        h = m-1;
      }else{
        l = m+1;
      }
    }
    return false; 
  }
  function search(matrix, target){
    for(let arr of matrix){
      if(bs(arr, target)){
        return true;
      }
    }
    return false;
  }
  return search(matrix, target)
}

var searchMatrix3 = function(matrix, target) {
  const row = matrix.length;
  const col = matrix[0].length;

  const search = ()=>{
    let i = 0;
    let j = col-1;
    // from the upper-right corner
    while(isValid(i, j)){
      if(target === matrix[i][j]){
        return [i, j];
      }else if(target < matrix[i][j]){
        j--;
      }else{
        i++;
      }
    }
    return -1;
  }
  const isValid = (i, j)=>{
    return i<row && j<col && i>=0 && j>= 0;
  }
  return search();
};

function main(){
  const matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
  const vector = [3,6,8,12,14,17,25,29,31,36,42,47,53,55,62];
  const target = 19;
  console.log('sm',searchMatrix2(matrix, target));
  // console.log('bs', bs(vector, 42))
}







main()