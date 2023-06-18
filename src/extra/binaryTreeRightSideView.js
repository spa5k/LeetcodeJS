class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function binaryTreeRightSideView(root) {
  const res = [];
  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const newLevel = [];
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      newLevel.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(newLevel[newLevel.length - 1]);
  }
  return res;
}
