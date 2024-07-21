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
            // 考虑nums[i]取还是不取
            if(j>=nums[i]){
                next.push(dp[j] + dp[j-nums[i]]) // 如果可以取的话就是上一次的值加上取过之后
            }
            else{
                next.push(dp[j]) // 如果不取的话用上一次的值
            }
            
        }
        dp = next;
    }
    
    return dp[left];
};