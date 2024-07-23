/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    let dp = [[]];
    for(let i=0;i<=2*k;i++){
        dp[0][i] = i%2 === 0?0:-prices[0];
    }
    for(let i=1;i<prices.length;i++){
        dp.push([]);
        dp[i][0] = dp[i-1][0];
        for(let j=1;j<=2*k;j++){
            if(j%2 === 0){
                dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-1]+prices[i])
            }
            else{
                dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-1]-prices[i])
            }
        }
    }
    return dp.pop().pop();
};