/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) { 
    // 解法一
    if(n === 2){
        return 1;
    }
    if(n === 3){
        return 2;
    }
    if(n%3 === 0){
        return 3**(Math.floor(n/3));
    }
    else if(n%3 === 1){
        return (3**((Math.floor(n/3)-1)))*(2**2)
    }
    else{
        return (3**(Math.floor(n/3)))*2
    }

    // 解法二
    /*
    let dp = []; 
    dp[0] = 0;
    dp[1] = 0;
    dp[2] = 1;
    dp[3] = 2;
    for(let i=4;i<=n;i++){
        let max = 0;
        for(let j=1;j<i;j++){
            if(max<Math.max(j*(i-j),j*dp[i-j])){
                max = Math.max(j*(i-j),j*dp[i-j])
            }
        }
        dp[i] = max;
    }
    return dp[n]
    */
};