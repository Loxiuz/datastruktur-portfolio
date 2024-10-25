"use strict";

import Stack from "./stack.js";

window.addEventListener("load", start);

function start() {
  const stack = new Stack();
  for (let i = 0; i < 5; i++) {
    stack.push(i + 1);
  }
  const size = stack.size();
  for (let i = 0; i < size; i++) {
    console.log(`Get ${i}: ${stack.get(i)}`);
  }
  console.log("Size:", stack.size());
  for (let i = 0; i < size; i++) {
    console.log(`Peek: ${stack.peek()}`);
    console.log(`Pop ${i}: ${stack.pop(i)}`);
  }
  console.log("Size:", stack.size());
}
