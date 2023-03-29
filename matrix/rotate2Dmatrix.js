/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  if(!matrix.length) return matrix;
  const ml = matrix.length;
  const rl = matrix[0].length;
  const tempMatrix = Array(ml).fill().map(()=>Array(rl).fill(0));
  
  matrix.forEach((arr,row)=>{
    arr.forEach((n, col)=>{
      tempMatrix[col][rl-row-1] = n;
    })
  })
  tempMatrix.forEach((arr,row)=>{
    arr.forEach((n, col)=>{
      matrix[row][col] = n;
    })
  })
  return matrix;
};

/**
 * description
 * by obserbing the matrix, we can find out the following rule
 * 法一
 * matrix[row][col] = matrix[col][n-1-row] --f1
 * 
 * 法二
 * then we can use this formulaire to contitue to find out more formulaire with the help of a temp
 * with the same rule, we can derive the following formulaire:
 * 难点一：下面formulaire的推倒
 * 难点二：旋转的次数 如果n是偶数 n/2，如果n奇数 (n-1)/2 * (n+1)/2。假如奇数是n,那么比奇数小于1的偶数m有 n/2 = m/2。--tip
 * tmp = m[r][c];
 * m[r][c] = m[n-1-c][r]
 * m[n-1-c][r] = m[n-1-r][n-1-c]
 * m[n-1-r][n-1-c]=m[c][n-1-r]
 * m[c][n-1-r] =tmp
 * 
 * 法三
 * 旋转法
 * 平行轴翻转然后对角线翻转
 * 平行轴翻转公式
 * matrix[row][col] = matrix[n-1-row][col]
 * 再对角线翻转得到
 * matrix[col][n-1-row] = matrix[row][col],同法一 ---f1
 */

function rotateInplace(matrix){
  const row = matrix.length;
  const col = matrix[0].length;
  const n = col;
  // 循环条件参考tip,下面的注释循环条件等价于运行代码的条件
  // for(let r=0; r<(row)/2; r++){
  //   for(let c=0; c<(col-1)/2; c++){
  for(let r=0; r<(row-1)/2; r++){
    for(let c=0; c<(col)/2; c++){
      console.log(matrix[r][c])
      const tmp = matrix[r][c];
      matrix[r][c] = matrix[n-1-c][r]
      matrix[n-1-c][r] = matrix[n-1-r][n-1-c]
      matrix[n-1-r][n-1-c]=matrix[c][n-1-r]
      matrix[c][n-1-r] =tmp
    }
  }
}

function rotateTranslate(){
  const row = matrix.length;
  const col = matrix[0].length;
  const n = col;
  const horizon = (r, c)=>{
    const tmp = matrix[n-1-r][c];
    matrix[n-1-r][c] = matrix[r][c];
    matrix[r][c] = tmp;
  }
  const diago = (r, c)=>{
    const tmp = matrix[r][c];
    matrix[r][c] = matrix[c][r];
    matrix[c][r] = tmp;
  }
 
  // 平行翻转
  for(let r=0; r<row/2; r++){
    for(let c=0; c<col; c++){
      horizon(r, c);
    }
  }
  
  for(let r=0; r<row; r++){
    for(let c=0; c<col; c++){
      if(r<c){
        diago(r, c)
      }
    }
  }
 
}




const matrix = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16],
]
const ma = [[1,2,3],[4,5,6],[7,8,9]]
// const m = rotate(matrix);
// rotateInplace(ma);
rotateTranslate(matrix)
console.log(matrix);
