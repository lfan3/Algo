var reverseLeftWords = function(s, n) {
  const left = s.substring(0, n);
  const right = s.substring(n);
  return right + left
};

const m = reverseLeftWords("abcdegf",2);
console.log(m)
