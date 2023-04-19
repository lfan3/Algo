// 一种count abc 需要的字母hashmap 然后 从 0 开始遍历符合hashmap字母可以 time O（o2)
// 一种找出所有 abc 的组合，然后对比组合。O2
// 可能可以dp？

// solution： slidding window + hashmap
var findAnagrams = function(s, p) {
  const len = p.length;
  const hash = {};
  const shash = {};
  let an = []
  // 循环p得到hashmap
  for(let i=0; i<p.length; i++){
    if(!hash[p[i]]){
      hash[p[i]] = 1;
    }else{
      hash[p[i]] += 1;
    }
  }
  console.log('map', hash)
  let r = 0;
  let l = 0;
  while(r<len){
    addToObj(s[r], shash)
    r++;
  }
  const re = compareObj(shash, hash);
  if(re){
    an.push(r-len);
  }
  while(r<s.length){
    const count = shash[s[l]];
    if(count<=1){
      delete shash[s[l]];
    }else{
      shash[s[l]] -= 1;
    }
    l++;
    addToObj(s[r], shash);
    r++;
    console.log('sh', shash)
    const re = compareObj(shash, hash);
    if(re){
      an.push(r-len);
    }
  }
  return an;
};

function addToObj(key, ob){
  if(ob[key]){
    ob[key] += 1;
  }else{
    ob[key] = 1;
  }
}
// 比较内容，key数量相同
function compareObj(ob1, ob2){
  const keys = Object.keys(ob1);
  const keys2 = Object.keys(ob2);
  if(keys.length!== keys2.length) return false;
  const s1 = keys.join("");
  const s2 = keys.join("");
  if(s1!==s2) return false;
  for(let key of keys){
    if(ob1[key]!== ob2[key]) return false;
  }
 
  return true;
}

// const ob2 = {1:1, 2:2, 3:4}

// const r = compareObj(ob1, ob2);
// console.log('o', r);

function main(){
  // const s = "cbaebabacd"; const p = "abc";
  const s = "abab"; const p = "abc";
  const ans = findAnagrams(s, p);
  console.log('an', ans)
}

main()
