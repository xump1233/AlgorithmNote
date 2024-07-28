/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    // // 解法一：先求公共子序列长度再计算
    // let dp = new Array(word1.length+1).fill(0).map(()=>new Array(word2.length+1).fill(0));
    // for(let i=1;i<=word1.length;i++){
    //     for(let j=1;j<=word2.length;j++){
    //         if(word1[i-1] === word2[j-1]){
    //             dp[i][j] = dp[i-1][j-1] + 1;
    //         }
    //         else{
    //             dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]);
    //         }
    //     }
    // }
    // let com = dp.pop().pop();
    // let result = word1.length+word2.length-2*com;
    // return result;

    // 解法二：考虑每一个字符是否删除
    let dp = new Array(word1.length+1).fill(0).map(()=>new Array(word2.length+1).fill(0));
    // dp[i][j]表示以i-1为结尾的word1与以j-1为结尾的word2相同的最少操作数
    for(let i=0;i<dp.length;i++){
        dp[i][0] = i;
    }
    for(let j=0;j<dp[0].length;j++){
        dp[0][j] = j;
    }
    for(let i=1;i<=word1.length;i++){
        for(let j=1;j<=word2.length;j++){
            if(word1[i-1] === word2[j-1]){
                // 相同字符不做删除操作
                dp[i][j] = dp[i-1][j-1];
            }
            else{
                dp[i][j] = Math.min(dp[i-1][j]+1,dp[i][j-1]+1);
                // 删word1[i - 1]，最少操作次数为dp[i - 1][j] + 1
                // 删word2[j - 1]，最少操作次数为dp[i][j - 1] + 1
                // 同时删word1[i - 1]和word2[j - 1]，操作的最少次数为dp[i - 1][j - 1] + 2
            }
        }
    }
    return dp.pop().pop()
};