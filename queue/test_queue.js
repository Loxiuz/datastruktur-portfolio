import Queue from "./queue.js";

const queue = new Queue();
queue.enqueue({ data: "A" });
queue.enqueue({ data: "B" });
queue.enqueue({ data: "C" });
window.queue = queue;
