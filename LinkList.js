class Node {
  constructor(value, next, previous) {
    this.next = next;
    this.previous = previous;
    this.value = value;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNodeAtHead(value) {
    let node = new Node(value, this.head, null);
    if (!this.head) {
      this.tail = node;
    } else {
      this.head.previous = node;
    }
    this.head = node;
  }

  addNodeAtTail(value) {
    let node = new Node(value, null, this.tail);
    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
  }

  removeFromHead() {
    let value = null;
    if (this.head) {
      value = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.previous = null;
      } else {
        this.tail = null;
      }
    }
    return value;
  }

  removeFromTail() {
    let value = null;
    if (this.tail) {
      value = this.tail.value;
      this.tail = this.tail.previous;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
    }
    return value;
  }

  searchNode(searchValue) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === searchValue) {
        return currentNode.value;
      } else {
        currentNode = currentNode.next;
      }
    }
    return null;
  }

  indexOf(searchValue) {
    let currentNode = this.head,
      indexArray = [],
      index = 0;
    while (currentNode) {
      if (currentNode.value === searchValue) {
        indexArray.push(index);
      }
      index++;
      currentNode = currentNode.next;
    }
    return indexArray;
  }
}

export default LinkList;