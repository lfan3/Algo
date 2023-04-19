class Node{
  constructor(){
      this.keys = new Map();
      this.isEnd = false;
  }
}

var Trie = function() {
  this.root = new Node();
};

/** 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let str = word;
  let node = this.root;
  while(str.length){
      const firstLetter = str[0];
      const exist = node.keys.has(firstLetter);
      if(!exist){
        node.keys.set(firstLetter, new Node());
      }
      str = str.substring(1);
      node = node.keys.get(firstLetter);
  }
  node.isEnd = true;
};

Trie.prototype.search = function(word) {
  let lastNode = this.check(word);
  return lastNode.isEnd
};

Trie.prototype.check = function(word){
  let str = prefix;
  let node = this.root;
  while(str.length){
    const firstLetter = str[0];
    const exist = node.keys.has(firstLetter);
    if(!exist){
      return false;
    }
    str = str.substring(1);
    node = node.keys.get(firstLetter);
  }
  return node;
}

Trie.prototype.startsWith = function(prefix) {
  let result = this.check(prefix);
  return result !== false;
};

function main(){
  const t = new Trie();
  t.insert('abc');
  t.insert('abe');
  console.log( t.startsWith('ae'))
}

main()