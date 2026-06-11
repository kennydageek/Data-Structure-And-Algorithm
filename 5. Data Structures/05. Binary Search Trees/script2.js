class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);

    if (this.root === null) {
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
    let current = this.root;
    let parent = this.root;
    if (this.root === null) return undefined;
    while (true) {
      if (val === current.value) return { current, parent };
      if (val > current.value) {
        if (current.right === null) {
          return undefined;
        } else {
          parent = current;
          current = current.right;
        }
      } else {
        if (current.left === null) {
          return undefined;
        } else {
          parent = current;
          current = current.left;
        }
      }
    }
  }

  //   remove(val) {
  //     let nodeToRemove = this.find(val);
  //     let removedNode = nodeToRemove.current;
  //     let parent = nodeToRemove.parent;
  //     if (val === this.root.value) {
  //       this.root = null;
  //       return this.root;
  //     }

  //     // Remove leaf nodes
  //     if (
  //       val === nodeToRemove.current.value &&
  //       parent.right.value === nodeToRemove.current.value &&
  //       nodeToRemove.current.left === null &&
  //       nodeToRemove.current.right === null
  //     ) {
  //       removedNode = parent.right;
  //       parent.right = null;
  //       return removedNode;
  //     } else if (
  //       val === nodeToRemove.current.value &&
  //       parent.left !== null &&
  //       parent.left.value === nodeToRemove.current.value &&
  //       nodeToRemove.current.left === null &&
  //       nodeToRemove.current.right === null
  //     ) {
  //       removedNode = parent.left;
  //       parent.left = null;
  //       return removedNode;
  //     }

  //     // Removing nodes with one child
  //     if (
  //       val === nodeToRemove.current.value &&
  //       parent.right.value === nodeToRemove.current.value &&
  //       nodeToRemove.current.left !== null &&
  //       nodeToRemove.current.right === null
  //     ) {
  //       let removedNode = nodeToRemove.current;
  //       parent.right = nodeToRemove.current.left;
  //       nodeToRemove.current = null;

  //       return removedNode;
  //     } else if (
  //       val === nodeToRemove.current.value &&
  //       parent.right.value === nodeToRemove.current.value &&
  //       nodeToRemove.current.left === null &&
  //       nodeToRemove.current.right !== null
  //     ) {
  //       let removedNode = nodeToRemove.current;
  //       parent.right = nodeToRemove.current.right;
  //       nodeToRemove.current = null;

  //       return removedNode;
  //     } else if (
  //       val === nodeToRemove.current.value &&
  //       parent.left !== null &&
  //       parent.left.value === nodeToRemove.current.value &&
  //       nodeToRemove.current.left !== null &&
  //       nodeToRemove.current.right === null
  //     ) {
  //       let removedNode = nodeToRemove.current;
  //       parent.left = nodeToRemove.current.left;
  //       nodeToRemove.current = null;

  //       return removedNode;
  //     } else if (
  //       val === nodeToRemove.current.value &&
  //       parent.left !== null &&
  //       parent.left.value === nodeToRemove.current.value &&
  //       nodeToRemove.current.left === null &&
  //       nodeToRemove.current.right !== null
  //     ) {
  //       let removedNode = nodeToRemove.current;
  //       parent.left = nodeToRemove.current.right;
  //       nodeToRemove.current = null;

  //       return removedNode;
  //     }

  //     // remove nodes with 2 children
  //     if (
  //       val === nodeToRemove.current.value &&
  //       parent.left !== null &&
  //       parent.left.value === nodeToRemove.current.value &&
  //       nodeToRemove.current.left !== null &&
  //       nodeToRemove.current.right !== null
  //     ) {
  //       let removedNode = nodeToRemove.current;
  //       parent.left = nodeToRemove.current.right;
  //       parent.left.left = nodeToRemove.current.left;
  //       nodeToRemove.current = null;

  //       return removedNode;
  //     } else if (
  //       val === nodeToRemove.current.value &&
  //       parent.right.value === nodeToRemove.current.value &&
  //       nodeToRemove.current.left !== null &&
  //       nodeToRemove.current.right !== null
  //     ) {
  //       let removedNode = nodeToRemove.current;
  //       parent.right = nodeToRemove.current.right;
  //       parent.right.left = nodeToRemove.current.left;
  //       nodeToRemove = null;

  //       return removedNode;
  //     }
  //   }

  findMin(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  remove(val) {
    let parent = null;
    let current = this.root;

    // Find node to remove
    while (current && current.value !== val) {
      parent = current;

      if (val < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    // Not found
    if (!current) return undefined;

    const removedNode = current;

    // Case 3: Node has two children
    if (current.left && current.right) {
      let successorParent = current;
      let successor = current.right;

      while (successor.left) {
        successorParent = successor;
        successor = successor.left;
      }

      // Copy successor value
      current.value = successor.value;

      // Now remove successor instead
      parent = successorParent;
      current = successor;
    }

    // At this point current has at most one child
    const child = current.left || current.right;

    // Removing root
    if (parent === null) {
      this.root = child;
    }
    // Current is left child
    else if (parent.left === current) {
      parent.left = child;
    }
    // Current is right child
    else {
      parent.right = child;
    }

    return removedNode;
  }
}

// let tree = new BinarySearchTree();

var tree = new BinarySearchTree();
tree.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50);

console.log(tree);
