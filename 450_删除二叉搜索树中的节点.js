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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    function deleteNode(node){
        if(!node){
            return null;
        }
        if(node.val === key){
            if(!node.left && !node.right){
                return null;
            }
            else if(!node.left && node.right){
                return node.right;
            }
            else if(node.left && !node.right){
                return node.left;
            }
            else{
                cur = node.right;
                while(cur.left){
                    cur = cur.left;
                }
                cur.left = node.left;
                return node.right;
            }
        }
        if(node.val>key){
            node.left = deleteNode(node.left);
        }
        if(node.val<key){
            node.right = deleteNode(node.right);
        }
        return node;
    }
    return deleteNode(root);
};