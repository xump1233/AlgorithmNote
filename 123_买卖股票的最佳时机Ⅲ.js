/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let dp = [[]];
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    dp[0][2] = 0;
    dp[0][3] = -prices[0];
    dp[0][4] = 0;
    for(let i=1;i<prices.length;i++){
        dp.push([]);
        dp[i][0] = dp[i-1][0]; // 表示不操作
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]-prices[i]); // 表示第一次持有
        dp[i][2] = Math.max(dp[i-1][2],dp[i-1][1]+prices[i]); // 表示第一次不持有
        dp[i][3] = Math.max(dp[i-1][3],dp[i-1][2]-prices[i]); // 表示第二次持有
        dp[i][4] = Math.max(dp[i-1][4],dp[i-1][3]+prices[i]); // 表示第二次不持有
    }
    return dp[dp.length-1][4];
};