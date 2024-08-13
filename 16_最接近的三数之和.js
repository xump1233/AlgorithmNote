/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let result = nums[0]+nums[1]+nums[2];
    let last = Math.abs(nums[0]+nums[1]+nums[2]-target);
    for(let i=0;i<nums.length-2;i++){
        if(i>0 && nums[i] === nums[i-1]){
            continue;
        }
        let left = i+1;
        let right = nums.length-1;
        while(left<right){
            let len = target - (nums[i]+nums[left]+nums[right]);
            if(len === 0){
                return nums[i]+nums[left]+nums[right];
            }
            if(Math.abs(len)<Math.abs(last)){
                last = len;
                result = nums[i]+nums[left]+nums[right];
            }
            if(len>0){
                left++;
            }
            else{
                right--;
            }
        }
        
    }
    return result;
};