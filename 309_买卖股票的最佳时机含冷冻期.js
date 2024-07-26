/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let dp = [[]];
    dp[0][0] = -prices[0]; // 表示持有股票 ， 所具有的最大金额
    dp[0][1] = 0; // 表示（已过冷冻期）保持卖出股票的状态 ， 所具有的最大金额
    dp[0][2] = 0; // 表示卖出股票的状态 ， 所具有的最大金额
    dp[0][3] = 0; // 表示冷冻期 ， 所具有的最大金额
    for(let i=1;i<prices.length;i++){
        dp.push([])
        dp[i][0] = Math.max(dp[i-1][0],Math.max(dp[i-1][3]-prices[i],dp[i-1][1]-prices[i]));
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][3]);
        dp[i][2] = dp[i-1][0] + prices[i];
        dp[i][3] = dp[i-1][2]
    }
    let result = dp.pop();
    return Math.max(result[1],Math.max(result[2],result[3]));
}; 