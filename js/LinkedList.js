/**
 * A node that holds a piece of data and a link to another node
 */
class Node {
  constructor(data = null, link = null) {
    this.data = data;
    this.link = link;
  }
}

/**
 * A collection of data stored in nodes that are linked to the next node in the list
 */
class LinkedList {
  constructor() {
    this.head = null; //First node
    this.tail = null; //Last node
    this.length = 0; //Node count
  }
  /**
   * Adds given data to the beginning of the list
   * @param {*} data
   * @returns The head of the list
   */
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.tail = this.length == 0 ? this.head : this.tail;
    this.length++;
    return this.head;
  }
  /**
   * Adds given data to the end of the list
   * @param {*} data
   * @returns The head of the list
   */
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
  /**
   * Adds given data to the list at the given index
   * @param {*} data
   * @param {int} index
   * @returns The head of the list
   */
  insertAt(data, index) {
    if (Number.isInteger(index) && index >= 0) {
      if (index < this.length) {
        if (index > 0) {
          let current = this.head;
          for (let i = 0; i < index - 1; i++) {
            current = current.link;
          }
          let temp = current;
          current.link = new Node(data, temp.link);
          this.length++;
        } else {
          this.insertFirst(data);
        }
        return this.head;
      } else {
        throw new Error("index out of bounds");
      }
    } else {
      throw new Error("index must be a positive integer");
    }
  }
  /**
   * Removes the first node in the list
   * @returns The removed node
   */
  removeFirst() {
    if (this.head) {
      let removedNode = this.head;
      this.head = this.head.link;
      this.length--;
      return removedNode;
    } else {
      throw new Error("node does not exist");
    }
  }
  /**
   * Removes the last node in the list
   * @returns The removed node
   */
  removeLast() {
    if (this.head) {
      let removedNode = this.tail;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length = 0;
      } else {
        let current = this.head;
        while (current.link != this.tail) {
          current = current.link;
        }
        current.link = null;
        this.tail = current;
        this.length--;
      }
      return removedNode;
    } else {
      throw new Error("node does not exist");
    }
  }
  /**
   * Removes the first instance of the given data from the list
   * @param {*} data
   * @returns The removed node
   */
  remove(data) {
    if (this.head) {
      if (this.head.data === data) {
        return this.removeFirst();
      } else {
        let current = this.head;
        let removedNode = null;
        while (current.link) {
          if (current.link.data === data) {
            removedNode = current.link;
            current.link = current.link.link;
            this.length--;
          }
          current = current.link;
        }
        return removedNode;
      }
    } else {
      throw new Error("node does not exist");
    }
  }
}

export { LinkedList };
