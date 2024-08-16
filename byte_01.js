// 给一个数n，给一个数组arr，arr里面是一串数字，
// 求由arr任意可重复组成的不大于n的数.
// 完全背包+组合数
var getMaxNum = function(n,arr){
    let dp = new Array(n+1).fill(0); // dp[i]表示容量为i的背包，容纳物品的组合数；
    dp[0] = 1;
    for(let i=1;i<=n;i++){
        for(let j=0;j<arr.length;j++){
            if(i>=arr[j]){
                dp[i] = dp[i] + dp[i-arr[j]]
            }
        }
    }
    return dp[n];
}

console.log(getMaxNum(5,[1,2,3,4]))
