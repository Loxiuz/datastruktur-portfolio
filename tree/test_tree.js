"use strict";

import { Tree, Node } from "./tree.js";

window.addEventListener("load", () => {
  console.log("Script running...");
  const tree = new Tree();
  const testNode = new Node("root");
  for (let i = 0; i < 3; i++) {
    const node = new Node();
    node.value = "root child " + (i + 1);
    testNode.appendChild(node);
  }
  const testRemoveChild = new Node("root child 2");
  const newChild = new Node("root child 4");

  for (let i = 0; i < 103; i++) {
    tree.addValue(i + 1);
  }

  window.tree = tree;
  window.testNode = testNode;
  window.testRemoveChild = testRemoveChild;
  window.newChild = newChild;
});
