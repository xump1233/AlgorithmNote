/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp = new Array(nums.length);
    dp[0] = nums[0];
    let max = nums[0];
    for(let i=1;i<nums.length;i++){
        dp[i] = Math.max(dp[i-1]+nums[i],nums[i]);
        if(max<dp[i]){
            max = dp[i];
        }
    }
    return max;
};