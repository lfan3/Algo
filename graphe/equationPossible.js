class UnionFind{
  constructor(n){
    this.ids = Array(n).fill(0).map((_,i)=>i);
    this.sz = Array(n).fill(1)
  }
  
  get(){
    return this.ids;
  }
  
  find(x){
    let root = x;
    while(this.ids[root] != root){
      root = this.ids[root];
    }
    while(x != root){
      const next = this.ids[x];
      this.ids[x] = root;
      x = next;
    }
    return root;
  }
  
  unify(x, y){
    const rx = this.find(x);
    const ry = this.find(y);
    
    if(rx == ry) return;
    const sx = this.sz[rx];
    const sy = this.sz[ry];
    if(sx < sy){
      this.sz[ry] += sx;
      this.ids[rx] = ry;
    }else{
      this.sz[rx] += sy;
      this.ids[ry] = rx;
    }
  }
}

var equationsPossible = function(equations) {
  const hashLetter = new Map();
  const equality = [];
  const inequality = [];
  let index = 0;
  const len = equations.length;
  
  for(let i=0; i<len; i++){
    const equation = equations[i];
    const letter1 = equation[0]
    const letter2 = equation[1]
    const letter4 = equation[3]
    
    if(!hashLetter.has(letter1)){
      hashLetter.set(letter1, index);
      index++;
    }
    
    if(!hashLetter.has(letter4)){
      hashLetter.set(letter4, index);
      index++;
    }
    
    if(letter2 === "="){
      equality.push(equation)
    }else{
      inequality.push(equation)
    }
  }
  
  // init uf
  const numLetters = hashLetter.size;
  const uf = new UnionFind(numLetters);
  
  // 循环等式
  for(let i=0; i<equality.length; i++){
    const eq = equality[i]
    const letter1 = eq[0]
    const letter4 = eq[3]
    
    uf.unify(hashLetter.get(letter1), hashLetter.get(letter4))
    
  }
  
  // 循环不等式，查看与上一步是否有矛盾
  for(let i=0; i<inequality.length; i++){
    const ieq = inequality[i]
    
    const letter1 = ieq[0]
    const letter4 = ieq[3]
    const root1 = uf.find(hashLetter.get(letter1))
    const root4 = uf.find(hashLetter.get(letter4))
    if(root1 === root4) return false;
  } 
 
  return true;
};

const equations = ["a==b","b==c","a==c"]
const equations2 = ["a==b","b!=a"]
const equations3 = ["c==c","b==d","x!=z"]
console.log(equationsPossible(equations2)) 