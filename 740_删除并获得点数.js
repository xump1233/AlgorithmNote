/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1);
        }
        else{
            map.set(nums[i],1);
        }
    }
    let arr = Array.from(map);
    let max = 0;
    arr.forEach(item=>{
        if(item[0]>max){
            max = item[0];
        }
    })
    let dp = [];

    dp[0] = map.get(0)?map.get(0)*0:0;
    dp[1] = Math.max(dp[0],map.get(1)?map.get(1)*1:0)
    for(let i=2;i<=max;i++){
        let val = map.get(i)?map.get(i)*i:0;
        console.log(val)
        dp.push(Math.max(dp[i-1],dp[i-2]+val));
    }
    return dp.pop()
};