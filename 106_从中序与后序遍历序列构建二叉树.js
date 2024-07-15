/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    function createTrue(inorder,postorder){
        if(!postorder.length){
            return null;
        }
        let center = postorder[postorder.length-1];
        let leftInorder = inorder.slice(0,inorder.indexOf(center));
        let leftPostorder = postorder.slice(0,leftInorder.length);
        let rightInorder = inorder.slice(inorder.indexOf(center)+1);
        let rightPostorder = postorder.slice(leftPostorder.length,postorder.length-1);
        const node = new TreeNode(center,createTrue(leftInorder,leftPostorder),createTrue(rightInorder,rightPostorder));
        
        return node;
    }
    return createTrue(inorder,postorder)
};