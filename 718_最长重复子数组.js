/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    // 超时解法
    // let maxLen = 0;
    // for(let i=0;i<nums1.length;i++){
    //     for(let j=0;j<nums2.length;j++){
    //         if(nums1[i] === nums2[j]){
    //             let n = 0;
    //             while(nums1[i+n] === nums2[j+n] && i+n<nums1.length && j+n<nums2.length){
    //                 n++;
    //             }
    //             if(maxLen<n){
    //                 maxLen = n;
    //             }
    //         }
    //     }
    // }
    // return maxLen;
    
    // dp[i][j] 表示以i-1结尾的nums1与以j-1结尾的nums2的最大公共子序列最大长度
    let dp = new Array(nums1.length+1).fill(0).map(item=>new Array(nums2.length+1).fill(0)); 
    let max = 0;
    for(let i=1;i<=nums1.length;i++){
        for(let j=1;j<=nums2.length;j++){
            if(nums1[i-1] === nums2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1;
            }
            if(dp[i][j]>max){
                max = dp[i][j];
            }
        }
    }
    return max;
};