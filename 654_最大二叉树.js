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
var constructMaximumBinaryTree = function(nums) {
    function buildTree(nums){
        if(!nums.length){
            return null;
        }
        let max = getMax(nums);
        let leftArr = nums.slice(0,max[1]);
        let rightArr = nums.slice(max[1]+1);
        let node = new TreeNode(max[0],buildTree(leftArr),buildTree(rightArr));
        return node;
    }
    function getMax(arr){
        let max = arr[0];
        let maxIndex = 0;
        arr.forEach((item,index)=>{
            if(max<item){
                max = item;
                maxIndex = index;
            }
        })
        return [max,maxIndex]
    }
    return buildTree(nums);
};