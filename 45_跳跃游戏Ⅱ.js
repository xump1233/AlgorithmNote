/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // let dp = []
    // dp.push([0,nums[0]])
    // if(nums.length<=1){
    //     return dp[0][0]
    // }
    // dp.push([1,nums[0]-1>1+nums[1]?nums[0]-1:1+nums[1]])
    // for(let i=1;i<nums.length;i++){
    //     for(let j=0;j<dp.length;j++){
    //         if(dp[j][1]>=i){
    //             dp.push([dp[j][0]+1,i+nums[i]])
    //             break;
    //         }
    //     }
    // }
    // return dp[nums.length][0]
    if(nums.length<=1){
        return 0;
    }
    let maxLen = nums[0];
    let index = 1;
    let result = 0;
    if(maxLen>=nums.length){
        return 1;
    }
    while(maxLen<nums.length-1){
        let newMax = 0,newIndex=0;
        while(index<=maxLen){
            if(index+nums[index]>newMax){
                newIndex = index;
                newMax = index+nums[index];
            }
            index++;
        }
        result+=1;
        maxLen = newMax;
        index = newIndex;
    }
    return result+1;
};