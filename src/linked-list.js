const Node = require('./node');

class LinkedList {
    constructor(head = null, tail = null, length = 0) {
      this._head = head;
      this._tail = tail;
      this.length = length;
    }

    append(data) {
      var newNode = new Node(data);

      if(this.length){
        this._tail.next = newNode;
        newNode.prev = this._tail;
        this._tail = newNode;
      } else {
        this._head = newNode;
        this._tail = newNode;
      }
      this.length++;
    }

    head() {
      return this._head.data;
    }

    tail() {
      return this._tail.data;
    }

    at(index) {
      var currentNode = this._head;

      for(let i = 0; i < index; i++){
        currentNode = currentNode.next;
      }

      return currentNode.data;
    }

    insertAt(index, data) {
      var nodeToInsert = new Node(data),
          currentNode = this._head,
          beforeNodeToInsert;

      for (let i = 0; i < index; i++) {
          currentNode = currentNode.next;
      }
          beforeNodeToInsert = currentNode.prev;
          beforeNodeToInsert.next = nodeToInsert;
          currentNode.prev = nodeToInsert;
          nodeToInsert.next = currentNode;
          nodeToInsert.prev = beforeNodeToInsert;
    }

    isEmpty() {
      if(this.length){
        return false;
      } else return true;
    }

    clear() {
      var currentNode = this._tail,
          length = this.length,
          beforeNodeToClear = null;

      for (let i = length; i > 0; i--) {
          beforeNodeToClear = currentNode.prev;
          currentNode.prev = null;
          currentNode.next = null;
          currentNode = beforeNodeToClear;
      }
      this._tail.data = null;
      this._head.data = null;
      this.length = 0;
    }

    deleteAt(index) {
      var nodeToDelete = this._head,
          beforeNodeToDelete;

      for(let i = 0; i < index; i++){
        beforeNodeToDelete = nodeToDelete;
        nodeToDelete = nodeToDelete.next;
      }

      beforeNodeToDelete.next = nodeToDelete.next;
      nodeToDelete.next.prev = beforeNodeToDelete;
      nodeToDelete.data = null;
    }

    reverse() {
      var currentNode = this._head,
          storage = null,
          temp = null,
          length = this.length;

          temp = this._head
          this._head = this._tail;
          this._tail = temp;

      for(let i = 0; i < length; i++){
        storage = currentNode.prev;
        currentNode.prev = currentNode.next;
        currentNode.next = storage;

        currentNode = currentNode.prev;
      }
    }

    indexOf(data) {
      var currentNode = this._head,
          nodeToFind = new Node(data),
          length = this.length,
          currentIndex = 0;

      for(let i = 0; i < length; i++){
        if(currentNode.data == nodeToFind.data){
          return currentIndex;
        }
        currentIndex++;
        currentNode = currentNode.next;
      }

      return -1;
    }
}

module.exports = LinkedList;
