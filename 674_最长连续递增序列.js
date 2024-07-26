/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    // let len = 1;
    // let max = 1;
    // for(let i=1;i<nums.length;i++){
    //     if(nums[i]>nums[i-1]){
    //         len++;
    //     }
    //     else{
    //         len = 1;
    //     }
    //     if(max<len){
    //         max = len;
    //     }
    // }
    // return max;
    let dp = new Array(nums.length).fill(1);
    let max = 1;
    for(let i=1;i<nums.length;i++){
        if(nums[i]>nums[i-1]){
            dp[i] = dp[i-1] + 1;
        }
        if(dp[i]>max){
            max = dp[i];
        }
    }
    return max;
};