/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = new Array(n+1).fill(0);
    dp[0] = 1;
    let nums = [1,2];
    for(let i=0;i<=n;i++){
        for(let j=0;j<nums.length;j++){
            if(i>=nums[j]){
                dp[i] = dp[i] + dp[i-nums[j]];
            }
        }
    }
    return dp[n]
};