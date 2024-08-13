/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // nums.sort((a,b)=>a-b)
    // let result = []
    // let set0 = new Set()
    // for(let i=0;i<nums.length-2;i++){
    //     if(set0.has(nums[i])){
    //         continue;
    //     }
    //     else{
    //         set0.add(nums[i])
    //     }
    //     let left = i+1,right=nums.length-1
    //     let set = new Set()
    //     while(left<right){
    //         if(nums[i]+nums[left]+nums[right]>0){
    //             right--;
    //         }
    //         else if(nums[i]+nums[left]+nums[right] === 0){
    //             if(set.has(nums[left])){
    //                 left++;
    //                 continue
    //             }
    //             else{
    //                 set.add(nums[left])
    //             }
    //             let arr = [nums[i],nums[left],nums[right]]
    //             result.push(arr)
    //             left++;
    //         }
    //         else{
    //             left++;
    //         }
    //     }
    // }
    // return result
    nums.sort((a,b)=>a-b)
    let result = []
    for(let i=0;i<nums.length-2;i++){
        if(i>=1 && nums[i] === nums[i-1]){
            continue;
        }
        let left = i+1,right=nums.length-1
        let set = new Set()
        while(left<right){
            if(nums[i]+nums[left]+nums[right]>0){
                right--;
            }
            else if(nums[i]+nums[left]+nums[right] === 0){
                if(set.has(nums[left])){
                    left++;
                    continue
                }
                else{
                    set.add(nums[left])
                }
                let arr = [nums[i],nums[left],nums[right]]
                result.push(arr)
                left++;
            }
            else{
                left++;
            }
        }
    }
    return result
};