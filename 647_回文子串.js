/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    // // 解法一：动态规划
    // let dp = new Array(1000+1).fill(false).map(()=>new Array(1000+1).fill(false)); 
    // // 表示在[i,j]范围内是否是回文串
    // let result = 0;
    // for(let i=s.length-1;i>=0;i--){
    //     for(let j=i;j<s.length;j++){
    //         if(s[i] === s[j]){
    //             if(j-i === 0){
    //                 dp[i][j] = true;
    //                 result++;
    //             }
    //             else if(j-i === 1){
    //                 dp[i][j] = true;
    //                 result++;
    //             }
    //             else{
    //                 dp[i][j] = dp[i+1][j-1];
    //                 if(dp[i][j]){
    //                     result++;
    //                 }
    //             }
    //         }
    //     }
    // }
    // return result
};