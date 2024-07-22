/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    function forTree(node){
        if(!node){
            return [0,0];
        }
        let left = forTree(node.left);
        let right = forTree(node.right);
        let val = node.val + left[0] + right[0];
        let rval = Math.max(left[0],left[1]) + Math.max(right[0],right[1]);
        return [rval,val];
    }
    let result = forTree(root);
    return Math.max(result[0],result[1])
};