/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let nums = [];
    let max = 1;
    while((max*max) <= n){
        nums.push(max*max);
        max += 1;
    }
    let dp = new Array(n+1).fill(Number.MAX_VALUE);
    dp[0] = 0;
    for(let i=0;i<nums.length;i++){
        for(let j=nums[i];j<=n;j++){
            dp[j] = Math.min(dp[j],dp[j-nums[i]]+1);
        }
    }
    
    return dp[n];
};