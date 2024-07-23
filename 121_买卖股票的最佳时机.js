/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let dp = [[]];
    dp[0][0] = -prices[0];
    dp[0][1] = 0;
    for(let i=1;i<prices.length;i++){
        dp.push([]);
        dp[i][0] = Math.max(dp[i-1][0],-prices[i]);
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]+prices[i])
    }
    return Math.max(dp[dp.length-1][0],dp[dp.length-1][1]);
};