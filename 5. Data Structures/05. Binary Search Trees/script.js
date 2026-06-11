class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.value) return undefined;
        if (val < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    if (!this.root) return undefined;
    else {
      let current = this.root;

      while (true) {
        if (current.value === val) {
          return current;
        } else if (val > current.value) {
          if (current.right) {
            current = current.right;
          } else {
            return undefined;
          }
        } else {
          if (current.left) {
            current = current.left;
          } else {
            return undefined;
          }
        }
      }
    }
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(9);
tree.insert(17);
tree.insert(19);
tree.insert(7);
tree.insert(8);
console.log(tree);
