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
    function findNode(node){
        if(p.val>q.val){
            if(node.val<=p.val && node.val>=q.val){
                return node;
            }
        }
        else{
            if(node.val<=q.val && node.val>=p.val){
                return node;
            }
        }
        if(node.val>p.val && node.val>q.val){
            return findNode(node.left);
        }
        else if(node.val<p.val && node.val<q.val){
            return findNode(node.right)
        }
    }
    return findNode(root);
};