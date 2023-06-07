// hj6 质数因子
function primes(num) {
  const result = [];
  const k = Math.sqrt(num);

  for (let i = 2; i <= k; i++) {
      while (i<num) {
          if (num % i === 0) {
              result.push(i);
              num = num / i;
          } else {
              break;
          }
      }
  }

  result.push(num);
  return result;
}