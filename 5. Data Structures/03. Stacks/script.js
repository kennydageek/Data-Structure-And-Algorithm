/* 
Array Implementation
Using shift and unshift in tandem works as a stack
Using push and pop works as a stack too 

Because of re-indexing, always use push and pop when you are doing the array implementation;
*/

/* Linked List Implementation */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    let temp = this.first;

    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return temp.value;
  }
}
