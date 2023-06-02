

// compare dynamic and native implementation of isPrime
// isPrimeNaive is the fatest way!!!
var isPrimeNaive = (num)=>{
  if(num<2) return false;
  // 列举until to Math.sqr(num)
  for(let i=2; i<=Math.sqrt(num); i++){
    if(num%i===0) return false;
  }
  
  return true;
}

var isPrime = (num)=>{
  if(num<2) return false;
  const isPrime = Array(num+1).fill(true);
  // 到了num就返回 可以增加速度
  const visited = [];
  for(let i=2; i<=num; i++){
    let j = i;
    if(visited.includes(num)) break;
    while(i*j<=num){
      isPrime[i*j] = false;
      visited.push(i*j);
      j++;
    }
  }
  return isPrime[num]
}

var isPrimeSlow = (num)=>{
  if(num<2) return false;
  const isPrime = Array(num+1).fill(true);
  for(let i=2; i<=num; i++){
    let j = i;
    while(i*j<=num){
      isPrime[i*j] = false;
      i++;
    }
  }
  
  return isPrime[num]
}

/**
 * test result
 * a: 0.812ms
 * b: 0.087ms
 * c: 0.04ms
 */
function test(){
  console.time("isPrime");
  const m = isPrime(1501);
  console.timeEnd("isPrime");
  console.log("result", m);
  console.time("slow");
  const n = isPrimeSlow(1501);
  console.log("result", n);
  console.timeEnd("slow");
  console.time("native");
  const l = isPrimeNaive(1501);
  console.log("result", l);
  console.timeEnd("native");
}

// test()

module.exports = {isPrimeNaive}



 
