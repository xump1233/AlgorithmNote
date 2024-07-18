/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let dp = [];
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    for(let i=3;i<=n;i++){
        let sum = 0;
        for(let j = 1;j<=i;j++){
            sum += dp[j-1]*dp[i-j];
        }
        dp.push(sum)
    }
    return dp[n];
};