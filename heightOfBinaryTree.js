class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function buildBinaryTree(values) {
  if (values.length === 0) {
    return null;
  }
  const root = new TreeNode(values[0]);
  const queue = [root];
  let i = 1;

  while (i < values.length) {
    const currentNode = queue.shift();
    if (values[i] !== null) {
      currentNode.left = new TreeNode(values[i]);
      queue.push(currentNode.left);
    }
    i++;

    if (values[i] !== null) {
      currentNode.right = new TreeNode(values[i]);
      queue.push(currentNode.right);
    }
    i++;
  }

  return root;
}

function maxHeight(node) {
  if (node == null) return 0;
  else {
    return Math.max(maxHeight(node.left), maxHeight(node.right)) + 1;
  }
}

const values = [3, 9, 20, null, null, 15, 7];
const root = buildBinaryTree(values);
console.log(maxHeight(root));

const values2 = [1, null, 2];
const root2 = buildBinaryTree(values2);
console.log(maxHeight(root2));

/* 
Time Complexity: Time complexity of maxHeight function is O(N). For buildBinaryTree function, time complexity is O(N^2) as shift() method has O(N) and it is inside a while loop.

Space Complexity: O(N) as there is recursion.
*/
