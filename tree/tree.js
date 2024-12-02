export class Tree {
  constructor() {
    this.root = new Node("root");
    this.maxChildrenForAdd = 5;
  }

  dump() {
    const traverse = (node, depth = 0) => {
      const padding = "| ".repeat(depth);
      let result = `${padding}${node.value}\n`;
      for (const child of node.childNodes) {
        result += traverse(child, depth + 1);
      }
      return result;
    };

    console.log(traverse(this.root));
  }

  addValue(value) {
    const newNode = new Node(value);
    const queue = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();

      if (node.childNodes.length < this.maxChildrenForAdd) {
        node.appendChild(newNode);
        return;
      } else {
        queue.push(...node.childNodes);
      }
    }
  }

  findValue(value) {
    const traverse = (node) => {
      if (node.value === value) {
        return node;
      }
      for (const child of node.childNodes) {
        const found = traverse(child);

        if (found) {
          return found;
        }
      }
      return null;
    };

    return traverse(this.root);
  }

  removeValue(value) {
    const traverse = (node) => {
      for (const child of node.childNodes) {
        if (child.value === value) {
          node.removeChild(child);
          return node;
        }
        const found = traverse(child);
        if (found) {
          return found;
        }
      }
      return false;
    };
    return traverse(this.root);
  }
}

export class Node {
  constructor(value) {
    this.parent = null;
    this.childNodes = [];
    this.value = value;
  }

  firstChild() {
    return this.childNodes[0];
  }

  lastChild() {
    return this.childNodes[this.childNodes.length - 1];
  }

  hasChildNodes() {
    return this.childNodes.length > 0;
  }

  appendChild(child) {
    child.parent = this;
    this.childNodes.push(child);
  }

  removeChild(child) {
    const children = this.childNodes;
    const newList = [];
    for (let i = 0; i < children.length; i++) {
      if (children[i].value !== child.value) {
        newList.push(children[i]);
      }
    }
    this.childNodes = newList;
  }

  replaceChild(newChild, oldChild) {
    const children = this.childNodes;
    for (let i = 0; i < children.length; i++) {
      if (children[i].value === oldChild.value) {
        newChild.parent = this;
        children[i] = newChild;
      }
    }
    this.childNodes = children;
  }
}
