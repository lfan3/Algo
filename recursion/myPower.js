// x^n
var myPow = function(x, n) {
  let result = 1;
  let i = n >0 ? n:-n;
  while(i){
    result *= x;
    i--;
  }
  if(n<0){
    return 1/result;
  }
  return result;
};

var myPowMemo = function(x, n) {
  const memo = [1, x, x*x];
 
  const dfsNpositive = (x, n)=>{
    console.log('n',n)
    if(n<3){
      return memo[n];
    }
    let pr;
    let h;
    h = Math.floor(n/2);
    
    if(memo[h]){
      pr = memo[h] * memo[h];
    }else{
      pr= dfsNpositive(x,h) * dfsNpositive(x,h);
    }
    
    if(n%2){
      pr = pr * x;
      memo[n] = pr;
    }else{
      memo[n] = pr;
    }
 
    return pr;
  }
  const c = n>=0 ? dfsNpositive(x, n) : dfsNpositive(x, -n);
  return n>=0 ? c : 1/c;
};

// wrong: below one: i can do with 2*logn
var myPowD = function(x, n) {
  const dp = [1, x, x*x];
  let k = n<0 ? -n : n;
  let h = Math.floor(k/2);
  let res = 1;
  if(n<3){
    res = dp[n]
  }
  let i = 3;
  while(i<=h){
    const hh = Math.floor(i/2);
    dp[i] = dp[hh] * dp[hh];
    if(i%2){
      dp[i] = dp[i] * x;
    }
    i++;
  }
  res = dp[h] * dp[h];
  if(i%2){
    res = res * x;
  }
  return n < 0 ? 1/res : res;
}

// const r = myPow2(2,0)
const r1 = myPowMemo(2.1,100)
// const r2 = myPowD(2.1,-10)
// const r5 = myPow(2,10)
// const r2 = myPow(2,2)
// const r3 = myPow(2,-1)
// const r4 = myPow(2,-3)

console.log("r", r1)