class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let currentHead = this.head;
      this.head = newNode;
      this.head.next = currentHead;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = null;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      newTail.next = null;
      this.tail = newTail;
    }
    this.length--;
    return current;
  }

  get(index) {
    if (index > this.length - 1 || index < 0) return null;

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }
  set(index, value) {
    if (index > this.length - 1 || index < 0) return false;
    let newValue = this.get(index);
    newValue.val = value;

    return true;
  }

  insert(index, value) {
    if (index > this.length || index < 0) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    let current = this.head;
    let previous = null;
    let newNode = new Node(value);
    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next;
    }

    previous.next = newNode;
    newNode.next = current;
    this.length++;

    return true;
  }

  shift() {
    if (!this.head) return undefined;
    let removedHead = this.head;
    let newHead = this.head.next;
    this.head = newHead;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.length--;

    return removedHead;
  }

  remove(index) {
    if (index > this.length || index < 0) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let current = this.head;
    let previous = null;
    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.length--;

    return current;
  }

  rotate(index) {
    if (!this.head || this.length <= 1) return;

    if (index < 0) index = this.length + index;
    index = index % this.length;
    if (index === 0) return;

    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }

    let newHead = prev.next;
    prev.next = null;
    this.tail.next = this.head;
    this.head = newHead;
    this.tail = prev;
  }
}

let list = new SinglyLinkedList();

list.push(5);
list.push(10);
list.push(15);
list.push(20);
list.push(25);

console.log(list);
