/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let sum = nums.reduce((p,c)=>p+c,0);
    if((target+sum)%2 !== 0){
        return 0;
    }
    if(sum<Math.abs(target)){
        return 0;
    }
    let left = (target+sum)/2;
    let dp = new Array(left+1).fill(0);
    dp[0] = 1;
    for(let i=0;i<nums.length;i++){
        let next = []
        for(let j = 0;j<=left;j++){
            if(j>=nums[i]){
                next.push(dp[j] + dp[j-nums[i]])
            }
            else{
                next.push(dp[j])
            }
            
        }
        dp = next;
    }
    
    return dp[left];
};