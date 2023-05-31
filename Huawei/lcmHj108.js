// 最大公约数
// gcd(a,b) = gcd(b, a mod b), a>b, a mod b must be less than b
// 最小公倍数
// lcm(a,b) * gcd(a, b) = a * b;
// lest common multipler
function lcm(a, b){
  return a*b/gcd(a,b);
}

// a >b
// greast common divider
function gcd(a, b){
  if(b===0){
    return a;
  }
  return gcd(b, a % b);
}

console.log(lcm(5,7))