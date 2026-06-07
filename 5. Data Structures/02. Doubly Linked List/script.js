class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let currentTail = this.tail;
      currentTail.next = newNode;
      newNode.prev = currentTail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let removedTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newTail = this.tail.prev;
      newTail.next = null;
      this.tail = newTail;
    }
    removedTail.prev = null;

    this.length--;
    return removedTail;
  }

  shift() {
    let removedHead = this.head;
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = this.head.next;
      this.head = newHead;
      newHead.prev = null;
    }
    removedHead.next = null;
    this.length--;
    return removedHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    let oldHead = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      this.head = newNode;
      newNode.next = oldHead;
    }
    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    // is index closer to tail or not
    let midpoint = (this.length - 1) / 2;

    if (index <= midpoint) {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }

      return current;
    } else {
      let current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
      return current;
    }
  }

  set(index, value) {
    let changedNode = this.get(index);

    if (!changedNode) return false;

    changedNode.val = value;
    return true;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let newNode = new Node(value);
    let current = this.get(index);
    let beforeCurrent = current.prev;

    current.prev = newNode;
    newNode.prev = beforeCurrent;
    beforeCurrent.next = newNode;
    newNode.next = current;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    let current = this.get(index);

    let beforeCurrent = current.prev;
    let aftercurrent = current.next;
    beforeCurrent.next = aftercurrent;
    aftercurrent.prev = beforeCurrent;
    current.prev = null;
    current.next = null;
    this.length--;
    return current;
  }

  reverse() {
    let current = this.head;
    let temp = null;

    for (let i = 0; i < this.length; i++) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    return this;
  }
}
// \\
// 1 <--> 2 <-->3 <-->4 <-->5 <-->6
// 2 <--> 3 <--> 4 <--> 5 <--> 6 1<-->
//

let list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
// list.push(7);
// list.push(8);
// list.push(9);

console.log(list);
