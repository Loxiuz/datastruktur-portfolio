export default class DoublyLinkedList {
  constructor() {
    this.clear();
  }

  getSize() {
    return this.length;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addNodeLast(node) {
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.length++;
  }

  addNodeFirst(node) {
    if (this.head) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
  }

  addLast(data) {
    if (this.tail) {
      this.tail.data = data;
    } else {
      console.log("List empty, creating node...");
      this.addNodeLast({
        prev: null,
        next: null,
        data: data,
      });
    }
  }

  addFirst(data) {
    if (this.head) {
      this.head.data = data;
    } else {
      console.log("List empty, creating node...");
      this.addNodeFirst({
        prev: null,
        next: null,
        data: data,
      });
    }
  }

  removeLast() {
    const node = this.tail;
    if (this.length === 0) {
      console.log("No node to remove, list empty!");
      return null;
    } else if (this.length === 1) {
      this.clear();
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return node;
  }

  removeFirst() {
    const node = this.head?.data;
    if (this.length === 0) {
      console.log("No node to remove, list empty!");
      return null;
    } else if (this.length === 1) {
      this.clear();
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return node;
  }

  dumpList() {
    console.log(`
        Linked List
        -----------
        head: ${this.head?.data}
        tail: ${this.tail?.data}
        -----------    
    `);
    let node = this.head;
    while (node != null) {
      console.log(`
            node: ${node.data}
            -------------
                prev: ${node.prev?.data}
                next: ${node.next?.data}     
        `);
      node = node.next;
    }
  }
}
