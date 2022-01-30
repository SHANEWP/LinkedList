import { linkedList } from "./LinkedList.js";

const list = linkedList();

list.removeLast();
list.removeFirst();

for (let i = 0; i < 10; i++) {
  list.insertLast(`Data ${i}`);
}

list.remove("hello");
list.insertAt("2.5", 3);
list.insertFirst("0");
list.insertAt("-1", 0);
list.insertAt("Hi", 1);

list.remove("-1");
list.remove("2.5");
list.remove(123);
list.removeFirst();
list.removeLast();

list.removeAt(0);
list.removeAt(1);
list.removeAt(3);

// tests for exceptions
// list.insertAt("something", "somewhere");
// list.insertAt("something else", 100);
// list.removeAt("somewhere");
// list.removeAt(-1);
// list.removeAt(100);

console.log(list.getHead());
console.log(list.getTail());
console.log(list.getLength());

// console.log(list.getAt(0));
// console.log(list.getAt(1));
// console.log(list.getAt(5));

console.log(list.toArray());
