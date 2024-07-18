/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = 0;
    nums.forEach(item=>{
        sum+=item;
    })
    if(sum%2 !== 0){
        return false;
    }
    let target = sum/2;
    let dp = new Array(target+1).fill(0); // 表示容量为i的背包所装物品的重量
    for(let i=0;i<=target;i++){
        if(i>=nums[0]){
            dp[i] = nums[0];
        }
    }
    for(let i=1;i<nums.length;i++){
        let next = [];
        for(let j=0;j<=target;j++){
            if(j<nums[i]){
                next.push(dp[j])
            }
            else{
                next.push(Math.max(dp[j],dp[j-nums[i]]+nums[i]))
            }
            
        }
        dp = next;
    }
    if(dp[target] === target){
        return true;
    }
    else{
        return false;
    }
};