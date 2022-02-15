class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);

    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      console.log("Please enter a valid index");
      return;
    }

    let node = new Node(element);

    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      node.next = prev.next;
      prev.next = node;
    }

    this.size++;
  }

  removeElement(index) {
    if (index < 0 || index > this.size) {
      console.log("Please enter a valid index");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
    } else {
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      prev.next = prev.next.next;
    }
    this.size--;
  }

  printList() {
    let curr = this.head;
    var str = "";
    while (curr) {
      //   console.log(curr);
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }

  getSize() {
    return this.size;
  }
}

let ll = new LinkedList();
ll.add(10);
ll.add(11);
ll.add(12);
ll.add(13);
ll.printList();
ll.insertAt(15, 2);
ll.removeElement(1);
ll.printList();

// console.log(ll);
// let obj = {
//   el: 10,
//   next: {
//     el: 11,
//     next: {
//       el: 12,
//       next: {
//         el: 13,
//         next: null,
//       },
//     },
//   },
// };
