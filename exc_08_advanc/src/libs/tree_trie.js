
class TrieNode {
  constructor() {
    this.children = {};
    this.indices = [];
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word, index) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
      node.indices.push(index);
    }
  }

  search(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }
    return node.indices;
  }
}

export { Trie, TrieNode };

