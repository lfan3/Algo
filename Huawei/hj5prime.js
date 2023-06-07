function primes(num){
  const result = [];
  const k = Math.sqrt(num);
  
  for(let i=2; i<=k; i++){
    while(num !== i){
      if(num%i===0){
        result.push(i);
        num = num / i;
      }else{
        break;
      }
    }
  }

  result.push(num);
  return result;
}

const m = primes(180)
const m2 = primes(10)
const m3 = primes(1)
console.log(m)
console.log(m2)