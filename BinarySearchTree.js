class BINARY_SEARCH_TREE {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }

  addNode(value) {
    if (value <= this.value) {
      if(this.left) {
        this.left.addNode(value);
      } else {
        this.left = new BINARY_SEARCH_TREE(value);
      }
    } else if(value > this.value) {
      if(this.right) {
        this.right.addNode(value);
      } else {
        this.right = new BINARY_SEARCH_TREE(value);
      }
    }
  }

  contains(value) {
    if (value === this.value) {
      return true;
    } else if (value < this.value) {
      if (this.left) {
        return this.left.contains(value);
      } else {
        return false;
      }
    } else if (value > this.value) {
      if (this.right) {
        return this.right.contains(value);
      } else {
        return false;
      }
    }
  }

  depthFirsrTraversal(iterator, order = 'in-order') {
    (order === 'pre-order') ? iterator(this.value) : null;
    if (this.left) {
      this.left.depthFirsrTraversal(iterator, order);
    }
    (order === 'in-order') ? iterator(this.value) : null;
    if (this.right) {
      this.right.depthFirsrTraversal(iterator, order);
    }
    (order === 'post-order') ? iterator(this.value) : null;
  }

  breadthFirstSearch(iterator) {
    let queue = [this],
      currentNode = null;
    while (queue.length > 0) {
      currentNode = queue.shift();
      (currentNode.left) ? queue.push(currentNode.left) : null;
      (currentNode.right) ? queue.push(currentNode.right) : null;
      iterator(currentNode.value);
    }
  }
}