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
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.tail = this.length == 0 ? this.head : this.tail;
    this.length++;
    return this.head;
  }
  insertLast(data) {
    if (this.head) {
      this.tail.link = new Node(data);
      this.tail = this.tail.link;
      this.length++;
      return this.head;
    } else {
      return this.insertFirst(data);
    }
  }
  insertAt(data, index) {
    if (Number.isInteger(index)) {
      if (index < this.length) {
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
          current = current.link;
        }
        let temp = current;
        current.link = new Node(data, temp.link);
        this.length++;
      } else {
        throw new Error("index out of bounds");
      }
    } else {
      throw new Error("index must be an integer");
    }
  }
}

export { LinkedList };
