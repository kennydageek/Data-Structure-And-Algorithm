/* 
Array Implementation
Using push and shift works as a queue
Using unshift then pop also works as a queue

Both implementation works but re-indexing makes it expensive. Implement with a linked list instead
*/

/* Linked List Implementation

Enqueue (add from the end)
Dequeue (remove from the beginning)
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    let temp = this.first;
    if (this.size === 1) {
      this.last = null;
      this.first = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;

    return temp.value;
  }
}
