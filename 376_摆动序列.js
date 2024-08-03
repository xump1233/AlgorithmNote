/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let result = 1;
    nums.unshift(nums[0]);
    let pre = nums[1]-nums[0];
    for(let i=1;i<nums.length-1;i++){
        
        let cur = nums[i+1]-nums[i];
        if(pre >=0 && cur<0){
            result += 1;
            pre = cur;
        }
        else if(pre <=0 && cur>0){
            result += 1;
            pre = cur;
        }
    }
    return result
};