class UnionFind{
  hash = {
    'E':0,
    'F':1,
    'I':2,
    'D':3,
    'C':4,
    'A':5,
    'J':6,
    'L':7,
    'G':8,
    'K':9,
    'B':10,
    'H':11
  };
  
  arr = [0,1,2,3,4,5,6,7,8,9,10,11];
  
  union(l1, l2){
    const index1 = this.hash[l1];
    const index2 = this.hash[l2];
    this.arr[index1] = this.arr[index2];
    console.log(this.arr)
  }
}

const uf = new UnionFind();
uf.union("C",'K');
uf.union("F",'E');
uf.union("A",'J');