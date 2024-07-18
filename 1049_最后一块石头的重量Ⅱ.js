/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    let sum = 0;
    stones.forEach(item=>{
        sum += item;
    })
    let target = parseInt(sum/2);
    let dp = new Array(target+1).fill(0);
    for(let i=0;i<dp.length;i++){
        if(stones[0]>i){
            dp[i] = 0;
        }
        else{
            dp[i] = stones[0];
        }
    }
    for(let i=1;i<stones.length;i++){
        let next = [];
        for(let j=0;j<=target;j++){
            if(stones[i]>j){
                next.push(dp[j]);
            }
            else{
                next.push(Math.max(dp[j],stones[i]+dp[j-stones[i]]))
            }
        }
        dp = next;
    }
    return sum-2*dp[target]
};