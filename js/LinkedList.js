class Node {
  constructor(data = null, link = null) {
    this.data = data;
    this.link = link;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  addFirst(data) {
    this.head = new Node(data, this.head);
    this.tail = this.length == 0 ? this.head : this.tail;
    this.length++;
    return this.head;
  }
  addLast(data) {
    if (this.head) {
      this.tail.link = new Node(data);
      this.tail = this.tail.link;
      this.length++;
      return this.head;
    } else {
      return this.addFirst(data);
    }
  }
}

export { LinkedList };
