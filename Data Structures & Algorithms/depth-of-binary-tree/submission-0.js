/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
        *  1
        * 3 5
     *  4
     * 
     */
    maxDepth(root) {
        if (!root) {
            return 0;
        }

        return this.checkDepth(root, 1);
    }

    checkDepth(root, depth) {
        if (!root.left && !root.right) {
            return depth;
        }
        let leftDepth = depth;
        let rightDepth = depth;
        if (root.left) {
            leftDepth = this.checkDepth(root.left, depth + 1)
        }
        if (root.right) {
            rightDepth = this.checkDepth(root.right, depth + 1)
        }
        return Math.max(leftDepth, rightDepth);
    }
}
