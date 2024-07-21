/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp = []; // 表示下标i（包括i）所能偷的最大值为dp[i]，注意未必一定要偷下标为i-1的房间
    if(nums.length<2){
        return nums[0]
    }
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0],nums[1]);
    for(let i=2;i<nums.length;i++){
        dp.push(Math.max(dp[i-1],dp[i-2]+nums[i]))
    }
    return Math.max(dp[nums.length-1],dp[nums.length-2])
};