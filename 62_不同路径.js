/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = new Array(m).fill(0).map(item=>new Array(n).fill(0)); // 表示每个各种有多少种走法。
    dp[0][0] = 1;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(i-1<0){
                if(j-1<0){
                    continue;
                }
                dp[i][j] = dp[i][j-1];
            }
            else if(j-1<0){
                dp[i][j] = dp[i-1][j];
            }
            else{
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
            
        }
    }
    return dp[m-1][n-1];
};