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
   * Checks if the given index is valid and throws an Error if it is not
   * @param {int} index
   */
  const indexErrorCheck = function (index) {
    if (!Number.isInteger(index) || index < 0) {
      throw new Error("index must be a positive integer");
    }
    if (index >= length) {
      throw new Error("index out of bounds");
    }
  };

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
    indexErrorCheck(index);
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
    if (head) {
      let removedNode = head;
      head = head.link;
      length--;
      return removedNode;
    }
  };

  /**
   * Removes the last node in the list
   * @returns The removed node
   */
  const removeLast = function () {
    if (head) {
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
    }
  };

  /**
   * Removes the first instance of the given data from the list
   * @param {*} data
   * @returns The removed node
   */
  const remove = function (data) {
    if (head) {
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
    }
  };

  /**
   * Removes the node at the given index
   * @param {int} index
   * @returns The removed node
   */
  const removeAt = function (index) {
    indexErrorCheck(index);
    if (index === 0) {
      return removeFirst();
    } else if (index === 1) {
      let removedNode = head.link;
      head.link = head.link.link;
      length--;
      return removedNode;
    } else {
      let current = head;
      for (let i = 0; i < index - 1; i++) {
        current = current.link;
      }
      let removedNode = current.link;
      current.link = current.link.link;
      length--;
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

  /**
   * Gets the Node at the given index
   * @param {int} index
   * @returns Node at given index
   */
  const getAt = function (index) {
    indexErrorCheck(index);
    let current = head;
    let i = 0;
    do {
      if (i === index) {
        return current;
      }
      current = current.link;
      i++;
    } while (i <= index);
  };

  /**
   * Converts the linked list to an array
   * @returns an array of the linked list data
   */
  const toArray = function () {
    let array = Array(length);
    let current = head;
    for (let i = 0; i < length; i++) {
      array[i] = current.data;
      current = current.link;
    }
    return array;
  };

  /**
   * Creates a copy of the list
   * @returns the new list
   */
  const copy = function () {
    if (head) {
      let newList = linkedList();

      for (let i = head; i; i = i.link) {
        newList.insertLast(i.data);
      }

      return newList;
    }
  };

  return {
    insertFirst,
    insertLast,
    insertAt,
    removeFirst,
    removeLast,
    remove,
    removeAt,
    getHead,
    getTail,
    getLength,
    getAt,
    toArray,
    copy,
  };
};

export { linkedList };
