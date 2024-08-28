/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode[]} nodes
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, nodes) {
    if (nodes.length < 2) return nodes[0];

    function dfs(node) {
        if (!node) return null;

        if (nodes.includes(node)) return node;

        const left = dfs(node.left);
        const right = dfs(node.right);

        if (left && right) return node;

        return left || right;
    }

    return dfs(root);
};
