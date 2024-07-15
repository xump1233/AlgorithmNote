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
 * @return {number[]}
 */
var findMode = function(root) {
    let lastLen = 0;
    let maxLen = 0;
    let nowNum;
    let result = [];
    function forTree(node){
        if(!node){
            return;
        }
        forTree(node.left);
        console.log(node.val,nowNum);
        if(nowNum === undefined){
            nowNum = node.val;
            maxLen ++;
            result = [nowNum];
            if(maxLen>lastLen){
                result = [nowNum];
            }
            else if(maxLen === lastLen){
                result.push(node.val)
            }
        }
        else{
            if(nowNum === node.val){
                maxLen++;
                if(maxLen>lastLen){
                    result = [nowNum];
                }
                else if(maxLen === lastLen){
                    result.push(node.val)
                }
            }
            else{
                if(maxLen >= lastLen){
                    lastLen = maxLen;
                }
                maxLen = 1;
                nowNum = node.val;
                if(maxLen>lastLen){
                    result = [nowNum];
                }
                else if(maxLen === lastLen){
                    result.push(node.val)
                }
            }
        }
        forTree(node.right);
    }
    forTree(root);
    return result;
};