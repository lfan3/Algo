// prefix tree, trie data structure implementation, mainly for solving validation of string problem
class TrieNode{
  constructor(){
    this.children = new Map();
    this.isEnd = false;
  }
  // setIsEnd = ()=>{
  //   this.isEnd = true;
  // }
  // getIsEnd = ()=>{
  //   return this.isEnd;
  // }
}

class Trie{
  constructor(){
    this.root = new TrieNode();
    this.words = [];
  }
  insert(word){
    this.addNode(word, this.root);
  }
  addNode(word, root){
    if(!word.length){
      root.isEnd = true;
      return;
    };
    const firstLetter = word[0];
    const exists = root.children.has(firstLetter);
    if(!exists){
      root.children.set(firstLetter, new TrieNode());
      this.addNode(word.substring(1), root.children.get(firstLetter));
    }else{
      this.addNode(word.substring(1), root.children.get(firstLetter));
    }
  }
  search(word){
    let root = this.root;
    while(word.length>1){
      const exists = root.children.has(word[0]);
      if(!exists){
        return false;
      }else{
        root = root.children.get(word[0]);
        word = word.substring(1);
      }
    }
    return root.children.has(word) && root.children.get(word).isEnd;
  }
  // @如果前缀树里面的单词存在以prefix开头的
  startsWith(prefix){
    let node = this.root;
    while(prefix.length){
      const l = prefix[0];
      if(!node.children.has(l)){
        return false;
      }else{
        node = node.children.get(l);
        prefix = prefix.substring(1);
      }
    }
    return true;
  }
  // store all words in the words arr
  getAllWords(node, word){
    const chars = node.children.keys();
    // 如果到树末端， charts = [];
    if(!node.children.size){
      if(word.length){
        this.words.push(word);
      }
    }else{
      for(let char of chars){
        const isEnd = node.isEnd;
        if(isEnd){
          this.words.push(word);
        }
        const n = node.children.get(char);
        this.getAllWords(n, word.concat(char))
      }
    }
  }
  print(){
    this.getAllWords(this.root, "");
  }
}



function main(){
  const trie = new Trie();
  trie.insert('ba');
  trie.insert('baa');
  // console.log("cc",trie.startsWith('baa'))
  trie.print();
  // trie.print()
}

main()