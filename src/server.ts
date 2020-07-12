// import { DoublyLinkedList } from './dataStr/DoublyLinkedList';
// import { BinarySerchTree, Node } from "./dataStr/BinarySerchTree";


import { PriorityQueue } from "./dataStr/PriorityQueue";

let tree = new PriorityQueue()


tree.enqueue('dd 41', 1)
tree.enqueue('44 3', 3)
tree.enqueue('wer 1', 4)
tree.enqueue('sraczka ', 54)
tree.enqueue('3423', 6)
tree.enqueue('janek', 2)
tree.enqueue('banek', 5)
console.log(tree.dequeue())
console.log(tree.dequeue())
console.log(tree.dequeue())


console.log(tree)

// let tree = new BinarySerchTree();
// tree.insert(10)
// tree.insert(6)
// tree.insert(15)
// tree.insert(3)
// tree.insert(8)
// tree.insert(20)
// tree.insert(3)
// tree.insert(4)
// tree.insert(7)
// tree.insert(77)


// tree.root.right = new Node(15)
// tree.root.left = new Node(5)
// tree.root.left.right = new Node(3)


// console.log(tree);
// console.log(tree.root.left);
// console.log(tree.root.left.left);

// console.log(tree.root.right);
// console.log(tree.root.right.right);
// console.log(tree.search(77));
// console.log(tree.bfs())

// console.log(tree.DFSPreOrder())
// console.log(tree.DFSPostOrder())
// console.log(tree.DFSInOrder())


// const n1 = new NodeDL(23424)
// const listdl = new DoublyLinkedList()

// listdl.push(2222)
// listdl.push(33444443)
// listdl.push(4444444444)
// listdl.push(55555555555555)

// console.log(listdl);

// // listdl.pop()
//  listdl.unshift(38888)
//  listdl.unshift(38882)

// // listdl.shift()
// // listdl.shift()
// // listdl.shift()
// listdl.insert(2,4)
// listdl.insert(2,4)
// listdl.insert(2,4)

// listdl.insert(2,4)

// console.log(listdl);

