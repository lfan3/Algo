/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if(n<3) return 0;
  if(n===3) return 1;
  if(n<=5) return 2;
  let c = 2;
  for(let i=4; i<n; i++){
    if(isPrime(i)){
      c++;
    }
  }  
  return c;
};
var isPrime =(num)=>{
  if(num < 2) return false;
  let tmp = 2;
  while(tmp * tmp <= num){
    if(num % tmp === 0){
      return false;
    }
    tmp++;
  }
  return true;
}


// optimized
// prime2 埃氏筛 数学家厄拉多塞（Eratosthenes EratosthenesEratosthenes）
var countPrimesOp = function(n) {
  // dp[n] = 1 n is prime
  const isPrime = Array(n).fill(1);
  let c = 0;
  for(let i=2; i<=n; i++){
    if(isPrime[i] === 1){
      c++;
      let j = i;
      while(i*j <= n){
        isPrime[i*j] = 0;
        j++;
      }
    }
  }
  return c;
}

console.time("a");
const m = countPrimes(20);
console.timeEnd("a");
console.time("b");
const n = countPrimesOp(20);
console.timeEnd("b");
