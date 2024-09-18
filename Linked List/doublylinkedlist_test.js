import DoublyLinkedList from "./doublylinkedlist.js";

const list = new DoublyLinkedList();
list.addNodeLast({ data: "A" });
list.addNodeLast({ data: "B" });
list.addNodeLast({ data: "C" });
list.dumpList();
window.list = list;
