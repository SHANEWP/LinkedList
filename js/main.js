import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

for (let i = 1; i < 5; i++) {
  list.insertLast(`Data ${i}`);
}

console.log(list);
list.insertAt("2.5", 3);
list.insertFirst("0");
// list.insertAt("something", "somewhere");
// list.insertAt("something else", 10);
