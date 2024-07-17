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
 * @return {TreeNode}
 */
// var convertBST = function(root) {
//     let everyone = [];
//     function forTree(node){
//         if(!node){
//             return;
//         }
//         forTree(node.left);
//         everyone.push(node.val);
//         forTree(node.right);
//     }
//     forTree(root);
//     let result = [];
//     let lastNum = 0;
//     for(let i=everyone.length-1;i>=0;i--){
//         lastNum = lastNum+everyone[i]
//         result.unshift(lastNum);
//     }
//     let t = 0;
//     function forAgran(node){
//         if(!node){
//             return;
//         }
//         forAgran(node.left);
//         node.val = result[t];
//         t++;
//         forAgran(node.right);
//     }
//     forAgran(root);
//     return root;
// };

function getThis(){
    console.log(this)
}

const obj = {
    fn:getThis
}
obj.fn()