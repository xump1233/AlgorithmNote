/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length).fill(1); // 表示以num[i]结尾的最长递增子序列长度dp[i]
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<i;j++){
            if(nums[j]<nums[i]){
               dp[i] = Math.max(dp[j]+1,dp[i]) 
            }
        }
    }
    let max = 0;
    dp.forEach(item=>{
        if(max<item){
            max = item;
        }
    })
    return max
    
};