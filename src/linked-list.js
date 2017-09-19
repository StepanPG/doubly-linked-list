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

    insertAt(index, data) {}

    isEmpty() {
      if(this.length){
        return false;
      } else return true;
    }

    clear() {}

    deleteAt(index) {}

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
