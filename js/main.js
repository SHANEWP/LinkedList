import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();
// tests for exception
// list.removeLast();
// list.removeLast();

for (let i = 1; i < 5; i++) {
  list.insertLast(`Data ${i}`);
}

list.remove("hello");
list.insertAt("2.5", 3);
list.insertFirst("0");
list.insertAt("-1", 0);

list.remove("-1");
list.remove("2.5");
list.remove(123);
list.removeFirst();
list.removeLast();

// tests for exceptions
// list.insertAt("something", "somewhere");
// list.insertAt("something else", 10);

console.log(list);
