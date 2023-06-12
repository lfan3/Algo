class UnionFind{
  constructor(n){
    this.root = Array(n).fill(0).map((_, i)=>i);
  }
  union(x, y){
    this.root[this.find(y)] = this.find(x);
  }
  // get the root/root of x
  find(x){
    if(this.root[x] !== x){
      return this.find(this.root[x])
    }
    return x;
  }
  getParent(){
    return this.root;
  }
}

const uf = new UnionFind(10);
uf.union(1, 2);
uf.union(3, 4);
uf.union(2, 4);
console.log("p", uf.getParent());