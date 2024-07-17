/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function buildTree(nums,start,end){
        if((end-start) <= 0){
            return null;
        }
        let mid = Math.floor((end+start)/2);
        let node = new TreeNode(nums[mid],buildTree(nums,start,mid),buildTree(nums,mid+1,end));
        return node;
    }
    return buildTree(nums,0,nums.length);
};