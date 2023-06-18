class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function binaryTreeMinDepth(root) {
  const queue = [];
  queue.push(root);
  let depth = -1;
  while (queue.length > 0) {
    depth++;
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      if (!node.left && !node.right) {
        return depth;
      }
      for (const child of [node.left, node.right]) {
        if (child) queue.push(child);
      }
    }
  }
  return depth;
}
