class FenwickTree{
  constructor(arr){
    this.arr = arr;
    this.indexedSum = []; //[1,4] not [1,4)
    this.prefixSums = []; 
    this.size = this.arr.length;
  }
  initprefixSums(){
    this.prefixSums[0] = 0;
    for(let i=0; i<this.size; i++){
      this.prefixSums[i+1] = prefixSums[i] + this.arr[i];
    }
  }
  initIndexedSum(){
    this.initprefixSums();
    this.indexedSum[0] = 0;
    for(let i=1; i<this.size; i++){
      const bitPos = this.lsg(i);
      const cellsNum = Math.pow(2, bitPos-1);
      const lowerIndex = i - cellsNum;
      // difficult part, to the the relation between prefixsum and indexedsum. 
      // prefexsum[3] = arr[0] + arr[1] + arr[2]
      // indexedSum[3] = arr[3]
      this.indexedSum[i] = this.prefixSums[i] - this.prefixSums[lowerIndex];
    }
  }
  // 从1 到 i 位数的和
  rangeSumQuery(i){
    if(i<=1){
      return this.indexedSum[i]
    }else{
      const lsg = this.lsg(i);
      const cellsNum = Math.pow(2, lsg-1);
      
      return this.rangeSumQuery(i-cellsNum) + this.indexedSum[i]
    }
  }
  // rs(3)
  // [i,j], i<=j, i j 不是index 而是 以一开头的 第几位
  rangeQuery(i, j){
    // calculate m=[0, j]
    // calculate n=[0, i)
    // range[i,j] = m - n
    const rangeM = this.rangeSumQuery(j);
    const rangeN = this.rangeSumQuery(i-1);
    console.log('a', rangeM, rangeN, i, j, indexedSum)
    return rangeM - rangeN;
  }
  // least significant bit
  lsg(num){
    if(!num) return 0;
    let b = 1;
    while(num>0 && ((1 & num) !== 1)){
      b++;
      // wrong: num >> 1, this will not change num VS right: num = num >> 1
      num >>= 1;
    }
    
    return b;
  }
}

const a = [1,2,3,4,5,6];
const prefixSums = [0,1,3,6,10, 15,21];
const indexedSum = [0,1,3,3, 10]
const fen = new FenwickTree(a);
fen.initIndexedSum();
const th = fen.rangeSumQuery(4);
const diff = fen.rangeQuery(1, 3);
console.log('th', th);
console.log('diff',diff);

fen.initIndexedSum()



