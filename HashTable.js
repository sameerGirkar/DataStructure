
class BUCKET {
  constructor(size = 30) {
    this.bucket = Array(size);
    this.bucketSize = size;
  }

  getHashValue(key) {
    let index = 0;
    for (let charector in key) {
      index += key[charector].charCodeAt();
    }
    return (index % this.bucketSize);
  }

  insert(key, value) {
    let index = this.getHashValue(key);
    // index in empty in hash table.
    if (!this.bucket[index]) {
      this.bucket[index] = new HASH_NODE(key, value);
    } else if (this.bucket[index].key === key) {
      //value allredy exist hence update the node with new value and return
      this.bucket[index].value = value;
      return;
    }
    else {
      //collision at index of hash table.
      let currentNode = this.bucket[index];
      while (currentNode.next) {
        if (currentNode.key == key) {
          console.log('match');
          //value allredy exist hence update the node with new value and return
          currentNode.value = value;
          return;
        }
        currentNode = currentNode.next;
      }
      currentNode.next = new HASH_NODE(key, value);
    }
  }

  get(key) {
    let index = this.getHashValue(key);
    if (!this.bucket[index]) {
      return null;
    } else {
      let currentNode = this.bucket[index];
      while (currentNode) {
        if (currentNode.key === key) {
          return currentNode.value;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    return null;
  }

  getAll() {
    let allNodes = [];
    for (let index in this.bucket) {
      let currentNode = this.bucket[index];
      while (currentNode) {
        allNodes.push(currentNode);
        currentNode = currentNode.next;
      }
    }
    return allNodes;
  }
}

class HASH_NODE {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}


export default BUCKET;