/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    // const n = gas.length
    // let i = 0;
    // while(i<n){
    //     let sumOfGas = 0,sumOfCost = 0;
    //     let cnt =0;
    //     while(cnt<n){
    //         const j = (i+cnt) %n
    //         sumOfCost += cost[j]
    //         sumOfGas += gas[j]
    //         if(sumOfCost > sumOfGas) break;
    //         cnt ++;
    //     }
    //     if(cnt === n){
    //         return i;
    //     }
    //     else{
    //         i = i+cnt +1
    //     }
    // }
    // return -1

    // 贪心
    let start = 0;
    let costSum = 0;
    let all = 0;
    for(let i=0;i<gas.length;i++){
        costSum += gas[i]-cost[i];
        all += gas[i]-cost[i];
        if(costSum<0){
            start = i+1;
            costSum = 0;
        }
    }
    if(all<0){
        return -1
    }
    return start;
};