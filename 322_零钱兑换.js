/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount+1).fill(Number.MAX_VALUE);
    dp[0] = 0;
    for(let i=0;i<coins.length;i++){
        for(let j=0;j<=amount;j++){
            if(j>=coins[i]){
                dp[j] = Math.min(dp[j],dp[j-coins[i]]+1);
            }
        }
    }
    if(amount === 0){
        return 0;
    }
    if(dp[amount] === Number.MAX_VALUE){
        return -1;
    }
    return dp[amount]
};