class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else this.insertNode(node.right, newNode);
    }
  }
}

function buildBST(tree) {
  let BST = new BinarySearchTree();
  for (let i = 0; i < tree.length; i++) {
    BST.insert(tree[i]);
  }
  return BST.root;
}

function search(node, value) {
  if (node === null) {
    return null;
  } else if (value < node.value) {
    return search(node.left, value);
  } else if (value > node.value) {
    return search(node.right, value);
  }
  return node;
}
function bfsTraversal(root) {
  let subTree = [];
  if (root == null) {
    return [];
  }
  let queue = [];
  queue.push(root);
  while (queue.length != 0) {
    var tempNode = queue.shift();
    subTree.push(tempNode.value);

    if (tempNode.left != null) {
      queue.push(tempNode.left);
    }
    if (tempNode.right != null) {
      queue.push(tempNode.right);
    }
  }
  return subTree;
}
let tree = [4, 2, 7, 1, 3];
let val = 2;

let root = buildBST(tree);
let node = search(root, val);
let subTree = bfsTraversal(node);
console.log(subTree);

let tree2 = [4, 2, 7, 1, 3];
let val2 = 5;

let root2 = buildBST(tree2);
let node2 = search(root2, val2);
let subTree2 = bfsTraversal(node2);
console.log(subTree2);

/* 
Time Complexity: Time complexity of bfsTraversal function is O(N) (Ignoring internal complexity of shift() operation), where N is the number of nodes in the subtree.

Space Complexity: O(N) where N is the number of nodes in the subtree.
*/