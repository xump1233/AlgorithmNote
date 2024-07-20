/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    let dp = new Array(m+1).fill(0).map(()=>new Array(n+1).fill(0));
    let maps = [];
    strs.forEach(item=>{
        let map = new Map([['0',0],['1',0]]);
        for(let i=0;i<item.length;i++){
            map.set(item[i],map.get(item[i])+1);
        }
        maps.push([map.get('0'),map.get('1')]);
    })
    for(let i=0;i<maps.length;i++){
        for(let j=m;j>=0;j--){
            for(let k=n;k>=0;k--){
                if(maps[i][1]<=k && maps[i][0]<=j){
                    dp[j][k] = Math.max(dp[j][k],dp[j-maps[i][0]][k-maps[i][1]]+1)
                }
            }
        }
    }
    return dp[m][n]
};