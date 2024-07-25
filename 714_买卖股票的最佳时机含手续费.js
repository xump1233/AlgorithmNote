/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let dp = [[]];
    dp[0][0] = -prices[0];
    dp[0][1] = 0;
    for(let i=1;i<prices.length;i++){
        dp.push([])
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]-prices[i]);
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]+prices[i]-fee);
    }
    return dp.pop().pop();
};