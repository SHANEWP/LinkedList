/**
 * A collection of data stored in nodes that are linked to the next node in the list
 */
const linkedList = function () {
  let head = null; //First node
  let tail = null; //Last Node
  let length = 0; //Node count

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
   * Adds given data to the beginning of the list
   * @param {*} data
   * @returns The head of the list
   */
  const insertFirst = function (data) {
    head = new Node(data, head);
    tail = length == 0 ? head : tail;
    length++;
    return head;
  };
  /**
   * Adds given data to the end of the list
   * @param {*} data
   * @returns The head of the list
   */
  const insertLast = function (data) {
    if (head) {
      tail.link = new Node(data);
      tail = tail.link;
      length++;
      return head;
    } else {
      return insertFirst(data);
    }
  };
  /**
   * Adds given data to the list at the given index
   * @param {*} data
   * @param {int} index
   * @returns The head of the list
   */
  const insertAt = function (data, index) {
    if (index > length - 1) {
      throw new Error("index out of bounds");
    }
    if (!Number.isInteger(index) || index < 0) {
      throw new Error("index must be a positive integer");
    }
    if (index > 0) {
      let current = head;
      for (let i = 0; i < index - 1; i++) {
        current = current.link;
      }
      current.link = new Node(data, current.link);
      length++;
    } else {
      insertFirst(data);
    }
    return head;
  };
  /**
   * Removes the first node in the list
   * @returns The removed node
   */
  const removeFirst = function () {
    if (!head) {
      throw new Error("node does not exist");
    }
    let removedNode = head;
    head = head.link;
    length--;
    return removedNode;
  };
  /**
   * Removes the last node in the list
   * @returns The removed node
   */
  const removeLast = function () {
    if (!head) {
      throw new Error("node does not exist");
    }
    let removedNode = tail;
    if (head === tail) {
      head = null;
      tail = null;
      length = 0;
    } else {
      let current = head;
      while (current.link != tail) {
        current = current.link;
      }
      current.link = null;
      tail = current;
      length--;
    }
    return removedNode;
  };
  /**
   * Removes the first instance of the given data from the list
   * @param {*} data
   * @returns The removed node
   */
  const remove = function (data) {
    if (!head) {
      throw new Error("node does not exist");
    }
    if (head.data === data) {
      return removeFirst();
    } else {
      let current = head;
      let removedNode = null;
      while (current.link) {
        if (current.link.data === data) {
          removedNode = current.link;
          current.link = current.link.link;
          length--;
        }
        current = current.link;
      }
      return removedNode;
    }
  };
  /**
   * Removes the node at the given index
   * @param {int} index
   * @returns The removed node
   */
  const removeAt = function (index) {
    if (!Number.isInteger(index) || index < 0) {
      throw new Error("index must be a positive integer");
    }
    if (index >= length) {
      throw new Error("index out of bounds");
    }
    if (index === 0) {
      return removeFirst();
    } else if (index === 1) {
      let removedNode = head.link;
      head.link = head.link.link;
      return removedNode;
    } else {
      let current = head;
      for (let i = 0; i < index - 1; i++) {
        current = current.link;
      }
      let removedNode = current.link;
      current.link = current.link.link;
      return removedNode;
    }
  };
  /**
   * Gets the first node of the list
   * @returns head
   */
  const getHead = () => head;
  /**
   * Gets the last node of the list
   * @returns tail
   */
  const getTail = () => tail;
  /**
   * Gets the number of nodes in the list
   * @returns length
   */
  const getLength = () => length;

  return {
    getHead,
    getTail,
    getLength,
    insertFirst,
    insertLast,
    insertAt,
    removeFirst,
    removeLast,
    remove,
    removeAt,
  };
};

export { linkedList };
