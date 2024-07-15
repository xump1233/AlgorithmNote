/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let result;
    function findNode(node){
        if(!node){
            return false;
        }  
        let left = findNode(node.left);
        let right = findNode(node.right);
        if(left && right){
            result = node;
        }
        if(node === p || node === q){
            if(left || right){
                result = node;
            }
            return true;
        }
        else{
            if(left || right){
                return true;
            }
            return false;
        }
    }
    findNode(root);
    return result;
};