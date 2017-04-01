'use strict';
function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
function Tree(val) {
  this = new Node(val);
}
let tree = new Tree(42);
function fillTree() {
  tree.left = new Node(7);
  tree.right = new Node(15);
  tree.left.left = new Node(16);
  tree.left.right = new Node(30);
  tree.left.right.left = new Node(11);
  tree.left.right.right = new Node(25);
  tree.right.left = new Node(3);
  tree.right.left.left = new Node(50);
}
function dlr (node) {
  console.log(node.val);
  if (node.left) dlr(node.left);
  if (node.right) dlr(node.right);
}
function ldr (node) {
  if (node.left) ldr(node.left);
  console.log(node.val);
  if (node.right) ldr(node.right);
}
function lrd (node) {
  if (node.left) lrd(node.left);
  if (node.right) lrd(node.right);
  console.log(node.val);
}
fillTree();
dlr(tree);
ldr(tree);
lrd(tree);
```
