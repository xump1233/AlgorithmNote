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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let target = false;
    function getDepth(node,sum){
        if(!node.left && !node.right){
            if(node.val + sum === targetSum){
                target = true;
            }
        }
        if(node.left){
            getDepth(node.left,sum+node.val);
        }
        if(node.right){
            getDepth(node.right,sum+node.val);
        }
    }
    if(root){
        getDepth(root,0);
    }
    return target;
};