/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let dp = new Array(obstacleGrid.length).fill(0).map(item=>new Array(obstacleGrid[0].length).fill(0));
    dp[0][0] = 1;
    for(let i=0;i<dp.length;i++){
        for(let j=0;j<dp[i].length;j++){
            if(obstacleGrid[i][j] === 1){
                dp[i][j] = 0;
                continue;
            }
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
    return dp[obstacleGrid.length-1][obstacleGrid[0].length-1]
};