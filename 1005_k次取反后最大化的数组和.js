/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    // function findMin(arr){
    //     let min = arr[0];
    //     let minIndex = 0;
    //     for(let i=0;i<arr.length;i++){
    //         if(min>arr[i]){
    //             min = arr[i];
    //             minIndex = i;
    //         }
    //     }
    //     return minIndex;
    // }
    // let n = 0;
    // while(n<k){
    //     let index = findMin(nums);
    //     if(nums[index]<0){
    //         nums[index] = -nums[index];
    //         n++;
    //     }
    //     else{
    //         nums[index] = nums[index] * (-1)**(k-n);
    //         break;
    //     }
    // }
    // let sum = nums.reduce((p,c)=>p+c,0);
    // return sum;
    nums.sort((a,b)=>{
        return -Math.abs(a)+Math.abs(b);
    })
    for(let i=0;i<nums.length;i++){
        if(nums[i]<0 && k>0){
            nums[i] = -nums[i];
            k--;
        }
    }
    if(k>0){
        k = k%2;
        nums[nums.length-1] = nums[nums.length-1]*(-1)**k;
    }
    let sum = nums.reduce((p,c)=>p+c,0);
    return sum;
};