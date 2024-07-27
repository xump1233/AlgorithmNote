/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    let dp = new Array(s.length+1).fill(9).map(()=>new Array(t.length+1).fill(0));
    // 其中dp[i][j]表示以i-1为结尾的s子序列中有以j-1为结尾的t的子序列个数
    for(let i=0;i<dp.length;i++){
        dp[i][0] = 1;
    }
    for(let i=1;i<=s.length;i++){
        for(let j=1;j<=t.length;j++){
            if(s[i-1] === t[j-1]){
                dp[i][j] = dp[i-1][j-1] + dp[i-1][j];
            }
            else{
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    return dp.pop().pop()
};